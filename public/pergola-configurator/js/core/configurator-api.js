const cleanBaseUrl = (value) => {
  const text = String(value || "").trim().replace(/\/$/, "");
  return !text || text.startsWith("%VITE_") ? "" : text;
};

export class ConfiguratorApi {
  constructor({ baseUrl, tenantSlug }) {
    this.sameOrigin = String(baseUrl || "").trim() === "same-origin";
    this.baseUrl = this.sameOrigin ? "" : cleanBaseUrl(baseUrl);
    this.tenantSlug = tenantSlug || "visnex";
  }

  get available() {
    return this.sameOrigin || Boolean(this.baseUrl);
  }

  async request(path, options = {}) {
    if (!this.available) throw new Error("API_UNAVAILABLE");
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), options.timeout || 9000);
    try {
      const response = await fetch(`${this.baseUrl}${path}`, {
        credentials: "include",
        headers: options.body ? { "Content-Type": "application/json", ...options.headers } : options.headers,
        ...options,
        body: options.body && typeof options.body !== "string" ? JSON.stringify(options.body) : options.body,
        signal: controller.signal,
      });
      const contentType = response.headers.get("content-type") || "";
      const payload = contentType.includes("application/json") ? await response.json() : await response.blob();
      if (!response.ok) {
        const error = new Error(payload?.error || `HTTP_${response.status}`);
        error.status = response.status;
        error.payload = payload;
        throw error;
      }
      return payload;
    } finally {
      clearTimeout(timer);
    }
  }

  getCatalog() {
    return this.request(`/api/public/${encodeURIComponent(this.tenantSlug)}/configurator`);
  }

  validate(configuration) {
    return this.request(`/api/public/${encodeURIComponent(this.tenantSlug)}/validate`, { method: "POST", body: { configuration } });
  }

  save(configuration, expiresInDays) {
    return this.request(`/api/public/${encodeURIComponent(this.tenantSlug)}/configurations`, { method: "POST", body: { configuration, expiresInDays } });
  }

  load(shareId) {
    return this.request(`/api/public/${encodeURIComponent(this.tenantSlug)}/configurations/${encodeURIComponent(shareId)}`);
  }

  quote(configuration) {
    return this.request(`/api/public/${encodeURIComponent(this.tenantSlug)}/quotes`, { method: "POST", body: { configuration } });
  }

  pdf(configuration, snapshotDataUrl) {
    return this.request(`/api/public/${encodeURIComponent(this.tenantSlug)}/pdf`, { method: "POST", body: { configuration, snapshotDataUrl }, timeout: 30000 });
  }
}
