export const contacto = {
  email: "gerencia@dinastel.com",
  telefono: "3145569567",
  telefonoDisplay: "+57 314 556 9567",
};

export const nav = [
  { id: "servicios", label: "Servicios" },
  { id: "integraciones", label: "Integraciones" },
  { id: "movimientos", label: "Movimientos" },
  { id: "crecimiento", label: "Crecimiento" },
  { id: "nosotros", label: "Nosotros" },
];

export const heroImages = [
  "/assets/brochure/IMG_4353.webp",
  "/assets/brochure/IMG_6146.webp",
  "/assets/brochure/IMG_8521.webp",
];

export interface Linea {
  tag: string;
  title: string;
  summary: string;
  bullets: string[];
  img: string;
}

export const lineas: Linea[] = [
  {
    tag: "LINEA 01",
    title: "Ingeniería eléctrica y de redes",
    summary: "Soluciones eléctricas integrales de baja y media tensión, desde el diseño hasta la legalización RETIE.",
    bullets: ["Diseño, instalación y subestaciones BT/MT", "Interventoría, legalización y eficiencia energética"],
    img: "/assets/brochure/IMG_4321.webp",
  },
  {
    tag: "LINEA 02",
    title: "Sistemas solares llave en mano",
    summary: "Soluciones solares integrales a la medida de su consumo, sin trámites que coordinar por su cuenta.",
    bullets: ["Diseño, legalización e instalación on-grid / híbrido", "Interventoría y puesta en marcha incluidas"],
    img: "/assets/brochure/IMG_1690.webp",
  },
  {
    tag: "LINEA 03",
    title: "Telecomunicaciones y automatización",
    summary: "Conectividad y automatización integradas a su infraestructura eléctrica.",
    bullets: ["Redes de datos y cableado estructurado", "Domótica, BMS/SCADA y PLC"],
    img: "/assets/brochure/IMG_4131.webp",
  },
  {
    tag: "LINEA 04",
    title: "Obras civiles y de remodelación",
    summary: "Obra civil de soporte ejecutada por nuestro propio equipo técnico.",
    bullets: ["Adecuación de espacios técnicos", "Interventoría de obra civil"],
    img: "/assets/brochure/IMG_1756.webp",
  },
];

export const omChips = ["Preventivo", "Correctivo", "Monitoreo remoto"];

export const flujo = ["Diagnóstico", "Diseño integrado", "Ejecución", "Operación y soporte"];

export const marqueeImages = [
  "/assets/brochure/IMG_4110.webp",
  "/assets/brochure/IMG_4227.webp",
  "/assets/brochure/IMG_3985.webp",
  "/assets/brochure/IMG_4556.webp",
  "/assets/brochure/IMG_4691.webp",
];

// NOTA: estas cifras no están verificadas contra datos reales de DINASTEL SAS (constituida
// julio 2026, sin proyectos ejecutados bajo la sociedad aún). Se dejan por decisión explícita
// del fundador (2026-07-28) pese a la advertencia. Revisar antes de publicar formalmente.
export const stats = [
  { value: "+150", label: "Proyectos ejecutados" },
  { value: "+12", label: "Años de trayectoria" },
  { value: "+8", label: "Regiones atendidas" },
  { value: "98%", label: "Clientes que repiten" },
];

export const aliados = ["GECA SOLAR SAS", "INCOM INGENIERÍA SAS", "ECOELÉCTRICA", "INCOSERTEC SAS"];

export const nosotrosImg = "/assets/brochure/IMG_1697.webp";
