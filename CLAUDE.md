# CLAUDE.md — Web DINASTEL S.A.S.

> Elaborado por Manuel Mina y propiedad de Dinastel SAS

Sitio corporativo de DINASTEL S.A.S. (NIT 902.089.419-7, Cali). Ingeniería eléctrica, energía solar (on-grid, híbrida, aislada, baterías), movilidad eléctrica, telecomunicaciones/automatización y obra civil.

## Stack y comandos
- Vite 5 + React 18 + TypeScript + Tailwind 3 + Framer Motion + React Router 6.
- `npm run dev` · `npm run build` (tsc + vite) · `npm run preview`.
- Producción: GitHub Pages (`DinastelSAS/web-dinastel`), deploy automático en push a `main` (`.github/workflows/deploy.yml`). Dominio `www.dinastel.com` (`public/CNAME`).
- **Prerender (SEO e IA):** `npm run build` = `tsc` + `vite build` + build SSR (`src/entry-server.tsx`) + `scripts/prerender.mjs`, que escribe `dist/<ruta>/index.html` con contenido, metadatos y JSON-LD, más `sitemap.xml`, `rss.xml` y `llms.txt`. Rutas nuevas → agregarlas a `staticRoutes` en `src/entry-server.tsx` (los artículos del blog se agregan solos).
- Metadatos: siempre con `usePageMeta` y `useJsonLd` (`src/ui/usePageMeta.ts`); funcionan en navegador y en el prerender. No tocar `<head>` a mano en componentes.
- El código que corre al renderizar NO puede usar `window`/`document` (rompe el prerender): usarlos solo dentro de `useEffect` o handlers.
- URLs canónicas con barra final (`/servicios/`): GitHub Pages redirige `/servicios` → `/servicios/`.
- `public/404.html` + script en `index.html` siguen atendiendo URLs inexistentes (muestran la página 404 de React).
- No existe `public/sitemap.xml`: lo genera el build.

## Dónde está el contenido
- `src/data/site.ts` — empresa, contacto, menú, fotos del hero, **interruptor del video** (`heroVideo.enabled`).
- `src/data/servicios.ts` — 5 líneas de negocio y servicios transversales.
- `src/data/proyectos.ts` — proyectos de referencia del equipo fundador.
- `src/data/obra.ts` — galería de fotos de obra (agregar/quitar fotos aquí).
- `src/data/blog.ts` — artículos: **fuente de verdad** de lo publicado (los `.md` de `/blog` son borradores).
- Movimiento: `src/ui/Reveal.tsx` (variantes up/left/right/scale/clip). Todo se apaga con "reducir movimiento" (`MotionConfig` en `App.tsx` + media query en `index.css`).
- `src/data/cumplimiento.ts`, `src/data/faq.ts`.

## Reglas de contenido (no negociables)
1. **No inventar** testimonios, clientes, certificaciones ni cifras. Las cifras (+150 proyectos, 5.5 MWp, 19.8 MW, +7 años) son del **equipo técnico fundador** antes de constituir la SAS (julio 2026) y siempre van con ese disclaimer.
2. No nombrar clientes ni direcciones en la galería sin autorización de Manuel.
3. Ingeniería y mano de obra **siempre se presentan separadas** (regla de negocio).
4. Español de Colombia, **trato de "usted" en todo el sitio, incluido el blog** (las preguntas frecuentes van en primera persona del lector: "¿Puedo…?").
5. Artículos del blog: los revisa técnicamente el Ing. Víctor Manuel Mina Lucumí (`autor` en `src/data/site.ts`); citar fuentes y fechas, sin cifras inventadas; cada artículo con `faq` (alimenta FAQPage).
6. Marca: Azul Petróleo `#0D4F73` (primary-600), Gris Grafito `#2E3238` (neutral-800), Montserrat.

## Reglas de imágenes y video
- Toda foto nueva: quitar metadatos (las de dron traen GPS de casas de clientes), máx. 1920 px, WebP calidad ~76, más una versión `-sm` de 820 px. Ejemplo:
  `magick foto.jpg -auto-orient -strip -resize "1920x1920>" -quality 76 public/assets/obra/nombre-lg.webp`
  `magick foto.jpg -auto-orient -strip -resize "820x820>" -quality 72 public/assets/obra/nombre-sm.webp`
- iPhone (.HEIC): convertir primero a JPG (ImageMagick con libheif, o `npx heic-convert`).
- Video del hero: `scripts/procesar-video-hero.sh` → `public/assets/video/`, luego `heroVideo.enabled = true`.
- Nunca commitear originales: `FOTOS NUEVAS/`, `VIDEO/`, `_trabajo/` están en `.gitignore`.

## Git
- Trabajar en rama, nunca `push --force` a `main`.
- Despliegue paso a paso: `INSTRUCCIONES-DESPLIEGUE.md`. Cambios v2: `CAMBIOS-V2.md`. Fallas conocidas: `DIAGNOSTICO-FALLAS.md`.
