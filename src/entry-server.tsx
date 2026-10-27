// Render en el servidor para el prerender (lo usa scripts/prerender.mjs en `npm run build`).
// No se carga en el navegador.
import { Writable } from "node:stream";
import { StringDecoder } from "node:string_decoder";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { resetSsrHead, ssrHead, type SsrHead } from "./seo/head";
import { blogPosts } from "./data/blog";
import { empresa, contacto } from "./data/site";
import { lineas } from "./data/servicios";

export const staticRoutes = ["/", "/servicios", "/proyectos", "/cumplimiento", "/nosotros", "/contacto", "/preguntas-frecuentes", "/blog"];
export const posts = blogPosts.map((p) => ({ slug: p.slug, title: p.title, excerpt: p.excerpt, date: p.date }));
export const routes = [...staticRoutes, ...blogPosts.map((p) => `/blog/${p.slug}`)];
export const datosSitio = { empresa, contacto, lineas: lineas.map((l) => ({ slug: l.slug, title: l.title, summary: l.summary })) };

// react-dom/server (18.3.1) transmite el HTML en "vistas" internas de tamaño fijo (2048 bytes).
// Cuando un caracter UTF-8 multibyte (a, e, i, o, u o n con tilde/dieresis) cae justo en ese
// borde, deja un byte nulo (U+0000) de relleno en la vista que cierra y repite el caracter
// completo al inicio de la siguiente -- un bug de la libreria, no de este codigo. Un NUL nunca
// es valido en HTML real, asi que quitarlo despues de ensamblar el string completo es seguro.
const NUL = String.fromCharCode(0);

export function render(url: string): Promise<{ html: string; head: SsrHead }> {
  resetSsrHead();
  return new Promise((resolve, reject) => {
    let html = "";
    const decoder = new StringDecoder("utf8");
    const sink = new Writable({
      write(chunk, _enc, cb) {
        html += decoder.write(chunk);
        cb();
      },
      final(cb) {
        html += decoder.end();
        cb();
      },
    });
    sink.on("finish", () => {
      html = html.split(NUL).join("");
      resolve({ html, head: { ...ssrHead, jsonLd: [...ssrHead.jsonLd] } });
    });
    const stream = renderToPipeableStream(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>,
      {
        onAllReady() {
          stream.pipe(sink);
        },
        onError(err) {
          reject(err);
        },
      },
    );
  });
}
