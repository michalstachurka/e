import Fastify, { type FastifyReply, type FastifyRequest } from "fastify";
import cookie from "@fastify/cookie";
import cors from "@fastify/cors";
import rateLimit from "@fastify/rate-limit";
import { randomUUID } from "node:crypto";
import {
  AdvisorCalculationRequestSchema,
  AdminLoginSchema,
  AdminProfileAssetUploadSchema,
  AdminProductUpdateSchema,
  type AdminRole,
  BrandingSettingsSchema,
  defaultProjectScene,
  FeatureAvailabilitySettingsSchema,
  PdfRequestSchema,
  PrivateImageUploadSchema,
  type ProjectDocument,
  ProjectExportRequestSchema,
  QuoteRequestSchema,
  SaveConfigurationRequestSchema,
  UpdateProjectRequestSchema,
} from "../../../packages/contracts/src/index.js";
import { calculateQuote, generateBom, validateConfiguration } from "../../../packages/configurator-core/src/domain.js";
import { ConfiguratorDatabase } from "./database.js";
import { createOpaqueToken, sanitizeText, verifyPassword } from "./security.js";
import { generateProjectPdf } from "./pdf.js";
import { tenantForHostname } from "./tenant-context.js";
import type { ConfiguratorStore } from "./store.js";
import {
  ProfileAssetService,
  StoreBackedProfileAssetObjectStorage,
  StaticProfileAssetLimitProvider,
  SynchronousProfileAssetProcessor,
  publicProfileAsset,
  type ProfileAssetLimitProvider,
  type ProfileAssetObjectStorage,
  type ProfileAssetProcessor,
} from "./profile-assets.js";
import { ProfileSvgError } from "./profile-svg.js";
import { applicationRoleForAdmin, resolveEffectiveCapabilities } from "./capabilities.js";
import { calculateAdvisorQuote } from "./advisor-calculation.js";
import { PrivateAssetError, PrivateAssetService, PrivateImageProcessor, StoreBackedPrivateAssetStorage, publicPrivateAsset, type PrivateAssetProcessor, type PrivateAssetStorage } from "./private-assets.js";

export interface AppOptions {
  databasePath: string;
  adminEmail: string;
  adminPassword: string;
  publicAppUrl: string;
  corsOrigins: string[];
  sessionTtlHours?: number;
  secureCookies?: boolean;
  logger?: boolean;
  defaultTenantSlug?: string;
  tenantHostMap?: Record<string, string>;
  store?: ConfiguratorStore;
  profileAssetStorage?: ProfileAssetObjectStorage;
  profileAssetLimitProvider?: ProfileAssetLimitProvider;
  profileAssetProcessor?: ProfileAssetProcessor;
  privateAssetStorage?: PrivateAssetStorage;
  privateAssetProcessor?: PrivateAssetProcessor;
}

function badRequest(reply: FastifyReply, issues: unknown) {
  return reply.code(400).send({ error: "invalid_request", issues });
}

export async function createApp(options: AppOptions) {
  const app = Fastify({ logger: options.logger ?? false, bodyLimit: 13 * 1024 * 1024 });
  const database = options.store ?? await ConfiguratorDatabase.create({ path: options.databasePath, adminEmail: options.adminEmail, adminPassword: options.adminPassword });
  const profileAssetLimitProvider = options.profileAssetLimitProvider ?? new StaticProfileAssetLimitProvider();
  const profileAssetService = new ProfileAssetService(
    database,
    options.profileAssetStorage ?? new StoreBackedProfileAssetObjectStorage(database),
    profileAssetLimitProvider,
    options.profileAssetProcessor ?? new SynchronousProfileAssetProcessor(),
  );
  const privateAssetService = new PrivateAssetService(database, options.privateAssetStorage ?? new StoreBackedPrivateAssetStorage(database), options.privateAssetProcessor ?? new PrivateImageProcessor());
  await app.register(cookie);
  await app.register(cors, {
    credentials: true,
    methods: ["GET", "HEAD", "POST", "PUT", "DELETE", "OPTIONS"],
    origin(origin, callback) {
      if (!origin || options.corsOrigins.includes(origin)) callback(null, true);
      else callback(new Error("Origin not allowed"), false);
    },
  });
  await app.register(rateLimit, { max: 120, timeWindow: "1 minute" });

  app.setErrorHandler((error, _request, reply) => {
    if (error instanceof ProfileSvgError) return reply.code(error.statusCode).send({ error: error.code, message: error.message });
    if (error instanceof PrivateAssetError) return reply.code(error.statusCode).send({ error: error.code, message: error.message });
    const statusCode = error && typeof error === "object" && "statusCode" in error && typeof error.statusCode === "number" ? error.statusCode : 500;
    const message = error instanceof Error ? error.message : "internal_error";
    if (statusCode === 429) return reply.code(429).send({ error: "rate_limited" });
    app.log.error(error);
    return reply.code(statusCode < 500 ? statusCode : 500).send({ error: statusCode < 500 ? message : "internal_error" });
  });

  const getSession = async (request: FastifyRequest) => {
    const token = request.cookies.visnex_session;
    return token ? await database.getSession(token) : null;
  };

  const requireAdmin = async (request: FastifyRequest, reply: FastifyReply) => {
    const session = await getSession(request);
    if (!session) return reply.code(401).send({ error: "unauthorized" });
  };

  type AdminPermission = "products:read" | "products:write" | "products:publish" | "branding:write" | "profiles:read" | "profiles:create" | "profiles:delete" | "profiles:audit" | "features:read" | "features:write" | "projects:advisor" | "projects:share:revoke" | "calculations:internal" | "exports:create";
  const permissionsByRole: Record<AdminRole, AdminPermission[]> = {
    OWNER: ["products:read", "products:write", "products:publish", "branding:write", "profiles:read", "profiles:create", "profiles:delete", "profiles:audit", "features:read", "features:write", "projects:advisor", "projects:share:revoke", "calculations:internal", "exports:create"],
    ADMIN: ["products:read", "products:write", "products:publish", "branding:write", "profiles:read", "profiles:create", "profiles:delete", "profiles:audit", "features:read", "features:write", "projects:advisor", "projects:share:revoke", "calculations:internal", "exports:create"],
    EDITOR: ["products:read", "products:write", "profiles:read", "profiles:create", "features:read", "projects:advisor", "calculations:internal", "exports:create"],
    VIEWER: ["products:read", "profiles:read", "features:read", "projects:advisor"],
  };

  const requireTenantPermission = (permission: AdminPermission) => async (request: FastifyRequest, reply: FastifyReply) => {
    const session = await getSession(request);
    if (!session) return reply.code(401).send({ error: "unauthorized" });
    const { tenantSlug } = request.params as { tenantSlug?: string };
    if (!tenantSlug || session.tenantSlug !== tenantSlug) return reply.code(403).send({ error: "tenant_forbidden" });
    if (!permissionsByRole[session.role].includes(permission)) return reply.code(403).send({ error: "permission_forbidden", permission });
  };

  const requireMatchingConfigurationTenant = (reply: FastifyReply, tenantSlug: string, configuration: unknown) => {
    if (!configuration || typeof configuration !== "object" || !("tenantSlug" in configuration)) return true;
    if ((configuration as { tenantSlug?: unknown }).tenantSlug === tenantSlug) return true;
    reply.code(400).send({ error: "tenant_mismatch" });
    return false;
  };

  const getCapabilities = async (tenantSlug: string, mode: "PUBLIC" | "ADVISOR", productType: string | undefined, role: "public_customer" | ReturnType<typeof applicationRoleForAdmin>) => {
    const bundle = await database.getFeaturePolicyBundle(tenantSlug, productType);
    return bundle ? resolveEffectiveCapabilities(bundle, mode, role) : null;
  };

  const featureDisabled = (reply: FastifyReply, feature: string) => reply.code(403).send({ error: "feature_disabled", feature });

  const getPublicProject = async (tenantSlug: string, shareId: string) => {
    if (!/^[A-Za-z0-9_-]{20,40}$/.test(shareId)) return null;
    const project = await database.getProject(tenantSlug, shareId);
    if (!project || await database.isProjectShareTokenRevoked(tenantSlug, project.id)) return null;
    return project;
  };

  const projectFeatureAllowed = (reply: FastifyReply, project: ProjectDocument, capabilities: Awaited<ReturnType<typeof getCapabilities>>) => {
    if (!capabilities) return false;
    if (project.scene.photoAssetId && !capabilities.features.CUSTOMER_PHOTO) { featureDisabled(reply, "CUSTOMER_PHOTO"); return false; }
    if (project.scene.foregroundMaskAssetId && !capabilities.features.OBSTACLE_MASKING) { featureDisabled(reply, "OBSTACLE_MASKING"); return false; }
    const advanced = project.scene.camera.method === "ADVISOR_PERSPECTIVE" || project.scene.camera.groundPlane.length > 0 || project.scene.camera.facadePlane.length > 0 || project.scene.camera.perspectiveLines.length > 0;
    if (advanced && !capabilities.features.ADVANCED_CALIBRATION) { featureDisabled(reply, "ADVANCED_CALIBRATION"); return false; }
    return true;
  };

  const publicAssetUrl = (tenantSlug: string, shareId: string, assetId: string, variant = "main") => `/api/public/${encodeURIComponent(tenantSlug)}/configurations/${encodeURIComponent(shareId)}/assets/${encodeURIComponent(assetId)}/${variant}`;
  const advisorAssetUrl = (tenantSlug: string, shareId: string, assetId: string, variant = "main") => `/api/advisor/${encodeURIComponent(tenantSlug)}/projects/${encodeURIComponent(shareId)}/assets/${encodeURIComponent(assetId)}/${variant}`;
  const exportDimensions = (configuration: ProjectDocument["configuration"]) => {
    const values = configuration.values as Record<string, unknown>;
    return Object.fromEntries(["width", "moduleWidths", "depth", "height", "backHeight", "frontHeight", "projection"].flatMap((key) => key in values ? [[key, values[key]]] : []));
  };

  app.get("/health", async (_request, reply) => {
    try {
      if (await database.healthCheck()) return { status: "ok", service: "visNEX-configurator-api" };
    } catch (error) {
      app.log.error(error);
    }
    return reply.code(503).send({ status: "unavailable", service: "visNEX-configurator-api" });
  });

  app.get("/api/runtime-context", async (request, reply) => {
    reply.header("Cache-Control", "no-store");
    reply.header("Vary", "Host");
    const domainTenant = await database.getTenantByHostname(request.hostname);
    if (domainTenant) return { tenantSlug: domainTenant.slug, source: "domain", hostLocked: true };
    const mappedTenantSlug = tenantForHostname(request.hostname, options.tenantHostMap || {});
    if (mappedTenantSlug) {
      if (!await database.getTenant(mappedTenantSlug)) return reply.code(503).send({ error: "mapped_tenant_unavailable" });
      return { tenantSlug: mappedTenantSlug, source: "host", hostLocked: true };
    }
    const tenantSlug = options.defaultTenantSlug || "visnex";
    if (!await database.getTenant(tenantSlug)) return reply.code(503).send({ error: "default_tenant_unavailable" });
    return { tenantSlug, source: "default", hostLocked: false };
  });

  app.get("/api/public/:tenantSlug/configurator", async (request, reply) => {
    const { tenantSlug } = request.params as { tenantSlug: string };
    const tenant = await database.getTenant(tenantSlug);
    if (!tenant) return reply.code(404).send({ error: "tenant_not_found" });
    const products = (await database.getProducts(tenantSlug, "published")).filter((product) => product.definition.enabled).map((product) => product.definition);
    const capabilities = await getCapabilities(tenantSlug, "PUBLIC", undefined, "public_customer");
    return { tenant: { slug: tenant.slug, name: tenant.name, branding: tenant.branding }, products, capabilities };
  });

  app.get("/api/public/:tenantSlug/capabilities", async (request, reply) => {
    const { tenantSlug } = request.params as { tenantSlug: string };
    const { productType } = request.query as { productType?: string };
    const capabilities = await getCapabilities(tenantSlug, "PUBLIC", productType, "public_customer");
    return capabilities || reply.code(404).send({ error: "tenant_not_found" });
  });

  app.get("/api/public/:tenantSlug/products/:productType", async (request, reply) => {
    const { tenantSlug, productType } = request.params as { tenantSlug: string; productType: string };
    const product = await database.getProduct(tenantSlug, productType, "published");
    if (!product || !product.definition.enabled) return reply.code(404).send({ error: "product_not_found" });
    return { product: product.definition };
  });

  app.get("/api/public/:tenantSlug/profile-assets/:assetId", async (request, reply) => {
    const { tenantSlug, assetId } = request.params as { tenantSlug: string; assetId: string };
    const result = await profileAssetService.getContent(tenantSlug, assetId, true);
    if (!result) return reply.code(404).send({ error: "profile_asset_not_found" });
    return reply
      .header("Content-Type", "image/svg+xml; charset=utf-8")
      .header("Content-Security-Policy", "default-src 'none'; style-src 'none'; sandbox")
      .header("X-Content-Type-Options", "nosniff")
      .header("Cache-Control", "public, max-age=31536000, immutable")
      .header("ETag", `\"sha256-${result.asset.contentHash}\"`)
      .send(result.content);
  });

  app.post("/api/public/:tenantSlug/validate", async (request, reply) => {
    const { tenantSlug } = request.params as { tenantSlug: string };
    const body = request.body as { configuration?: unknown };
    if (!requireMatchingConfigurationTenant(reply, tenantSlug, body?.configuration)) return;
    const configuration = body?.configuration && typeof body.configuration === "object" ? body.configuration as Record<string, unknown> : {};
    const productType = String(configuration.productType || "");
    const productVersionId = String(configuration.productVersionId || "");
    const product = await database.getProductVersion(tenantSlug, productType, productVersionId);
    if (!product) return reply.code(404).send({ error: "product_not_found" });
    const result = validateConfiguration(body.configuration, product.definition);
    return reply.code(result.valid ? 200 : 422).send(result);
  });

  app.post("/api/public/:tenantSlug/configurations", async (request, reply) => {
    const { tenantSlug } = request.params as { tenantSlug: string };
    const parsed = SaveConfigurationRequestSchema.safeParse(request.body);
    if (!parsed.success) return badRequest(reply, parsed.error.issues);
    if (!requireMatchingConfigurationTenant(reply, tenantSlug, parsed.data.configuration)) return;
    const product = await database.getProductVersion(tenantSlug, parsed.data.configuration.productType, parsed.data.configuration.productVersionId);
    if (!product) return reply.code(404).send({ error: "product_not_found" });
    const validation = validateConfiguration(parsed.data.configuration, product.definition);
    if (!validation.valid) return reply.code(422).send(validation);
    const document: ProjectDocument = parsed.data.project
      ? { ...parsed.data.project, configuration: parsed.data.configuration }
      : { projectFormatVersion: "1.0", configuration: parsed.data.configuration, scene: structuredClone(defaultProjectScene) };
    const capabilities = await getCapabilities(tenantSlug, "PUBLIC", document.configuration.productType, "public_customer");
    if (!projectFeatureAllowed(reply, document, capabilities)) return;
    const id = randomUUID();
    const shareId = createOpaqueToken(18);
    const expiresAt = parsed.data.expiresInDays ? new Date(Date.now() + parsed.data.expiresInDays * 86_400_000).toISOString() : null;
    await database.saveProject(tenantSlug, id, shareId, document, expiresAt, { kind: "PUBLIC_CUSTOMER", id: null });
    const primaryHostname = await database.getPrimaryHostname(tenantSlug);
    const shareUrl = new URL(primaryHostname ? `https://${primaryHostname}/konfigurator.html` : options.publicAppUrl);
    shareUrl.search = new URLSearchParams({ tenant: tenantSlug, project: shareId }).toString();
    return reply.code(201).send({ id, shareId, shareUrl: shareUrl.toString(), expiresAt, currentVersion: 1, project: document, validation });
  });

  app.get("/api/public/:tenantSlug/configurations/:shareId", async (request, reply) => {
    const { tenantSlug, shareId } = request.params as { tenantSlug: string; shareId: string };
    const saved = await getPublicProject(tenantSlug, shareId);
    if (!saved) return reply.code(404).send({ error: "configuration_not_found" });
    const assets = await database.listPrivateAssets(tenantSlug, saved.id);
    return { ...saved, assets: assets.filter((asset) => asset.status === "ACTIVE").map((asset) => publicPrivateAsset(asset, publicAssetUrl(tenantSlug, shareId, asset.id, "preview"))) };
  });

  app.put("/api/public/:tenantSlug/configurations/:shareId", async (request, reply) => {
    const { tenantSlug, shareId } = request.params as { tenantSlug: string; shareId: string };
    const parsed = UpdateProjectRequestSchema.safeParse(request.body);
    if (!parsed.success) return badRequest(reply, parsed.error.issues);
    if (!requireMatchingConfigurationTenant(reply, tenantSlug, parsed.data.project.configuration)) return;
    const saved = await getPublicProject(tenantSlug, shareId);
    if (!saved) return reply.code(404).send({ error: "configuration_not_found" });
    const product = await database.getProductVersion(tenantSlug, parsed.data.project.configuration.productType, parsed.data.project.configuration.productVersionId);
    if (!product) return reply.code(404).send({ error: "product_not_found" });
    const validation = validateConfiguration(parsed.data.project.configuration, product.definition);
    if (!validation.valid) return reply.code(422).send(validation);
    const capabilities = await getCapabilities(tenantSlug, "PUBLIC", parsed.data.project.configuration.productType, "public_customer");
    if (!projectFeatureAllowed(reply, parsed.data.project, capabilities)) return;
    const updated = await database.updateProject(tenantSlug, saved.id, parsed.data.project, parsed.data.expectedVersion, { kind: "PUBLIC_CUSTOMER", id: null }, capabilities!.limits.maxProjectVersions);
    if (updated === "version_conflict") return reply.code(409).send({ error: "version_conflict", currentVersion: saved.currentVersion });
    if (updated === "version_limit") return reply.code(409).send({ error: "project_version_limit" });
    return updated || reply.code(404).send({ error: "configuration_not_found" });
  });

  app.post("/api/public/:tenantSlug/configurations/:shareId/assets", { config: { rateLimit: { max: 12, timeWindow: "10 minutes" } } }, async (request, reply) => {
    const { tenantSlug, shareId } = request.params as { tenantSlug: string; shareId: string };
    const parsed = PrivateImageUploadSchema.safeParse(request.body);
    if (!parsed.success) return badRequest(reply, parsed.error.issues);
    const project = await getPublicProject(tenantSlug, shareId);
    if (!project) return reply.code(404).send({ error: "configuration_not_found" });
    const capabilities = await getCapabilities(tenantSlug, "PUBLIC", project.configuration.productType, "public_customer");
    const feature = parsed.data.kind === "CUSTOMER_PHOTO" ? "CUSTOMER_PHOTO" : "OBSTACLE_MASKING";
    if (!capabilities?.features[feature]) return featureDisabled(reply, feature);
    const asset = await privateAssetService.create(tenantSlug, project, parsed.data, { kind: "PUBLIC_CUSTOMER", id: null }, capabilities.limits);
    return reply.code(201).send({ asset: publicPrivateAsset(asset, publicAssetUrl(tenantSlug, shareId, asset.id, "preview")) });
  });

  app.get("/api/public/:tenantSlug/configurations/:shareId/assets/:assetId/:variant", async (request, reply) => {
    const { tenantSlug, shareId, assetId, variant } = request.params as { tenantSlug: string; shareId: string; assetId: string; variant: string };
    if (variant !== "main" && variant !== "preview") return reply.code(404).send({ error: "asset_not_found" });
    const project = await getPublicProject(tenantSlug, shareId);
    if (!project) return reply.code(404).send({ error: "asset_not_found" });
    const result = await privateAssetService.content(tenantSlug, project.id, assetId, variant);
    if (!result) return reply.code(404).send({ error: "asset_not_found" });
    return reply.header("Content-Type", result.asset.mimeType).header("Cache-Control", "private, no-store").header("X-Content-Type-Options", "nosniff").send(Buffer.from(result.content));
  });

  app.delete("/api/public/:tenantSlug/configurations/:shareId/assets/:assetId", async (request, reply) => {
    const { tenantSlug, shareId, assetId } = request.params as { tenantSlug: string; shareId: string; assetId: string };
    const project = await getPublicProject(tenantSlug, shareId);
    if (!project) return reply.code(404).send({ error: "asset_not_found" });
    const capabilities = await getCapabilities(tenantSlug, "PUBLIC", project.configuration.productType, "public_customer");
    if (!capabilities?.features.CUSTOMER_PHOTO) return featureDisabled(reply, "CUSTOMER_PHOTO");
    return await privateAssetService.delete(tenantSlug, project.id, assetId, { kind: "PUBLIC_CUSTOMER", id: null }) ? reply.code(204).send() : reply.code(404).send({ error: "asset_not_found" });
  });

  app.post("/api/public/:tenantSlug/quotes", async (request, reply) => {
    const { tenantSlug } = request.params as { tenantSlug: string };
    const parsed = QuoteRequestSchema.safeParse(request.body);
    if (!parsed.success) return badRequest(reply, parsed.error.issues);
    if (!requireMatchingConfigurationTenant(reply, tenantSlug, parsed.data.configuration)) return;
    const product = await database.getProductVersion(tenantSlug, parsed.data.configuration.productType, parsed.data.configuration.productVersionId);
    if (!product) return reply.code(404).send({ error: "product_not_found" });
    const validation = validateConfiguration(parsed.data.configuration, product.definition);
    if (!validation.valid) return reply.code(422).send(validation);
    const capabilities = await getCapabilities(tenantSlug, "PUBLIC", parsed.data.configuration.productType, "public_customer");
    if (!capabilities) return reply.code(404).send({ error: "tenant_not_found" });
    const quote = calculateQuote(parsed.data.configuration, product.pricing);
    const bom = generateBom(parsed.data.configuration, validation.derived);
    const quoteId = `Q-${new Date().toISOString().slice(0, 10).replaceAll("-", "")}-${createOpaqueToken(5)}`;
    await database.saveQuote(tenantSlug, quoteId, quote, bom, null);
    if (capabilities.publicPriceVisibility === "HIDDEN") return reply.code(201).send({ quoteId, priceVisibility: "HIDDEN", bom, validation });
    if (capabilities.publicPriceVisibility === "FROM") return reply.code(201).send({ quoteId, priceVisibility: "FROM", displayPrice: { label: "od", amount: quote.gross, currency: quote.currency, demoOnly: true }, bom, validation });
    return reply.code(201).send({ quoteId, priceVisibility: "EXACT", quote: { currency: quote.currency, net: quote.net, vat: quote.vat, gross: quote.gross, vatRate: quote.vatRate, demoOnly: true }, bom, validation });
  });

  app.post("/api/public/:tenantSlug/pdf", async (request, reply) => {
    const { tenantSlug } = request.params as { tenantSlug: string };
    const parsed = PdfRequestSchema.safeParse(request.body);
    if (!parsed.success) return badRequest(reply, parsed.error.issues);
    if (!requireMatchingConfigurationTenant(reply, tenantSlug, parsed.data.configuration)) return;
    const tenant = await database.getTenant(tenantSlug);
    const product = await database.getProductVersion(tenantSlug, parsed.data.configuration.productType, parsed.data.configuration.productVersionId);
    if (!tenant || !product) return reply.code(404).send({ error: "product_not_found" });
    const validation = validateConfiguration(parsed.data.configuration, product.definition);
    if (!validation.valid) return reply.code(422).send(validation);
    const capabilities = await getCapabilities(tenantSlug, "PUBLIC", parsed.data.configuration.productType, "public_customer");
    const quote = capabilities?.publicPriceVisibility === "HIDDEN" ? null : calculateQuote(parsed.data.configuration, product.pricing);
    const bom = generateBom(parsed.data.configuration, validation.derived);
    const projectNumber = `P-${createOpaqueToken(6).toUpperCase()}`;
    const bytes = await generateProjectPdf({ configuration: parsed.data.configuration, productName: product.definition.name, projectNumber, branding: tenant.branding as Parameters<typeof generateProjectPdf>[0]["branding"], quote, bom, snapshotDataUrl: parsed.data.snapshotDataUrl });
    return reply.header("Content-Type", "application/pdf").header("Content-Disposition", `attachment; filename=visnex-${projectNumber}.pdf`).send(Buffer.from(bytes));
  });

  app.get("/api/advisor/:tenantSlug/capabilities", { preHandler: requireTenantPermission("projects:advisor") }, async (request, reply) => {
    const { tenantSlug } = request.params as { tenantSlug: string };
    const { productType } = request.query as { productType?: string };
    const session = (await getSession(request))!;
    const capabilities = await getCapabilities(tenantSlug, "ADVISOR", productType, applicationRoleForAdmin(session.role));
    return capabilities || reply.code(404).send({ error: "tenant_not_found" });
  });

  app.get("/api/advisor/:tenantSlug/projects/:shareId", { preHandler: requireTenantPermission("projects:advisor") }, async (request, reply) => {
    const { tenantSlug, shareId } = request.params as { tenantSlug: string; shareId: string };
    const project = await database.getProject(tenantSlug, shareId);
    if (!project) return reply.code(404).send({ error: "configuration_not_found" });
    const assets = await database.listPrivateAssets(tenantSlug, project.id);
    return { ...project, assets: assets.filter((asset) => asset.status === "ACTIVE").map((asset) => publicPrivateAsset(asset, advisorAssetUrl(tenantSlug, shareId, asset.id, "preview"))) };
  });

  app.put("/api/advisor/:tenantSlug/projects/:shareId", { preHandler: requireTenantPermission("projects:advisor") }, async (request, reply) => {
    const { tenantSlug, shareId } = request.params as { tenantSlug: string; shareId: string };
    const parsed = UpdateProjectRequestSchema.safeParse(request.body);
    if (!parsed.success) return badRequest(reply, parsed.error.issues);
    if (!requireMatchingConfigurationTenant(reply, tenantSlug, parsed.data.project.configuration)) return;
    const project = await database.getProject(tenantSlug, shareId);
    if (!project) return reply.code(404).send({ error: "configuration_not_found" });
    const product = await database.getProductVersion(tenantSlug, parsed.data.project.configuration.productType, parsed.data.project.configuration.productVersionId);
    if (!product) return reply.code(404).send({ error: "product_not_found" });
    const validation = validateConfiguration(parsed.data.project.configuration, product.definition);
    if (!validation.valid) return reply.code(422).send(validation);
    const session = (await getSession(request))!;
    const capabilities = await getCapabilities(tenantSlug, "ADVISOR", parsed.data.project.configuration.productType, applicationRoleForAdmin(session.role));
    if (!projectFeatureAllowed(reply, parsed.data.project, capabilities)) return;
    const updated = await database.updateProject(tenantSlug, project.id, parsed.data.project, parsed.data.expectedVersion, { kind: "ADVISOR", id: session.adminUserId }, capabilities!.limits.maxProjectVersions);
    if (updated === "version_conflict") return reply.code(409).send({ error: "version_conflict", currentVersion: project.currentVersion });
    if (updated === "version_limit") return reply.code(409).send({ error: "project_version_limit" });
    return updated || reply.code(404).send({ error: "configuration_not_found" });
  });

  app.get("/api/advisor/:tenantSlug/projects/:shareId/versions", { preHandler: requireTenantPermission("projects:advisor") }, async (request, reply) => {
    const { tenantSlug, shareId } = request.params as { tenantSlug: string; shareId: string };
    const project = await database.getProject(tenantSlug, shareId);
    return project ? { versions: await database.listProjectVersions(tenantSlug, project.id) } : reply.code(404).send({ error: "configuration_not_found" });
  });

  app.delete("/api/advisor/:tenantSlug/projects/:shareId/public-share", { preHandler: requireTenantPermission("projects:share:revoke") }, async (request, reply) => {
    const { tenantSlug, shareId } = request.params as { tenantSlug: string; shareId: string };
    const project = await database.getProject(tenantSlug, shareId);
    if (!project) return reply.code(404).send({ error: "configuration_not_found" });
    const session = (await getSession(request))!;
    const revoked = await database.revokeProjectShareToken(tenantSlug, project.id, { kind: "ADVISOR", id: session.adminUserId });
    return revoked ? reply.code(204).send() : reply.code(404).send({ error: "configuration_not_found" });
  });

  app.post("/api/advisor/:tenantSlug/projects/:shareId/assets", { preHandler: requireTenantPermission("projects:advisor"), config: { rateLimit: { max: 20, timeWindow: "10 minutes" } } }, async (request, reply) => {
    const { tenantSlug, shareId } = request.params as { tenantSlug: string; shareId: string };
    const parsed = PrivateImageUploadSchema.safeParse(request.body);
    if (!parsed.success) return badRequest(reply, parsed.error.issues);
    const project = await database.getProject(tenantSlug, shareId);
    if (!project) return reply.code(404).send({ error: "configuration_not_found" });
    const session = (await getSession(request))!;
    const capabilities = await getCapabilities(tenantSlug, "ADVISOR", project.configuration.productType, applicationRoleForAdmin(session.role));
    const feature = parsed.data.kind === "CUSTOMER_PHOTO" ? "CUSTOMER_PHOTO" : "OBSTACLE_MASKING";
    if (!capabilities?.features[feature]) return featureDisabled(reply, feature);
    const asset = await privateAssetService.create(tenantSlug, project, parsed.data, { kind: "ADVISOR", id: session.adminUserId }, capabilities.limits);
    return reply.code(201).send({ asset: publicPrivateAsset(asset, advisorAssetUrl(tenantSlug, shareId, asset.id, "preview")) });
  });

  app.get("/api/advisor/:tenantSlug/projects/:shareId/assets/:assetId/:variant", { preHandler: requireTenantPermission("projects:advisor") }, async (request, reply) => {
    const { tenantSlug, shareId, assetId, variant } = request.params as { tenantSlug: string; shareId: string; assetId: string; variant: string };
    if (variant !== "main" && variant !== "preview") return reply.code(404).send({ error: "asset_not_found" });
    const project = await database.getProject(tenantSlug, shareId);
    if (!project) return reply.code(404).send({ error: "asset_not_found" });
    const result = await privateAssetService.content(tenantSlug, project.id, assetId, variant);
    if (!result) return reply.code(404).send({ error: "asset_not_found" });
    return reply.header("Content-Type", result.asset.mimeType).header("Cache-Control", "private, no-store").header("X-Content-Type-Options", "nosniff").send(Buffer.from(result.content));
  });

  app.delete("/api/advisor/:tenantSlug/projects/:shareId/assets/:assetId", { preHandler: requireTenantPermission("projects:advisor") }, async (request, reply) => {
    const { tenantSlug, shareId, assetId } = request.params as { tenantSlug: string; shareId: string; assetId: string };
    const project = await database.getProject(tenantSlug, shareId);
    if (!project) return reply.code(404).send({ error: "asset_not_found" });
    const session = (await getSession(request))!;
    return await privateAssetService.delete(tenantSlug, project.id, assetId, { kind: "ADVISOR", id: session.adminUserId }) ? reply.code(204).send() : reply.code(404).send({ error: "asset_not_found" });
  });

  app.post("/api/advisor/:tenantSlug/projects/:shareId/calculations", { preHandler: requireTenantPermission("calculations:internal") }, async (request, reply) => {
    const { tenantSlug, shareId } = request.params as { tenantSlug: string; shareId: string };
    const parsed = AdvisorCalculationRequestSchema.safeParse(request.body);
    if (!parsed.success) return badRequest(reply, parsed.error.issues);
    if (!requireMatchingConfigurationTenant(reply, tenantSlug, parsed.data.project.configuration)) return;
    const project = await database.getProject(tenantSlug, shareId);
    if (!project) return reply.code(404).send({ error: "configuration_not_found" });
    const product = await database.getProductVersion(tenantSlug, parsed.data.project.configuration.productType, parsed.data.project.configuration.productVersionId);
    if (!product) return reply.code(404).send({ error: "product_not_found" });
    const validation = validateConfiguration(parsed.data.project.configuration, product.definition);
    if (!validation.valid) return reply.code(422).send(validation);
    const session = (await getSession(request))!;
    const capabilities = await getCapabilities(tenantSlug, "ADVISOR", project.configuration.productType, applicationRoleForAdmin(session.role));
    if (!capabilities?.features.INTERNAL_CALCULATION) return featureDisabled(reply, "INTERNAL_CALCULATION");
    let calculation;
    try {
      calculation = calculateAdvisorQuote(parsed.data.project, parsed.data, product.pricing, product.definition.version.id, capabilities.maxDiscountPercent);
    } catch (error) {
      if (error instanceof Error && error.message === "discount_limit_exceeded") return reply.code(422).send({ error: "discount_limit_exceeded", maxDiscountPercent: capabilities.maxDiscountPercent });
      throw error;
    }
    const calculationId = `CAL-${createOpaqueToken(8)}`;
    await database.saveQuote(tenantSlug, calculationId, calculation, { internal: true, demoOnly: true }, project.id);
    await database.createProjectAuditEvent(tenantSlug, project.id, { kind: "ADVISOR", id: session.adminUserId }, "ADVISOR_CALCULATION_CREATED", { calculationId, projectVersion: project.currentVersion, priceListVersionId: product.definition.version.id });
    return reply.code(201).send({ calculationId, projectVersion: project.currentVersion, calculation, validation });
  });

  app.post("/api/advisor/:tenantSlug/projects/:shareId/exports", { preHandler: requireTenantPermission("exports:create") }, async (request, reply) => {
    const { tenantSlug, shareId } = request.params as { tenantSlug: string; shareId: string };
    const parsed = ProjectExportRequestSchema.safeParse(request.body);
    if (!parsed.success) return badRequest(reply, parsed.error.issues);
    const project = await database.getProject(tenantSlug, shareId);
    if (!project) return reply.code(404).send({ error: "configuration_not_found" });
    const session = (await getSession(request))!;
    const capabilities = await getCapabilities(tenantSlug, "ADVISOR", project.configuration.productType, applicationRoleForAdmin(session.role));
    const feature = parsed.data.format === "GLB" ? "GLB_EXPORT" : "JSON_EXPORT";
    if (!capabilities?.features[feature]) return featureDisabled(reply, feature);
    const jobId = randomUUID();
    if (!await database.createExportJob(tenantSlug, jobId, project.id, parsed.data.format, session.adminUserId)) return reply.code(404).send({ error: "configuration_not_found" });
    await database.createProjectAuditEvent(tenantSlug, project.id, { kind: "ADVISOR", id: session.adminUserId }, "EXPORT_AUTHORIZED", { jobId, format: parsed.data.format, projectVersion: project.currentVersion });
    const safeProject = structuredClone(project.document);
    return reply.code(201).send({ jobId, format: parsed.data.format, projectVersion: project.currentVersion, project: parsed.data.format === "JSON" ? safeProject : undefined, metadata: parsed.data.format === "GLB" ? { projectId: project.id, productId: project.configuration.productType, exportFormatVersion: "1.0", dimensions: exportDimensions(project.configuration) } : undefined });
  });

  app.post("/api/admin/:tenantSlug/login", { config: { rateLimit: { max: 5, timeWindow: "10 minutes" } } }, async (request, reply) => {
    const { tenantSlug } = request.params as { tenantSlug: string };
    const parsed = AdminLoginSchema.safeParse(request.body);
    if (!parsed.success) return badRequest(reply, parsed.error.issues);
    const admin = await database.findAdmin(tenantSlug, parsed.data.email);
    if (!admin || !await verifyPassword(parsed.data.password, admin.passwordHash)) return reply.code(401).send({ error: "invalid_credentials" });
    const token = createOpaqueToken(32);
    const expiresAt = new Date(Date.now() + (options.sessionTtlHours ?? 12) * 3_600_000).toISOString();
    await database.createSession(randomUUID(), admin.id, token, expiresAt);
    reply.setCookie("visnex_session", token, { httpOnly: true, sameSite: "strict", secure: options.secureCookies ?? false, path: "/", expires: new Date(expiresAt) });
    return { authenticated: true, email: String(admin.email), tenantSlug, role: admin.role, applicationRole: applicationRoleForAdmin(admin.role), permissions: permissionsByRole[admin.role] };
  });

  app.post("/api/admin/logout", { preHandler: requireAdmin }, async (request, reply) => {
    const token = request.cookies.visnex_session;
    if (token) await database.deleteSession(token);
    reply.clearCookie("visnex_session", { path: "/" });
    return { authenticated: false };
  });

  app.get("/api/admin/me", { preHandler: requireAdmin }, async (request) => {
    const session = await getSession(request);
    return { authenticated: true, email: session!.email, tenantSlug: session!.tenantSlug, role: session!.role, applicationRole: applicationRoleForAdmin(session!.role), permissions: permissionsByRole[session!.role] };
  });

  app.get("/api/admin/:tenantSlug/features", { preHandler: requireTenantPermission("features:read") }, async (request, reply) => {
    const { tenantSlug } = request.params as { tenantSlug: string };
    const bundle = await database.getFeaturePolicyBundle(tenantSlug);
    if (!bundle) return reply.code(404).send({ error: "tenant_not_found" });
    return { settings: bundle.organization, resolutionOrder: ["PLATFORM", "PLAN", "ORGANIZATION", "PRODUCT", "ROLE"] };
  });

  app.put("/api/admin/:tenantSlug/features", { preHandler: requireTenantPermission("features:write") }, async (request, reply) => {
    const { tenantSlug } = request.params as { tenantSlug: string };
    const parsed = FeatureAvailabilitySettingsSchema.safeParse(request.body);
    if (!parsed.success) return badRequest(reply, parsed.error.issues);
    const session = (await getSession(request))!;
    if (!await database.updateOrganizationFeaturePolicy(tenantSlug, parsed.data, session.adminUserId)) return reply.code(404).send({ error: "tenant_not_found" });
    await database.createProjectAuditEvent(tenantSlug, null, { kind: "ADVISOR", id: session.adminUserId }, "FEATURE_POLICY_UPDATED", { policyFormatVersion: parsed.data.policyFormatVersion });
    return { settings: parsed.data };
  });

  app.get("/api/admin/:tenantSlug/products", { preHandler: requireTenantPermission("products:read") }, async (request) => {
    const { tenantSlug } = request.params as { tenantSlug: string };
    return { products: await database.getProducts(tenantSlug, "draft") };
  });

  app.get("/api/admin/:tenantSlug/profile-assets", { preHandler: requireTenantPermission("profiles:read") }, async (request) => {
    const { tenantSlug } = request.params as { tenantSlug: string };
    return { assets: (await database.listProfileAssets(tenantSlug)).map(publicProfileAsset), stats: await database.getProfileAssetStats(tenantSlug) };
  });

  app.post("/api/admin/:tenantSlug/profile-assets", {
    preHandler: requireTenantPermission("profiles:create"),
    config: { rateLimit: { max: 20, timeWindow: "10 minutes" } },
  }, async (request, reply) => {
    const { tenantSlug } = request.params as { tenantSlug: string };
    const parsed = AdminProfileAssetUploadSchema.safeParse(request.body);
    if (!parsed.success) return badRequest(reply, parsed.error.issues);
    const session = (await getSession(request))!;
    const created = await profileAssetService.create(tenantSlug, { fileName: parsed.data.fileName, svg: parsed.data.svg, actorId: session.adminUserId });
    return reply.code(201).send({ asset: publicProfileAsset(created.asset), validation: created.validation });
  });

  app.get("/api/admin/:tenantSlug/profile-assets/audit", { preHandler: requireTenantPermission("profiles:audit") }, async (request) => {
    const { tenantSlug } = request.params as { tenantSlug: string };
    const { assetId } = request.query as { assetId?: string };
    return { audit: await database.listProfileAssetAudit(tenantSlug, assetId) };
  });

  app.get("/api/admin/:tenantSlug/profile-assets/:assetId/content", { preHandler: requireTenantPermission("profiles:read") }, async (request, reply) => {
    const { tenantSlug, assetId } = request.params as { tenantSlug: string; assetId: string };
    const result = await profileAssetService.getContent(tenantSlug, assetId);
    if (!result) return reply.code(404).send({ error: "profile_asset_not_found" });
    return reply
      .header("Content-Type", "image/svg+xml; charset=utf-8")
      .header("Content-Security-Policy", "default-src 'none'; style-src 'none'; sandbox")
      .header("X-Content-Type-Options", "nosniff")
      .header("Cache-Control", "private, no-store")
      .send(result.content);
  });

  app.delete("/api/admin/:tenantSlug/profile-assets/:assetId", { preHandler: requireTenantPermission("profiles:delete") }, async (request, reply) => {
    const { tenantSlug, assetId } = request.params as { tenantSlug: string; assetId: string };
    const session = (await getSession(request))!;
    const result = await profileAssetService.retire(tenantSlug, assetId, session.adminUserId);
    if (result === "not_found") return reply.code(404).send({ error: "profile_asset_not_found" });
    if (result === "referenced") return reply.code(409).send({ error: "profile_asset_in_use", message: "Profil jest używany przez wersję produktu i nie może zostać usunięty." });
    return reply.code(204).send();
  });

  app.put("/api/admin/:tenantSlug/products/:productType", { preHandler: requireTenantPermission("products:write") }, async (request, reply) => {
    const { tenantSlug, productType } = request.params as { tenantSlug: string; productType: string };
    const parsed = AdminProductUpdateSchema.safeParse(request.body);
    if (!parsed.success) return badRequest(reply, parsed.error.issues);
    const limits = await profileAssetLimitProvider.getLimits(tenantSlug);
    const profiles = [];
    for (const profile of parsed.data.profiles) {
      let svgProfile = profile.geometryType === "SVG_PROFILE" ? profile.svgProfile : undefined;
      if (svgProfile) {
        const asset = await database.getProfileAsset(tenantSlug, svgProfile.assetId);
        if (!asset || asset.status !== "ACTIVE") return reply.code(422).send({ error: "profile_asset_unavailable", profileId: profile.id });
        if (svgProfile.extrusionLengthMm > limits.maxExtrusionLengthMm) {
          return reply.code(422).send({ error: "extrusion_too_long", profileId: profile.id, maxMm: limits.maxExtrusionLengthMm });
        }
        svgProfile = {
          ...svgProfile,
          widthMm: asset.widthMm,
          heightMm: asset.heightMm,
          viewBox: asset.viewBox,
          profileFormatVersion: asset.profileFormatVersion,
          geometryFormatVersion: asset.geometryFormatVersion,
          contentHash: asset.contentHash,
        };
      }
      const rotated = svgProfile && (svgProfile.rotationDeg === 90 || svgProfile.rotationDeg === 270);
      profiles.push({
        ...profile,
        label: sanitizeText(profile.label, 120),
        usage: sanitizeText(profile.usage, 180),
        aMm: svgProfile ? (rotated ? svgProfile.heightMm : svgProfile.widthMm) : profile.aMm,
        bMm: svgProfile ? (rotated ? svgProfile.widthMm : svgProfile.heightMm) : profile.bMm,
        svgProfile,
      });
    }
    const sanitized = { ...parsed.data, profiles, name: sanitizeText(parsed.data.name, 120), description: sanitizeText(parsed.data.description, 500), steps: parsed.data.steps.map((step) => ({ ...step, label: sanitizeText(step.label, 120) })), parameters: parsed.data.parameters.map((parameter) => ({ ...parameter, label: sanitizeText(parameter.label, 120) })) };
    const session = (await getSession(request))!;
    const product = await database.updateDraftProduct(tenantSlug, productType, sanitized, session.adminUserId);
    return product ? { product } : reply.code(404).send({ error: "product_not_found" });
  });

  app.post("/api/admin/:tenantSlug/products/:productType/publish", { preHandler: requireTenantPermission("products:publish") }, async (request, reply) => {
    const { tenantSlug, productType } = request.params as { tenantSlug: string; productType: string };
    const product = await database.publishProduct(tenantSlug, productType);
    return product ? { product } : reply.code(404).send({ error: "draft_not_found" });
  });

  app.put("/api/admin/:tenantSlug/branding", { preHandler: requireTenantPermission("branding:write") }, async (request, reply) => {
    const { tenantSlug } = request.params as { tenantSlug: string };
    const parsed = BrandingSettingsSchema.safeParse(request.body);
    if (!parsed.success) return badRequest(reply, parsed.error.issues);
    await database.updateBranding(tenantSlug, { ...parsed.data, companyName: sanitizeText(parsed.data.companyName, 120), pdfFooter: sanitizeText(parsed.data.pdfFooter, 300) });
    return { branding: parsed.data };
  });

  app.addHook("onClose", async () => { await database.close(); });
  return app;
}
