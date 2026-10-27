# Web DINASTEL v2 — registro de cambios

> Elaborado por Manuel Mina y propiedad de Dinastel SAS · 27-oct-2026
> Estado: **listo para publicar, sin commit**. Los cambios están en la carpeta; Claude Code los sube siguiendo `INSTRUCCIONES-DESPLIEGUE.md`.

## Resumen

| Área | Antes | Ahora |
|---|---|---|
| Rutas | `/servicios` y `/proyectos` en blanco; sin 404 | Las dos páginas activas + 404 propia |
| Fotos | Imágenes de catálogo/brochure, sin galería de obra | 33 fotos reales de campo, galería filtrable con visor |
| Peso de imágenes | brochure 28 MB; hero ~9 MB | brochure 6,1 MB; hero ~300 KB/foto; fotos nuevas 13 MB en total (2 tamaños) |
| Servicios | 4 líneas | 5 líneas (+ Movilidad eléctrica; Solar ahora incluye baterías/BESS y aislados) |
| Contacto | Formulario + botón al final | WhatsApp con mensaje prellenado en menú, CTA y pie de página (sin botón flotante, por decisión de Manuel); formulario con opciones "Baterías" y "Cargador VE" |
| Hero | Diapositivas de fotos pesadas | Listo para **video** (se activa con un interruptor); mientras tanto, diapositivas de fotos de dron livianas |
| SEO | og WebP 2,1 MB; sitemap incompleto | og JPG 140 KB; sitemap con 18 URLs; JSON-LD con dirección y municipios atendidos |
| JS inicial | 480 KB | 358 KB (el blog se carga solo al abrirlo) |

## Archivos nuevos

| Archivo | Para qué |
|---|---|
| `src/data/obra.ts` | Catálogo de la galería: id de foto, título, categoría. **Aquí se agregan/quitan fotos.** |
| `src/components/ObraReciente.tsx` | Bloque "Obra reciente" en la Home (bento de 4–5 fotos con visor) |
| `src/components/GaleriaObra.tsx` | Galería filtrable por categoría en `/proyectos#galeria` |
| `src/components/Lightbox.tsx` | Visor a pantalla completa (Esc cierra, flechas navegan) |
| `src/pages/NotFound.tsx` | Página 404 ("Este circuito quedó abierto") |
| `public/assets/obra/*.webp` | 33 fotos × 2 tamaños (`-sm` 820 px para tarjetas, `-lg` 1920 px para visor/hero). Sin EXIF ni GPS. |
| `public/og-image.jpg` | Imagen al compartir el link (1200×630) |
| `public/assets/video/` | Carpeta donde va el video del hero (vacía hasta recibirlo) |
| `scripts/procesar-video-hero.sh` | Convierte el video original a las 3 piezas que usa la web |
| `CLAUDE.md` | Contexto y reglas del proyecto para Claude Code |
| `CAMBIOS-V2.md`, `DIAGNOSTICO-FALLAS.md`, `INSTRUCCIONES-DESPLIEGUE.md` | Esta documentación |

## Archivos modificados

| Archivo | Cambio |
|---|---|
| `src/App.tsx` | Rutas `/servicios`, `/proyectos`, `*` (404); blog con carga diferida; `MotionConfig reducedMotion="user"` |
| `src/components/Hero.tsx` | Soporte de video de fondo (escritorio 16:9 / móvil 9:16) con respaldo automático a fotos si: video desactivado, falla la carga, "reducir movimiento" o "ahorro de datos". Kicker cambia a "…· Movilidad eléctrica". "Ver proyectos" se oculta en móvil (se montaba sobre los datos). |
| `src/data/site.ts` | Menú a páginas propias; `heroImages` con fotos de dron; bloque `heroVideo` (interruptor `enabled`); `whatsappUrl()`; foto de Nosotros real |
| `src/data/servicios.ts` | Nueva línea 03 *Movilidad eléctrica*; Solar menciona híbridos, aislados y baterías; fotos reales en Eléctrica, Solar y Movilidad |
| `src/components/ServiciosResumen.tsx` | "Cinco líneas"; rejilla bento (2 anchas + 3); cada tarjeta enlaza a su detalle en `/servicios#…` |
| `src/pages/Home.tsx` | Nuevo bloque Obra reciente; FAQ movida al final; lee `scrollTo` al llegar desde otra página; meta description actualizada |
| `src/pages/Proyectos.tsx` | La tira de fotos en movimiento se reemplaza por la galería filtrable |
| `src/pages/Servicios.tsx` | Título "Cinco líneas…" y meta description |
| `src/components/ContactoForm.tsx` | Opciones "Baterías / respaldo ante cortes" y "Cargador para vehículo eléctrico" |
| `src/ui/ScrollToTop.tsx` | Respeta anclas `#seccion` |
| `src/ui/usePageMeta.ts` | Imagen por defecto `/og-image.jpg` |
| `index.html` | og:image JPG + dimensiones; JSON-LD con dirección y municipios (Cali, Jamundí, Yumbo, Palmira, Valle); precarga de la foto del hero |
| `public/sitemap.xml` | + `/servicios`, `/proyectos`, + artículo de riego inteligente |
| `public/assets/brochure/*.webp` | Recomprimidas en el mismo nombre (máx. 1920 px, calidad 76) — no cambia ninguna ruta |
| `.gitignore` | Excluye `FOTOS NUEVAS/`, `_trabajo/`, `_legacy/`, `VIDEO/`, `*.HEIC` |
| `README.md` | Actualizado a la realidad del proyecto |

## v2.3 — blog para Google e IA, trato de "usted" y movimiento (27-oct-2026, cuarta ronda)

### 1. La web ahora llega escrita a Google y a los buscadores de IA (prerender)
Antes la web era una SPA: el servidor entregaba un `index.html` vacío y el navegador armaba la página con JavaScript. Google lo ejecuta, pero **GPTBot (ChatGPT), ClaudeBot, PerplexityBot y la mayoría de rastreadores de IA no**: veían una página en blanco, y todas las rutas compartían el mismo título y la misma vista previa.

Ahora `npm run build` genera **19 páginas HTML completas** (8 páginas + 11 artículos), cada una con su texto, título, descripción, URL canónica, Open Graph y datos estructurados. React "hidrata" ese HTML en el navegador sin volver a pintarlo.

| Archivo | Qué hace |
|---|---|
| `src/entry-server.tsx` | Renderiza cada ruta en el build (no se carga en el navegador) |
| `scripts/prerender.mjs` | Escribe `dist/<ruta>/index.html`, `sitemap.xml` (con fecha de cada artículo), `rss.xml` y `llms.txt` |
| `src/seo/head.ts` | Datos compartidos de metadatos; URL canónica con barra final (`/servicios/`) |
| `src/ui/usePageMeta.ts` | `usePageMeta` + nuevo `useJsonLd` (funcionan en navegador y en build) |
| `src/main.tsx` | Hidrata si el HTML corresponde a la ruta; si no (404), renderiza desde cero |
| `public/robots.txt` | Permite explícitamente a Googlebot, Bingbot, GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended |
| `public/sitemap.xml` | **Eliminado**: ahora se genera solo en cada build (no editarlo a mano) |

### 2. Blog
- **Artículo:** índice con anclas (lateral fijo en PC, desplegable en celular), resumen destacado, preguntas frecuentes desplegables, recuadro de **revisión técnica firmado por el Ing. Víctor Manuel Mina Lucumí** (señal de experiencia que valoran Google y la IA), servicio relacionado con enlace interno, "Siga leyendo" por tema, ruta de navegación (Inicio / Blog).
- **Datos estructurados:** `BlogPosting` + `BreadcrumbList` + `FAQPage` por artículo; `Blog` en el listado.
- **Listado:** artículo más reciente destacado y filtro por tema animado.
- `rss.xml` (para lectores y agregadores) y `llms.txt` (resumen de la empresa y de los 11 artículos para asistentes de IA).

### 3. Trato de "usted" en toda la web
Decisión: **usted** en todo el sitio, incluido el blog. Razones: el público mezcla firmas integradoras y clientes de alto valor; en Colombia "usted" es el trato profesional por defecto; y una sola voz hace que la marca suene a una sola empresa. Se reescribieron ~67 frases del blog (`src/data/blog.ts` y los borradores `blog/*.md`). Las preguntas frecuentes en primera persona ("¿Puedo vender…?") se mantienen porque es la voz del lector.

### 4. Movimiento
| Dónde | Movimiento |
|---|---|
| Hero | Parallax: la foto baja más lento que el scroll y el texto se desvanece al salir; cifras que cuentan desde 0 |
| Toda la web | Barra de progreso de lectura con resorte; transición suave entre páginas; línea animada en los títulos de sección |
| Fotos (obra reciente, trayectoria) | Se descubren como una cortina al entrar en pantalla |
| Tarjetas (servicios, proceso, cifras, normas) | Crecen en escalera; las de proceso cambian de color al pasar el mouse |
| ¿Para quién es Dinastel? | Las dos tarjetas entran desde los lados |
| Galería y blog | Las fotos/artículos se recomponen con fundido escalonado al filtrar |
| Botones principales | Brillo que cruza al pasar el mouse |
| Pie de página | La palabra DINASTEL sube al aparecer |

Todo usa solo `transform`, `opacity` y `clip-path` (no afecta el rendimiento) y **se apaga si el equipo del visitante tiene activado "reducir movimiento"**.

## v2.2 — landing corta y varias páginas (27-oct-2026, tercera ronda)

Pedido de Manuel: borrar el código sin uso, landing más corta, contenido repartido en varias páginas, conservar las fotos.

**La Home pasa de 11 bloques a 6** (≈ 40 % más corta): Hero → Líneas de negocio → Obra reciente → Aliados → Diferenciador (cumplimiento) → CTA.

| Bloque que salió de la Home | Dónde quedó |
|---|---|
| ¿Para quién es Dinastel? | `/servicios` (arriba, después del título) |
| Servicios transversales (O&M, eficiencia, consultoría) | `/servicios` (ya estaban) |
| Cómo trabajamos (proceso de 4 pasos) | `/servicios` (al final) |
| Proyecto destacado INTI I y II | `/proyectos` (ya está en las tarjetas) — se borró el componente duplicado |
| Trayectoria (bento de cifras) | `/nosotros` (las cifras clave siguen en el hero) |
| Aliados | Home (franja corta) y `/nosotros` |
| Preguntas frecuentes | **Página nueva `/preguntas-frecuentes`**, enlazada desde el pie de página y desde Contacto |

**Fotos:** ninguna se borró. Las 14 fotos del brochure que no se usaban en la web (cargadores, tableros, medición, interventoría) se pasaron a la galería de obra con versión liviana: la galería sube de 33 a **47 fotos** y suma la categoría *Interventoría*. Los originales duplicados del brochure se eliminaron (brochure: 6,1 MB → 3,9 MB).

**Más compacto:** tarjetas de servicios más bajas, sin etiquetas repetidas; márgenes verticales de sección reducidos (≈ 96 px → 80 px en PC).

**Código borrado:** `_legacy/`, `ProyectoDestacado.tsx`, `ProyectosDestacados.tsx`, `scripts/convert-brochure-images.mjs`, la carpeta `dist/` local, exportaciones sin uso y la lógica `scrollTo` muerta. Enlaces de WhatsApp unificados en `whatsappUrl()`.

## v2.1 — diseño (27-oct-2026, segunda ronda)

Pedido de Manuel: sin botón flotante, diseño responsivo PC/tablet/celular y aplicar las 8 referencias de diseño.

| Referencia | Qué se aplicó | Archivo |
|---|---|---|
| **navbar.gallery** | Menú que se vuelve barra flotante redondeada al hacer scroll; indicador animado bajo la página activa; panel desplegable de **Servicios** con las 5 líneas, foto y descripción. En tablet y celular: menú a pantalla completa con enlaces grandes numerados, sub-lista de servicios, botón de cotizar, WhatsApp y correo. | `Header.tsx` |
| **footer.design** | Pie de página en 4 columnas (marca, servicios, empresa, contacto), contactos como tarjetas tocables, horario con indicador, "Volver arriba" y la palabra **DINASTEL** a todo el ancho como cierre. | `Footer.tsx` |
| **cta.gallery** | Banner final con foto real de fondo, titular grande, 3 promesas concretas (respuesta en 24 h hábiles, visita técnica, ingeniería y mano de obra por separado) y dos caminos claros. | `CtaBanner.tsx` |
| **unsection** | Nueva sección **"¿Para quién es Dinastel?"**: hogares y empresas vs. firmas integradoras, cada uno con lo que recibe y su propio botón. | `Audiencias.tsx` (nuevo) |
| **bentogrids** | Trayectoria convertida en bento: foto del equipo en obra + 4 cifras en mosaico. (Líneas de negocio y Obra reciente ya eran bento.) | `Trayectoria.tsx` |
| **60fps.design** | Entrada escalonada del hero con desenfoque; flechas que se desplazan al pasar el mouse; botones con leve presión al tocar; tarjetas que suben; todo solo con `transform/opacity`. Si el equipo tiene "reducir movimiento" activo, se apagan. | `Hero.tsx`, `Button.tsx`, `App.tsx` |
| **motionsites** | Retícula tipo plano técnico en movimiento lento detrás del hero y titular con degradado; queda preparado para el video. | `Hero.tsx`, `index.css` |
| **404s.design** | Página 404 propia (ya en v2). | `NotFound.tsx` |

**Responsivo** — revisado con capturas a 390 px (celular), 768 px (tablet vertical), 1024 px (tablet horizontal / portátil) y 1440 px (PC), en las 9 páginas. Ajustes: menú completo solo desde 1024 px ("Iniciar sesión" desde 1280 px); proceso en 2 columnas hasta 1280 px; cifras sin cortes; pie de página con márgenes; botones a todo el ancho en celular; sin scroll horizontal en ningún ancho.

**Otros:** botón flotante de WhatsApp retirado; corrección SEO de URL canónica en el blog; botón del hero "Ver servicios" → "Ver obra realizada".

## Referencias de diseño aplicadas (v2)

Las capturas IMG_0012–0019 de FOTOS NUEVAS no son fotos de obra sino referencias ("8 webs gratis…"). Se tomaron como guía:
- **bentogrids** → rejilla bento en Líneas de negocio y Obra reciente.
- **404s.design** → página 404 con mensaje propio del oficio.
- **60fps.design** → animaciones solo con `transform/opacity`, respetando "reducir movimiento".

No se copiaron diseños de esas webs; solo patrones.

## Pendiente (siguiente iteración)

1. **Video del hero** — esperando el archivo. Proceso en `INSTRUCCIONES-DESPLIEGUE.md` §5.
2. Prerender de páginas (vista previa distinta por página en WhatsApp/LinkedIn).
3. Enlaces a redes sociales en el footer.
5. Casos de proyecto con nombre de cliente (con autorización) en `src/data/proyectos.ts`.
