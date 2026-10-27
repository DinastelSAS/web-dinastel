// Catálogo de servicios DINASTEL S.A.S.
// Estructura: 5 líneas de negocio visibles (v2: se agrega Movilidad eléctrica) + servicios transversales (O&M, eficiencia).
// Alineado con el catálogo real de DINASTEL OS (familias SOL, ELE, AUT, EFI, OYM, TEL, OCI, MO).
// Regla de negocio (PRODUCT.md): ingeniería de detalle y mano de obra se cotizan SIEMPRE separadas.

export type Publico = "B2B" | "B2C";

export interface Linea {
  slug: string;
  codigo: string; // familia del catálogo OS
  tag: string;
  title: string;
  summary: string;
  descripcion: string;
  incluye: string[];
  entregables: string[];
  publico: Publico[];
  img: string;
}

export const lineas: Linea[] = [
  {
    slug: "ingenieria-electrica",
    codigo: "ELE",
    tag: "Línea 01",
    title: "Ingeniería eléctrica y de redes",
    summary:
      "Soluciones eléctricas de baja y media tensión, del diseño a la legalización RETIE.",
    descripcion:
      "Diseño, construcción y legalización de instalaciones eléctricas BT/MT para industria, comercio y vivienda. Cada proyecto se entrega con la memoria técnica y el dictamen que exige el operador de red.",
    incluye: [
      "Diseño eléctrico BT/MT y subestaciones",
      "Instalación y montaje electromecánico",
      "Interventoría técnica y legalización RETIE",
      "Estudios de calidad de energía y apantallamiento",
    ],
    entregables: [
      "Planos y memorias de cálculo",
      "Dictamen de conformidad RETIE",
      "Certificación y puesta en servicio",
    ],
    publico: ["B2B", "B2C"],
    img: "/assets/obra/medicion-tablero-02-lg.webp",
  },
  {
    slug: "sistemas-solares",
    codigo: "SOL",
    tag: "Línea 02",
    title: "Sistemas solares llave en mano",
    summary:
      "Energía solar a la medida de su consumo — on-grid, híbrida o aislada, con baterías de respaldo — sin trámites que coordinar por su cuenta.",
    descripcion:
      "Estudio de factibilidad, ingeniería de detalle, legalización AGPE ante el operador de red e instalación de sistemas fotovoltaicos on-grid, híbridos y aislados, con almacenamiento en baterías de litio cuando el proyecto necesita respaldo. Estructuramos además los incentivos tributarios de la Ley 1715.",
    incluye: [
      "Estudio de factibilidad y dimensionamiento",
      "Ingeniería de detalle y memorias",
      "Legalización AGPE y conexión simplificada",
      "Instalación, puesta en marcha y monitoreo",
      "Baterías de respaldo y sistemas BESS",
    ],
    entregables: [
      "Memoria de cálculo y diseño SSFV",
      "Trámite AGPE aprobado por el operador de red",
      "Estructuración de incentivos Ley 1715",
    ],
    publico: ["B2C", "B2B"],
    img: "/assets/obra/solar-residencial-aereo-05-lg.webp",
  },
  {
    slug: "movilidad-electrica",
    codigo: "MOV",
    tag: "Línea 03",
    title: "Movilidad eléctrica",
    summary:
      "Instalación de cargadores para vehículo eléctrico en casas, conjuntos y empresas, con la acometida bien calculada.",
    descripcion:
      "Revisamos la capacidad de su instalación, calculamos la acometida y las protecciones, e instalamos el cargador (ABB, Tesla y otras marcas) con su circuito dedicado. En conjuntos residenciales coordinamos el trabajo con la administración.",
    incluye: [
      "Visita técnica y revisión de capacidad disponible",
      "Acometida, tablero y protecciones dedicadas",
      "Instalación y configuración del cargador",
      "Integración con sistema solar (opcional)",
    ],
    entregables: [
      "Memoria de cálculo de la acometida",
      "Certificación RETIE de la instalación",
      "Pruebas de carga y entrega al usuario",
    ],
    publico: ["B2C", "B2B"],
    img: "/assets/obra/cargador-ve-02-lg.webp",
  },
  {
    slug: "telecomunicaciones-automatizacion",
    codigo: "TEL · AUT",
    tag: "Línea 04",
    title: "Telecomunicaciones y automatización",
    summary:
      "Conectividad y control integrados a su infraestructura eléctrica.",
    descripcion:
      "Redes de datos, cableado estructurado, CCTV y automatización industrial y residencial. Integramos el control a la operación eléctrica para que la infraestructura trabaje como un solo sistema.",
    incluye: [
      "Redes de datos y cableado estructurado",
      "CCTV y control de acceso",
      "Domótica, BMS/SCADA y PLC",
      "Monitoreo remoto de instalaciones",
    ],
    entregables: [
      "Diseño de red y planos as-built",
      "Configuración y puesta en marcha",
      "Tableros de monitoreo",
    ],
    publico: ["B2B", "B2C"],
    img: "/assets/brochure/telecom-racks-01.webp",
  },
  {
    slug: "obras-civiles",
    codigo: "OCI",
    tag: "Línea 05",
    title: "Obras civiles y de remodelación",
    summary:
      "Obra civil de soporte ejecutada por nuestro propio equipo técnico.",
    descripcion:
      "Adecuación de espacios técnicos, cuartos eléctricos y estructuras de soporte para sistemas solares y eléctricos, con interventoría de obra a cargo del mismo equipo de ingeniería.",
    incluye: [
      "Adecuación de espacios y cuartos técnicos",
      "Estructuras de soporte y cimentaciones",
      "Interventoría de obra civil",
    ],
    entregables: [
      "Presupuesto y cronograma de obra",
      "Actas de avance e interventoría",
    ],
    publico: ["B2B", "B2C"],
    img: "/assets/brochure/obras-civiles-01.webp",
  },
];

export interface Transversal {
  codigo: string;
  title: string;
  desc: string;
}

export const transversales: Transversal[] = [
  {
    codigo: "OYM",
    title: "Operación y mantenimiento",
    desc: "Preventivo, correctivo y monitoreo remoto para todas las líneas, con contratos anuales.",
  },
  {
    codigo: "EFI",
    title: "Eficiencia energética",
    desc: "Diagnóstico de consumo y medidas de ahorro medibles antes de invertir en más capacidad.",
  },
  {
    codigo: "ING",
    title: "Consultoría e ingeniería subcontratada",
    desc: "Diseño de detalle, legalización e interventoría para firmas integradoras B2B.",
  },
];

// Regla de negocio que nos diferencia y protege al cliente.
export const reglaSeparacion = {
  title: "Ingeniería y mano de obra, siempre separadas",
  desc: "Nunca cotizamos un combo opaco. Usted ve el valor de la ingeniería y el de la instalación por separado, para decidir con información real y comparar de forma justa.",
};

export const flujo = ["Diagnóstico", "Diseño integrado", "Ejecución", "Operación y soporte"];

