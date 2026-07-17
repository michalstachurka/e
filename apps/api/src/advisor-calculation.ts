import type { z } from "zod";
import { AdvisorCalculationRequestSchema, type ProjectDocument } from "../../../packages/contracts/src/index.js";
import type { PricingRules } from "../../../packages/configurator-core/src/catalog.js";
import { calculateQuote } from "../../../packages/configurator-core/src/domain.js";

type CalculationInput = z.infer<typeof AdvisorCalculationRequestSchema>;

const money = (value: number) => Math.round(value * 100) / 100;

/**
 * Kalkulacja pilotażowa pozostaje po stronie domeny backendowej. Współczynnik
 * kosztu jest jawnie oznaczony jako demo i związany z wersją cennika produktu;
 * nie jest regułą producenta ani częścią renderera lub publicznego DTO.
 */
export function calculateAdvisorQuote(project: ProjectDocument, input: CalculationInput, pricing: PricingRules, priceListVersionId: string, maxDiscountPercent: number) {
  if (input.discountPercent > maxDiscountPercent) {
    const error = new Error("discount_limit_exceeded") as Error & { statusCode?: number; details?: unknown };
    error.statusCode = 422;
    error.details = { maxDiscountPercent };
    throw error;
  }
  const retail = calculateQuote(project.configuration, pricing);
  const additionsNet = input.additionalItems.reduce((sum, item) => sum + item.quantity * item.unitNet, 0);
  const grossBeforeDiscountNet = retail.net + input.transportNet + input.assemblyNet + additionsNet;
  const discountNet = grossBeforeDiscountNet * (input.discountPercent / 100);
  const saleNet = money(grossBeforeDiscountNet - discountNet);
  const purchaseNet = money(retail.net * 0.64 + input.transportNet * 0.82 + input.assemblyNet * 0.72 + additionsNet * 0.7);
  const marginNet = money(saleNet - purchaseNet);
  const vat = money(saleNet * retail.vatRate);
  return {
    calculationFormatVersion: "1.0" as const,
    demoOnly: true as const,
    currency: retail.currency,
    priceListVersionId,
    purchaseNet,
    saleNet,
    marginNet,
    marginPercent: saleNet ? money((marginNet / saleNet) * 100) : 0,
    discountPercent: input.discountPercent,
    maxDiscountPercent,
    discountNet: money(discountNet),
    vatRate: retail.vatRate,
    vat,
    saleGross: money(saleNet + vat),
    transportNet: money(input.transportNet),
    assemblyNet: money(input.assemblyNet),
    additionalItems: input.additionalItems.map((item) => ({ ...item, totalNet: money(item.quantity * item.unitNet) })),
    validUntil: input.validUntil || new Date(Date.now() + 14 * 86_400_000).toISOString(),
    calculatedAt: new Date().toISOString(),
  };
}
