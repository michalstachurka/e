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

  getRuntimeContext() {
    return this.request("/api/runtime-context");
  }

  async request(path, options = {}) {
    if (!this.available) throw new Error("API_UNAVAILABLE");
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), options.timeout || 9000);
    try {
      const { responseType, timeout, ...fetchOptions } = options;
      const response = await fetch(`${this.baseUrl}${path}`, {
        credentials: "include",
        headers: options.body ? { "Content-Type": "application/json", ...options.headers } : options.headers,
        ...fetchOptions,
        body: options.body && typeof options.body !== "string" ? JSON.stringify(options.body) : options.body,
        signal: controller.signal,
      });
      const contentType = response.headers.get("content-type") || "";
      const payload = contentType.includes("application/json") ? await response.json() : responseType === "text" ? await response.text() : await response.blob();
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

  requestText(path, options = {}) {
    return this.request(path, { ...options, responseType: "text" });
  }

  publicProfileAssetContent(assetId) {
    return this.requestText(`/api/public/${encodeURIComponent(this.tenantSlug)}/profile-assets/${encodeURIComponent(assetId)}`);
  }

  adminProfileAssetContent(assetId) {
    return this.requestText(`/api/admin/${encodeURIComponent(this.tenantSlug)}/profile-assets/${encodeURIComponent(assetId)}/content`);
  }

  getCatalog() {
    return this.request(`/api/public/${encodeURIComponent(this.tenantSlug)}/configurator`);
  }

  validate(configuration) {
    return this.request(`/api/public/${encodeURIComponent(this.tenantSlug)}/validate`, { method: "POST", body: { configuration } });
  }

  save(configuration, expiresInDays, project) {
    return this.request(`/api/public/${encodeURIComponent(this.tenantSlug)}/configurations`, { method: "POST", body: { configuration, expiresInDays, project } });
  }

  load(shareId) {
    return this.request(`/api/public/${encodeURIComponent(this.tenantSlug)}/configurations/${encodeURIComponent(shareId)}`);
  }

  publicCapabilities(productType) {
    const query = productType ? `?productType=${encodeURIComponent(productType)}` : "";
    return this.request(`/api/public/${encodeURIComponent(this.tenantSlug)}/capabilities${query}`);
  }

  advisorCapabilities(productType) {
    const query = productType ? `?productType=${encodeURIComponent(productType)}` : "";
    return this.request(`/api/advisor/${encodeURIComponent(this.tenantSlug)}/capabilities${query}`);
  }

  advisorLoad(shareId) {
    return this.request(`/api/advisor/${encodeURIComponent(this.tenantSlug)}/projects/${encodeURIComponent(shareId)}`);
  }

  updateProject(shareId, project, expectedVersion, advisor = false) {
    const path = advisor
      ? `/api/advisor/${encodeURIComponent(this.tenantSlug)}/projects/${encodeURIComponent(shareId)}`
      : `/api/public/${encodeURIComponent(this.tenantSlug)}/configurations/${encodeURIComponent(shareId)}`;
    return this.request(path, { method: "PUT", body: { project, expectedVersion } });
  }

  projectVersions(shareId) {
    return this.request(`/api/advisor/${encodeURIComponent(this.tenantSlug)}/projects/${encodeURIComponent(shareId)}/versions`);
  }

  uploadProjectAsset(shareId, payload, advisor, onProgress) {
    if (!this.available) return Promise.reject(new Error("API_UNAVAILABLE"));
    const prefix = this.baseUrl;
    const path = advisor
      ? `/api/advisor/${encodeURIComponent(this.tenantSlug)}/projects/${encodeURIComponent(shareId)}/assets`
      : `/api/public/${encodeURIComponent(this.tenantSlug)}/configurations/${encodeURIComponent(shareId)}/assets`;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", `${prefix}${path}`);
      xhr.withCredentials = true;
      xhr.responseType = "json";
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.upload.addEventListener("progress", (event) => {
        if (event.lengthComputable) onProgress?.(Math.round((event.loaded / event.total) * 100));
      });
      xhr.addEventListener("load", () => {
        if (xhr.status >= 200 && xhr.status < 300) resolve(xhr.response);
        else {
          const error = new Error(xhr.response?.error || `HTTP_${xhr.status}`);
          error.status = xhr.status;
          error.payload = xhr.response;
          reject(error);
        }
      });
      xhr.addEventListener("error", () => reject(new Error("NETWORK_ERROR")));
      xhr.send(JSON.stringify(payload));
    });
  }

  deleteProjectAsset(shareId, assetId, advisor) {
    const path = advisor
      ? `/api/advisor/${encodeURIComponent(this.tenantSlug)}/projects/${encodeURIComponent(shareId)}/assets/${encodeURIComponent(assetId)}`
      : `/api/public/${encodeURIComponent(this.tenantSlug)}/configurations/${encodeURIComponent(shareId)}/assets/${encodeURIComponent(assetId)}`;
    return this.request(path, { method: "DELETE" });
  }

  advisorCalculation(shareId, body) {
    return this.request(`/api/advisor/${encodeURIComponent(this.tenantSlug)}/projects/${encodeURIComponent(shareId)}/calculations`, { method: "POST", body });
  }

  authorizeExport(shareId, format) {
    return this.request(`/api/advisor/${encodeURIComponent(this.tenantSlug)}/projects/${encodeURIComponent(shareId)}/exports`, { method: "POST", body: { format }, timeout: 30000 });
  }

  quote(configuration) {
    return this.request(`/api/public/${encodeURIComponent(this.tenantSlug)}/quotes`, { method: "POST", body: { configuration } });
  }

  pdf(configuration, snapshotDataUrl) {
    return this.request(`/api/public/${encodeURIComponent(this.tenantSlug)}/pdf`, { method: "POST", body: { configuration, snapshotDataUrl }, timeout: 30000 });
  }
}
