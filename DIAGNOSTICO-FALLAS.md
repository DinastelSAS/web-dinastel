# Diagnóstico de fallas — www.dinastel.com (versión en producción, commit `ddb8e9b`)

> Elaborado por Manuel Mina y propiedad de Dinastel SAS · Revisión del 27-oct-2026

Severidad: **Crítica** = el usuario ve un error o una página vacía · **Alta** = pierde clientes o expone datos · **Media** = rendimiento/SEO · **Baja** = orden y mantenimiento.

## Fallas encontradas y estado

| # | Severidad | Falla | Dónde | Estado en v2 |
|---|---|---|---|---|
| 1 | **Crítica** | El botón **"Ver servicios"** del hero y el enlace **"Ver proyectos"** llevan a `/servicios` y `/proyectos`, rutas que **no existen** en el router → página en blanco (solo header y footer). Las páginas `Servicios.tsx` y `Proyectos.tsx` estaban escritas pero nunca se conectaron ni se subieron a git. | `src/App.tsx`, `src/components/Hero.tsx` | ✅ Corregida: rutas agregadas |
| 2 | **Crítica** | No hay ruta comodín: cualquier URL mal escrita muestra una página vacía en vez de un 404. | `src/App.tsx` | ✅ Corregida: página 404 propia |
| 3 | Alta | Desde Blog/Nosotros, el menú "Servicios"/"Proyectos" mandaba a la Home con `state.scrollTo`, pero la Home nunca leía ese dato → el usuario quedaba arriba sin llegar a la sección. | `Header.tsx`, `Footer.tsx`, `Home.tsx` | ✅ Corregida (Home lee el estado; además el menú ahora va a páginas propias) |
| 4 | Alta | Los enlaces con ancla (`/servicios#...`) se ignoraban: siempre subía al inicio. | `src/ui/ScrollToTop.tsx` | ✅ Corregida |
| 5 | Alta | **Fotos con GPS.** Las fotos de dron de FOTOS NUEVAS traen coordenadas EXIF de las casas de los clientes. Subirlas tal cual publica la ubicación exacta de cada vivienda. | `FOTOS NUEVAS/` | ✅ Mitigada: las versiones web se generaron **sin metadatos**. Los originales quedan fuera de git (`.gitignore`). |
| 6 | Alta | No había línea de **Movilidad eléctrica** (cargadores VE) ni de baterías en servicios ni en el formulario, siendo trabajo frecuente de Dinastel. | `servicios.ts`, `ContactoForm.tsx` | ✅ Agregada |
| 7 | Alta | Los artículos del blog no declaraban su propia URL canónica: al entrar directo a un artículo, Google veía la canónica de la Home (`/`) y podía tratar los 11 artículos como duplicados de la portada. `/blog` tampoco tenía la suya. | `BlogPost.tsx`, `Blog.tsx` | ✅ Corregida (v2.1): cada artículo declara título, descripción, canónica e imagen propias |
| 8 | Media | **Imágenes pesadísimas**: carpeta `brochure` de 28 MB, fotos de 4284×5712 px de 2–3 MB. El hero cargaba ~9 MB solo de fondo → lento en datos móviles y mala nota en Google (Core Web Vitals). | `public/assets/brochure/` | ✅ Recomprimidas a máx. 1920 px: 28 MB → 6,1 MB. Hero nuevo ~300 KB por foto |
| 9 | Media | Imagen para compartir (Open Graph) era un WebP de 2,1 MB → WhatsApp no muestra la vista previa al compartir el link (límite práctico ~300 KB). | `index.html`, `usePageMeta.ts` | ✅ `og-image.jpg` 1200×630, 140 KB |
| 10 | Media | `sitemap.xml` sin `/servicios`, `/proyectos` y sin el artículo *riego-inteligente…* (11 artículos publicados, 10 en el sitemap). | `public/sitemap.xml` | ✅ Corregida |
| 11 | Media | Todo el texto del blog (~115 KB) se cargaba en la Home aunque nadie abriera el blog. | `src/App.tsx` | ✅ Carga diferida: JS inicial 480 KB → 358 KB |
| 12 | **Alta** | SPA en GitHub Pages: el servidor entregaba una página vacía. Los rastreadores de IA (GPTBot, ClaudeBot, PerplexityBot) no ejecutan JavaScript, así que **no veían ningún artículo del blog**; además todas las páginas compartían la misma vista previa en WhatsApp/LinkedIn. | Arquitectura | ✅ Corregida (v2.3): prerender de 19 páginas en el build |
| 13 | Baja | Archivos **sin subir a git**: `Servicios.tsx`, `Proyectos.tsx`, 5 artículos `.md` en `/blog`. Si se pierde el equipo, se pierden. | repo | ⏳ Se suben en el despliegue v2 (ver instrucciones) |
| 14 | Baja | `FOTOS NUEVAS/` (99 MB, HEIC con GPS) no estaba en `.gitignore` → un `git add .` la subía al repo público. | `.gitignore` | ✅ Corregida |
| 15 | Baja | FAQ en la tercera posición de la Home, antes de mostrar obra o proyectos. | `Home.tsx` | ✅ Reordenada (FAQ al final, antes del CTA) |
| 16 | Baja | README desactualizado (dice que el formulario no envía datos — ya usa Formspree — y habla de cifras de "Crecimiento" que ya no existen). | `README.md` | ✅ Actualizado |
| 17 | Baja | Código muerto: `_legacy/` (6 componentes viejos), `ProyectosDestacados.tsx`, `ProyectoDestacado.tsx`, `scripts/convert-brochure-images.mjs` (migración ya hecha), exportaciones sin uso (`marqueeImages`, `omChips`, `proyectosDestacados`, variantes de animación) y lógica `scrollTo` que ya nadie enviaba. | varios | ✅ Borrado (v2.2) |
| 18 | Media | Tablet horizontal / portátil pequeño (1024 px): el menú se apretaba ("Iniciar sesión" y "Cotizar proyecto" en dos líneas), las cifras de trayectoria y "9.9 MWp c/u" se partían, y el pie de página quedaba pegado al borde. | `Header`, `Trayectoria`, `ProyectoDestacado`, `Footer` | ✅ Corregida (v2.1) |
| 19 | Baja | Celular: la etiqueta superior del hero ocupaba dos líneas; el botón "Escribir a comercial@dinastel.com" partía el correo a la mitad. | `Hero`, `Audiencias` | ✅ Corregida (v2.1) |
| 21 | Media | El blog le hablaba al lector de "tú" y el resto del sitio de "usted". | `blog.ts`, `Blog*.tsx` | ✅ Unificado a "usted" (v2.3) |
| 20 | Baja | En /servicios a 1024 px la etiqueta "Regla de negocio" se aplastaba en un círculo. | `Servicios.tsx` | ✅ Corregida (v2.1) |

## Resumen de pendientes (al 27-oct-2026, v2.1)

| Prioridad | Pendiente | Quién |
|---|---|---|
| 1 | **Publicar la v2** — todo está en la carpeta sin commit (incluye los archivos que nunca se subieron, falla #13) | Claude Code, con `INSTRUCCIONES-DESPLIEGUE.md` |
| 2 | Autorización de clientes para las fotos aéreas de sus casas | Manuel |
| 3 | Confirmar si las fotos de subestación son obra de Dinastel | Manuel |
| 4 | Probar Formspree y app.dinastel.com en producción | Claude Code / Manuel |
| 5 | Video del hero | Manuel envía → se procesa |
| 7 | Redes sociales en el pie de página (falta el usuario exacto de Instagram/TikTok) | Manuel |

## Lo que no pude verificar desde aquí (revisar en producción)

- [ ] **Formspree** (`maqrkdyn`): enviar un formulario de prueba y confirmar que llega a comercial@dinastel.com. Si la cuenta es gratuita, el límite es 50 envíos/mes.
- [ ] **app.dinastel.com** ("Iniciar sesión" en el menú): si la plataforma aún no está publicada, ese enlace da error y conviene quitarlo hasta que exista.
- [ ] Dominio y HTTPS de `dinastel.com` → `www.dinastel.com`.

## Decisiones que te tocan a ti (no las tomé yo)

1. **Fotos de casas de clientes.** Las vistas aéreas muestran viviendas reconocibles (en una se lee la nomenclatura de la calle). Aunque quité el GPS, un vecino reconoce la casa. Pide autorización verbal/escrita a esos clientes o retira esas fotos de `src/data/obra.ts` (basta borrar la línea).
2. **Fotos de subestación** (`subestacion-01/02/03`): las rotulé genérico ("Subestación de potencia"). Si fue una visita o un trabajo de otra firma, no deberían presentarse como obra de Dinastel → bórralas o cambia el texto.
3. **Dirección de tu casa** en el footer y en los datos para Google: ya estaba publicada; la dejé y la agregué al JSON-LD para Google Maps. Si prefieres no exponerla, cámbiala por "Cali, Valle del Cauca".
4. **Redes sociales**: no hay enlaces a Instagram/TikTok en el sitio porque no tengo los usuarios exactos.
