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

export const contacto = {
  email: "comercial@dinastel.com",
  telefono: "3145569567",
  telefonoDisplay: "+57 314 556 9567",
  direccion: "Cra. 32B # 26B-82, Barrio El Jardín, Cali",
  horario: "Lun a Vie · 8:00 a.m. – 6:00 p.m.",
  app: "https://app.dinastel.com",
};

export interface NavItem {
  label: string;
  to?: string; // ruta a una página
  section?: string; // id de sección en la Home
}

// Navegación. Servicios y Proyectos son secciones de la Home (ya no páginas aparte).
export const nav: NavItem[] = [
  { label: "Servicios", section: "lineas" },
  { label: "Proyectos", section: "proyecto" },
  { label: "Cumplimiento", to: "/cumplimiento" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Blog", to: "/blog" },
];

export const heroImages = [
  "/assets/brochure/almacenamiento-energia-01.webp",
  "/assets/brochure/interventoria-01.webp",
  "/assets/brochure/electrico-01.webp",
  "/assets/brochure/solar-03.webp",
];

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

export const marqueeImages = [
  "/assets/brochure/IMG_4110.webp",
  "/assets/brochure/solar-05.webp",
  "/assets/brochure/electrico-04.webp",
  "/assets/brochure/movilidad-01.webp",
  "/assets/brochure/mantenimiento-plantas-01.webp",
  "/assets/brochure/interventoria-03.webp",
  "/assets/brochure/IMG_4227.webp",
  "/assets/brochure/solar-07.webp",
];

export const nosotrosImg = "/assets/brochure/interventoria-02.webp";
