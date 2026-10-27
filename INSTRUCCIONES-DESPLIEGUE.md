# Instrucciones de despliegue — Web DINASTEL v2

> Elaborado por Manuel Mina y propiedad de Dinastel SAS · 27-oct-2026
> **Para Claude Code (VS Code).** Abrir esta carpeta en VS Code y decirle a Claude Code:
> *"Lee CLAUDE.md e INSTRUCCIONES-DESPLIEGUE.md y despliega la v2 siguiendo los pasos."*

Contexto: los cambios de la v2 están en el working tree **sin commit** (la carpeta vive en OneDrive y desde la sesión de preparación no se podía hacer commit). Producción = GitHub Pages; cada push a `main` dispara `.github/workflows/deploy.yml` y publica en www.dinastel.com en ~2 min.

---

## 1. Verificar antes de tocar git

```bash
git status
git log --oneline -1          # debe ser ddb8e9b (o posterior si alguien subió algo)
git fetch origin && git status # confirmar que main local no está atrás de origin/main
```

- Si `origin/main` tiene commits que no están en local: **detenerse y avisar a Manuel** antes de seguir.
- Confirmar que `git status` **no** lista `FOTOS NUEVAS/`, `_trabajo/` ni `_legacy/` (deben estar ignorados por `.gitignore`). Si aparecen, no continuar.
- Confirmar que no hay archivos `.HEIC`, `.JPG` originales ni `.tgz` en `git status`.

## 2. Instalar y compilar

```bash
npm ci
npm run build      # tsc + vite + build SSR + prerender; debe terminar con:
                   # "prerender: 19 páginas + sitemap.xml + rss.xml + llms.txt"
npm run preview    # abre http://localhost:4173
```

En Windows, si `npm ci` falla por archivos bloqueados de OneDrive: pausar la sincronización de OneDrive y repetir.

## 3. Revisión manual (preview local)

Revisar en **4 anchos** con el modo dispositivo del navegador (F12): 390 px (celular), 768 px (tablet vertical), 1024 px (tablet horizontal) y 1440 px (PC). En ninguno debe aparecer scroll horizontal.

| URL | Qué debe verse |
|---|---|
| `/` | Landing corta de 6 bloques: hero (fotos de dron o video), 5 líneas en bento, obra reciente, aliados, diferenciador de cumplimiento y CTA. **No** debe haber botón flotante de WhatsApp. |
| Menú (≥1024 px) | Al pasar el mouse por "Servicios" se abre el panel con las 5 líneas; al bajar, la barra se vuelve flotante |
| Menú (<1024 px) | El botón "Menú" abre la pantalla completa; Esc o tocar un enlace la cierra |
| `/servicios` | 5 líneas con fotos; "Movilidad eléctrica" es la Línea 03 |
| `/servicios#movilidad-electrica` | Baja directo a esa línea |
| `/proyectos` | Tarjetas de proyectos de referencia + galería de 47 fotos con filtros; al tocar una foto abre el visor; Esc cierra |
| `/servicios` | Incluye "¿Para quién es Dinastel?" arriba y "Cómo trabajamos" al final |
| `/nosotros` | Principios, trayectoria en bento y aliados |
| `/preguntas-frecuentes` | Página nueva con las preguntas por línea |
| `/proyectos#galeria` | Baja directo a la galería |
| `/una-ruta-falsa` | Página 404 "Este circuito quedó abierto" |
| `/blog` y un artículo | Cargan normal (ahora en diferido) |
| `/contacto` | El formulario tiene las opciones "Baterías" y "Cargador para vehículo eléctrico" |
| Menú desde `/blog` → Servicios / Proyectos | Lleva a las páginas, no a una página en blanco |

Consola del navegador sin errores rojos ni avisos de "hydration" (los de Google Fonts en local no importan).

**Prerender (lo más importante para Google e IA):** con `npm run preview` abierto, en otra terminal:
```bash
curl -s http://localhost:4173/blog/lo-barato-sale-caro-instalaciones-sin-retie/ | grep -o "<title>[^<]*</title>"
curl -s http://localhost:4173/blog/lo-barato-sale-caro-instalaciones-sin-retie/ | grep -c "application/ld+json"   # debe ser 4
curl -s http://localhost:4173/servicios/ | grep -o "Cinco líneas de negocio"                                   # el texto viene en el HTML
```
Revisar también que existan `dist/sitemap.xml`, `dist/rss.xml` y `dist/llms.txt`.

> `npm run preview` no redirige `/servicios` → `/servicios/` como sí hace GitHub Pages; en local use las URLs con barra final.

## 4. Commit y publicación

```bash
git checkout -b web-v2

git add .gitignore
git commit -m "chore: ignorar fotos originales, material de trabajo y legacy"

git add public/assets/brochure public/assets/obra public/og-image.jpg public/assets/video/.gitkeep
git commit -m "assets: 47 fotos de obra (sin EXIF/GPS); brochure recomprimido y sin duplicados"

git add src index.html public scripts package.json tsconfig.json   # public/sitemap.xml se borró: ahora lo genera el build
git commit -m "feat(web-v2): rutas servicios/proyectos/404, galería de obra, línea movilidad eléctrica, hero con video, menú y footer nuevos, responsivo, SEO"

git add blog
git commit -m "blog: borradores fuente .md de artículos publicados"

git add README.md CLAUDE.md CAMBIOS-V2.md DIAGNOSTICO-FALLAS.md INSTRUCCIONES-DESPLIEGUE.md scripts   # incluye el borrado de convert-brochure-images.mjs
git commit -m "docs: registro de cambios v2, diagnóstico e instrucciones de despliegue"

git status   # debe quedar limpio (salvo carpetas ignoradas)
git push -u origin web-v2
```

**Publicar** (elegir uno; preguntar a Manuel cuál prefiere si no lo dijo):
- **A — Pull Request (recomendado):** `gh pr create --base main --head web-v2 --title "Web v2" --body-file CAMBIOS-V2.md`, revisar y hacer merge desde GitHub.
- **B — Directo:** `git checkout main && git merge --no-ff web-v2 && git push origin main`.

El push/merge a `main` dispara el deploy. Seguirlo con `gh run watch` o en la pestaña *Actions* del repo `DinastelSAS/web-dinastel`.

## 5. Video del hero (cuando Manuel lo entregue)

1. Guardar el original en `VIDEO/` (carpeta ignorada por git), p. ej. `VIDEO/hero-original.mp4`.
2. Con ffmpeg instalado (`winget install Gyan.FFmpeg` en Windows, o usar Git Bash):
   ```bash
   bash scripts/procesar-video-hero.sh "VIDEO/hero-original.mp4" 0 15
   ```
   (segundo de inicio y duración ajustables; ideal 12–20 s, sin cortes bruscos para que el loop no se note).
3. Verificar pesos: `hero-1080.mp4` < 8 MB, `hero-720.mp4` < 4 MB. Si se pasa, subir CRF en el script (+2) o acortar.
4. En `src/data/site.ts` → `heroVideo.enabled: true`.
5. `npm run build && npm run preview`, revisar escritorio y móvil, y commit:
   ```bash
   git add public/assets/video src/data/site.ts
   git commit -m "feat(hero): video de fondo"
   ```
6. Si el video tiene personas reconocibles o casas de clientes, confirmar con Manuel que hay autorización.

## 6. Verificación en producción (después del deploy)

- [ ] www.dinastel.com, /servicios, /proyectos, /blog abren; una URL falsa muestra el 404.
- [ ] Compartir `https://www.dinastel.com` por WhatsApp → aparece la vista previa con la foto aérea.
- [ ] Enviar un formulario de prueba en /contacto → llega a comercial@dinastel.com (Formspree).
- [ ] Los enlaces de WhatsApp (menú, CTA, pie) abren el chat con el +57 314 556 9567 y el mensaje prellenado.
- [ ] "Iniciar sesión" (app.dinastel.com) responde; si no, avisar a Manuel para quitar el enlace.
- [ ] Google Search Console → Sitemaps → reenviar `https://www.dinastel.com/sitemap.xml` (las URLs ahora terminan en `/`).
- [ ] Google Search Console → Inspección de URL → probar 2 artículos del blog → "Probar URL publicada" → la captura debe mostrar el texto del artículo.
- [ ] [Prueba de resultados enriquecidos](https://search.google.com/test/rich-results) con un artículo: deben aparecer BlogPosting, BreadcrumbList y FAQPage.
- [ ] `https://www.dinastel.com/llms.txt` y `https://www.dinastel.com/rss.xml` abren.
- [ ] Opcional: dar de alta el sitio en Bing Webmaster Tools (alimenta a ChatGPT/Copilot) con el mismo sitemap.
- [ ] PageSpeed Insights (móvil) de la Home: anotar el puntaje en CAMBIOS-V2.md.

## 7. Reversión

Si algo sale mal en producción:
```bash
git checkout main
git revert -m 1 <hash-del-merge>   # si se usó merge
git push origin main               # redespliega la versión anterior
```
También se puede re-ejecutar un deploy anterior desde *Actions → Deploy to GitHub Pages → Re-run*.

## Reglas para Claude Code

- No hacer `git push --force` a `main`.
- No subir `FOTOS NUEVAS/`, originales HEIC/JPG, videos originales ni `_trabajo/`.
- Toda foto nueva se procesa **sin metadatos** (`-strip`) antes de entrar a `public/`.
- No inventar testimonios, clientes ni cifras; ver `CLAUDE.md`.
