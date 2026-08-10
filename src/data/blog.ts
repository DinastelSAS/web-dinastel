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
  {
    slug: "financiar-sistema-solar-colombia-incentivos-credito-verde",
    title: "Solar sin pagarlo todo de una: incentivos, crédito verde y venta de excedentes en Colombia",
    excerpt:
      "El costo inicial ya no es la barrera que era. Entre la deducción de renta de la Ley 1715, las líneas de crédito verde y la venta de excedentes a la red, hoy un sistema solar en Colombia se puede financiar de forma que empiece a pagarse solo.",
    category: ["Energía Solar", "Financiación", "Incentivos"],
    date: "2026-08-09",
    dateDisplay: "9 de agosto, 2026",
    author: "Equipo DINASTEL SAS",
    coverImage: "/assets/brochure/solar-01.webp",
    readTime: "6 min de lectura",
    content: [
      {
        type: "p",
        text: "Cuando alguien piensa en instalar paneles solares, casi siempre la primera pregunta no es técnica: es \"¿y eso cuánto cuesta de una?\". Es una pregunta razonable. Durante años, el costo inicial fue la barrera que frenaba a muchas familias y empresas que sí querían dar el paso.",
      },
      {
        type: "p",
        text: "La buena noticia es que en Colombia esa barrera hoy se puede desmontar por tres vías que se combinan entre sí: los incentivos tributarios de la Ley 1715, las líneas de crédito verde de la banca, y la posibilidad de vender a la red la energía que te sobra. Bien estructuradas, hacen que un sistema solar deje de ser un gasto de una sola vez y se convierta en una inversión que se paga con el mismo dinero que hoy se va en la factura de luz.",
      },
      { type: "h2", text: "1. Los incentivos que la mayoría no aprovecha (Ley 1715)" },
      {
        type: "p",
        text: "La Ley 1715 de 2014, modificada por la Ley 2099 de 2021, es el marco que promueve las energías renovables no convencionales en Colombia. Detrás de ese nombre técnico hay beneficios muy concretos para quien invierte en un sistema solar, y siguen vigentes: los tratamientos fiscales preferenciales aplican por un periodo de 30 años contados desde el 1 de julio de 2021.",
      },
      {
        type: "ul",
        items: [
          "Deducción especial de renta: quien invierte en generación con fuentes renovables puede deducir de su impuesto de renta el 50% del valor de la inversión, aplicándolo en los años siguientes a la puesta en marcha, sin que la deducción de cada año supere el 50% de la renta líquida del contribuyente.",
          "Exclusión de IVA: los equipos, elementos y servicios destinados a proyectos de energías renovables están excluidos de IVA, lo que reduce directamente el valor de compra del sistema.",
          "Exención de gravamen arancelario: la maquinaria y equipos importados para el proyecto quedan exentos del arancel de importación.",
          "Depreciación acelerada: los activos del sistema pueden depreciarse de forma acelerada, hasta una tasa anual del 33,33%, lo que mejora el flujo de caja de empresas y personas que declaran renta.",
        ],
      },
      {
        type: "p",
        text: "En la práctica, estos incentivos pueden recortar de forma significativa el costo neto de un proyecto para quien declara renta. El detalle importante —y donde muchos se quedan por fuera— es que para acceder a ellos el proyecto debe estar bien estructurado y certificado desde el diseño: sin la documentación técnica y la legalización en regla, el beneficio no se puede reclamar.",
      },
      { type: "h2", text: "2. Crédito verde: financiar hoy, pagar con el ahorro" },
      {
        type: "p",
        text: "El segundo componente es el financiamiento. La banca colombiana abrió líneas de crédito específicas para energía solar y eficiencia energética, las llamadas \"líneas verdes\", pensadas justamente para que no tengas que poner todo el capital de entrada.",
      },
      {
        type: "ul",
        items: [
          "Bancóldex reactivó su línea de crédito para energía solar (en alianza con FONDES), un mecanismo de redescuento a través de bancos aliados para financiar la estructuración e implementación de proyectos fotovoltaicos. Un detalle a tener en cuenta: en esa línea, el monto destinado a obras civiles no puede superar el 15% de los recursos solicitados.",
          "Otras entidades como Findeter, BBVA, Davivienda (con esquemas de leasing) y Bancolombia con su Línea Verde también ofrecen productos para financiar energías renovables.",
          "Según reportes del sector, las líneas de crédito verde privadas se han venido ofreciendo con tasas del orden del 8% al 10% efectivo anual, aunque las condiciones dependen de cada entidad, del perfil del cliente y del momento — siempre conviene cotizar con tu banco.",
        ],
      },
      {
        type: "quote",
        text: "La idea de fondo es sencilla: si la cuota mensual del crédito se acerca a lo que hoy pagas de energía, empiezas a cambiar un gasto que no te deja nada por una inversión que al final del plazo queda tuya.",
      },
      {
        type: "p",
        text: "Combinar el crédito verde con los incentivos de la Ley 1715 es lo que hace la diferencia: financias la inversión con la línea del banco y, al mismo tiempo, recuperas parte de ese valor vía deducción de renta y exclusión de IVA.",
      },
      { type: "h2", text: "3. La energía que te sobra también cuenta: venta de excedentes" },
      {
        type: "p",
        text: "La tercera vía es la que más sorprende a quien apenas está conociendo el tema. En Colombia, un sistema solar conectado a la red (on-grid) no solo te ahorra la energía que consumes: la energía que produces y no usas se puede entregar a la red y descontarla de tu factura.",
      },
      {
        type: "p",
        text: "Esto lo regula la Resolución CREG 174 de 2021, que ordena las actividades de autogeneración a pequeña escala y generación distribuida en el Sistema Interconectado Nacional. Sus puntos clave para un usuario residencial o comercial:",
      },
      {
        type: "ul",
        items: [
          "Se considera autogeneración a pequeña escala hasta una capacidad instalada de 1 MW, un rango que cubre de sobra a viviendas, comercios y buena parte de la pequeña y mediana industria.",
          "Con fuentes renovables, los excedentes que entregas a la red se reconocen mediante un esquema de medición bidireccional (net metering), es decir, con un medidor que cuenta lo que consumes y lo que entregas, generando créditos de energía a tu favor.",
          "La resolución simplificó los procedimientos de conexión y la entrega de excedentes, precisamente para que instalar y conectar un sistema pequeño no sea un trámite eterno.",
        ],
      },
      {
        type: "p",
        text: "El punto fino aquí es la conexión: para entregar excedentes hay que solicitar la conexión ante el operador de red y cumplir los requisitos técnicos, incluida la legalización RETIE del sistema. Un proyecto mal legalizado no solo pierde este beneficio: puede quedarse sin poder conectarse formalmente.",
      },
      { type: "h2", text: "El hilo que conecta las tres vías: hacerlo bien desde el diseño" },
      {
        type: "p",
        text: "Los incentivos, el crédito y la venta de excedentes tienen algo en común: los tres dependen de que el proyecto esté técnicamente bien hecho y correctamente legalizado. Un sistema instalado \"a la ligera\" puede terminar por fuera de la deducción de renta, sin acceso a la línea de crédito y sin poder conectarse a la red para vender excedentes. Es decir, pierde justo lo que lo hacía rentable.",
      },
      {
        type: "p",
        text: "Por eso en DINASTEL SAS trabajamos los proyectos solares llave en mano con un mismo flujo integral: diagnóstico, diseño, legalización, instalación, interventoría y puesta en marcha. No dejamos la legalización RETIE ni el trámite de conexión como un paso suelto que el cliente tenga que resolver por su cuenta: van incluidos, porque son la puerta de entrada a los tres beneficios de este artículo.",
      },
      {
        type: "ul",
        items: [
          "Sistemas solares llave en mano: diseño, legalización e instalación on-grid o híbrida, con la documentación técnica lista para tramitar incentivos y conexión de excedentes.",
          "Ingeniería eléctrica y de redes: diseño e instalación con RETIE, para que el sistema solar se integre sobre una instalación segura y en regla.",
          "Mantenimiento: preventivo, correctivo y monitoreo remoto, para que el sistema siga produciendo —y ahorrando— año tras año.",
        ],
      },
      {
        type: "p",
        text: "Aclaración importante: este artículo es orientativo. Las condiciones de cada crédito y la forma exacta de aplicar los beneficios tributarios dependen de tu situación particular y conviene validarlas con tu entidad financiera y tu contador. Lo que sí podemos garantizar desde la ingeniería es que tu proyecto quede bien diseñado y legalizado para que puedas aprovecharlos.",
      },
      {
        type: "p",
        text: "¿Quieres una cotización de tu sistema solar con el panorama claro de incentivos y opciones de financiación para tu caso? Escríbenos y lo estructuramos contigo.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
