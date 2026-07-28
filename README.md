# DINASTEL SAS — Sitio web

Landing page de DINASTEL S.A.S.: Vite + React + TypeScript + Tailwind + Framer Motion,
publicada en GitHub Pages bajo `www.dinastel.com`.

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

## Publicación

El repo está configurado para publicar automáticamente en cada push a `main`
(`.github/workflows/deploy.yml` hace build y deploy a GitHub Pages). El dominio
personalizado (`www.dinastel.com`, con `dinastel.com` redirigiendo) y el certificado
HTTPS ya están activos.

## Notas de contenido pendientes

- Las cifras de la sección "Crecimiento" (+150 proyectos, +12 años, +8 regiones, 98%) no están
  verificadas contra datos reales de la sociedad — DINASTEL SAS se constituyó julio 2026. Se
  dejaron por decisión explícita del fundador; revisar antes de una publicación formal a gran
  escala. Ver `src/data/site.ts`.
- El formulario de contacto no envía datos a ningún backend todavía (solo confirma en pantalla).
  Falta conectar un servicio de envío (ej. Formspree, o función serverless) si se requiere
  recepción real de leads.
- Sin logo ni manual de marca formal — la paleta de color es una propuesta de trabajo.
