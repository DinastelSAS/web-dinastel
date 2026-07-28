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
  "/assets/brochure/IMG_4353.jpg",
  "/assets/brochure/IMG_6146.jpg",
  "/assets/brochure/IMG_8521.jpg",
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
    title: "Ingenieria electrica y de redes",
    summary: "Soluciones electricas integrales de baja y media tension, desde el diseno hasta la legalizacion RETIE.",
    bullets: ["Diseno, instalacion y subestaciones BT/MT", "Interventoria, legalizacion y eficiencia energetica"],
    img: "/assets/brochure/IMG_4321.jpg",
  },
  {
    tag: "LINEA 02",
    title: "Sistemas solares llave en mano",
    summary: "Soluciones solares integrales a la medida de su consumo, sin tramites que coordinar por su cuenta.",
    bullets: ["Diseno, legalizacion e instalacion on-grid / hibrido", "Interventoria y puesta en marcha incluidas"],
    img: "/assets/brochure/IMG_1690.jpg",
  },
  {
    tag: "LINEA 03",
    title: "Telecomunicaciones y automatizacion",
    summary: "Conectividad y automatizacion integradas a su infraestructura electrica.",
    bullets: ["Redes de datos y cableado estructurado", "Domotica, BMS/SCADA y PLC"],
    img: "/assets/brochure/IMG_4131.jpg",
  },
  {
    tag: "LINEA 04",
    title: "Obras civiles y de remodelacion",
    summary: "Obra civil de soporte ejecutada por nuestro propio equipo tecnico.",
    bullets: ["Adecuacion de espacios tecnicos", "Interventoria de obra civil"],
    img: "/assets/brochure/IMG_1756.jpg",
  },
];

export const omChips = ["Preventivo", "Correctivo", "Monitoreo remoto"];

export const flujo = ["Diagnostico", "Diseno integrado", "Ejecucion", "Operacion y soporte"];

export const marqueeImages = [
  "/assets/brochure/IMG_4110.jpg",
  "/assets/brochure/IMG_4227.jpg",
  "/assets/brochure/IMG_3985.jpg",
  "/assets/brochure/IMG_4556.jpg",
  "/assets/brochure/IMG_4691.jpg",
];

// NOTA: estas cifras no estan verificadas contra datos reales de DINASTEL SAS (constituida
// julio 2026, sin proyectos ejecutados bajo la sociedad aun). Se dejan por decision explicita
// del fundador (2026-07-28) pese a la advertencia. Revisar antes de publicar formalmente.
export const stats = [
  { value: "+150", label: "Proyectos ejecutados" },
  { value: "+12", label: "Anos de trayectoria" },
  { value: "+8", label: "Regiones atendidas" },
  { value: "98%", label: "Clientes que repiten" },
];

export const aliados = ["GECA SOLAR SAS", "INCOM INGENIERIA SAS", "ECOELECTRICA", "INCOSERTEC SAS"];

export const nosotrosImg = "/assets/brochure/IMG_1697.jpg";
