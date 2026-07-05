/** Prefixes public asset paths with Vite's base URL (needed on GitHub Pages). */
export const asset = (path: string) =>
  import.meta.env.BASE_URL + path.replace(/^\//, "");
