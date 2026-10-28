// Prerender: genera un HTML estático por ruta (con contenido, metadatos y JSON-LD) a partir de
// la build. Lo ejecuta `npm run build` después de `vite build` y `vite build --ssr`.
//
// Por qué: la web es una SPA en GitHub Pages. Sin esto, los rastreadores que no ejecutan
// JavaScript (la mayoría de los de IA: GPTBot, ClaudeBot, PerplexityBot) ven una página vacía
// y todas las rutas comparten el mismo título y la misma vista previa al compartir.
//
// También genera: sitemap.xml (con fechas de los artículos), rss.xml del blog y llms.txt.
// Elaborado por Manuel Mina y propiedad de Dinastel SAS
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");
const SITE = "https://www.dinastel.com";

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const { render, routes, posts, staticRoutes, datosSitio } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);

const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const canon = (r) => (r === "/" ? `${SITE}/` : `${SITE}${r}/`);

function setMeta(html, attr, key, value) {
  const re = new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`);
  if (re.test(html)) return html.replace(re, `$1${esc(value)}$2`);
  return html.replace("</head>", `    <meta ${attr}="${key}" content="${esc(value)}" />\n  </head>`);
}

function applyHead(html, head, route) {
  const url = head.url || canon(route);
  if (head.title) html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(head.title)}</title>`);
  if (head.description) html = setMeta(html, "name", "description", head.description);
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  html = setMeta(html, "property", "og:type", head.type || "website");
  if (head.title) html = setMeta(html, "property", "og:title", head.title);
  if (head.description) html = setMeta(html, "property", "og:description", head.description);
  html = setMeta(html, "property", "og:url", url);
  if (head.image) html = setMeta(html, "property", "og:image", head.image);
  if (head.title) html = setMeta(html, "name", "twitter:title", head.title);
  if (head.description) html = setMeta(html, "name", "twitter:description", head.description);
  if (head.image) html = setMeta(html, "name", "twitter:image", head.image);
  const ld = (head.jsonLd || [])
    .map((d) => `    <script type="application/ld+json">${JSON.stringify(d).replace(/</g, "\\u003c")}</script>`)
    .join("\n");
  if (ld) html = html.replace("</head>", `${ld}\n  </head>`);
  return html;
}

let n = 0;
for (const route of routes) {
  const { html, head } = await render(route);
  let page = template.replace('<div id="root"></div>', `<div id="root" data-ssr-path="${route}">${html}</div>`);
  page = applyHead(page, head, route);
  const out = route === "/" ? path.join(dist, "index.html") : path.join(dist, route, "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, page);
  n++;
}

// sitemap.xml
const today = new Date().toISOString().slice(0, 10);
const prio = { "/": "1.0", "/servicios": "0.9", "/proyectos": "0.9", "/blog": "0.9", "/cumplimiento": "0.8", "/nosotros": "0.7", "/contacto": "0.8", "/preguntas-frecuentes": "0.8" };
const urls = [
  ...staticRoutes.map((r) => `  <url>\n    <loc>${canon(r)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${prio[r] || "0.7"}</priority>\n  </url>`),
  ...posts.map((p) => `  <url>\n    <loc>${canon(`/blog/${p.slug}`)}</loc>\n    <lastmod>${p.date}</lastmod>\n    <priority>0.7</priority>\n  </url>`),
];
fs.writeFileSync(path.join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`);

// rss.xml del blog
const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
const items = sorted
  .map(
    (p) => `    <item>\n      <title>${esc(p.title)}</title>\n      <link>${canon(`/blog/${p.slug}`)}</link>\n      <guid>${canon(`/blog/${p.slug}`)}</guid>\n      <pubDate>${new Date(`${p.date}T12:00:00-05:00`).toUTCString()}</pubDate>\n      <description>${esc(p.excerpt)}</description>\n    </item>`,
  )
  .join("\n");
fs.writeFileSync(
  path.join(dist, "rss.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>Blog DINASTEL S.A.S.</title>\n    <link>${SITE}/blog/</link>\n    <description>Energía solar, baterías, RETIE e ingeniería eléctrica en Colombia, explicadas con datos.</description>\n    <language>es-co</language>\n${items}\n  </channel>\n</rss>\n`,
);

// llms.txt — resumen para asistentes de IA (propuesta llmstxt.org)
const { empresa, contacto, lineas } = datosSitio;
const llms = `# ${empresa.nombreLegal}

> Empresa de ingeniería eléctrica y energía solar en ${empresa.region}. Diseño, legalización (RETIE, AGPE, Ley 1715), instalación y mantenimiento de sistemas solares on-grid, híbridos y aislados, baterías, cargadores para vehículo eléctrico, telecomunicaciones y obra civil. NIT ${empresa.nit}.

Contacto: ${contacto.email} · WhatsApp ${contacto.telefonoDisplay} · ${contacto.direccion}

## Servicios
${lineas.map((l) => `- [${l.title}](${SITE}/servicios/#${l.slug}): ${l.summary}`).join("\n")}

## Páginas
- [Proyectos y galería de obra](${SITE}/proyectos/)
- [Cumplimiento normativo (RETIE, AGPE, Ley 1715, CREG 174)](${SITE}/cumplimiento/)
- [Preguntas frecuentes](${SITE}/preguntas-frecuentes/)
- [Nosotros](${SITE}/nosotros/)
- [Contacto](${SITE}/contacto/)

## Blog (guías para el lector)
${sorted.map((p) => `- [${p.title}](${canon(`/blog/${p.slug}`)}): ${p.excerpt}`).join("\n")}
`;
fs.writeFileSync(path.join(dist, "llms.txt"), llms);

fs.rmSync(ssrDir, { recursive: true, force: true });
console.log(`prerender: ${n} páginas + sitemap.xml + rss.xml + llms.txt`);
