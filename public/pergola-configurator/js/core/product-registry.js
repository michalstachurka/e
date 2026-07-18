export class ProductRendererRegistry {
  #renderers = new Map();

  register(renderer) {
    const required = ["productType", "createScene", "updateScene", "disposeScene", "getBounds"];
    for (const key of required) {
      if (!(key in renderer)) throw new TypeError(`Renderer is missing ${key}`);
    }
    if (this.#renderers.has(renderer.productType)) throw new Error(`Renderer ${renderer.productType} is already registered`);
    this.#renderers.set(renderer.productType, Object.freeze(renderer));
    return this;
  }

  require(productType) {
    const renderer = this.#renderers.get(productType);
    if (!renderer) throw new Error(`No renderer registered for ${productType}`);
    return renderer;
  }

  list() {
    return [...this.#renderers.keys()];
  }
}
