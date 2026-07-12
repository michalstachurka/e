import Fastify, { type FastifyReply, type FastifyRequest } from "fastify";
import cookie from "@fastify/cookie";
import cors from "@fastify/cors";
import rateLimit from "@fastify/rate-limit";
import { randomUUID } from "node:crypto";
import {
  AdminLoginSchema,
  AdminProductUpdateSchema,
  BrandingSettingsSchema,
  PdfRequestSchema,
  QuoteRequestSchema,
  SaveConfigurationRequestSchema,
} from "../../../packages/contracts/src/index.js";
import { calculateQuote, generateBom, validateConfiguration } from "../../../packages/configurator-core/src/domain.js";
import { ConfiguratorDatabase } from "./database.js";
import { createOpaqueToken, sanitizeText, verifyPassword } from "./security.js";
import { generateProjectPdf } from "./pdf.js";

export interface AppOptions {
  databasePath: string;
  adminEmail: string;
  adminPassword: string;
  publicAppUrl: string;
  corsOrigins: string[];
  sessionTtlHours?: number;
  secureCookies?: boolean;
  logger?: boolean;
}

type Session = { id: string; admin_user_id: string; tenant_slug: string; email: string };

function badRequest(reply: FastifyReply, issues: unknown) {
  return reply.code(400).send({ error: "invalid_request", issues });
}

export async function createApp(options: AppOptions) {
  const app = Fastify({ logger: options.logger ?? false, bodyLimit: 5 * 1024 * 1024 });
  const database = await ConfiguratorDatabase.create({ path: options.databasePath, adminEmail: options.adminEmail, adminPassword: options.adminPassword });
  await app.register(cookie);
  await app.register(cors, {
    credentials: true,
    origin(origin, callback) {
      if (!origin || options.corsOrigins.includes(origin)) callback(null, true);
      else callback(new Error("Origin not allowed"), false);
    },
  });
  await app.register(rateLimit, { max: 120, timeWindow: "1 minute" });

  app.setErrorHandler((error, _request, reply) => {
    const statusCode = error && typeof error === "object" && "statusCode" in error && typeof error.statusCode === "number" ? error.statusCode : 500;
    const message = error instanceof Error ? error.message : "internal_error";
    if (statusCode === 429) return reply.code(429).send({ error: "rate_limited" });
    app.log.error(error);
    return reply.code(statusCode < 500 ? statusCode : 500).send({ error: statusCode < 500 ? message : "internal_error" });
  });

  const getSession = (request: FastifyRequest) => {
    const token = request.cookies.visnex_session;
    return token ? database.getSession(token) as Session | undefined : undefined;
  };

  const requireAdmin = async (request: FastifyRequest, reply: FastifyReply) => {
    const session = getSession(request);
    if (!session) return reply.code(401).send({ error: "unauthorized" });
  };

  const requireTenantAdmin = async (request: FastifyRequest, reply: FastifyReply) => {
    const session = getSession(request);
    if (!session) return reply.code(401).send({ error: "unauthorized" });
    const { tenantSlug } = request.params as { tenantSlug?: string };
    if (!tenantSlug || session.tenant_slug !== tenantSlug) return reply.code(403).send({ error: "tenant_forbidden" });
  };

  const requireMatchingConfigurationTenant = (reply: FastifyReply, tenantSlug: string, configuration: unknown) => {
    if (!configuration || typeof configuration !== "object" || !("tenantSlug" in configuration)) return true;
    if ((configuration as { tenantSlug?: unknown }).tenantSlug === tenantSlug) return true;
    reply.code(400).send({ error: "tenant_mismatch" });
    return false;
  };

  app.get("/health", async () => ({ status: "ok", service: "visNEX-configurator-api" }));

  app.get("/api/public/:tenantSlug/configurator", async (request, reply) => {
    const { tenantSlug } = request.params as { tenantSlug: string };
    const tenant = database.getTenant(tenantSlug);
    if (!tenant) return reply.code(404).send({ error: "tenant_not_found" });
    const products = database.getProducts(tenantSlug, "published").filter((product) => product.definition.enabled).map((product) => product.definition);
    return { tenant: { slug: tenant.slug, name: tenant.name, branding: tenant.branding }, products };
  });

  app.get("/api/public/:tenantSlug/products/:productType", async (request, reply) => {
    const { tenantSlug, productType } = request.params as { tenantSlug: string; productType: string };
    const product = database.getProduct(tenantSlug, productType, "published");
    if (!product || !product.definition.enabled) return reply.code(404).send({ error: "product_not_found" });
    return { product: product.definition };
  });

  app.post("/api/public/:tenantSlug/validate", async (request, reply) => {
    const { tenantSlug } = request.params as { tenantSlug: string };
    const body = request.body as { configuration?: unknown };
    if (!requireMatchingConfigurationTenant(reply, tenantSlug, body?.configuration)) return;
    const configuration = body?.configuration && typeof body.configuration === "object" ? body.configuration as Record<string, unknown> : {};
    const productType = String(configuration.productType || "");
    const productVersionId = String(configuration.productVersionId || "");
    const product = database.getProductVersion(tenantSlug, productType, productVersionId);
    if (!product) return reply.code(404).send({ error: "product_not_found" });
    const result = validateConfiguration(body.configuration, product.definition);
    return reply.code(result.valid ? 200 : 422).send(result);
  });

  app.post("/api/public/:tenantSlug/configurations", async (request, reply) => {
    const { tenantSlug } = request.params as { tenantSlug: string };
    const parsed = SaveConfigurationRequestSchema.safeParse(request.body);
    if (!parsed.success) return badRequest(reply, parsed.error.issues);
    if (!requireMatchingConfigurationTenant(reply, tenantSlug, parsed.data.configuration)) return;
    const product = database.getProductVersion(tenantSlug, parsed.data.configuration.productType, parsed.data.configuration.productVersionId);
    if (!product) return reply.code(404).send({ error: "product_not_found" });
    const validation = validateConfiguration(parsed.data.configuration, product.definition);
    if (!validation.valid) return reply.code(422).send(validation);
    const id = randomUUID();
    const shareId = createOpaqueToken(18);
    const expiresAt = parsed.data.expiresInDays ? new Date(Date.now() + parsed.data.expiresInDays * 86_400_000).toISOString() : null;
    database.saveConfiguration(tenantSlug, id, shareId, parsed.data.configuration, expiresAt);
    const shareUrl = new URL(options.publicAppUrl);
    shareUrl.search = new URLSearchParams({ tenant: tenantSlug, project: shareId }).toString();
    return reply.code(201).send({ id, shareId, shareUrl: shareUrl.toString(), expiresAt, validation });
  });

  app.get("/api/public/:tenantSlug/configurations/:shareId", async (request, reply) => {
    const { tenantSlug, shareId } = request.params as { tenantSlug: string; shareId: string };
    if (!/^[A-Za-z0-9_-]{20,40}$/.test(shareId)) return reply.code(404).send({ error: "configuration_not_found" });
    const saved = database.getConfiguration(tenantSlug, shareId);
    if (!saved) return reply.code(404).send({ error: "configuration_not_found" });
    return saved;
  });

  app.post("/api/public/:tenantSlug/quotes", async (request, reply) => {
    const { tenantSlug } = request.params as { tenantSlug: string };
    const parsed = QuoteRequestSchema.safeParse(request.body);
    if (!parsed.success) return badRequest(reply, parsed.error.issues);
    if (!requireMatchingConfigurationTenant(reply, tenantSlug, parsed.data.configuration)) return;
    const product = database.getProductVersion(tenantSlug, parsed.data.configuration.productType, parsed.data.configuration.productVersionId);
    if (!product) return reply.code(404).send({ error: "product_not_found" });
    const validation = validateConfiguration(parsed.data.configuration, product.definition);
    if (!validation.valid) return reply.code(422).send(validation);
    const quote = calculateQuote(parsed.data.configuration, product.pricing);
    const bom = generateBom(parsed.data.configuration, validation.derived);
    const quoteId = `Q-${new Date().toISOString().slice(0, 10).replaceAll("-", "")}-${createOpaqueToken(5)}`;
    database.saveQuote(tenantSlug, quoteId, quote, bom, null);
    return reply.code(201).send({ quoteId, quote, bom, validation });
  });

  app.post("/api/public/:tenantSlug/pdf", async (request, reply) => {
    const { tenantSlug } = request.params as { tenantSlug: string };
    const parsed = PdfRequestSchema.safeParse(request.body);
    if (!parsed.success) return badRequest(reply, parsed.error.issues);
    if (!requireMatchingConfigurationTenant(reply, tenantSlug, parsed.data.configuration)) return;
    const tenant = database.getTenant(tenantSlug);
    const product = database.getProductVersion(tenantSlug, parsed.data.configuration.productType, parsed.data.configuration.productVersionId);
    if (!tenant || !product) return reply.code(404).send({ error: "product_not_found" });
    const validation = validateConfiguration(parsed.data.configuration, product.definition);
    if (!validation.valid) return reply.code(422).send(validation);
    const quote = calculateQuote(parsed.data.configuration, product.pricing);
    const bom = generateBom(parsed.data.configuration, validation.derived);
    const projectNumber = `P-${createOpaqueToken(6).toUpperCase()}`;
    const bytes = await generateProjectPdf({ configuration: parsed.data.configuration, productName: product.definition.name, projectNumber, branding: tenant.branding as Parameters<typeof generateProjectPdf>[0]["branding"], quote, bom, snapshotDataUrl: parsed.data.snapshotDataUrl });
    return reply.header("Content-Type", "application/pdf").header("Content-Disposition", `attachment; filename=visnex-${projectNumber}.pdf`).send(Buffer.from(bytes));
  });

  app.post("/api/admin/:tenantSlug/login", { config: { rateLimit: { max: 5, timeWindow: "10 minutes" } } }, async (request, reply) => {
    const { tenantSlug } = request.params as { tenantSlug: string };
    const parsed = AdminLoginSchema.safeParse(request.body);
    if (!parsed.success) return badRequest(reply, parsed.error.issues);
    const admin = database.findAdmin(tenantSlug, parsed.data.email);
    if (!admin || !await verifyPassword(parsed.data.password, String(admin.password_hash))) return reply.code(401).send({ error: "invalid_credentials" });
    const token = createOpaqueToken(32);
    const expiresAt = new Date(Date.now() + (options.sessionTtlHours ?? 12) * 3_600_000).toISOString();
    database.createSession(randomUUID(), String(admin.id), token, expiresAt);
    reply.setCookie("visnex_session", token, { httpOnly: true, sameSite: "strict", secure: options.secureCookies ?? false, path: "/", expires: new Date(expiresAt) });
    return { authenticated: true, email: String(admin.email), tenantSlug };
  });

  app.post("/api/admin/logout", { preHandler: requireAdmin }, async (request, reply) => {
    const token = request.cookies.visnex_session;
    if (token) database.deleteSession(token);
    reply.clearCookie("visnex_session", { path: "/" });
    return { authenticated: false };
  });

  app.get("/api/admin/me", { preHandler: requireAdmin }, async (request) => {
    const session = getSession(request)!;
    return { authenticated: true, email: String(session.email), tenantSlug: String(session.tenant_slug) };
  });

  app.get("/api/admin/:tenantSlug/products", { preHandler: requireTenantAdmin }, async (request) => {
    const { tenantSlug } = request.params as { tenantSlug: string };
    return { products: database.getProducts(tenantSlug, "draft") };
  });

  app.put("/api/admin/:tenantSlug/products/:productType", { preHandler: requireTenantAdmin }, async (request, reply) => {
    const { tenantSlug, productType } = request.params as { tenantSlug: string; productType: string };
    const parsed = AdminProductUpdateSchema.safeParse(request.body);
    if (!parsed.success) return badRequest(reply, parsed.error.issues);
    const sanitized = { ...parsed.data, name: sanitizeText(parsed.data.name, 120), description: sanitizeText(parsed.data.description, 500), steps: parsed.data.steps.map((step) => ({ ...step, label: sanitizeText(step.label, 120) })), parameters: parsed.data.parameters.map((parameter) => ({ ...parameter, label: sanitizeText(parameter.label, 120) })) };
    const product = database.updateDraftProduct(tenantSlug, productType, sanitized);
    return product ? { product } : reply.code(404).send({ error: "product_not_found" });
  });

  app.post("/api/admin/:tenantSlug/products/:productType/publish", { preHandler: requireTenantAdmin }, async (request, reply) => {
    const { tenantSlug, productType } = request.params as { tenantSlug: string; productType: string };
    const product = database.publishProduct(tenantSlug, productType);
    return product ? { product } : reply.code(404).send({ error: "draft_not_found" });
  });

  app.put("/api/admin/:tenantSlug/branding", { preHandler: requireTenantAdmin }, async (request, reply) => {
    const { tenantSlug } = request.params as { tenantSlug: string };
    const parsed = BrandingSettingsSchema.safeParse(request.body);
    if (!parsed.success) return badRequest(reply, parsed.error.issues);
    database.updateBranding(tenantSlug, { ...parsed.data, companyName: sanitizeText(parsed.data.companyName, 120), pdfFooter: sanitizeText(parsed.data.pdfFooter, 300) });
    return { branding: parsed.data };
  });

  app.addHook("onClose", async () => database.close());
  return app;
}
