// Proyectos de referencia — EJECUTADOS POR EL EQUIPO TÉCNICO FUNDADOR antes de la
// constitución de DINASTEL S.A.S. (julio 2026). Se presentan atribuidos al equipo, no como
// historial corporativo de la sociedad (regla de PRODUCT.md / Evidence on Hand).
// No se fabrican testimonios, certificaciones ni cifras de proyectos ejecutados por la SAS.

export type CategoriaProyecto =
  | "Interventoría"
  | "Diseño de ingeniería"
  | "Diseño + instalación"
  | "Mantenimiento";

export interface Proyecto {
  slug: string;
  nombre: string;
  categoria: CategoriaProyecto;
  potencia?: string;
  alcance: string;
  cliente: string;
  ubicacion: string;
  descripcion: string;
  img: string;
  destacado?: boolean;
}

export const proyectos: Proyecto[] = [
  {
    slug: "inti-i-ii",
    nombre: "Parques solares INTI I y II",
    categoria: "Interventoría",
    potencia: "9.9 MWp c/u",
    alcance: "Interventoría documental SSFV",
    cliente: "Abaste Colombia",
    ubicacion: "Colombia",
    descripcion:
      "Interventoría documental de dos parques solares de 9.9 MWp cada uno — 19.8 MW en total. Revisión de ingeniería, cumplimiento normativo y soportes ante el operador de red para proyectos de escala utility.",
    img: "/assets/brochure/interventoria-01.webp",
    destacado: true,
  },
  {
    slug: "ssfv-acopy-yumbo",
    nombre: "SSFV Acopy",
    categoria: "Diseño de ingeniería",
    potencia: "120 kWp",
    alcance: "Ingeniería de detalle",
    cliente: "Proyecto industrial",
    ubicacion: "Yumbo, Valle del Cauca",
    descripcion:
      "Diseño de ingeniería de detalle de un sistema solar fotovoltaico de 120 kWp para autoconsumo industrial, con memorias de cálculo y planos para legalización.",
    img: "/assets/brochure/solar-02.webp",
    destacado: true,
  },
  {
    slug: "ssfv-el-caleno",
    nombre: "SSFV El Caleño",
    categoria: "Diseño de ingeniería",
    potencia: "80 kWp",
    alcance: "Ingeniería de detalle",
    cliente: "Tecnosolar Ingenieros",
    ubicacion: "Cali, Valle del Cauca",
    descripcion:
      "Ingeniería de un sistema fotovoltaico comercial de 80 kWp, subcontratada por la firma integradora Tecnosolar Ingenieros.",
    img: "/assets/brochure/solar-04.webp",
    destacado: true,
  },
  {
    slug: "ssfv-melibelt",
    nombre: "SSFV Melibelt",
    categoria: "Diseño de ingeniería",
    potencia: "45 kWp",
    alcance: "Ingeniería de detalle",
    cliente: "Proyecto comercial",
    ubicacion: "Valle del Cauca",
    descripcion:
      "Diseño de ingeniería de un sistema solar de 45 kWp para reducción de factura en operación comercial.",
    img: "/assets/brochure/solar-06.webp",
  },
  {
    slug: "ssfv-rozo",
    nombre: "SSFV Rozo",
    categoria: "Diseño + instalación",
    alcance: "Diseño RETIE + instalación",
    cliente: "CPI Constructora",
    ubicacion: "Rozo, Valle del Cauca",
    descripcion:
      "Diseño conforme a RETIE e instalación de sistema fotovoltaico, ejecutado para CPI Constructora.",
    img: "/assets/brochure/solar-05.webp",
  },
  {
    slug: "mantenimiento-montelugano",
    nombre: "Conjunto Montelugano",
    categoria: "Mantenimiento",
    alcance: "Mantenimiento multiservicio recurrente",
    cliente: "Copropiedad residencial",
    ubicacion: "Valle del Cauca",
    descripcion:
      "Contrato de mantenimiento multiservicio recurrente: sistema de apantallamiento, subestación, CCTV e iluminación — una sola contraparte técnica para toda la infraestructura.",
    img: "/assets/brochure/mantenimiento-plantas-01.webp",
  },
];

export const proyectosDestacados = proyectos.filter((p) => p.destacado);
