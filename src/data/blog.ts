export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string[];
  date: string; // ISO, usada para ordenar
  dateDisplay: string;
  author: string;
  coverImage: string;
  readTime: string;
  content: BlogBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "lo-barato-sale-caro-instalaciones-sin-retie",
    title: "Lo barato sale caro: por qué una instalación eléctrica sin RETIE es un riesgo real de incendio",
    excerpt:
      "Los incendios por fallas eléctricas siguen entre las principales causas de siniestros en vivienda en Colombia. Qué dicen los datos, qué exige el RETIE y cómo evitarlo.",
    category: ["Ingeniería Eléctrica", "Energía Solar", "Seguridad"],
    date: "2026-08-04",
    dateDisplay: "4 de agosto, 2026",
    author: "Equipo DINASTEL SAS",
    coverImage: "/assets/brochure/electrico-01.webp",
    readTime: "5 min de lectura",
    content: [
      {
        type: "p",
        text: "Es una frase que se repite tanto que ya casi no la escuchamos: \"lo barato sale caro\". Pero cuando se trata de instalaciones eléctricas —o de un sistema solar mal ejecutado—, no es solo una frase. Es una de las causas más frecuentes de incendios estructurales en Colombia, y en la mayoría de los casos, es prevenible.",
      },
      {
        type: "p",
        text: "Elegir al instalador más económico, saltarse la legalización o dejar pasar el mantenimiento parece ahorrar dinero hoy. El problema es que ese ahorro se paga después, y a veces se paga con algo mucho más costoso que una factura.",
      },
      { type: "h2", text: "Lo que dicen los datos en Colombia" },
      {
        type: "ul",
        items: [
          "Entre 2020 y 2024, Bomberos Bogotá atendió 3.181 casos por riesgo eléctrico en la ciudad. El deterioro y envejecimiento de las instalaciones, sumado a la falta de revisiones periódicas, son de las causas más frecuentes detrás de estas emergencias.",
          "Un estudio de 2025 de ANRACI (Asociación Nacional de Protección Contra Incendios), construido con datos de once ciudades que representan más del 55% de la población urbana del país, estima que en Colombia ocurren cerca de 6.440 incendios estructurales al año —unos 17,6 incendios diarios en zonas urbanas—. La mayoría se concentra en vivienda, y las fallas eléctricas aparecen de forma recurrente entre las causas identificadas.",
          "El propio cuerpo de Bomberos Bogotá alinea sus protocolos de atención a riesgo eléctrico con el RETIE y con normas internacionales como la NFPA 70E, justamente porque el riesgo eléctrico mal instalado es una de las emergencias más recurrentes que atienden.",
        ],
      },
      {
        type: "p",
        text: "La conclusión no es alarmista, es simple: la seguridad eléctrica de una vivienda o una empresa no es un detalle estético ni un trámite de papeleo. Es lo que separa una instalación que dura años de una que termina siendo noticia.",
      },
      { type: "h2", text: "¿Qué es el RETIE y por qué debería importarte?" },
      {
        type: "p",
        text: "El RETIE (Reglamento Técnico de Instalaciones Eléctricas) es la norma que exige el Estado colombiano para que cualquier instalación eléctrica —residencial, comercial, industrial o solar— cumpla condiciones mínimas de seguridad: calibre de cable adecuado, protecciones térmicas y diferenciales, puesta a tierra, canalización correcta, y certificación de que todo eso quedó bien hecho.",
      },
      {
        type: "p",
        text: "Una instalación sin legalizar RETIE no solo es un riesgo de incendio. Tampoco puede conectarse formalmente a la red, no siempre queda cubierta por el seguro en caso de siniestro, y en sistemas solares es, además, un requisito para la conexión on-grid con el operador de red.",
      },
      { type: "h2", text: "10 malas prácticas detrás de la mayoría de incendios eléctricos" },
      {
        type: "ol",
        items: [
          "Sobrecarga de circuitos. La causa más frecuente: más carga de la que el circuito fue diseñado para soportar.",
          "Instalaciones sin legalización RETIE. Cableado hecho \"a ojo\", sin cálculo de carga ni certificación.",
          "Cables subdimensionados o en mal estado. Un calibre insuficiente se calienta y puede generar cortocircuito.",
          "Conexiones flojas o mal ejecutadas. Generan puntos calientes y chispas que muchas veces pasan inadvertidos.",
          "Falta de protecciones térmicas y diferenciales. Tableros sin breakers adecuados no cortan a tiempo ante una falla.",
          "Cables expuestos o sin canalización, especialmente en zonas húmedas o de alto tránsito.",
          "\"Arreglos temporales\" que se vuelven permanentes. El parche de emergencia que nadie volvió a revisar.",
          "Equipos de alto consumo conectados sin dimensionar el circuito (aires acondicionados, cargadores, maquinaria).",
          "Sistemas solares instalados sin interventoría ni protecciones DC certificadas. Un panel o un inversor mal instalado añade un riesgo eléctrico adicional al techo de tu casa o empresa.",
          "Cero mantenimiento preventivo. Nadie revisa tableros, conexiones ni protecciones hasta que algo ya falló.",
        ],
      },
      {
        type: "quote",
        text: "¿Te deja tranquilo que la instalación eléctrica o el sistema solar de tu casa o tu empresa se haya hecho sin certificación?",
      },
      { type: "h2", text: "Cómo lo resolvemos en DINASTEL SAS" },
      {
        type: "p",
        text: "En DINASTEL trabajamos con un mismo flujo para cualquier proyecto, eléctrico o solar: diagnóstico, diseño integrado, ejecución y operación y soporte. Eso significa que la legalización RETIE y la interventoría no son un paso aparte que el cliente tiene que coordinar por su cuenta: van incluidas desde el diseño hasta la puesta en marcha.",
      },
      {
        type: "ul",
        items: [
          "Ingeniería eléctrica y de redes: diseño, instalación y subestaciones de baja y media tensión, con interventoría, legalización y eficiencia energética incluidas.",
          "Sistemas solares llave en mano: diseño, legalización e instalación on-grid o híbrida, con interventoría y puesta en marcha incluidas — sin trámites sueltos que coordinar por tu cuenta.",
          "Mantenimiento: preventivo, correctivo y monitoreo remoto, para que ninguna instalación quede sin revisión una vez entregada.",
        ],
      },
      {
        type: "p",
        text: "¿Quieres saber si tu instalación eléctrica o tu sistema solar cumple con RETIE? Escríbenos y lo revisamos contigo.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
