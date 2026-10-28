// Datos base del sitio DINASTEL S.A.S.
// Fuente de verdad de marca: design-system (Azul Petróleo #0D4F73, Gris Grafito #2E3238,
// Montserrat). Contenido alineado con PRODUCT.md y con la arquitectura de DINASTEL OS.

export const empresa = {
  nombreLegal: "DINASTEL S.A.S.",
  nombreCorto: "DINASTEL",
  nit: "902.089.419-7",
  tagline: "Ingeniería · Tecnología · Soluciones",
  frase:
    "Ingeniería, tecnología y soluciones que conectan energía, personas y sistemas para construir un futuro más eficiente.",
  ciudad: "Cali, Valle del Cauca",
  region: "Cali y el suroccidente colombiano",
};

// Autor / revisor técnico de los artículos del blog (E-E-A-T: Google y los buscadores de IA
// valoran contenido firmado por una persona con experiencia verificable).
export const autor = {
  nombre: "Víctor Manuel Mina Lucumí",
  cargo: "Director de Proyectos, DINASTEL S.A.S.",
  credenciales: "Ingeniero electrónico · Magíster en Energías Renovables",
  experiencia: "Más de 7 años diseñando, legalizando e instalando sistemas solares fotovoltaicos en el suroccidente colombiano.",
};

export const contacto = {
  email: "comercial@dinastel.com",
  telefono: "3145569567",
  whatsappMsg: "Hola DINASTEL, quiero cotizar un proyecto.",
  telefonoDisplay: "+57 314 556 9567",
  direccion: "Cra. 32B # 26B-82, Barrio El Jardín, Cali",
  horario: "Lun a Vie · 8:00 a.m. – 6:00 p.m.",
  app: "https://app.dinastel.com",
};

export interface NavItem {
  label: string;
  to: string; // ruta a una página
}

export const whatsappUrl = (msg: string = contacto.whatsappMsg) =>
  `https://wa.me/57${contacto.telefono}?text=${encodeURIComponent(msg)}`;

// Navegación. Servicios y Proyectos vuelven a ser páginas propias (v2, oct-2026):
// antes el botón "Ver servicios" del hero y el enlace "Ver proyectos" apuntaban a rutas
// que no existían en App.tsx y mostraban una página en blanco.
export const nav: NavItem[] = [
  { label: "Servicios", to: "/servicios" },
  { label: "Proyectos", to: "/proyectos" },
  { label: "Cumplimiento", to: "/cumplimiento" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Blog", to: "/blog" },
];

// Fondo del hero mientras no haya video (o si el visitante pide menos movimiento /
// ahorro de datos). Fotos reales de dron, optimizadas a ~300 KB.
export const heroImages = [
  "/assets/obra/solar-industrial-aereo-01-lg.webp",
  "/assets/obra/solar-residencial-aereo-05-lg.webp",
  "/assets/obra/solar-comercial-aereo-02-lg.webp",
  "/assets/obra/solar-industrial-aereo-02-lg.webp",
];

// VIDEO DEL HERO — pendiente de recibir el video de Manuel.
// Para activarlo: poner los archivos en public/assets/video/ (ver INSTRUCCIONES-DESPLIEGUE.md,
// paso "Video del hero") y cambiar enabled a true. El poster se ve mientras carga.
export const heroVideo = {
  enabled: false,
  src: "/assets/video/hero-1080.mp4", // escritorio, H.264 1920x1080, sin audio, < 8 MB
  srcMovil: "/assets/video/hero-720.mp4", // móvil, H.264 720p, sin audio, < 4 MB
  poster: "/assets/video/hero-poster.webp",
};

// Trayectoria REAL del equipo técnico fundador, previa a la constitución de DINASTEL SAS
// (julio 2026). Se presenta atribuida al equipo, nunca como historial corporativo de la SAS
// (regla explícita de PRODUCT.md / Evidence on Hand). Sustituye las cifras infladas anteriores.
export const trayectoria = {
  disclaimer:
    "Trayectoria del equipo técnico fundador, acreditada en proyectos previos a la constitución de DINASTEL S.A.S. (julio 2026).",
  stats: [
    { value: "+150", label: "Proyectos ejecutados por el equipo" },
    { value: "5.5 MWp", label: "Capacidad solar instalada" },
    { value: "19.8 MW", label: "Interventoría documental (INTI I y II)" },
    { value: "+7 años", label: "Experiencia técnica acumulada" },
  ],
};

// Red B2B: firmas integradoras y clientes con quienes el equipo ha ejecutado proyectos.
export const aliados = [
  "Abaste Colombia",
  "Incosertec",
  "Tecnosolar Ingenieros",
  "CPI Constructora",
  "Enerwatts Ingeniería",
  "Ecoeléctrica",
  "GECA Solar",
  "INCOM Ingeniería",
];


export const nosotrosImg = "/assets/obra/montaje-cubierta-01-lg.webp";
