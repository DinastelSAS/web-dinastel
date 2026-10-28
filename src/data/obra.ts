// Galería de obra — fotos reales de campo (carpeta "FOTOS NUEVAS", oct-2026, más las fotos
// del brochure que no se estaban usando en la web).
// Procesadas a WebP en dos tamaños (-sm 820px / -lg 1920px) y SIN metadatos EXIF/GPS
// (las fotos de dron traían coordenadas de las viviendas de los clientes).
// Los textos son genéricos a propósito: no se nombra cliente ni dirección. Si un cliente
// autoriza aparecer con nombre, se agrega aquí en `detalle`.

export type CategoriaObra =
  | "Solar residencial"
  | "Solar comercial e industrial"
  | "Inversores y conexión"
  | "Almacenamiento"
  | "Movilidad eléctrica"
  | "Tableros y subestaciones"
  | "Mantenimiento y medición"
  | "Interventoría";

export interface FotoObra {
  id: string; // nombre base del archivo en /assets/obra/
  titulo: string;
  categoria: CategoriaObra;
  orientacion: "h" | "v" | "c"; // horizontal, vertical, cuadrada
  detalle?: string;
}

const base = "/assets/obra/";
export const fotoSm = (id: string) => `${base}${id}-sm.webp`;
export const fotoLg = (id: string) => `${base}${id}-lg.webp`;

export const categoriasObra: CategoriaObra[] = [
  "Solar residencial",
  "Solar comercial e industrial",
  "Inversores y conexión",
  "Almacenamiento",
  "Movilidad eléctrica",
  "Tableros y subestaciones",
  "Mantenimiento y medición",
  "Interventoría",
];

export const obra: FotoObra[] = [
  { id: "solar-industrial-aereo-01", titulo: "Sistema solar en cubierta industrial", categoria: "Solar comercial e industrial", orientacion: "h" },
  { id: "solar-residencial-aereo-05", titulo: "Sistema solar residencial — vista aérea", categoria: "Solar residencial", orientacion: "h" },
  { id: "cargador-ve-12", titulo: "Cargador para vehículo eléctrico en sótano residencial", categoria: "Movilidad eléctrica", orientacion: "v" },
  { id: "cargador-ve-02", titulo: "Cargador para vehículo eléctrico en parqueadero residencial", categoria: "Movilidad eléctrica", orientacion: "c" },
  { id: "bess-racks-01", titulo: "Bancos de baterías de litio en rack", categoria: "Almacenamiento", orientacion: "v" },
  { id: "tablero-general-01", titulo: "Celdas y tablero general de baja tensión", categoria: "Tableros y subestaciones", orientacion: "v" },
  { id: "mantenimiento-limpieza-01", titulo: "Limpieza y mantenimiento de planta en cubierta", categoria: "Mantenimiento y medición", orientacion: "h" },
  { id: "solar-industrial-aereo-02", titulo: "Planta solar en cubierta industrial", categoria: "Solar comercial e industrial", orientacion: "h" },
  { id: "interventoria-cubierta-01", titulo: "Pruebas en campo sobre cubierta", categoria: "Interventoría", orientacion: "v" },
  { id: "medicion-tablero-02", titulo: "Medición y verificación de tablero", categoria: "Mantenimiento y medición", orientacion: "v" },
  { id: "solar-residencial-aereo-02", titulo: "Sistema solar residencial — vista aérea", categoria: "Solar residencial", orientacion: "h" },
  { id: "medicion-tablero-03", titulo: "Medición de corriente en tablero", categoria: "Mantenimiento y medición", orientacion: "v" },
  { id: "subestacion-02", titulo: "Subestación de potencia", categoria: "Tableros y subestaciones", orientacion: "h" },
  { id: "montaje-cubierta-01", titulo: "Montaje de módulos en cubierta", categoria: "Solar comercial e industrial", orientacion: "h" },
  { id: "cargador-ve-10", titulo: "Cargador para vehículo eléctrico en zona común", categoria: "Movilidad eléctrica", orientacion: "v" },
  { id: "hibrido-inversor-bateria-01", titulo: "Inversor híbrido con batería de respaldo", categoria: "Almacenamiento", orientacion: "v" },
  { id: "solar-comercial-aereo-02", titulo: "Sistema solar en edificio comercial", categoria: "Solar comercial e industrial", orientacion: "h" },
  { id: "tablero-control-02", titulo: "Tablero de control y protecciones", categoria: "Tableros y subestaciones", orientacion: "v" },
  { id: "cargador-ve-03", titulo: "Cargador para vehículo eléctrico en sótano", categoria: "Movilidad eléctrica", orientacion: "v" },
  { id: "solar-residencial-aereo-04", titulo: "Sistema solar residencial — vista aérea", categoria: "Solar residencial", orientacion: "h" },
  { id: "interventoria-campo-01", titulo: "Visita técnica de interventoría en obra", categoria: "Interventoría", orientacion: "v" },
  { id: "inversor-instalacion-02", titulo: "Inversor de red y canalización", categoria: "Inversores y conexión", orientacion: "h" },
  { id: "subestacion-03", titulo: "Transformador de potencia", categoria: "Tableros y subestaciones", orientacion: "h" },
  { id: "cargador-ve-07", titulo: "Cargador para vehículo eléctrico con protecciones dedicadas", categoria: "Movilidad eléctrica", orientacion: "v" },
  { id: "solar-comercial-aereo-01", titulo: "Sistema solar en cubierta comercial", categoria: "Solar comercial e industrial", orientacion: "h" },
  { id: "bess-gabinete-01", titulo: "Gabinete de baterías", categoria: "Almacenamiento", orientacion: "v" },
  { id: "medicion-tablero-04", titulo: "Verificación de tensión en tablero", categoria: "Mantenimiento y medición", orientacion: "v" },
  { id: "solar-residencial-aereo-06", titulo: "Sistema solar residencial — vista aérea", categoria: "Solar residencial", orientacion: "h" },
  { id: "cuarto-inversores-cubierta-01", titulo: "Cuarto de inversores en cubierta", categoria: "Inversores y conexión", orientacion: "h" },
  { id: "cargador-ve-11", titulo: "Cargador para vehículo eléctrico en parqueadero", categoria: "Movilidad eléctrica", orientacion: "v" },
  { id: "cargador-ve-04", titulo: "Cargador para vehículo eléctrico en fachada", categoria: "Movilidad eléctrica", orientacion: "v" },
  { id: "solar-comercial-cubierta-01", titulo: "Campo fotovoltaico en cubierta", categoria: "Solar comercial e industrial", orientacion: "h" },
  { id: "tablero-control-01", titulo: "Cableado de tablero de control", categoria: "Tableros y subestaciones", orientacion: "v" },
  { id: "inversor-instalacion-01", titulo: "Inversor y tablero de protecciones", categoria: "Inversores y conexión", orientacion: "h" },
  { id: "medicion-tablero-01", titulo: "Verificación de tensiones en tablero", categoria: "Mantenimiento y medición", orientacion: "v" },
  { id: "cargador-ve-08", titulo: "Cargador para vehículo eléctrico en sótano", categoria: "Movilidad eléctrica", orientacion: "v" },
  { id: "solar-residencial-aereo-03", titulo: "Sistema solar residencial — vista aérea", categoria: "Solar residencial", orientacion: "h" },
  { id: "subestacion-01", titulo: "Subestación — estructura de media tensión", categoria: "Tableros y subestaciones", orientacion: "v" },
  { id: "cargador-ve-09", titulo: "Cargador con medidor independiente", categoria: "Movilidad eléctrica", orientacion: "v" },
  { id: "hibrido-inversores-01", titulo: "Inversores híbridos y protecciones", categoria: "Inversores y conexión", orientacion: "h" },
  { id: "cargador-ve-01", titulo: "Cargador para vehículo eléctrico con tablero dedicado", categoria: "Movilidad eléctrica", orientacion: "v" },
  { id: "cargador-ve-06", titulo: "Cargador para vehículo eléctrico en vivienda", categoria: "Movilidad eléctrica", orientacion: "v" },
  { id: "inversor-exterior-01", titulo: "Inversor en exterior con estructura de protección", categoria: "Inversores y conexión", orientacion: "v" },
  { id: "modulos-acopio-01", titulo: "Módulos en acopio, listos para montaje", categoria: "Solar comercial e industrial", orientacion: "v" },
  { id: "inversor-instalacion-03", titulo: "Inversor de red instalado", categoria: "Inversores y conexión", orientacion: "v" },
  { id: "cargador-ve-05", titulo: "Cargador para vehículo eléctrico", categoria: "Movilidad eléctrica", orientacion: "v" },
  { id: "solar-residencial-aereo-01", titulo: "Sistema solar residencial — vista aérea", categoria: "Solar residencial", orientacion: "h" },
];

// Selección para la Home (bloque "Obra reciente").
export const obraDestacada = [
  "solar-industrial-aereo-01",
  "cargador-ve-02",
  "bess-racks-01",
  "solar-residencial-aereo-05",
  "mantenimiento-limpieza-01",
].map((id) => obra.find((f) => f.id === id)!);
