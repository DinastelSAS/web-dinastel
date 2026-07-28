# DINASTEL SAS — Sitio web

Landing page de DINASTEL S.A.S., portada del diseño creado en claude.ai/design a un proyecto
Vite + React + TypeScript + Tailwind + Framer Motion, listo para GitHub Pages.

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

## Publicar en GitHub Pages

1. Crea el repositorio en GitHub (recomendado: bajo el org `DinastelSAS`, no una cuenta personal).
2. `git remote add origin <url-del-repo>` y `git push -u origin main`.
3. En el repo → **Settings → Pages → Build and deployment**, selecciona **GitHub Actions**
   (el workflow en `.github/workflows/deploy.yml` ya hace el build y deploy en cada push a `main`).
4. En el mismo repo, activa **Settings → Pages → Custom domain** con `dinastel.com`
   (el archivo `public/CNAME` ya lo declara).
5. En el DNS de `dinastel.com` (panel de mi.com.co), agrega 4 registros **A** con nombre `@`
   apuntando a las IPs de GitHub Pages:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
6. Espera a que el DNS propague y activa **Enforce HTTPS** en la misma pantalla de Pages.

## Notas de contenido pendientes

- Las cifras de la sección "Crecimiento" (+150 proyectos, +12 años, +8 regiones, 98%) no están
  verificadas contra datos reales de la sociedad — DINASTEL SAS se constituyó julio 2026. Se
  dejaron por decisión explícita del fundador; revisar antes de una publicación formal a gran
  escala. Ver `src/data/site.ts`.
- El formulario de contacto no envía datos a ningún backend todavía (solo confirma en pantalla).
  Falta conectar un servicio de envío (ej. Formspree, o función serverless) si se requiere
  recepción real de leads.
- Sin logo ni manual de marca formal — la paleta de color es una propuesta de trabajo.
