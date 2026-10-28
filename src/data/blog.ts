export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string };

export interface BlogFaqItem {
  q: string;
  a: string;
}

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
  // Preguntas frecuentes al final del artículo: mismas preguntas que la gente le
  // haría a un asistente de IA sobre el tema. Se renderizan en la página y también
  // se emiten como JSON-LD FAQPage para mejorar la visibilidad en buscadores de IA.
  faq?: BlogFaqItem[];
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
      { type: "h2", text: "¿Qué es el RETIE y por qué debería importarle?" },
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
          "Sistemas solares instalados sin interventoría ni protecciones DC certificadas. Un panel o un inversor mal instalado añade un riesgo eléctrico adicional al techo de su casa o empresa.",
          "Cero mantenimiento preventivo. Nadie revisa tableros, conexiones ni protecciones hasta que algo ya falló.",
        ],
      },
      {
        type: "quote",
        text: "¿Lo deja tranquilo que la instalación eléctrica o el sistema solar de su casa o su empresa se haya hecho sin certificación?",
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
          "Sistemas solares llave en mano: diseño, legalización e instalación on-grid o híbrida, con interventoría y puesta en marcha incluidas — sin trámites sueltos que coordinar por su cuenta.",
          "Mantenimiento: preventivo, correctivo y monitoreo remoto, para que ninguna instalación quede sin revisión una vez entregada.",
        ],
      },
      {
        type: "p",
        text: "¿Quiere saber si su instalación eléctrica o su sistema solar cumple con RETIE? Escríbanos y lo revisamos con usted.",
      },
    ],
    faq: [
      {
        q: "¿Qué es el RETIE y es obligatorio en Colombia?",
        a: "Es el Reglamento Técnico de Instalaciones Eléctricas, exigido por el Estado colombiano para toda instalación eléctrica residencial, comercial, industrial o solar. Sin la certificación RETIE, una instalación no puede conectarse formalmente a la red y puede quedar sin cobertura de seguro ante un siniestro.",
      },
      {
        q: "¿Las instalaciones eléctricas sin RETIE realmente causan incendios?",
        a: "Sí. Entre 2020 y 2024 Bomberos Bogotá atendió 3.181 casos por riesgo eléctrico, y un estudio de ANRACI (2025) estima cerca de 6.440 incendios estructurales al año en Colombia, con fallas eléctricas entre las causas más recurrentes.",
      },
      {
        q: "¿Un sistema solar también necesita legalización RETIE?",
        a: "Sí. Además de ser un requisito de seguridad, es obligatorio para conectar el sistema on-grid con el operador de red — sin RETIE, el sistema no puede conectarse formalmente.",
      },
      {
        q: "¿Cuáles son las fallas eléctricas más comunes que causan incendios?",
        a: "Sobrecarga de circuitos, cableado sin legalización, cables subdimensionados, conexiones flojas, falta de protecciones térmicas y diferenciales, y sistemas solares instalados sin interventoría ni protecciones DC certificadas.",
      },
      {
        q: "¿Cómo sé si mi instalación eléctrica está en regla?",
        a: "Un ingeniero certificado debe revisar el calibre de cable, las protecciones, la puesta a tierra y emitir el certificado RETIE correspondiente. En DINASTEL SAS hacemos este diagnóstico como parte de nuestro flujo de trabajo.",
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
        text: "La buena noticia es que en Colombia esa barrera hoy se puede desmontar por tres vías que se combinan entre sí: los incentivos tributarios de la Ley 1715, las líneas de crédito verde de la banca, y la posibilidad de vender a la red la energía que le sobra. Bien estructuradas, hacen que un sistema solar deje de ser un gasto de una sola vez y se convierta en una inversión que se paga con el mismo dinero que hoy se va en la factura de luz.",
      },
      { type: "h2", text: "1. Los incentivos que la mayoría no aprovecha (Ley 1715)" },
      {
        type: "p",
        text: "La Ley 1715 de 2014, modificada por la Ley 2099 de 2021, es el marco que promueve las energías renovables no convencionales en Colombia. Detrás de ese nombre técnico hay beneficios muy concretos para quien invierte en un sistema solar, y siguen vigentes: los tratamientos fiscales preferenciales aplican por un periodo de 30 años contados desde el 1 de julio de 2021.",
      },
      {
        type: "ul",
        items: [
          "Deducción especial de renta: quien invierte en generación con fuentes renovables puede deducir de su impuesto de renta el 50% del valor de la inversión, aplicándolo hasta por 15 años contados desde el año gravable siguiente a la puesta en marcha, sin que la deducción de cada año supere el 50% de la renta líquida del contribuyente.",
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
        text: "El segundo componente es el financiamiento. La banca colombiana abrió líneas de crédito específicas para energía solar y eficiencia energética, las llamadas \"líneas verdes\", pensadas justamente para que no tenga que poner todo el capital de entrada.",
      },
      {
        type: "ul",
        items: [
          "Bancóldex reactivó su línea de crédito para energía solar (en alianza con FONDES), un mecanismo de redescuento a través de bancos aliados para financiar la estructuración e implementación de proyectos fotovoltaicos. Un detalle a tener en cuenta: en esa línea, el monto destinado a obras civiles no puede superar el 15% de los recursos solicitados.",
          "Otras entidades como Findeter, BBVA, Davivienda (con esquemas de leasing) y Bancolombia con su Línea Verde también ofrecen productos para financiar energías renovables.",
          "Según reportes del sector, las líneas de crédito verde privadas se han venido ofreciendo con tasas del orden del 8% al 10% efectivo anual, aunque las condiciones dependen de cada entidad, del perfil del cliente y del momento — siempre conviene cotizar con su banco.",
        ],
      },
      {
        type: "quote",
        text: "La idea de fondo es sencilla: si la cuota mensual del crédito se acerca a lo que hoy paga de energía, empieza a cambiar un gasto que no le deja nada por una inversión que al final del plazo queda suya.",
      },
      {
        type: "p",
        text: "Combinar el crédito verde con los incentivos de la Ley 1715 es lo que hace la diferencia: financia la inversión con la línea del banco y, al mismo tiempo, recupera parte de ese valor vía deducción de renta y exclusión de IVA.",
      },
      { type: "h2", text: "3. La energía que le sobra también cuenta: venta de excedentes" },
      {
        type: "p",
        text: "La tercera vía es la que más sorprende a quien apenas está conociendo el tema. En Colombia, un sistema solar conectado a la red (on-grid) no solo le ahorra la energía que consume: la energía que produce y no usa se puede entregar a la red y descontarla de su factura.",
      },
      {
        type: "p",
        text: "Esto lo regula la Resolución CREG 174 de 2021, que ordena las actividades de autogeneración a pequeña escala y generación distribuida en el Sistema Interconectado Nacional. Sus puntos clave para un usuario residencial o comercial:",
      },
      {
        type: "ul",
        items: [
          "Se considera autogeneración a pequeña escala hasta una capacidad instalada de 1 MW, un rango que cubre de sobra a viviendas, comercios y buena parte de la pequeña y mediana industria.",
          "Con fuentes renovables, los excedentes que entrega a la red se reconocen mediante un esquema de medición bidireccional (net metering), es decir, con un medidor que cuenta lo que consume y lo que entrega, generando créditos de energía a su favor.",
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
        text: "Aclaración importante: este artículo es orientativo. Las condiciones de cada crédito y la forma exacta de aplicar los beneficios tributarios dependen de su situación particular y conviene validarlas con su entidad financiera y su contador. Lo que sí podemos garantizar desde la ingeniería es que su proyecto quede bien diseñado y legalizado para que pueda aprovecharlos.",
      },
      {
        type: "p",
        text: "¿Quiere una cotización de su sistema solar con el panorama claro de incentivos y opciones de financiación para su caso? Escríbanos y lo estructuramos con usted.",
      },
    ],
    faq: [
      {
        q: "¿Qué beneficios tributarios tiene instalar energía solar en Colombia?",
        a: "La Ley 1715 (modificada por la Ley 2099 de 2021) permite deducir del impuesto de renta el 50% del valor de la inversión, hasta por 15 años, además de exclusión de IVA en equipos, exención de arancel de importación y depreciación acelerada hasta 33,33% anual. Los beneficios están vigentes por 30 años desde julio de 2021.",
      },
      {
        q: "¿Puedo financiar un sistema solar con crédito en Colombia?",
        a: "Sí. Hay líneas de \"crédito verde\" específicas para energía solar, como la de Bancóldex (en alianza con FONDES) o la Línea Verde de Bancolombia, con tasas reportadas del sector en el rango de 8% a 10% efectivo anual.",
      },
      {
        q: "¿Puedo vender la energía solar que no consumo?",
        a: "Sí. La Resolución CREG 174 de 2021 regula la autogeneración a pequeña escala (hasta 1 MW) y permite un esquema de medición bidireccional (net metering) que genera créditos de energía por los excedentes que entrega a la red.",
      },
      {
        q: "¿Necesito legalizar mi sistema para vender excedentes de energía?",
        a: "Sí. Para conectar y entregar excedentes a la red hay que solicitar la conexión ante el operador de red y cumplir los requisitos técnicos, incluida la legalización RETIE del sistema.",
      },
      {
        q: "¿En cuánto tiempo se paga un sistema solar en Colombia?",
        a: "Depende del proyecto, pero combinando los incentivos tributarios de la Ley 1715, el crédito verde y la venta de excedentes, muchos sistemas empiezan a pagarse con el mismo dinero que antes se iba en la factura de energía.",
      },
    ],
  },
  {
    slug: "energia-solar-agricultura-colombia-bombeo-riego-fotovoltaico",
    title: "Sol para el campo: cómo la energía solar reduce los costos de riego y da autonomía a la agricultura colombiana",
    excerpt:
      "El diésel para bombear agua es cada vez más caro y en zonas rurales la red no siempre llega. La energía solar fotovoltaica se está volviendo la forma más rentable de regar, refrigerar y producir en el campo colombiano —y de resistir mejor la próxima sequía.",
    category: ["Energía Solar", "Agricultura", "Sostenibilidad"],
    date: "2026-08-11",
    dateDisplay: "11 de agosto, 2026",
    author: "Equipo DINASTEL SAS",
    coverImage: "/assets/brochure/solar-04.webp",
    readTime: "6 min de lectura",
    content: [
      {
        type: "p",
        text: "En una finca, la energía casi nunca se ve, pero se paga. Está en la bomba que sube el agua del pozo o del río hasta el cultivo, en el sistema de riego, en el cuarto frío que conserva la cosecha, en la sala de ordeño. Y cuando esa energía depende de un generador diésel —o de una red que en muchas veredas ni siquiera llega—, cada litro de agua bombeado y cada hora de refrigeración cuestan cada vez más.",
      },
      {
        type: "p",
        text: "La buena noticia es que Colombia está sentada sobre uno de los mejores recursos solares del planeta, y hoy la tecnología para aprovecharlo en el campo ya es madura y rentable. Un sistema solar bien diseñado puede reemplazar buena parte de ese gasto, dar autonomía frente a los cortes y —como se vio en la última sequía— ayudar a que una finca siga produciendo cuando el clima se pone difícil.",
      },
      { type: "h2", text: "El campo pesa mucho, y su energía cuesta cada vez más" },
      {
        type: "p",
        text: "El sector agropecuario no es un actor menor en la economía colombiana. En 2024 aportó cerca del 9,3% del PIB, creció 8,1% frente al año anterior y ocupó en promedio a 3,28 millones de personas —el 14,2% de los trabajadores del país—, siendo el segundo mayor generador de empleo. Detrás de esa producción hay una factura energética que rara vez se calcula bien.",
      },
      {
        type: "p",
        text: "El problema es que buena parte de esa energía se produce quemando combustible. El precio del ACPM (diésel) subió de nuevo en 2026 y ronda un promedio nacional cercano a los $11.282 por galón; en zonas rurales de difícil acceso, sumando transporte, ese valor puede ser bastante más alto. Cada temporada de bombeo se convierte así en un gasto que crece solo, sin que el productor gane nada a cambio.",
      },
      { type: "h2", text: "Donde la red no llega: la mitad del territorio" },
      {
        type: "p",
        text: "A esto se suma un dato que sorprende a quien no vive en el campo: las llamadas Zonas No Interconectadas (ZNI) —los territorios que no están conectados al Sistema Interconectado Nacional— representan alrededor del 52% del territorio colombiano. Son extensas regiones de la Orinoquía, la Amazonía, el Pacífico y buena parte de zonas rurales dispersas donde la energía no llega por cable.",
      },
      {
        type: "p",
        text: "¿Y cómo se produce esa energía hoy? En su gran mayoría, con plantas diésel. Del total de capacidad instalada identificada en las ZNI, cerca del 78% proviene de generación diésel y apenas un 22% de fuentes renovables no convencionales. Es decir: donde más caro sale mover energía, es donde más se depende del combustible. Ahí es justamente donde una solución solar —aislada o híbrida— cambia por completo la ecuación.",
      },
      { type: "h2", text: "Un recurso solar de primer nivel" },
      {
        type: "p",
        text: "Colombia, por su ubicación ecuatorial, recibe radiación solar de forma estable durante todo el año, sin las variaciones extremas de estación que sufren los países templados. Según el Atlas de Radiación Solar de Colombia (UPME e IDEAM), el promedio del país ronda los 4,5 kWh/m² al día, y regiones como La Guajira alcanzan entre 5,0 y 6,0 kWh/m² diarios —niveles que superan a varios países europeos con mercados solares ya consolidados.",
      },
      {
        type: "p",
        text: "Traducido al campo: en gran parte del territorio colombiano hay sol de sobra para bombear agua, refrigerar producto y alimentar sistemas de riego sin depender del galón de diésel ni de una red que no siempre está.",
      },
      { type: "h2", text: "Bombeo solar: el ejemplo más claro de retorno" },
      {
        type: "p",
        text: "El caso más contundente es el bombeo solar. Un sistema fotovoltaico de bombeo mueve agua directamente con la energía del sol —para riego, abrevaderos o consumo— sin generador, sin combustible y, en muchos diseños, sin baterías: se bombea cuando hay sol y se almacena el agua, no la electricidad.",
      },
      {
        type: "ul",
        items: [
          "Elimina o reduce drásticamente el gasto recurrente en diésel o en energía de red para bombeo.",
          "Baja el mantenimiento frente a un motor de combustión, que exige combustible, aceite y repuestos constantes.",
          "Ofrece autonomía real en fincas alejadas de la red, donde llevar una acometida eléctrica es inviable o costosísimo.",
          "Según reportes del sector, en Colombia el retorno de la inversión en bombeo solar suele ubicarse en un rango de 2 a 4 años, gracias justamente a lo que se deja de gastar en combustible o electricidad.",
        ],
      },
      {
        type: "quote",
        text: "El sol no manda factura. Una vez instalado y bien mantenido, el sistema bombea con un costo marginal cercano a cero: el productor cambia un gasto que crecía cada año por un activo que trabaja para la finca.",
      },
      { type: "h2", text: "La lección de la última sequía" },
      {
        type: "p",
        text: "Entre finales de 2023 y buena parte de 2024, el fenómeno de El Niño dejó a Colombia con una de las sequías más duras de las últimas décadas. Los embalses cayeron a niveles mínimos del siglo, Bogotá entró en racionamiento de agua por zonas desde abril de 2024 y cerca de una cuarta parte de los municipios del país reportó algún tipo de racionamiento, con decenas de ellos con cortes de suministro.",
      },
      {
        type: "p",
        text: "Para el agro, episodios así son doblemente golpeadores: hay menos agua disponible y, al mismo tiempo, más necesidad de bombear y regar. Una finca que depende de un solo generador diésel o de una red inestable queda en la peor posición justo cuando más energía necesita. Diversificar la fuente —sumando generación solar propia— es, cada vez más, una decisión de resiliencia, no solo de ahorro.",
      },
      { type: "h2", text: "Del panel al cultivo: cómo lo abordamos en DINASTEL" },
      {
        type: "p",
        text: "Un sistema solar agrícola no es solo \"poner paneles\". Es dimensionar bien la bomba y el caudal, diseñar la instalación eléctrica con las protecciones correctas, resolver la estructura y la obra civil que lo soporta, y dejarlo monitoreado para que siga produciendo temporada tras temporada. Ahí es donde la ingeniería marca la diferencia entre un sistema que rinde y uno que se vuelve un problema.",
      },
      {
        type: "ul",
        items: [
          "Sistemas solares llave en mano (on-grid o híbridos): diagnóstico del consumo real de la finca, diseño, legalización RETIE, instalación y puesta en marcha, para bombeo, riego, refrigeración o consumo general.",
          "Ingeniería eléctrica y de redes con RETIE: la base segura sobre la que se conecta cualquier sistema solar, con protecciones y puesta a tierra bien hechas.",
          "Telecomunicaciones y automatización: control y riego automatizado, sensores y telemetría para operar el bombeo según la humedad del suelo o los horarios óptimos de sol.",
          "Obras civiles: cimentación, estructuras de soporte y adecuaciones necesarias en campo, hechas para durar a la intemperie.",
          "Mantenimiento preventivo, correctivo y monitoreo remoto: para que un sistema en una finca alejada no dependa de que alguien suba a revisarlo a ver si sigue funcionando.",
        ],
      },
      {
        type: "p",
        text: "La combinación importa: un buen sistema de bombeo solar apoyado en riego automatizado no solo baja la factura energética, también usa mejor el agua —un recurso que, como enseñó la última sequía, no siempre está garantizado.",
      },
      {
        type: "p",
        text: "Aclaración: las cifras de ahorro y los tiempos de retorno dependen de cada finca —caudal requerido, profundidad del pozo, horas de sol de la zona y precio actual del combustible o de la energía—. Por eso el primer paso siempre es un diagnóstico técnico serio, no una promesa genérica.",
      },
      {
        type: "p",
        text: "¿Tiene una finca o un proyecto agrícola donde el diésel o la falta de red le están costando caro? Escríbanos y evaluamos con usted si el bombeo solar y un sistema fotovoltaico llave en mano tienen sentido para su caso.",
      },
    ],
    faq: [
      {
        q: "¿Sirve la energía solar para bombear agua en una finca sin acceso a la red eléctrica?",
        a: "Sí. El bombeo solar fotovoltaico mueve agua directamente con energía del sol, sin generador ni combustible, ideal para las Zonas No Interconectadas (ZNI), que cubren cerca del 52% del territorio colombiano.",
      },
      {
        q: "¿Cuánto se demora en pagarse un sistema de bombeo solar?",
        a: "Según reportes del sector, el retorno de la inversión en bombeo solar en Colombia suele ubicarse entre 2 y 4 años, gracias al ahorro en diésel o energía de red que reemplaza.",
      },
      {
        q: "¿Qué tan buena es la radiación solar en el campo colombiano?",
        a: "Muy buena y estable durante todo el año: el promedio nacional ronda los 4,5 kWh/m² al día según el Atlas de Radiación Solar (UPME-IDEAM), y zonas como La Guajira llegan a 5,0-6,0 kWh/m² diarios.",
      },
      {
        q: "¿La energía solar ayuda a una finca a resistir una sequía?",
        a: "Sí, de forma indirecta: diversificar la fuente de energía (solar propia en vez de depender solo de diésel o de una red inestable) da resiliencia justo cuando más se necesita bombear agua y regar, como se vio en la sequía de El Niño de 2023-2024.",
      },
      {
        q: "¿Qué incluye un sistema solar agrícola además de los paneles?",
        a: "Dimensionamiento de la bomba y el caudal, diseño eléctrico con protecciones, obra civil de soporte, automatización y telemetría de riego, y mantenimiento con monitoreo remoto — no es solo \"poner paneles\".",
      },
    ],
  },
  {
    slug: "monitoreo-automatizacion-rendimiento-sistema-solar-electrico-colombia",
    title: "Lo que no se mide, se paga: monitoreo y automatización para que su sistema solar (y su instalación eléctrica) rinda de verdad",
    excerpt:
      "Colombia superó los 3 GW solares y la autogeneración se disparó, pero muchos sistemas producen menos de lo que deberían sin que nadie lo note. El monitoreo remoto y la automatización son lo que convierte una instalación en una inversión que se controla con datos, no con suposiciones.",
    category: ["Automatización", "Energía Solar", "Mantenimiento"],
    date: "2026-08-17",
    dateDisplay: "17 de agosto, 2026",
    author: "Equipo DINASTEL SAS",
    coverImage: "/assets/brochure/telecom-racks-01.webp",
    readTime: "6 min de lectura",
    content: [
      {
        type: "p",
        text: "Hay una idea que se repite en cada conversación seria sobre transición energética: las buenas decisiones se toman con información, no con corazonadas. Suena obvio, pero es justo donde muchos sistemas solares y eléctricos fallan. Se instala el equipo, se enciende, se firma la entrega… y a partir de ahí nadie vuelve a mirar cuánto está produciendo realmente ni si algo dejó de funcionar. El problema no aparece en una explosión: aparece en la factura, meses después, cuando el ahorro prometido nunca llegó.",
      },
      {
        type: "p",
        text: "En Colombia esto ya no es un detalle menor. La energía solar dejó de ser un piloto para volverse infraestructura del sistema eléctrico, y eso significa miles de instalaciones nuevas cada año que necesitan algo más que estar \"encendidas\": necesitan estar vigiladas.",
      },
      { type: "h2", text: "El boom solar colombiano ya no es una promesa" },
      {
        type: "p",
        text: "Los números lo confirman. A comienzos de 2026 el país superó los 3 GW de capacidad solar fotovoltaica instalada según la UPME, y la autogeneración distribuida —los techos residenciales, comerciales e industriales— pasó de representar apenas el 2% de la capacidad instalada en 2022 al 13% al cierre de 2025, con 925 MW que entraron solo en 2025. El crecimiento reciente no lo están jalonando las grandes plantas, sino los tejados.",
      },
      {
        type: "p",
        text: "Ese mismo año dejó otra lección: entre febrero y marzo de 2026 los precios de la energía en bolsa subieron alrededor del 80% según XM, por el manejo preventivo de embalses ante el riesgo de El Niño. Con una matriz que sigue dependiendo en cerca de dos tercios de la generación hídrica, cada kilovatio que su propio sistema produce bien es un kilovatio que no le compra a una red volátil. Por eso importa tanto que produzca bien, no solo que produzca.",
      },
      { type: "h2", text: "El problema silencioso: producir menos de lo que se debería" },
      {
        type: "p",
        text: "Un panel solar rara vez se \"daña\" de golpe. Lo que ocurre casi siempre es una pérdida lenta e invisible de rendimiento. La capacidad efectiva de un sistema fotovoltaico en Colombia suele ubicarse entre el 75% y el 85% de la capacidad instalada una vez que se descuentan temperatura, sombras y degradación. Ese ya es el punto de partida realista. El problema es todo lo que puede restar por debajo de eso sin avisar:",
      },
      {
        type: "ul",
        items: [
          "Suciedad acumulada (soiling): en zonas urbanas las pérdidas suelen ser moderadas (del orden del 2% al 5%), pero la formación de películas orgánicas —polvo mezclado con humedad, moho o algas— puede llevar la caída de producción al rango del 13% al 15%, y en ambientes muy adversos aún más. Es un costo que se paga en silencio cada mes.",
          "Fallas de inversor: es el componente que más falla en una instalación fotovoltaica. Si un inversor se apaga o entra en modo de error un lunes, sin monitoreo nadie se entera hasta que llega la factura del mes.",
          "Conexiones que se degradan y generan puntos calientes, strings desbalanceados o módulos que dejaron de aportar.",
          "Sombras nuevas que antes no existían: un árbol que creció, una construcción vecina, una antena.",
        ],
      },
      {
        type: "p",
        text: "La herramienta que el sector usa para detectar todo esto se llama Performance Ratio (PR): compara lo que el sistema realmente produjo contra lo que debería haber producido dadas las condiciones de sol. Cuando el PR cae, algo está pasando. Sin monitoreo, esa caída es invisible; con monitoreo, es una alerta.",
      },
      { type: "h2", text: "Qué es el monitoreo remoto y por qué cambia las reglas" },
      {
        type: "p",
        text: "Monitorear un sistema no es \"mirar una app de vez en cuando\". Es instrumentar la instalación con sensores, medidores inteligentes y software que reportan en tiempo real cuánto se genera, cuánto se consume y cómo se comporta cada parte. En plantas más grandes esto se apoya en sensores IoT y sistemas SCADA; en instalaciones residenciales y comerciales, en medidores inteligentes y plataformas en la nube. El objetivo es el mismo: convertir la instalación en algo que se lee, no que se adivina.",
      },
      {
        type: "p",
        text: "Un buen esquema de monitoreo permite:",
      },
      {
        type: "ul",
        items: [
          "Detectar una caída de producción el día que ocurre, no en la factura del mes siguiente.",
          "Distinguir si el bajón es por suciedad, por un inversor, por sombra o simplemente por un día nublado —cada causa tiene una firma distinta en los datos.",
          "Pasar de un mantenimiento correctivo (arreglar cuando ya falló) a uno predictivo (actuar antes de que la falla impacte la producción).",
          "Tener evidencia real del ahorro: cuánto generaste, cuánto dejaste de comprarle a la red, cuánto vale eso.",
        ],
      },
      { type: "h2", text: "Automatización: que el sistema reaccione solo" },
      {
        type: "p",
        text: "El monitoreo le dice qué está pasando; la automatización hace que el sistema actúe sin esperar a que alguien reaccione. Es el terreno donde la ingeniería eléctrica se cruza con las telecomunicaciones y el control. Con la lógica de control adecuada, una instalación puede priorizar el autoconsumo cuando hay sol, gestionar la carga de un banco de baterías, transferir automáticamente a respaldo cuando la red se cae, o apagar equipos no críticos ante una sobrecarga.",
      },
      {
        type: "p",
        text: "Para una empresa con operación continua, esto es la diferencia entre un corte que detiene la producción y una transferencia que el personal ni siquiera nota. Para un hogar o un conjunto residencial, es la diferencia entre aprovechar de verdad la energía propia y desperdiciar la mitad.",
      },
      { type: "h2", text: "No es solo cosa del sol: su instalación eléctrica también" },
      {
        type: "p",
        text: "El mismo principio aplica a la parte eléctrica \"tradicional\". Un tablero, una subestación o un circuito industrial también se degradan, y también avisan antes de fallar —con calentamiento, con caídas de tensión, con consumos anómalos— si alguien está midiendo. La termografía periódica de tableros, el monitoreo de variables eléctricas y las alarmas ante anomalías son la versión eléctrica de la misma idea: lo que se mide se puede corregir a tiempo; lo que no se mide, se paga cuando ya es tarde.",
      },
      {
        type: "quote",
        text: "¿Sabe hoy, con datos, cuánto está produciendo su sistema solar y si su instalación eléctrica está funcionando como debería? ¿O lo está asumiendo?",
      },
      { type: "h2", text: "Cómo lo resolvemos en DINASTEL SAS" },
      {
        type: "p",
        text: "En DINASTEL no entregamos un sistema y desaparecemos. Trabajamos con un mismo flujo para cualquier proyecto —diagnóstico, diseño integrado, ejecución, y operación y soporte—, y el monitoreo forma parte de esa última etapa, no es un extra que el cliente tenga que resolver por su cuenta.",
      },
      {
        type: "ul",
        items: [
          "Telecomunicaciones y automatización: instrumentación, control y monitoreo remoto para que su instalación se lea en tiempo real y reaccione sola ante lo previsible.",
          "Sistemas solares llave en mano: diseño, legalización e instalación on-grid o híbrida, entregados con monitoreo de producción incluido para que el ahorro se pueda verificar, no solo prometer.",
          "Ingeniería eléctrica y de redes: diseño, instalación y subestaciones de baja y media tensión, con interventoría y eficiencia energética.",
          "Mantenimiento: preventivo, correctivo y monitoreo remoto, para que ninguna instalación quede sin vigilancia una vez entregada.",
        ],
      },
      {
        type: "p",
        text: "Aclaración: los rangos de pérdidas y de capacidad efectiva mencionados son referencias técnicas del sector y varían según el clima, la ubicación, el tipo de suciedad y el estado de cada instalación. Por eso el primer paso siempre es un diagnóstico real de su caso, no un promedio genérico.",
      },
      {
        type: "p",
        text: "¿Quiere saber cuánto está rindiendo de verdad su sistema solar o su instalación eléctrica —y cuánto podría estar perdiendo sin notarlo? Escríbanos y lo revisamos con usted con datos.",
      },
    ],
    faq: [
      {
        q: "¿Cómo sé si mi sistema solar está produciendo lo que debería?",
        a: "Con monitoreo remoto y el indicador Performance Ratio (PR), que compara lo que el sistema realmente produjo contra lo que debería haber producido dadas las condiciones de sol. Sin monitoreo, una caída de rendimiento es invisible hasta que llega la factura.",
      },
      {
        q: "¿Cuánto puede bajar el rendimiento de un panel solar sucio?",
        a: "En zonas urbanas la pérdida por suciedad (soiling) suele ser de 2% a 5%, pero con películas orgánicas de polvo y humedad puede llegar al 13-15%, y más en ambientes muy adversos.",
      },
      {
        q: "¿Cuál es la falla más común en un sistema solar?",
        a: "Las fallas de inversor son las más frecuentes: es el componente que más falla en una instalación fotovoltaica. Si se apaga o entra en modo de error, sin monitoreo nadie se entera hasta la factura del mes siguiente.",
      },
      {
        q: "¿Qué diferencia hay entre monitoreo y automatización?",
        a: "El monitoreo le dice qué está pasando (producción, fallas, caídas de rendimiento); la automatización hace que el sistema actúe solo — priorizar autoconsumo, gestionar baterías o transferir a respaldo ante un corte, sin esperar intervención humana.",
      },
      {
        q: "¿El monitoreo también sirve para instalaciones eléctricas normales, no solo solares?",
        a: "Sí. La termografía periódica de tableros, el monitoreo de variables eléctricas y las alarmas ante anomalías detectan calentamiento o consumos anómalos antes de que se conviertan en una falla costosa.",
      },
    ],
  },
  {
    slug: "estudio-factibilidad-solar-colombia-cuanto-produce-antes-de-instalar",
    title: "Antes de comprar los paneles: por qué un estudio de factibilidad decide cuánto va a ahorrar de verdad",
    excerpt:
      "En 2025 la energía solar superó por primera vez al carbón en Colombia y ya hay más de 24.000 techos solares registrados. Pero cada techo produce distinto: la diferencia entre una buena y una mala inversión no está en el panel, está en el estudio que se hace antes de comprarlo.",
    category: ["Energía Solar", "Ingeniería", "Factibilidad"],
    date: "2026-08-18",
    dateDisplay: "18 de agosto, 2026",
    author: "Equipo DINASTEL SAS",
    coverImage: "/assets/brochure/solar-05.webp",
    readTime: "6 min de lectura",
    content: [
      {
        type: "p",
        text: "Cuando alguien está pensando en pasarse a la energía solar, la pregunta que casi siempre llega primero es la misma: \"¿y yo cuánto ahorro con eso?\". Es la pregunta correcta. El problema es la respuesta fácil: un número redondo, prometido de memoria, sin haber mirado el techo, la factura ni el sol de la zona. Esa cifra suele ser humo.",
      },
      {
        type: "p",
        text: "La verdad es más aburrida y mucho más útil: cuánto va a producir —y por lo tanto cuánto va a ahorrar— depende de datos concretos de su caso. Y esos datos se levantan antes de comprar nada, en lo que llamamos un estudio de factibilidad. Lo más inteligente que puede hacer antes de invertir en paneles no es comprar paneles: es medir.",
      },
      { type: "h2", text: "El país ya decidió; falta que cada techo decida bien" },
      {
        type: "p",
        text: "Que la energía solar es una buena idea en Colombia ya no está en discusión a nivel de país. En 2025 la generación solar superó por primera vez al carbón en la generación anual de electricidad: el sol produjo 4.473,8 GWh, un 25% más que los 3.564,2 GWh del carbón, según la UPME. Y no es solo tema de grandes plantas: hacia mediados de 2026 Colombia ya superaba los 24.000 techos solares registrados entre hogares, comercios e industria.",
      },
      {
        type: "p",
        text: "Ese es justamente el punto. La decisión de país ya está tomada; la que falta es la de cada techo. Y ahí no sirve el promedio nacional: sirve el número de su instalación. Dos casas en la misma cuadra, con el mismo panel, pueden producir muy distinto según hacia dónde miran, qué sombras tienen y cuánta energía consumen. El promedio no paga su factura; su sistema sí, si está bien dimensionado.",
      },
      { type: "h2", text: "\"¿Cuánto voy a producir?\" empieza por las horas de sol pico" },
      {
        type: "p",
        text: "El primer dato de cualquier estudio serio es el recurso solar del sitio, que en el sector se mide en Horas Sol Pico (HSP): las horas equivalentes al día en las que el sol pega con su máxima intensidad (1.000 W/m²). Es lo que traduce \"aquí hay buen sol\" en un número con el que se puede calcular producción real.",
      },
      {
        type: "p",
        text: "Y ese número cambia según dónde esté. Cali, donde trabajamos, recibe más de 1.700 horas de sol al año, con un recurso solar del orden de 4,5 kWh/m² al día. Medellín ronda las 4,3 HSP, mientras ciudades de la costa como Barranquilla o Cartagena se acercan a 5,4 HSP. La misma potencia instalada produce distinto en cada una. Por eso el recurso solar de su ubicación —no el de un folleto genérico— es lo primero que hay que medir.",
      },
      { type: "h2", text: "El error más caro es dimensionar a ojo" },
      {
        type: "p",
        text: "Con el sol resuelto, viene la otra mitad de la ecuación: cuánta energía consume usted. Aquí es donde más proyectos se tuercen, porque el sistema se dimensiona \"a ojo\" o al tamaño que le conviene al vendedor, no al que necesita el cliente. Y equivocarse cuesta en las dos direcciones.",
      },
      {
        type: "ul",
        items: [
          "Un sistema sobredimensionado —más grande de lo que su consumo justifica— encarece el proyecto sin necesidad: paga por una capacidad que produce excedentes que no siempre recupera del todo.",
          "Un sistema subdimensionado —más pequeño de lo que debería— se queda corto: no cubre la demanda prevista y el ahorro real termina muy por debajo de lo prometido.",
        ],
      },
      {
        type: "p",
        text: "La forma de acertar no es adivinar: es leer su consumo real. Sus facturas de energía de los últimos 12 meses dicen cuántos kilovatios-hora gasta mes a mes y cómo varía su consumo en el año. Ese perfil, cruzado con las HSP de su zona, es lo que permite dimensionar un sistema a la medida —ni grande de más, ni corto—.",
      },
      { type: "h2", text: "Qué mira, en concreto, un estudio de factibilidad" },
      {
        type: "p",
        text: "Un estudio de factibilidad bien hecho no es un formulario ni una cotización de una línea. Es el trabajo de ingeniería que convierte \"quiero paneles\" en \"esto es lo que va a producir, ahorrar y recuperar\". Reúne, como mínimo:",
      },
      {
        type: "ol",
        items: [
          "Recurso solar del sitio: las HSP reales de su ubicación, no un promedio nacional.",
          "Perfil de consumo: sus kWh mes a mes durante un año, para dimensionar contra su demanda real.",
          "Espacio y estructura: cuántos paneles caben de verdad en su techo o terreno, y si la estructura los soporta con seguridad.",
          "Sombras y orientación: un árbol, un tanque, un edificio vecino o una mala orientación pueden restar producción todos los días; se evalúan antes, no después.",
          "Análisis financiero: costo del sistema, ahorro estimado, tiempo de retorno y cómo entran los incentivos de ley y la venta de excedentes en su caso particular.",
        ],
      },
      {
        type: "p",
        text: "Esa es, en el fondo, la misma lógica que hoy empujan los gobiernos de la región cuando desarrollan plataformas y herramientas de información para que quien invierte en solar decida con datos y no con corazonadas. La herramienta ayuda; el estudio de ingeniería aterriza esos datos a su techo concreto.",
      },
      { type: "h2", text: "Cuánto cuesta y en cuánto se paga" },
      {
        type: "p",
        text: "Con el estudio en la mano, los números dejan de ser promesa y se vuelven rango. Como referencia de mercado en Colombia en 2026, un sistema solar residencial conectado a red —sin baterías— suele costar del orden de $3,5 a $5 millones de pesos por kWp instalado, con el valor por kWp bajando a medida que el sistema crece. En total, una instalación residencial llave en mano suele ubicarse entre unos $10 y $42 millones según su tamaño, e incluye paneles, inversor, estructura, instalación, certificación RETIE y trámites ante el operador de red.",
      },
      {
        type: "p",
        text: "¿Y el retorno? Para sistemas residenciales conectados a red, el tiempo de recuperación de la inversión suele estimarse en un rango de 4 a 6 años, dependiendo del consumo, la tarifa que paga y qué tan bien quedó dimensionado el sistema. La palabra clave es \"dependiendo\": ese retorno lo define el estudio, no el folleto.",
      },
      {
        type: "quote",
        text: "El panel más caro no es el que más vatios tiene: es el que se compró sin saber cuánto iba a producir. Un buen estudio de factibilidad cuesta una fracción del sistema y evita el error que cuesta el proyecto entero.",
      },
      { type: "h2", text: "Cómo lo hacemos en DINASTEL SAS" },
      {
        type: "p",
        text: "En DINASTEL trabajamos cualquier proyecto con un mismo flujo integral: diagnóstico, diseño, ejecución y operación. El estudio de factibilidad es la primera etapa —el diagnóstico— y no es un paso suelto ni un extra: es lo que hace que todo lo demás tenga sentido. Preferimos decirle con datos que un proyecto no le conviene, antes que venderle uno que no va a rendir.",
      },
      {
        type: "ul",
        items: [
          "Sistemas solares llave en mano: diagnóstico y estudio de factibilidad, diseño, legalización RETIE, instalación on-grid o híbrida y puesta en marcha, con la producción estimada sobre su consumo real, no sobre un promedio.",
          "Ingeniería eléctrica y de redes: la base segura y bien dimensionada sobre la que se conecta cualquier sistema solar, con interventoría y eficiencia energética.",
          "Telecomunicaciones y automatización: instrumentación y monitoreo para verificar, ya en operación, que el sistema produce lo que el estudio prometió.",
          "Obras civiles: estructuras de soporte y adecuaciones necesarias, hechas para durar.",
          "Mantenimiento: preventivo, correctivo y monitoreo remoto, para que la producción estimada se sostenga año tras año.",
        ],
      },
      {
        type: "p",
        text: "Aclaración: las cifras de costo, HSP y tiempo de retorno de este artículo son referencias de mercado y varían según su ubicación, su consumo, la tarifa que paga y las condiciones de cada proyecto. Precisamente por eso el primer paso siempre es un estudio real de su caso, no un número prometido de memoria.",
      },
      {
        type: "p",
        text: "¿Quiere saber, con datos, cuánto produciría y ahorraría un sistema solar en su techo antes de invertir un peso? Escríbanos y hacemos el estudio de factibilidad con usted.",
      },
    ],
    faq: [
      {
        q: "¿Qué es un estudio de factibilidad solar y por qué es necesario?",
        a: "Es el análisis técnico que mide el recurso solar de su ubicación, su consumo real, el espacio disponible, las sombras y el retorno financiero antes de comprar un sistema — evita comprar un sistema sobre o subdimensionado.",
      },
      {
        q: "¿Cuánto cuesta un sistema solar residencial en Colombia?",
        a: "Como referencia de 2026, un sistema on-grid sin baterías suele costar entre $3,5 y $5 millones de pesos por kWp instalado, con una instalación residencial completa entre $10 y $42 millones según el tamaño.",
      },
      {
        q: "¿En cuánto tiempo se recupera la inversión de un sistema solar residencial?",
        a: "Para sistemas conectados a red, el retorno suele estimarse entre 4 y 6 años, dependiendo del consumo, la tarifa eléctrica y qué tan bien esté dimensionado el sistema.",
      },
      {
        q: "¿Qué son las Horas Sol Pico (HSP) y por qué importan?",
        a: "Son las horas equivalentes al día en que el sol pega con su máxima intensidad (1.000 W/m²) — el dato base para calcular cuánto producirá realmente un sistema en su ubicación. Cali tiene cerca de 4,5 HSP, Medellín 4,3, y ciudades de la costa hasta 5,4 HSP.",
      },
      {
        q: "¿Qué pasa si mi sistema solar queda mal dimensionado?",
        a: "Si queda sobredimensionado, paga de más por una capacidad que no siempre recupera en excedentes; si queda subdimensionado, no cubre su demanda real y el ahorro termina muy por debajo de lo prometido.",
      },
    ],
  },
  {
    slug: "almacenamiento-energia-baterias-sistemas-hibridos-respaldo-cortes-colombia",
    title: "Cuando la red falla: por qué el almacenamiento en baterías y los sistemas híbridos son el nuevo respaldo de hogares y empresas en Colombia",
    excerpt:
      "El sistema eléctrico colombiano entra a 2026-2027 con el margen más ajustado en años y el fantasma del racionamiento de vuelta. Un sistema solar híbrido con baterías deja de ser un lujo y se vuelve lo que mantiene encendida una casa, una finca o una empresa cuando la red se cae.",
    category: ["Energía Solar", "Almacenamiento", "Automatización"],
    date: "2026-08-26",
    dateDisplay: "26 de agosto, 2026",
    author: "Equipo DINASTEL SAS",
    coverImage: "/assets/brochure/almacenamiento-energia-01.webp",
    readTime: "6 min de lectura",
    content: [
      {
        type: "p",
        text: "Un panel solar produce cuando hay sol. Suena obvio, pero encierra el límite de fondo de la energía solar: al mediodía le sobra energía y en la noche —o cuando pasa una nube, o cuando se cae la red— no tiene nada. Durante años esa fue la letra pequeña que casi nadie leía al instalar paneles. Hoy, con un sistema eléctrico nacional cada vez más ajustado, esa letra pequeña se volvió la pregunta principal: ¿qué pasa cuando el sol no está… o cuando la red simplemente falla?",
      },
      {
        type: "p",
        text: "La respuesta tiene nombre y ya no es ciencia ficción ni un capricho caro: almacenamiento de energía. Guardar en baterías lo que el sistema produce de más para usarlo cuando de verdad se necesita es lo que convierte un sistema solar en un respaldo real, y a un hogar o una empresa en algo mucho menos dependiente de una red que, este año, está dando señales de tensión.",
      },
      { type: "h2", text: "El telón de fondo: un sistema eléctrico con poco margen" },
      {
        type: "p",
        text: "El contexto colombiano de 2026 explica por qué este tema dejó de ser opcional. Según el Boletín Energético publicado por XM en julio de 2026, la demanda de energía superaría a la generación garantizada entre 2026 y 2027, con una brecha estimada de alrededor de 3,9 TWh-año en el periodo más crítico, entre diciembre de 2026 y noviembre de 2027. Es la advertencia de racionamiento más seria que se escucha en el país en años.",
      },
      {
        type: "p",
        text: "Los números que hay detrás son igual de elocuentes: en junio de 2026 la demanda creció 5,75% frente al mismo mes del año anterior y llegó a un consumo diario promedio de 261,86 GWh, el nivel más alto registrado en la historia reciente del país. Al mismo tiempo, la oferta no sube al ritmo prometido: de los 4.475 MW de capacidad nueva que se esperaban para 2026, a comienzos de julio solo habían entrado en operación 331 MW. Y encima, Ideam y la NOAA proyectan una probabilidad cercana al 70% de un nuevo fenómeno de El Niño entre mayo y julio, que sube por encima del 90% hacia agosto y septiembre.",
      },
      {
        type: "p",
        text: "Traducido: más consumo, menos generación nueva de la esperada y un clima que amenaza con secar los embalses de los que Colombia depende para dos tercios de su electricidad. Ese es el terreno en el que hoy se toma la decisión de instalar respaldo.",
      },
      { type: "h2", text: "Cortarse la luz no es tan raro como parece" },
      {
        type: "p",
        text: "Aunque el racionamiento por El Niño es el titular, la verdad es que los cortes ya son parte de la vida cotidiana en buena parte del país. Según el informe de calidad del servicio de XM, en 2025 un usuario colombiano promedio pasó cerca de 21 horas al año sin luz (una mejora frente a las 23 horas de 2024) y sufrió alrededor de 14,2 interrupciones en el año. Es un promedio nacional que, además, esconde diferencias enormes por región.",
      },
      {
        type: "p",
        text: "En la costa Caribe la historia es mucho más dura: los usuarios de Afinia soportaron en 2025 un promedio de 66 horas sin servicio —casi tres días completos al año— y el indicador de frecuencia de cortes de Air-e se disparó hasta casi 30 interrupciones anuales. Para dimensionar el contraste, la meta de largo plazo que la CREG fijó a los operadores de red es de apenas 2 horas al año. La brecha entre lo que se debería y lo que realmente ocurre es justo el espacio donde el respaldo propio deja de ser un lujo.",
      },
      {
        type: "quote",
        text: "Para una empresa, cada hora sin luz no es solo incomodidad: es producción detenida, cadena de frío en riesgo, datos que se pierden y clientes que no pueden pagar. El costo de un corte casi siempre es mayor que el de prevenirlo.",
      },
      { type: "h2", text: "Qué hace realmente el almacenamiento" },
      {
        type: "p",
        text: "Una batería en un sistema solar cumple tres funciones que se suman entre sí, y entender cuál pesa más en su caso es la mitad del diseño:",
      },
      {
        type: "ul",
        items: [
          "Respaldo ante cortes: cuando la red se cae, un sistema híbrido bien diseñado transfiere la carga a las baterías en fracciones de segundo, y las cargas críticas —nevera, internet, un cuarto frío, un servidor, luces— siguen funcionando como si nada. Es el equivalente silencioso y sin humo de una planta diésel, pero sin combustible ni arranque manual.",
          "Aprovechar su propia energía (autoconsumo): en vez de entregar a la red el excedente del mediodía y volver a comprarlo caro en la noche, lo guarda y lo usa usted. En zonas donde la remuneración de excedentes no es la ideal, almacenar y autoconsumir puede rendir más que vender.",
          "Gestión de tarifa y demanda: para una empresa, las baterías permiten recortar picos de consumo y usar energía almacenada en las horas más caras, suavizando la factura sin apagar la operación.",
        ],
      },
      { type: "h2", text: "On-grid, híbrido o aislado: no todos necesitan lo mismo" },
      {
        type: "p",
        text: "Aquí es donde conviene bajar las expectativas de marketing y subir las de ingeniería. No todo el mundo necesita —ni le conviene pagar— un banco de baterías enorme. La decisión depende de su objetivo:",
      },
      {
        type: "ol",
        items: [
          "Sistema on-grid (sin baterías): conectado a la red, ideal para bajar la factura con autoconsumo y venta de excedentes. Es el más económico, pero si la red se cae, por seguridad el sistema también se apaga. No da respaldo.",
          "Sistema híbrido (solar + baterías + red): lo mejor de los dos mundos. Ahorra con autoconsumo y excedentes cuando la red está, y sostiene las cargas críticas cuando la red no está. Es la opción que tiene sentido justo en un escenario de posibles racionamientos.",
          "Sistema aislado (off-grid): totalmente independiente de la red, pensado para fincas y sitios donde la red no llega o llegar cuesta una fortuna. Requiere el banco de baterías más grande, porque toda la autonomía depende de él.",
        ],
      },
      {
        type: "p",
        text: "El error costoso es comprar un sistema con baterías sin haber definido antes qué cargas quiere respaldar y por cuántas horas. Respaldar una casa entera con aire acondicionado durante ocho horas no es lo mismo que sostener la nevera, el wifi y unas luces por una noche: la diferencia en tamaño —y en precio— es enorme.",
      },
      { type: "h2", text: "El precio de las baterías va en la dirección correcta" },
      {
        type: "p",
        text: "La razón por la que hoy tiene sentido hablar de almacenamiento, y hace cinco años casi no, es el desplome del costo de las baterías. El precio de referencia de las baterías de ion-litio rondaba los 139 USD/kWh en 2024 y las proyecciones del sector lo ubican cerca de los 70 USD/kWh hacia 2030. La curva de precios que hizo despegar la solar hace una década es la misma que hoy está viviendo el almacenamiento.",
      },
      {
        type: "p",
        text: "En Colombia el almacenamiento también empieza a instalarse a gran escala: Enel Colombia puso en operación en la central térmica de Termozipa el primer sistema de baterías de gran escala de servicio público del país, con capacidad para almacenar del orden de 3,9 MWh. A nivel regulatorio, la Resolución CREG 098 de 2019 abrió la puerta al almacenamiento en el sistema, y los incentivos de la Ley 1715 (modificada por la Ley 2099 de 2021) aplican también a estos proyectos. El marco todavía se está afinando, pero la dirección es clara: el país se está preparando para almacenar energía, no solo para producirla.",
      },
      { type: "h2", text: "Baterías sin monitoreo es dinero a ciegas" },
      {
        type: "p",
        text: "Un banco de baterías es el componente más costoso y más delicado de un sistema. Su vida útil depende de cómo se carga y descarga, de la temperatura a la que trabaja y de que nadie lo lleve al límite sin darse cuenta. Por eso el almacenamiento y la automatización van de la mano: un buen sistema no solo guarda energía, también decide de forma inteligente cuándo cargar, cuándo descargar, qué cargas priorizar en un corte y cuándo transferir a respaldo, todo sin que nadie tenga que estar pendiente.",
      },
      {
        type: "p",
        text: "Ese control es, además, lo que protege la inversión: con monitoreo remoto se ve el estado de carga, la salud de las baterías y el comportamiento del inversor en tiempo real, y se detecta a tiempo cualquier anomalía antes de que se convierta en una batería arruinada años antes de lo previsto.",
      },
      { type: "h2", text: "Cómo lo abordamos en DINASTEL SAS" },
      {
        type: "p",
        text: "En DINASTEL trabajamos cualquier proyecto con un mismo flujo integral: diagnóstico, diseño, ejecución y operación. Con el almacenamiento ese primer paso pesa aún más, porque un sistema híbrido mal dimensionado es caro por partida doble: se paga de más y no respalda lo que debía. Preferimos empezar por entender qué necesita mantener encendido y por cuánto tiempo, y a partir de ahí diseñar.",
      },
      {
        type: "ul",
        items: [
          "Sistemas solares llave en mano (on-grid, híbridos o aislados): diagnóstico del consumo y de las cargas críticas, diseño, legalización RETIE, instalación y puesta en marcha, con el banco de baterías dimensionado a lo que de verdad quiere respaldar.",
          "Ingeniería eléctrica y de redes con RETIE: tableros de transferencia, protecciones y puesta a tierra bien hechas, la base segura sobre la que se conecta cualquier sistema de respaldo.",
          "Telecomunicaciones y automatización: control inteligente de carga y descarga, transferencia automática a respaldo y monitoreo remoto del estado de las baterías, para que el sistema reaccione solo ante un corte.",
          "Obras civiles: adecuación de espacios ventilados y seguros para el banco de baterías y el inversor, hechos para durar.",
          "Mantenimiento: preventivo, correctivo y monitoreo remoto, para que la inversión más costosa del sistema —las baterías— alcance la vida útil por la que se pagó.",
        ],
      },
      {
        type: "p",
        text: "Aclaración: las cifras de precios de baterías, tiempos de respaldo y el escenario de abastecimiento nacional son referencias del sector y de los reportes oficiales citados, y varían según la evolución del mercado, el clima y cada proyecto. El respaldo real que necesita su caso —qué cargas, cuántas horas, con qué presupuesto— solo lo define un diseño serio, no un tamaño de batería prometido de memoria.",
      },
      {
        type: "p",
        text: "¿Quiere saber si un sistema solar híbrido con baterías tiene sentido para su casa, su finca o su empresa antes de que el próximo corte lo agarre desprevenido? Escríbanos y lo evaluamos con usted.",
      },
    ],
    faq: [
      {
        q: "¿Vale la pena instalar baterías en un sistema solar en Colombia?",
        a: "Depende del objetivo. Si busca respaldo ante cortes o racionamiento, un sistema híbrido con baterías es la única opción que mantiene encendidas sus cargas críticas cuando la red se cae. Si solo busca bajar la factura, un on-grid sin baterías puede bastar. Con el margen ajustado del sistema eléctrico en 2026-2027, el respaldo cobra más sentido que nunca.",
      },
      {
        q: "¿Un sistema solar normal funciona cuando se va la luz?",
        a: "No. Un sistema on-grid (sin baterías) se apaga por seguridad cuando la red se cae, aunque haya sol. Solo un sistema híbrido o aislado, con baterías y la lógica de transferencia adecuada, sigue entregando energía durante un corte.",
      },
      {
        q: "¿Cuánto respaldo dan las baterías?",
        a: "Depende del tamaño del banco y de las cargas que quiera sostener. No es lo mismo mantener nevera, wifi y luces por una noche que respaldar una casa con aire acondicionado por varias horas. Por eso el diseño parte de definir qué cargas críticas quiere respaldar y por cuánto tiempo.",
      },
      {
        q: "¿Por qué hoy se habla tanto de almacenamiento si antes no?",
        a: "Porque el precio de las baterías de ion-litio cayó de forma drástica —del orden de 139 USD/kWh en 2024, con proyecciones cercanas a 70 USD/kWh hacia 2030— y porque el riesgo de racionamiento por El Niño y el crecimiento de la demanda hicieron del respaldo una necesidad, no un lujo.",
      },
      {
        q: "¿Hay riesgo real de racionamiento de energía en Colombia?",
        a: "Según el Boletín Energético de XM de julio de 2026, la demanda superaría la generación garantizada entre 2026 y 2027, con una brecha estimada cercana a 3,9 TWh-año en el periodo más crítico, agravada por un posible fenómeno de El Niño con probabilidad superior al 90% hacia agosto-septiembre. Es un escenario de riesgo que las autoridades piden monitorear y prevenir.",
      },
    ],
  },
  {
    slug: "agrivoltaica-colombia-energia-y-cultivos-mismo-terreno",
    title: "Agrivoltaica: cómo producir energía y alimento en el mismo terreno (y por qué le conviene al campo colombiano)",
    excerpt:
      "Durante años se pensó que un terreno servía para cultivar o para poner paneles solares, pero no para las dos cosas. La agrivoltaica rompe ese dilema: en la misma hectárea se genera energía y se produce alimento, y en un país con sol de sobra y agua cada vez más incierta, esa combinación empieza a tener mucho sentido.",
    category: ["Energía Solar", "Agricultura", "Innovación"],
    date: "2026-08-27",
    dateDisplay: "27 de agosto, 2026",
    author: "Equipo DINASTEL SAS",
    coverImage: "/assets/brochure/solar-06.webp",
    readTime: "6 min de lectura",
    content: [
      {
        type: "p",
        text: "Hay una idea muy arraigada en el campo: la tierra que se dedica a paneles solares es tierra que se le quita a la producción. Cultivar o generar energía, pero no las dos cosas en el mismo lote. La agrivoltaica —a veces llamada agrovoltaica— nació precisamente para romper ese dilema: en la misma hectárea se puede producir electricidad arriba y alimento abajo, aprovechando dos veces el mismo espacio.",
      },
      {
        type: "p",
        text: "No es una idea de laboratorio lejano. En Colombia ya hay proyectos en operación, hay marco regulatorio que la habilita y —lo más importante para un productor— hay una ventaja concreta que aquí pesa cada vez más: el agua. Este artículo explica qué es, qué dicen los datos y en qué casos tiene sentido evaluarla en serio.",
      },
      { type: "h2", text: "Qué es la agrivoltaica (y por qué no es solo \"poner paneles en una finca\")" },
      {
        type: "p",
        text: "La agrivoltaica es el uso simultáneo de un mismo terreno para generación solar fotovoltaica y para actividad agropecuaria. No se trata de un lote lleno de paneles al lado de un cultivo, sino de un diseño pensado para que ambas cosas convivan: paneles elevados sobre la altura de los cultivos, o dispuestos en hileras separadas con espacio suficiente para sembrar, pastorear o mover maquinaria entre ellas.",
      },
      {
        type: "p",
        text: "La diferencia con una instalación solar convencional está justo ahí: en la agrivoltaica el sombreado, la altura, la separación entre hileras y la orientación no se calculan solo para maximizar energía, sino para repartir la luz entre el panel y la planta. Es una decisión de ingeniería, no de improvisación, y de eso depende que el cultivo no salga perjudicado.",
      },
      { type: "h2", text: "Colombia tiene el terreno —y el sol— para que funcione" },
      {
        type: "p",
        text: "El Ministerio de Minas y Energía ha presentado la agrovoltaica como una de las apuestas con más potencial en el país, y el argumento es simple: Colombia tiene más de 40 millones de hectáreas destinadas al uso agropecuario y altos niveles de radiación solar durante todo el año. Es una combinación poco común: mucho territorio productivo y un recurso solar estable, sin las estaciones marcadas que limitan a otras latitudes.",
      },
      {
        type: "p",
        text: "Y ya hay ejemplos concretos. En Baranoa, Atlántico, la empresa Cannabis Medical Company puso en operación un sistema fotovoltaico para autoconsumo de 147 paneles, 105,1 kWp de potencia y una generación anual estimada de 178.670 kWh, destinado a alimentar procesos de cultivo, propagación vegetal, investigación y transformación agropecuaria. El propio Ministerio lo señaló como un ejemplo del potencial agrovoltaico del país: energía limpia integrada a una operación agrícola para reducir la factura y depender menos de la inestabilidad de la red.",
      },
      {
        type: "p",
        text: "En el terreno de la investigación, un grupo de la Universidad Nacional de Colombia desarrolló un sistema que combina paneles solares con torres modulares de cultivo hidropónico capaces de recolectar agua lluvia, con densidades de hasta 80 plantas por metro cuadrado frente a las 10 de un cultivo tradicional. Es una muestra de que la agrivoltaica no es una sola receta, sino una familia de soluciones que se adapta desde la finca pequeña hasta el proyecto de mayor escala.",
      },
      { type: "h2", text: "El beneficio que en Colombia importa: el agua" },
      {
        type: "p",
        text: "Más allá de la energía, el gran atractivo de la agrivoltaica para el campo es el manejo del agua. La sombra parcial que proyectan los paneles reduce la evaporación del suelo y la evapotranspiración de las plantas, es decir, el cultivo necesita menos riego para lo mismo. En un país que en las últimas sequías vio racionamientos de agua y pérdidas en el campo, ese ahorro deja de ser un detalle.",
      },
      {
        type: "ul",
        items: [
          "Menos agua para el mismo cultivo: revisiones de estudios internacionales estiman ahorros de agua de entre 30% y 40% y mejoras en la eficiencia del uso del agua del orden de 20% a 47%, según el clima y el cultivo.",
          "Microclima más suave: bajo los paneles la temperatura puede bajar entre 1 y 4 °C, lo que protege cultivos sensibles a las olas de calor y reduce el estrés hídrico.",
          "Doble ingreso del mismo terreno: la venta o el autoconsumo de energía se suma a la producción agrícola, sin renunciar a una por la otra.",
          "Paneles que rinden mejor: el cultivo y la humedad bajo los módulos ayudan a enfriarlos, y un panel más fresco produce algo más de energía que uno recalentado.",
          "Protección física: la estructura da algo de resguardo frente a granizo, sol excesivo y lluvias fuertes en ciertos cultivos.",
        ],
      },
      {
        type: "p",
        text: "Los números varían según el diseño y la especie. En ensayos en Chile, un sistema agrivoltaico redujo la evapotranspiración cerca de 31% y aumentó la humedad del suelo alrededor de 29%; en otras pruebas, cultivos como la lechuga mantuvieron su rendimiento con casi 30% menos de agua. La lección es clara: la agrivoltaica funciona mejor en cultivos que toleran algo de sombra, y menos en los que exigen sol pleno todo el día.",
      },
      { type: "h2", text: "No todo cultivo ni todo diseño sirve: aquí entra la ingeniería" },
      {
        type: "p",
        text: "La agrivoltaica bien hecha empieza por una pregunta honesta: ¿este cultivo y este terreno son buenos candidatos? Las plantas de sombra parcial —muchas hortalizas de hoja, algunos frutales, forrajes para ganado— responden bien; los cultivos que necesitan sol directo intenso pueden perder rendimiento si se sombrean de más. Por eso el diseño no se copia de otro proyecto: se calcula.",
      },
      {
        type: "ul",
        items: [
          "Altura y separación de los paneles, para dejar pasar la luz que el cultivo necesita y permitir el paso de personas y maquinaria.",
          "Disposición en hileras: la evidencia muestra que los cultivos entre hileras suelen rendir mejor que los que quedan justo debajo del panel.",
          "Estructura y cimentación pensadas para el terreno agrícola y para durar años a la intemperie, sin comprometer el suelo productivo.",
          "Diseño eléctrico con RETIE, protecciones y puesta a tierra, base de seguridad de cualquier instalación solar.",
          "Automatización y monitoreo del riego y de la generación, para operar el sistema con datos y no con suposiciones.",
        ],
      },
      { type: "h2", text: "El marco ya existe: comunidades energéticas y autogeneración" },
      {
        type: "p",
        text: "En el lado regulatorio, Colombia avanzó. La CREG, mediante la Resolución 101 072 de 2025, redefinió las comunidades energéticas y habilitó figuras como la autogeneración colectiva y la generación distribuida colectiva, que permiten a grupos de usuarios generar, consumir y compartir energía renovable. La UPME, por su parte, fijó límites técnicos (proyectos de autogeneración por debajo de 5 MW), y programas oficiales como \"Municipios y Energía Territorial\" contemplan granjas agrovoltaicas del orden de 1 MW. Traducido: hoy hay caminos formales para que una finca, una asociación de productores o un municipio monten un proyecto agrivoltaico y le den un uso ordenado a la energía que producen.",
      },
      { type: "h2", text: "Cómo lo aborda DINASTEL" },
      {
        type: "p",
        text: "Un proyecto agrivoltaico no es un producto de catálogo: es la suma de varias disciplinas que tienen que hablar entre sí. En DINASTEL trabajamos justamente en esa intersección:",
      },
      {
        type: "ul",
        items: [
          "Sistemas solares llave en mano (on-grid, híbridos o aislados): diagnóstico del consumo real de la finca o el proceso agrícola, diseño, legalización RETIE, instalación y puesta en marcha.",
          "Ingeniería eléctrica y de redes con RETIE: la base segura sobre la que se conecta el sistema, con protecciones y puesta a tierra bien hechas.",
          "Obras civiles: cimentación y estructuras de soporte —incluidas las elevadas que la agrivoltaica requiere— pensadas para el terreno y para durar.",
          "Telecomunicaciones y automatización: control y telemetría del riego y de la generación, para que el sistema opere según la humedad del suelo, los horarios de sol y las necesidades del cultivo.",
          "Mantenimiento preventivo, correctivo y monitoreo remoto: para que un sistema en una finca alejada no dependa de que alguien suba a revisarlo a ver si sigue funcionando.",
        ],
      },
      {
        type: "p",
        text: "La combinación importa: de nada sirve una estructura impecable si el cultivo queda a oscuras, ni una gran generación si el riego se maneja a ojo. La agrivoltaica rinde cuando la energía, el agua y el cultivo se diseñan como un solo sistema.",
      },
      {
        type: "p",
        text: "Aclaración: los ahorros de agua, los rendimientos y los tiempos de retorno dependen de cada caso —el cultivo, el clima de la zona, el diseño de la estructura y el precio de la energía—. Por eso el primer paso siempre es un diagnóstico técnico serio, no una promesa genérica.",
      },
      {
        type: "p",
        text: "¿Tiene un terreno agrícola en el suroccidente colombiano y se pregunta si podría producir energía sin sacrificar el cultivo? Escríbanos y evaluamos con usted si un proyecto agrivoltaico tiene sentido para su caso.",
      },
    ],
    faq: [
      {
        q: "¿Qué es la agrivoltaica o agrovoltaica?",
        a: "Es el uso simultáneo de un mismo terreno para generar energía solar fotovoltaica y para producir cultivos o criar ganado. Los paneles se instalan elevados o en hileras separadas para que la luz se reparta entre el panel y la planta.",
      },
      {
        q: "¿La sombra de los paneles daña los cultivos?",
        a: "Depende del cultivo. Las plantas que toleran sombra parcial —muchas hortalizas de hoja y forrajes— suelen mantener o incluso mejorar su rendimiento; los cultivos que exigen sol pleno pueden verse afectados. Por eso el diseño (altura, separación y orientación) se calcula para cada caso.",
      },
      {
        q: "¿Cuánta agua se puede ahorrar con un sistema agrivoltaico?",
        a: "Revisiones de estudios internacionales estiman ahorros de agua de entre 30% y 40% y mejoras en la eficiencia del uso del agua de 20% a 47%, porque la sombra parcial reduce la evaporación del suelo y la evapotranspiración del cultivo. La cifra real depende del clima y de la especie.",
      },
      {
        q: "¿La agrivoltaica está permitida en Colombia?",
        a: "Sí. Existe marco regulatorio: la CREG (Resolución 101 072 de 2025) habilitó las comunidades energéticas y la autogeneración colectiva, la UPME fijó límites técnicos para autogeneración por debajo de 5 MW, y hay programas oficiales que contemplan granjas agrovoltaicas. Toda instalación debe cumplir RETIE.",
      },
      {
        q: "¿Sirve la agrivoltaica para una finca pequeña o solo para grandes proyectos?",
        a: "Sirve para ambos. Hay soluciones desde el autoconsumo de una finca o proceso agrícola hasta granjas de mayor escala y esquemas colectivos entre varios productores. Lo que define la viabilidad es el diagnóstico técnico, no solo el tamaño.",
      },
    ],
  },
  {
    slug: "riego-inteligente-automatizacion-telemetria-agua-energia-campo-colombiano",
    title: "Regar con datos, no a ojo: cómo la automatización y la telemetría ahorran agua y energía en el campo colombiano",
    excerpt:
      "La agricultura es el sector que más agua consume en Colombia, pero el riego cubre apenas una fracción del campo y buena parte del que existe se desperdicia. Sensores, telemetría y control automático permiten regar la cantidad justa —y bombear con sol— para gastar menos agua y menos energía.",
    category: ["Automatización", "Agricultura", "Telecomunicaciones"],
    date: "2026-09-01",
    dateDisplay: "1 de septiembre, 2026",
    author: "Equipo DINASTEL SAS",
    coverImage: "/assets/brochure/solar-07.webp",
    readTime: "6 min de lectura",
    content: [
      {
        type: "p",
        text: "En muchas fincas colombianas el riego sigue funcionando igual que hace décadas: se abre la llave, se inunda el surco y se cierra cuando \"se ve\" que ya está. El problema es que el ojo no mide la humedad del suelo, no sabe cuánta agua evaporó el sol del mediodía ni cuánta energía costó mover esa agua. Regar a ojo casi siempre significa regar de más —desperdiciando agua y energía— o regar de menos, sacrificando el cultivo.",
      },
      {
        type: "p",
        text: "La buena noticia es que hoy existe una alternativa accesible: instrumentar el riego con sensores, telemetría y control automático para que el sistema decida cuándo, cuánto y dónde regar con base en datos, no en corazonadas. Es la misma lógica que aplicamos al monitoreo de un sistema solar, llevada al recurso más escaso del campo: el agua.",
      },
      { type: "h2", text: "El agua del campo en Colombia: mucha demanda, poca infraestructura" },
      {
        type: "p",
        text: "Los datos del Estudio Nacional del Agua del IDEAM ponen el tema en perspectiva. La agricultura es el sector que más agua demanda en el país, con cerca del 43% del uso nacional. Y aun así, la infraestructura para usarla bien es escasa:",
      },
      {
        type: "ul",
        items: [
          "El riego satisface solo alrededor del 10% del requerimiento hídrico de los cultivos en Colombia; el 90% restante depende directamente de la lluvia. Cuando llega una temporada seca, ese 90% queda a merced del clima.",
          "Colombia tiene un potencial cercano a 18,4 millones de hectáreas aptas para adecuación de tierras (riego, drenaje y control de inundaciones), pero la cobertura actual no supera el 6% de ese potencial, según la UPRA y la Agencia de Desarrollo Rural (ADR).",
          "De unos 780 distritos de riego en el país, cerca de 202 no están en funcionamiento, según cifras de la ADR — infraestructura que existe pero que no está entregando agua de forma confiable.",
          "El Plan Nacional de Riego 2020-2039 se propone sumar unas 745.000 hectáreas nuevas con infraestructura de adecuación de tierras y avanzar hacia el riego tecnificado, una meta que solo tiene sentido si el agua que se distribuye se aprovecha con eficiencia.",
        ],
      },
      {
        type: "p",
        text: "En otras palabras: hay poca agua controlada y la que hay muchas veces se pierde. Ahí es donde la eficiencia del método de riego y la automatización dejan de ser un lujo y se vuelven una necesidad económica.",
      },
      { type: "h2", text: "Regar a ojo cuesta agua… y energía" },
      {
        type: "p",
        text: "El método de riego define cuánta agua llega de verdad a la planta. El riego por gravedad o inundación —el más común en el campo tradicional— tiene una eficiencia de apenas 40% a 65%: buena parte del agua se pierde por evaporación, escorrentía o infiltración fuera de la zona de raíces. En contraste, el riego por goteo bien diseñado alcanza eficiencias del 90% al 95%, porque entrega el agua directo a la base de la planta.",
      },
      {
        type: "p",
        text: "La diferencia no es teórica. En ensayos con maíz forrajero, pasar de riego superficial a goteo subsuperficial ahorró cerca de 27% del agua manteniendo la producción. Y cuando ese riego eficiente se combina con sensores de humedad de suelo y control automático, se documentan ahorros de agua de hasta 40% frente al riego manual, además de una reducción en los costos operativos anuales.",
      },
      {
        type: "p",
        text: "Y hay un segundo ahorro que muchas veces se olvida: mover agua cuesta energía. Cada litro que se bombea de más es diésel quemado o kilovatios pagados. Regar con datos no solo ahorra agua; ahorra la energía de bombear esa agua. Si además ese bombeo se alimenta con un sistema solar, el ahorro se multiplica.",
      },
      { type: "h2", text: "Qué significa \"riego inteligente\" en la práctica" },
      {
        type: "p",
        text: "No se trata de comprar un gadget suelto, sino de instrumentar el sistema completo para que produzca información y actúe con ella:",
      },
      {
        type: "ul",
        items: [
          "Sensores de humedad de suelo que miden en tiempo real cuánta agua hay realmente en la zona de raíces, para regar solo cuando el cultivo lo necesita.",
          "Telemetría: los datos del campo (humedad, caudal, presión, estado de la bomba) viajan por red hasta una plataforma donde el productor los ve desde el celular, esté en la finca o en la ciudad.",
          "Control automático: electroválvulas y controladores que abren y cierran el riego por zonas según los sensores y la programación, sin que alguien tenga que estar abriendo llaves manualmente.",
          "Bombeo solar integrado y monitoreado: la bomba trabaja con energía fotovoltaica y su rendimiento se supervisa igual que el riego, para detectar a tiempo una falla o una caída de caudal.",
          "Alertas y registro histórico: el sistema avisa ante una fuga, una bomba detenida o un consumo anómalo, y guarda el histórico para decidir con evidencia, no con memoria.",
        ],
      },
      {
        type: "quote",
        text: "La pregunta no es \"¿regué?\", sino \"¿regué la cantidad justa, en el momento justo, gastando la menor energía posible?\". Eso solo se responde con datos.",
      },
      { type: "h2", text: "Esto ya está pasando en el Valle del Cauca" },
      {
        type: "p",
        text: "No es una tecnología importada que aún no aterriza en el país. La corporación de investigación agropecuaria AGROSAVIA publicó el enfoque \"Agricultura 4.0: cuándo, cuánto y cómo regar\", basado en un piloto de instrumentación y telemetría del riego en el distrito RUT (Roldanillo, La Unión y Toro), en pleno Valle del Cauca. La idea es exactamente esa: medir las condiciones hídricas del sitio de forma continua para tomar decisiones de riego en tiempo real.",
      },
      {
        type: "p",
        text: "Para una empresa como DINASTEL, con base en Cali y foco en el suroccidente colombiano, esto conecta de forma natural con lo que ya hacemos: redes, telecomunicaciones, automatización y sistemas solares. El riego inteligente es, al final, un problema de sensores, energía, conectividad y control bien integrados.",
      },
      { type: "h2", text: "Cómo lo abordamos en DINASTEL SAS" },
      {
        type: "p",
        text: "Aplicamos el mismo flujo que usamos en cualquier proyecto eléctrico o solar —diagnóstico, diseño integrado, ejecución y operación con soporte—, aquí orientado al agua y la energía del campo:",
      },
      {
        type: "ul",
        items: [
          "Telecomunicaciones y automatización: sensores, telemetría, electroválvulas y control automático para que el riego responda a datos, con visualización remota desde el celular.",
          "Sistemas solares llave en mano: bombeo solar y energía fotovoltaica para alimentar el riego, con diseño, legalización RETIE e instalación incluidas.",
          "Ingeniería eléctrica y de redes: el respaldo eléctrico, las protecciones y la puesta a tierra que un sistema de bombeo y control necesita para operar seguro.",
          "Mantenimiento y monitoreo remoto: preventivo, correctivo y supervisión a distancia, para que sensores, bombas y controladores sigan entregando datos confiables con el tiempo.",
        ],
      },
      {
        type: "p",
        text: "Aclaración honesta: los ahorros de agua y energía dependen de cada caso —el cultivo, el tipo de suelo, el método de riego actual, el clima de la zona y el estado de la infraestructura—. Por eso el primer paso siempre es un diagnóstico técnico, no una promesa genérica.",
      },
      {
        type: "p",
        text: "¿Tiene un cultivo o un distrito de riego en el suroccidente colombiano y sospecha que está gastando de más en agua o en energía de bombeo? Escríbanos y evaluamos con usted si instrumentar y automatizar el riego tiene sentido para su caso.",
      },
    ],
    faq: [
      {
        q: "¿Qué es el riego inteligente o automatizado?",
        a: "Es un sistema que usa sensores de humedad de suelo, telemetría y control automático para decidir cuándo, cuánto y dónde regar con base en datos en tiempo real, en lugar de hacerlo de forma manual y \"a ojo\". El productor puede supervisarlo y ajustarlo de forma remota desde el celular.",
      },
      {
        q: "¿Cuánta agua se puede ahorrar con riego automatizado?",
        a: "Automatizar el riego con sensores de humedad de suelo permite documentar ahorros de agua de hasta 40% frente al riego manual, además de reducir costos operativos. El riego por goteo eficiente alcanza eficiencias del 90% al 95%, frente al 40%-65% del riego por gravedad o inundación. El ahorro real depende del cultivo, el suelo y el clima.",
      },
      {
        q: "¿El riego inteligente también ahorra energía?",
        a: "Sí. Mover agua cuesta energía: cada litro bombeado de más es diésel o kilovatios pagados. Al regar solo la cantidad necesaria, se bombea menos y se ahorra energía. Si el bombeo se alimenta con un sistema solar fotovoltaico, el ahorro es aún mayor.",
      },
      {
        q: "¿Esta tecnología ya se usa en Colombia?",
        a: "Sí. AGROSAVIA publicó el enfoque \"Agricultura 4.0: cuándo, cuánto y cómo regar\", con un piloto de instrumentación y telemetría del riego en el distrito RUT (Roldanillo, La Unión y Toro) en el Valle del Cauca. La adopción de sensores, IoT y agricultura de precisión avanza de forma progresiva en el campo colombiano.",
      },
      {
        q: "¿Sirve para una finca pequeña o solo para grandes distritos de riego?",
        a: "Sirve para ambos. Se puede instrumentar desde el riego de una finca o un cultivo específico hasta un distrito de riego completo. Lo que define la viabilidad es un diagnóstico técnico del caso —cultivo, suelo, método de riego actual y fuente de energía—, no solo el tamaño.",
      },
    ],
  },
  {
    slug: "conectividad-rural-energia-transicion-productiva-campo-colombiano",
    title:
      "Sin señal no hay transición: por qué la conectividad rural (y la energía que la sostiene) define el futuro productivo de Colombia",
    excerpt:
      "La conectividad rural en Colombia pasó de 32,2% a 56,9% de hogares entre 2022 y 2025, pero cerca de la otra mitad del campo sigue sin internet estable. Por qué la señal —y la energía que la mantiene encendida— es la otra mitad de la transición productiva, y cómo se resuelve con ingeniería.",
    category: ["Telecomunicaciones", "Energía Solar", "Sostenibilidad"],
    date: "2026-09-06",
    dateDisplay: "6 de septiembre, 2026",
    author: "Equipo DINASTEL SAS",
    coverImage: "/assets/brochure/solar-02.webp",
    readTime: "6 min de lectura",
    content: [
      {
        type: "p",
        text: "Cuando se habla de lo que le falta al campo colombiano, casi siempre se piensa en vías, en agua o en electricidad. Pero hay una infraestructura menos visible que hoy pesa tanto como esas tres: la conectividad. Sin una señal estable, un productor no puede consultar el precio de su cosecha, recibir un pago, monitorear su sistema de riego, pedir asistencia técnica ni acceder a los servicios digitales que el Estado y el mercado dan cada vez más por sentados.",
      },
      {
        type: "p",
        text: "Y aquí hay una idea que vale la pena dejar clara desde el principio: la transición energética y la transición digital son la misma conversación. Los sistemas solares modernos, el riego automatizado, la telemetría, la medición inteligente y el monitoreo remoto solo funcionan si hay dos cosas al tiempo: energía confiable y conexión. Una sin la otra se queda a medias.",
      },
      { type: "h2", text: "Un país que se conectó, pero no parejo" },
      {
        type: "p",
        text: "La buena noticia es que Colombia avanzó, y bastante. La cobertura de internet creció de forma sostenida en los últimos años y el campo, que siempre había quedado rezagado, por fin empezó a cerrar distancia.",
      },
      {
        type: "ul",
        items: [
          "A nivel nacional, el 73,9% de los hogares ya cuenta con acceso a internet fijo o móvil, un aumento de 14,4 puntos frente a 2022, según cifras del MinTIC con base en la Encuesta de Calidad de Vida (ECV) del DANE.",
          "En las zonas rurales, la conectividad pasó de 32,2% en 2022 a 56,9% en 2025: casi 25 puntos de avance y, por primera vez, más de la mitad de los hogares rurales conectados.",
          "La brecha entre lo urbano y lo rural se redujo cerca de 30 puntos y hoy ronda los 20 puntos, todavía significativa, pero muy por debajo de lo que era.",
          "En tres años se sumaron más de 3,5 millones de hogares al servicio de internet, y programas como Zonas Digitales Rurales conectaron a más de 1,2 millones de personas adicionales.",
        ],
      },
      {
        type: "p",
        text: "El matiz importante está en el reverso de esa misma cifra: si el 56,9% de los hogares rurales tiene internet, cerca de la otra mitad todavía no. Y donde sí hay señal, no siempre es estable ni suficiente para una operación productiva que dependa de ella todos los días. El promedio nacional esconde veredas enteras donde la conexión se cae con la lluvia, con un corte de luz o simplemente porque el equipo que la sostiene se quedó sin energía.",
      },
      { type: "h2", text: "Por qué la conectividad ya no es un lujo en el campo" },
      {
        type: "p",
        text: "Durante años, el internet rural se vio como un asunto de comodidad: revisar redes sociales o hacer una videollamada. Hoy es infraestructura productiva, tan concreta como una bomba o un transformador. De la conexión dependen tareas que antes se hacían \"a pie\" o no se hacían:",
      },
      {
        type: "ul",
        items: [
          "Consultar precios de mercado, clima y pronósticos antes de sembrar, cosechar o vender.",
          "Recibir y hacer pagos digitales, facturar electrónicamente y acceder a crédito o a programas oficiales.",
          "Operar y supervisar de forma remota sistemas de riego, bombeo, cuartos fríos y plantas solares desde el celular.",
          "Recibir asistencia técnica, telemedicina y educación a distancia sin desplazarse horas hasta el casco urbano.",
          "Enviar la telemetría de sensores y medidores que hace posible producir —y consumir energía— con datos, no a ojo.",
        ],
      },
      {
        type: "quote",
        text: "En el campo, la señal dejó de ser entretenimiento: es la diferencia entre operar con información en tiempo real o seguir adivinando.",
      },
      { type: "h2", text: "El problema silencioso: sin energía confiable, no hay conectividad" },
      {
        type: "p",
        text: "Aquí es donde la conversación digital se encuentra con la eléctrica. Una antena, un enrutador, un radioenlace o un rack de comunicaciones no funcionan con buenos deseos: necesitan energía estable las 24 horas. En buena parte del territorio rural, donde la red eléctrica es débil, intermitente o directamente no llega, la conectividad muere apenas se cae la luz. De nada sirve un enlace de fibra o un radio de última generación si el equipo que lo alimenta se apaga cada tarde.",
      },
      {
        type: "p",
        text: "Por eso, en sitios alejados, la conexión y la energía se diseñan juntas. Un pequeño sistema solar con respaldo en baterías mantiene encendidos los equipos de comunicación aunque la red falle o simplemente no exista, y convierte un punto aislado en un nodo que sigue en línea. Es la misma lógica de un sistema híbrido o aislado bien dimensionado, pero puesta al servicio de la señal: primero garantizar la energía de las cargas críticas —comunicaciones, control, monitoreo— y sobre esa base montar la conectividad.",
      },
      { type: "h2", text: "Conectividad no es solo \"poner internet\"" },
      {
        type: "p",
        text: "Llevar y sostener una conexión confiable fuera de la ciudad es un problema de ingeniería, no de contratar un plan. Detrás de una operación conectada que no se cae hay varias capas que tienen que estar bien resueltas:",
      },
      {
        type: "ul",
        items: [
          "El enlace de última milla: fibra donde llega, o radioenlaces punto a punto cuando el terreno o la distancia lo exigen, dimensionados para el ancho de banda que la operación necesita de verdad.",
          "La red interna: cableado estructurado, WiFi industrial y switching para que la señal llegue con calidad a bodegas, salas de ordeño, oficinas de campo o casetas de control, y no solo a la entrada.",
          "La energía respaldada: UPS, sistemas solares con baterías y tableros bien hechos para que racks y equipos de comunicación no dependan de que la red se porte bien.",
          "La protección eléctrica: puesta a tierra, protección contra sobretensiones y RETIE, clave en zonas rurales expuestas a rayos y a redes inestables que \"queman\" equipos.",
          "El monitoreo: supervisión remota del enlace y de la energía que lo sostiene, para saber que algo va a fallar antes de que el sitio quede incomunicado.",
        ],
      },
      { type: "h2", text: "Qué tiene que ver esto con una empresa del suroccidente" },
      {
        type: "p",
        text: "Esto no es un problema abstracto de política pública: es el día a día de cualquier operación que viva fuera del centro de la ciudad. Una finca en el norte del Valle, una planta de proceso en zona rural del Cauca, una bodega o un centro de acopio en Nariño, una sede productiva a la que la fibra todavía no llega. Todas necesitan lo mismo: energía confiable y una conexión que no se caiga cuando más se usa.",
      },
      {
        type: "p",
        text: "Para una empresa como DINASTEL, con base en Cali y foco en el suroccidente colombiano, este cruce es terreno natural: telecomunicaciones, redes, automatización, ingeniería eléctrica y sistemas solares no son servicios sueltos, sino piezas de un mismo sistema. La conectividad rural bien hecha es, al final, un asunto de energía, redes, protección y monitoreo trabajando juntos.",
      },
      { type: "h2", text: "Cómo lo abordamos en DINASTEL SAS" },
      {
        type: "p",
        text: "Aplicamos el mismo flujo que usamos en cualquier proyecto —diagnóstico, diseño integrado, ejecución y operación con soporte—, aquí orientado a que un sitio productivo quede conectado y con energía estable:",
      },
      {
        type: "ul",
        items: [
          "Telecomunicaciones y redes: enlaces de última milla, cableado estructurado, WiFi industrial y racks de comunicaciones, dimensionados para la operación real del sitio.",
          "Sistemas solares llave en mano (híbridos o aislados): energía fotovoltaica con respaldo en baterías para mantener encendidos los equipos críticos de comunicación y control, con diseño, legalización RETIE e instalación incluidas.",
          "Ingeniería eléctrica y de redes: puesta a tierra, protección contra sobretensiones y respaldo eléctrico que un sitio expuesto necesita para que sus equipos no se dañen.",
          "Automatización, mantenimiento y monitoreo remoto: supervisión a distancia del enlace y de la energía, con mantenimiento preventivo y correctivo para que un sitio alejado no dependa de que alguien suba a revisarlo cuando ya falló.",
        ],
      },
      {
        type: "p",
        text: "Aclaración honesta: la solución de conectividad y energía de cada sitio depende de su caso concreto —la distancia a la red, el terreno, el ancho de banda que se necesita, las cargas a respaldar y el presupuesto—. Por eso el primer paso siempre es un diagnóstico técnico, no una promesa genérica.",
      },
      {
        type: "p",
        text: "¿Tiene una operación productiva en el suroccidente colombiano a la que la energía inestable o la falta de conexión le están costando caro? Escríbanos y evaluamos con usted cómo dejarla conectada y con energía confiable.",
      },
    ],
    faq: [
      {
        q: "¿Cuántos hogares rurales en Colombia tienen internet?",
        a: "Según cifras del MinTIC con base en la Encuesta de Calidad de Vida del DANE, la conectividad rural pasó de 32,2% en 2022 a 56,9% en 2025 —por primera vez más de la mitad de los hogares rurales conectados—. A nivel nacional, el 73,9% de los hogares tiene acceso a internet fijo o móvil.",
      },
      {
        q: "¿Qué tiene que ver la conectividad con la energía solar?",
        a: "Todo equipo de conectividad —antenas, enrutadores, radioenlaces, racks— necesita energía estable las 24 horas. En zonas rurales con red eléctrica débil o inexistente, un sistema solar con baterías mantiene esos equipos encendidos, de modo que la conexión no se cae cada vez que falla la luz. Por eso, en sitios alejados, energía y conectividad se diseñan juntas.",
      },
      {
        q: "¿Cómo se lleva internet estable a una finca o sitio productivo lejos de la ciudad?",
        a: "Depende del sitio: con fibra donde llega, o con radioenlaces punto a punto cuando la distancia o el terreno lo exigen, más una red interna (cableado estructurado, WiFi industrial), energía respaldada, protección eléctrica y monitoreo. Es un diseño de ingeniería, no solo contratar un plan de datos.",
      },
      {
        q: "¿Por qué es tan importante la protección eléctrica en conectividad rural?",
        a: "Las zonas rurales suelen estar expuestas a rayos y a redes eléctricas inestables que dañan equipos de comunicación. Una buena puesta a tierra, protección contra sobretensiones y una instalación bajo RETIE protegen la inversión y evitan que el sitio quede incomunicado por un daño eléctrico.",
      },
      {
        q: "¿DINASTEL solo instala energía solar o también redes y conectividad?",
        a: "DINASTEL integra ingeniería eléctrica y de redes, sistemas solares, telecomunicaciones, automatización y mantenimiento. Para un sitio productivo fuera de la ciudad, eso significa resolver en un mismo proyecto la energía confiable, la conexión, la protección y el monitoreo, sin dejar cabos sueltos que el cliente tenga que coordinar por su cuenta.",
      },
    ],
  },
  {
    slug: "cadena-de-frio-solar-perdidas-poscosecha-agricultura-colombia",
    title: "La cosecha que se pierde por falta de frío: cómo la energía solar sostiene la cadena de frío en el campo colombiano",
    excerpt:
      "Colombia pierde y desperdicia 9,76 millones de toneladas de alimentos al año —el 34% de lo que produce—, y buena parte se echa a perder por falta de frío entre la finca y el mercado. La energía solar y una cadena de frío bien diseñada son hoy la forma más rentable de que la cosecha llegue entera.",
    category: ["Energía Solar", "Agroindustria", "Sostenibilidad"],
    date: "2026-09-08",
    dateDisplay: "8 de septiembre, 2026",
    author: "Equipo DINASTEL SAS",
    coverImage: "/assets/brochure/solar-03.webp",
    readTime: "6 min de lectura",
    content: [
      {
        type: "p",
        text: "Hay una pérdida que casi nunca aparece en la contabilidad de una finca, pero que se paga igual: la cosecha que se dañó antes de venderse. El aguacate que se ablandó esperando el camión, la fruta que fermentó bajo el sol al borde de la carretera, la leche que se cortó porque el tanque no enfrió a tiempo. No es mala suerte: casi siempre es un problema de frío —y de la energía que lo mantiene encendido—.",
      },
      {
        type: "p",
        text: "El país produce comida de sobra; el problema es cuánta llega entera al plato. Y ahí, entre la finca y el mercado, la cadena de frío es el eslabón que más se rompe. La buena noticia es que la tecnología para sostenerla ya es madura y, con energía solar, más rentable y confiable que nunca.",
      },
      { type: "h2", text: "El tamaño del desperdicio: 9,76 millones de toneladas al año" },
      {
        type: "p",
        text: "Las cifras oficiales son contundentes. Según el estudio del Departamento Nacional de Planeación (DNP), en Colombia se pierden y desperdician cerca de 9,76 millones de toneladas de alimentos al año: el equivalente al 34% de todo lo que el país podría consumir. De ese total, 6,22 millones de toneladas se pierden a lo largo de la cadena —antes de llegar al consumidor— y 3,54 millones se desperdician en distribución y hogares.",
      },
      {
        type: "p",
        text: "Lo más revelador es dónde se concentra esa pérdida. La etapa de producción aporta el 40,5%, y la de poscosecha y almacenamiento el 19,8% —cerca de 1,93 millones de toneladas que se echan a perder después de cosechadas, muchas veces por manejo, transporte y frío insuficientes—. Las frutas y verduras son las más golpeadas: 6,1 millones de toneladas al año, justamente los productos más perecederos y más dependientes de una cadena de frío que no se interrumpa.",
      },
      {
        type: "quote",
        text: "Un alimento que se dañó después de cosechado no solo es comida perdida: es agua, energía, trabajo y dinero de un productor que ya se gastaron y no volverán.",
      },
      { type: "h2", text: "La cadena de frío: el puente invisible entre la finca y el mercado" },
      {
        type: "p",
        text: "La cadena de frío es el conjunto de eslabones que mantienen un producto perecedero dentro de su rango de temperatura desde que se cosecha hasta que se consume: el preenfriamiento en campo, el cuarto frío del centro de acopio, el transporte refrigerado y la vitrina del punto de venta. Basta que uno de esos eslabones se rompa —unas horas sin frío en un día caluroso— para que la vida útil del producto se derrumbe y buena parte de la cosecha deje de ser vendible.",
      },
      {
        type: "p",
        text: "En un país tropical, ese margen es aún más estrecho. La cosecha sale del campo a temperatura ambiente, muchas veces lejos de un centro de acopio y de una red eléctrica confiable. Y el frío tiene una exigencia que lo hace especialmente sensible a la energía: no es un consumo de ratos, es un consumo de 24 horas. Un cuarto frío o un tanque de enfriamiento no pueden apagarse las noches ni los fines de semana. Cada corte de luz, cada planta diésel que se queda sin combustible, es un riesgo directo sobre el producto guardado.",
      },
      { type: "h2", text: "Por qué la energía es el cuello de botella (y por qué el sol ayuda)" },
      {
        type: "p",
        text: "Refrigerar es de las cargas más intensivas y constantes que existen. En zonas rurales, donde la red es débil o intermitente —o directamente no llega—, sostener esa carga con la sola red o con un generador diésel es caro, contaminante y frágil. El resultado paradójico es conocido: se cosecha bien, pero se pierde en la bodega porque el frío falló justo cuando más se necesitaba.",
      },
      {
        type: "p",
        text: "Aquí es donde la energía solar cambia la ecuación, y por partida doble. Primero, porque Colombia recibe radiación solar estable durante todo el año —del orden de 4,5 kWh/m² al día en promedio según el Atlas de Radiación Solar (UPME-IDEAM)—, lo que hace del recurso una fuente predecible para alimentar refrigeración. Y segundo, porque hay una feliz coincidencia física: el momento de mayor calor del día, cuando el producto más necesita frío, es también el de mayor generación solar. El sol que amenaza la cosecha es el mismo que puede pagar por conservarla.",
      },
      {
        type: "ul",
        items: [
          "Un sistema solar dimensionado para la carga de refrigeración reduce de forma drástica el gasto recurrente en energía de red o en diésel, que en un cuarto frío corre las 24 horas.",
          "Un esquema híbrido con respaldo en baterías mantiene el frío encendido durante los cortes de red, que son justo cuando un cuarto frío desprotegido pone en riesgo todo lo almacenado.",
          "En sitios sin red, un sistema aislado bien diseñado hace viable un centro de acopio con frío donde antes era imposible, acercando el enfriamiento a la finca y acortando el tiempo entre cosecha y refrigeración.",
          "El costo marginal de enfriar con sol, una vez instalado el sistema, es cercano a cero: se cambia una factura que crece cada año por un activo que trabaja para el negocio.",
        ],
      },
      { type: "h2", text: "El país ya está invirtiendo en frío: la infraestructura crece" },
      {
        type: "p",
        text: "No es una tendencia menor. Durante 2025 el sector avanzó en la construcción de nueva infraestructura de cadena de frío en varias regiones del país, con centros logísticos refrigerados en marcha en la costa y proyectos anunciados para el interior —incluida una nueva instalación prevista para Cali—, en respuesta a una demanda creciente de productos perecederos de calidad, tanto para el mercado interno como para la exportación de frutas y flores.",
      },
      {
        type: "p",
        text: "Para el suroccidente colombiano —Valle, Cauca y Nariño, con su fuerte vocación frutícola, hortícola y láctea— esto es una oportunidad concreta: cada centro de acopio, cada planta de proceso y cada finca que suma frío bien alimentado es cosecha que deja de perderse. Pero toda esa infraestructura comparte el mismo talón de Aquiles: no sirve de nada si la energía que la sostiene es cara, inestable o no llega. El frío es tan bueno como la energía que lo respalda.",
      },
      { type: "h2", text: "Frío que no se apaga: no es solo poner un cuarto frío" },
      {
        type: "p",
        text: "Sostener la cadena de frío es un problema de ingeniería integral, no de comprar un equipo suelto. Detrás de un cuarto frío que no falla hay energía confiable, una instalación eléctrica segura, obra civil adecuada, automatización que controla la temperatura y monitoreo que avisa antes de que algo se dañe. Si cualquiera de esas piezas queda coja, el riesgo vuelve.",
      },
      {
        type: "ul",
        items: [
          "El monitoreo de temperatura en tiempo real convierte una alarma tardía en una alerta temprana: saber que un cuarto frío empezó a subir de temperatura a medianoche —y actuar— es la diferencia entre salvar la carga y perderla.",
          "La automatización permite priorizar el autoconsumo solar de día, gestionar el banco de baterías y transferir a respaldo apenas la red se cae, sin que nadie tenga que estar pendiente.",
          "La protección eléctrica bajo RETIE —puesta a tierra, protecciones adecuadas— cuida los compresores y equipos de refrigeración, que son costosos y sensibles a las redes inestables y a los rayos del campo.",
        ],
      },
      {
        type: "quote",
        text: "¿Sabe hoy, con datos, cuánto le cuesta la energía de su frío y qué pasaría con su producto si la red se cae un fin de semana entero?",
      },
      { type: "h2", text: "Cómo lo abordamos en DINASTEL SAS" },
      {
        type: "p",
        text: "En DINASTEL trabajamos cualquier proyecto con un mismo flujo integral —diagnóstico, diseño, ejecución y operación con soporte—, y cuando se trata de sostener frío, ese enfoque integrado es justo lo que evita los cabos sueltos que terminan costando la cosecha. Energía, electricidad, obra civil, automatización y monitoreo no son servicios separados que el cliente tenga que coordinar por su cuenta: van pensados como un solo sistema.",
      },
      {
        type: "ul",
        items: [
          "Sistemas solares llave en mano (on-grid, híbridos o aislados): diagnóstico del consumo real de refrigeración, diseño, legalización RETIE, instalación y puesta en marcha, para alimentar cuartos fríos, tanques de enfriamiento y centros de acopio.",
          "Ingeniería eléctrica y de redes con RETIE: la base segura sobre la que trabajan los compresores y equipos de frío, con protecciones y puesta a tierra bien hechas.",
          "Telecomunicaciones y automatización: control y monitoreo remoto de temperatura y de la energía, con alarmas que avisan antes de que una falla se convierta en producto dañado.",
          "Obras civiles: cimentación, estructuras de soporte y adecuaciones que un centro de acopio o una planta de proceso necesitan para durar a la intemperie.",
          "Mantenimiento preventivo, correctivo y monitoreo remoto: para que el frío de una instalación alejada no dependa de que alguien suba a revisarlo cuando el daño ya ocurrió.",
        ],
      },
      {
        type: "p",
        text: "Aclaración honesta: el ahorro energético y el diseño de cada sistema dependen del caso concreto —el tamaño del cuarto frío, la carga a refrigerar, las horas de sol de la zona, el estado de la red y el presupuesto—. Por eso el primer paso siempre es un diagnóstico técnico serio, no una promesa genérica.",
      },
      {
        type: "p",
        text: "¿Tiene una finca, un centro de acopio o una planta de proceso donde el costo de la energía o los cortes de luz le están costando producto? Escríbanos a comercial@dinastel.com o al +57 314 556 9567 y evaluamos con usted cómo sostener su cadena de frío con energía solar confiable.",
      },
    ],
    faq: [
      {
        q: "¿Cuántos alimentos se pierden en Colombia y por qué?",
        a: "Según el DNP, Colombia pierde y desperdicia cerca de 9,76 millones de toneladas de alimentos al año —el 34% de lo que podría consumir—. La etapa de producción aporta el 40,5% y la poscosecha y almacenamiento el 19,8% (unas 1,93 millones de toneladas), en buena parte por manejo, transporte y frío insuficientes. Las frutas y verduras, con 6,1 millones de toneladas, son las más afectadas.",
      },
      {
        q: "¿Qué es la cadena de frío y por qué se rompe tan fácil?",
        a: "Es el conjunto de eslabones que mantienen un producto perecedero en su rango de temperatura desde la cosecha hasta el consumo: preenfriamiento, cuarto frío, transporte refrigerado y punto de venta. Basta que un eslabón falle —unas horas sin frío en un día caluroso— para que la vida útil del producto se derrumbe. En zonas rurales, la causa más común de esa ruptura es una energía cara, inestable o inexistente.",
      },
      {
        q: "¿La energía solar sirve para alimentar un cuarto frío o un centro de acopio?",
        a: "Sí, y con una ventaja física: el momento de mayor calor del día, cuando más frío se necesita, coincide con el de mayor generación solar. Un sistema solar dimensionado para la carga de refrigeración reduce drásticamente el gasto en energía o diésel, y un esquema híbrido con baterías mantiene el frío encendido durante los cortes de red. En sitios sin red, un sistema aislado hace viable un centro de acopio con frío donde antes era imposible.",
      },
      {
        q: "¿Qué pasa con mi producto si se va la luz un fin de semana?",
        a: "Sin respaldo, un cuarto frío desprotegido empieza a subir de temperatura y puede echar a perder todo lo almacenado antes de que alguien lo note. Por eso un sistema híbrido con baterías y monitoreo de temperatura en tiempo real es clave: mantiene el frío durante el corte y genera una alerta temprana para actuar a tiempo, no una alarma cuando el producto ya se dañó.",
      },
      {
        q: "¿Qué incluye una solución de frío bien hecha además del equipo de refrigeración?",
        a: "Energía confiable (solar con respaldo), instalación eléctrica segura bajo RETIE, obra civil adecuada, automatización que controla la temperatura y prioriza el autoconsumo, y monitoreo remoto con alarmas. En DINASTEL esas piezas se diseñan como un solo sistema, para que no queden cabos sueltos que el cliente tenga que coordinar por su cuenta.",
      },
    ],
  },
  {
    slug: "datos-agroclimaticos-energia-solar-adaptacion-sequia-campo-colombiano",
    title: "Decidir con el clima a favor: cómo los datos agroclimáticos y la energía solar preparan al campo colombiano para la sequía",
    excerpt:
      "El Niño de 2023-2024 afectó cerca de una cuarta parte de los cultivos del país. Frente a una variabilidad climática cada vez más marcada, dos aliados deciden si una finca aguanta: la información agroclimática —que en Colombia ya existe y es gratuita— y la energía solar como herramienta real de adaptación.",
    category: ["Energía Solar", "Agricultura", "Adaptación Climática"],
    date: "2026-09-15",
    dateDisplay: "15 de septiembre, 2026",
    author: "Equipo DINASTEL SAS",
    coverImage: "/assets/brochure/interventoria-01.webp",
    readTime: "6 min de lectura",
    content: [
      {
        type: "p",
        text: "Para un productor, el clima dejó de ser un telón de fondo. Un año llueve de más y se pudre la raíz; al siguiente no llueve y el pozo baja, el motor de riego arranca a toda hora y la factura de diésel se dispara. El campo colombiano lleva varios ciclos aprendiendo, a las malas, que la variabilidad del clima no es un imprevisto ocasional: es una variable del negocio, tan real como el precio del bulto de abono.",
      },
      {
        type: "p",
        text: "Frente a eso, hay dos cosas que deciden si una finca aguanta el golpe o lo sufre entero: la información —saber qué viene y qué hacer con tiempo— y la energía —tener la capacidad física de reaccionar sin depender de una red frágil o de un tanque de combustible que se acaba justo cuando más se necesita—. La buena noticia es que hoy Colombia tiene las dos al alcance, y bien combinadas.",
      },
      { type: "h2", text: "El clima ya no es un telón de fondo: es una variable del negocio" },
      {
        type: "p",
        text: "El fenómeno de El Niño de 2023-2024 lo dejó claro. Según El Colombiano, cerca de una cuarta parte de los cultivos del país resultaron afectados por la sequía asociada a ese evento, con el sur y el centro entre las zonas más golpeadas. El Ministerio de Agricultura, en uno de sus reportes de esa temporada, contabilizó más de 23.000 hectáreas de cultivos afectadas por el déficit hídrico —una foto parcial de un impacto que se sintió en el arroz, el maíz, el plátano y la ganadería de leche, y que presionó al alza el precio de los alimentos.",
      },
      {
        type: "p",
        text: "Y el péndulo no se queda quieto. Para el último trimestre de 2025, las predicciones agroclimáticas anticiparon una alta probabilidad de condiciones de La Niña —es decir, el problema opuesto: exceso de agua y riesgo de encharcamiento en zonas de las regiones Andina, Caribe y Pacífica—. Sequía un año, exceso al otro: esa oscilación es exactamente el terreno en el que un productor tiene que tomar decisiones de siembra, riego e inversión.",
      },
      {
        type: "quote",
        text: "El clima ya no se puede planificar mirando el calendario del año pasado. Se planifica con datos actualizados —y con la capacidad de actuar sobre ellos.",
      },
      { type: "h2", text: "Primer aliado: la información agroclimática (y en Colombia ya existe)" },
      {
        type: "p",
        text: "Aquí es donde muchos productores se sorprenden: Colombia no parte de cero. El país tiene uno de los sistemas de servicios climáticos para el agro más reconocidos de la región. Las Mesas Técnicas Agroclimáticas (MTA) —una innovación colombiana en la que se sientan en la misma mesa el IDEAM, el Ministerio de Agricultura, Agrosavia, la FAO, la Alianza Bioversity-CIAT, gremios, universidades y los propios agricultores— traducen la predicción del clima en recomendaciones concretas: qué sembrar, cuándo, cómo ajustar el riego.",
      },
      {
        type: "p",
        text: "En una década de funcionamiento, esas mesas se consolidaron en 27 espacios repartidos por las cinco regiones naturales del país, produjeron más de 300 boletines agroclimáticos y acercaron información climática útil a más de un millón de productores. El IDEAM, además, publica de forma periódica su Boletín Agroclimático Nacional y sus boletines de predicción climática, de acceso público y gratuito.",
      },
      {
        type: "p",
        text: "El punto es sencillo: la información existe y es buena. Pero la información, por sí sola, no riega un cultivo ni enfría un tanque de leche. Saber que viene una temporada seca solo sirve si se tiene con qué responder. Y ahí entra el segundo aliado.",
      },
      { type: "h2", text: "Segundo aliado: la energía como herramienta de adaptación" },
      {
        type: "p",
        text: "Cuando llega la sequía, el riego deja de ser opcional y pasa a ser la diferencia entre cosechar o perder. El problema es que regar cuesta energía, y en el campo esa energía suele venir de dos fuentes caras y frágiles: una red eléctrica rural intermitente o un motor diésel que depende del precio del combustible y de que alguien lo mantenga lleno. Justo cuando más se bombea —los meses secos—, más se gasta.",
      },
      {
        type: "p",
        text: "La energía solar rompe esa dependencia. Y lo interesante es que se decide con la misma lógica de datos que el clima: así como el IDEAM mide la lluvia, también mide el sol. Según el Atlas de Radiación Solar de Colombia (UPME-IDEAM), el país recibe un promedio cercano a 4,5 kWh/m² al día, por encima del promedio mundial, con máximos de entre 5,5 y 6,0 kWh/m² diarios en el norte de la región Caribe y La Guajira. Ese recurso es estable durante todo el año y, a diferencia de la lluvia, es predecible: se puede dimensionar un sistema para producir lo que un bombeo o una refrigeración necesitan.",
      },
      {
        type: "ul",
        items: [
          "Bombeo solar para riego: desacopla el costo de regar del precio del diésel y de los cortes de red. En temporada seca —cuando más se bombea— es también cuando más sol hay para hacerlo.",
          "Sistemas híbridos con baterías: mantienen el riego, el frío o los equipos críticos encendidos cuando la red falla, que es precisamente cuando una sequía o una ola de calor los pone a prueba.",
          "Automatización y telemetría del agua: regar con datos —sensores de humedad, programación, medición del caudal— en vez de \"a ojo\" ahorra agua y energía a la vez, y hace que cada gota y cada kilovatio rindan más en el año seco.",
          "Monitoreo remoto: saber desde el celular cómo está produciendo el sistema y cómo está el consumo permite corregir antes de que un problema se convierta en cosecha perdida.",
        ],
      },
      { type: "h2", text: "Del dato a la decisión: por qué un estudio serio importa" },
      {
        type: "p",
        text: "Un atlas de radiación y un boletín agroclimático son el punto de partida, no la respuesta. Dicen cuánto sol recibe una región en promedio y qué se espera del clima, pero no dicen cuántos paneles necesita su bomba, cómo se comporta su consumo hora a hora, cuánta sombra tiene su terreno o si conviene un sistema conectado a la red, híbrido o aislado. Esa es la distancia entre un dato público y una inversión que de verdad rinde.",
      },
      {
        type: "p",
        text: "Por eso el primer paso siempre es un estudio de factibilidad y un diseño de ingeniería sobre el caso concreto: consumo real, recurso solar del sitio, estado de la red, presupuesto y objetivo (ahorrar, tener respaldo o ambos). Es lo que convierte la buena información pública en un sistema que responde cuando el clima aprieta.",
      },
      {
        type: "quote",
        text: "¿Sabe hoy, con datos, cuánto le cuesta regar en temporada seca y qué pasaría con su producción si la red se cae una semana entera en plena cosecha?",
      },
      { type: "h2", text: "Cómo lo abordamos en DINASTEL SAS" },
      {
        type: "p",
        text: "En DINASTEL trabajamos cada proyecto con un mismo flujo integral —diagnóstico, diseño, ejecución y operación con soporte—, de modo que la información climática y de recurso solar se convierta en un sistema que funciona, no en un buen informe guardado en un cajón. Energía, electricidad, obra civil, automatización y monitoreo se piensan como un solo sistema, no como servicios sueltos que el cliente tenga que coordinar por su cuenta.",
      },
      {
        type: "ul",
        items: [
          "Sistemas solares llave en mano (on-grid, híbridos o aislados): diagnóstico del consumo real, estudio de factibilidad con el recurso solar del sitio, diseño, legalización RETIE, instalación y puesta en marcha —para bombeo de riego, refrigeración y cargas críticas de la finca o la agroindustria.",
          "Ingeniería eléctrica y de redes con RETIE: la base segura sobre la que trabajan motores, bombas y equipos, con protecciones y puesta a tierra bien hechas.",
          "Telecomunicaciones y automatización: telemetría del agua y de la energía, riego programado y monitoreo remoto con alarmas que avisan antes de que una falla se convierta en pérdida.",
          "Obras civiles: cimentaciones, estructuras de soporte y adecuaciones para que la infraestructura dure a la intemperie del campo.",
          "Mantenimiento preventivo, correctivo y monitoreo remoto: para que un sistema alejado no dependa de que alguien suba a revisarlo cuando el daño ya ocurrió.",
        ],
      },
      {
        type: "p",
        text: "Aclaración honesta: el ahorro y el diseño de cada sistema dependen del caso concreto —el consumo, las horas de sol de la zona, el estado de la red, el tipo de cultivo y el presupuesto—. Por eso el primer paso siempre es un diagnóstico técnico serio, no una promesa genérica.",
      },
      {
        type: "p",
        text: "¿Tiene una finca o una agroindustria donde la sequía, el costo del diésel o los cortes de luz le están costando producción? Escríbanos a comercial@dinastel.com o al +57 314 556 9567 y evaluamos con usted cómo convertir los datos del clima y del sol en un sistema que responda cuando más lo necesita.",
      },
    ],
    faq: [
      {
        q: "¿Qué tan expuesto está el campo colombiano a la sequía y a El Niño?",
        a: "Bastante. Durante El Niño de 2023-2024, según El Colombiano, cerca de una cuarta parte de los cultivos del país resultaron afectados, y el Ministerio de Agricultura reportó más de 23.000 hectáreas afectadas por déficit hídrico en uno de sus balances de la temporada. Además, el clima oscila: para finales de 2025 se anticiparon condiciones de La Niña, con el riesgo opuesto de exceso de agua. Esa variabilidad obliga a planificar con datos actualizados, no con el calendario del año anterior.",
      },
      {
        q: "¿Existe en Colombia información climática gratuita para tomar decisiones agrícolas?",
        a: "Sí. El IDEAM publica de forma periódica su Boletín Agroclimático Nacional y boletines de predicción climática, de acceso público. Y las Mesas Técnicas Agroclimáticas (MTA) —con IDEAM, Ministerio de Agricultura, Agrosavia, FAO, Alianza Bioversity-CIAT, gremios y agricultores— traducen esa predicción en recomendaciones concretas. En una década se consolidaron 27 mesas, más de 300 boletines y más de un millón de productores alcanzados.",
      },
      {
        q: "¿Cuánto sol recibe Colombia para un sistema solar?",
        a: "Según el Atlas de Radiación Solar de Colombia (UPME-IDEAM), el promedio ronda los 4,5 kWh/m² al día, por encima del promedio mundial, con máximos de entre 5,5 y 6,0 kWh/m² diarios en el norte de la región Caribe y La Guajira. Es un recurso estable todo el año y, a diferencia de la lluvia, predecible, lo que permite dimensionar un sistema con confianza.",
      },
      {
        q: "¿Por qué la energía solar ayuda a adaptarse a la sequía?",
        a: "Porque el riego es la respuesta a la sequía, y regar cuesta energía. La solar desacopla ese costo del precio del diésel y de los cortes de red, y coincide en el tiempo: en temporada seca, cuando más se bombea, es cuando más sol hay. Con baterías, además, mantiene el riego y el frío encendidos cuando la red falla, y con automatización y telemetría se riega con datos, ahorrando agua y energía a la vez.",
      },
      {
        q: "¿Basta con mirar el atlas solar para instalar un sistema?",
        a: "No. El atlas y los boletines son el punto de partida, no la respuesta. Dicen el promedio de una región, pero no cuántos paneles necesita su bomba, cómo se comporta su consumo, cuánta sombra tiene su terreno o si conviene on-grid, híbrido o aislado. Por eso el primer paso es un estudio de factibilidad y un diseño de ingeniería sobre su caso concreto.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
