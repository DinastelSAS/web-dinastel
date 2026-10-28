# DINASTEL SAS — Sitio web

Sitio corporativo de DINASTEL S.A.S.: Vite + React + TypeScript + Tailwind + Framer Motion,
publicado en GitHub Pages bajo `www.dinastel.com`.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Prerender

`npm run build` genera un HTML completo por ruta (para Google y buscadores de IA), además de
`sitemap.xml`, `rss.xml` y `llms.txt`. Ver `CLAUDE.md`.

## Publicación

Cada push a `main` ejecuta `.github/workflows/deploy.yml` (build + deploy a GitHub Pages).
El dominio `www.dinastel.com` (con `dinastel.com` redirigiendo) y HTTPS ya están activos.
Pasos detallados, verificación y reversión: **`INSTRUCCIONES-DESPLIEGUE.md`**.

## Documentación

- `CLAUDE.md` — contexto y reglas del proyecto (contenido, imágenes, git).
- `CAMBIOS-V2.md` — qué cambió en la versión 2 (oct-2026).
- `DIAGNOSTICO-FALLAS.md` — fallas encontradas, estado y pendientes.

## Notas

- Formulario de contacto: envía a Formspree (`src/components/ContactoForm.tsx`).
- Video del hero: desactivado hasta tener el archivo (`heroVideo` en `src/data/site.ts`).
- Las cifras de trayectoria corresponden al equipo técnico fundador, previas a la constitución
  de la sociedad (julio 2026), y se muestran con ese aviso.

---
Elaborado por Manuel Mina y propiedad de Dinastel SAS
