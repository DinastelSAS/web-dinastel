// Metadatos por página, compartidos entre el navegador y el prerender (scripts/prerender.mjs).
//
// En el navegador: usePageMeta / useJsonLd actualizan <head> con useEffect.
// En el build (sin window): los mismos hooks guardan los datos en `ssrHead` durante el render,
// y el prerender los escribe en el HTML estático de cada ruta. Así Google, ChatGPT, Claude o
// Perplexity reciben el contenido y los metadatos sin tener que ejecutar JavaScript.

export const SITE = "https://www.dinastel.com";
export const isServer = typeof window === "undefined";

export interface SsrHead {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?: "website" | "article";
  jsonLd: Record<string, unknown>[];
}

export const ssrHead: SsrHead = { jsonLd: [] };

export function resetSsrHead() {
  ssrHead.title = undefined;
  ssrHead.description = undefined;
  ssrHead.url = undefined;
  ssrHead.image = undefined;
  ssrHead.type = undefined;
  ssrHead.jsonLd = [];
}

// URL canónica: con barra final en rutas internas, porque GitHub Pages sirve /ruta/ (index.html
// prerenderizado) y redirige /ruta → /ruta/.
export function canonicalUrl(path: string) {
  if (!path || path === "/") return `${SITE}/`;
  return `${SITE}${path.replace(/\/+$/, "")}/`;
}

export function absoluteUrl(src: string) {
  return src.startsWith("http") ? src : `${SITE}${src}`;
}
