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
        a: "Sí. La Resolución CREG 174 de 2021 regula la autogeneración a pequeña escala (hasta 1 MW) y permite un esquema de medición bidireccional (net metering) que genera créditos de energía por los excedentes que entregas a la red.",
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
        text: "¿Tienes una finca o un proyecto agrícola donde el diésel o la falta de red te están costando caro? Escríbenos y evaluamos contigo si el bombeo solar y un sistema fotovoltaico llave en mano tienen sentido para tu caso.",
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
    title: "Lo que no se mide, se paga: monitoreo y automatización para que tu sistema solar (y tu instalación eléctrica) rinda de verdad",
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
        text: "Ese mismo año dejó otra lección: entre febrero y marzo de 2026 los precios de la energía en bolsa subieron alrededor del 80% según XM, por el manejo preventivo de embalses ante el riesgo de El Niño. Con una matriz que sigue dependiendo en cerca de dos tercios de la generación hídrica, cada kilovatio que tu propio sistema produce bien es un kilovatio que no le compras a una red volátil. Por eso importa tanto que produzca bien, no solo que produzca.",
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
        text: "El monitoreo te dice qué está pasando; la automatización hace que el sistema actúe sin esperar a que alguien reaccione. Es el terreno donde la ingeniería eléctrica se cruza con las telecomunicaciones y el control. Con la lógica de control adecuada, una instalación puede priorizar el autoconsumo cuando hay sol, gestionar la carga de un banco de baterías, transferir automáticamente a respaldo cuando la red se cae, o apagar equipos no críticos ante una sobrecarga.",
      },
      {
        type: "p",
        text: "Para una empresa con operación continua, esto es la diferencia entre un corte que detiene la producción y una transferencia que el personal ni siquiera nota. Para un hogar o un conjunto residencial, es la diferencia entre aprovechar de verdad la energía propia y desperdiciar la mitad.",
      },
      { type: "h2", text: "No es solo cosa del sol: tu instalación eléctrica también" },
      {
        type: "p",
        text: "El mismo principio aplica a la parte eléctrica \"tradicional\". Un tablero, una subestación o un circuito industrial también se degradan, y también avisan antes de fallar —con calentamiento, con caídas de tensión, con consumos anómalos— si alguien está midiendo. La termografía periódica de tableros, el monitoreo de variables eléctricas y las alarmas ante anomalías son la versión eléctrica de la misma idea: lo que se mide se puede corregir a tiempo; lo que no se mide, se paga cuando ya es tarde.",
      },
      {
        type: "quote",
        text: "¿Sabes hoy, con datos, cuánto está produciendo tu sistema solar y si tu instalación eléctrica está funcionando como debería? ¿O lo estás asumiendo?",
      },
      { type: "h2", text: "Cómo lo resolvemos en DINASTEL SAS" },
      {
        type: "p",
        text: "En DINASTEL no entregamos un sistema y desaparecemos. Trabajamos con un mismo flujo para cualquier proyecto —diagnóstico, diseño integrado, ejecución, y operación y soporte—, y el monitoreo forma parte de esa última etapa, no es un extra que el cliente tenga que resolver por su cuenta.",
      },
      {
        type: "ul",
        items: [
          "Telecomunicaciones y automatización: instrumentación, control y monitoreo remoto para que tu instalación se lea en tiempo real y reaccione sola ante lo previsible.",
          "Sistemas solares llave en mano: diseño, legalización e instalación on-grid o híbrida, entregados con monitoreo de producción incluido para que el ahorro se pueda verificar, no solo prometer.",
          "Ingeniería eléctrica y de redes: diseño, instalación y subestaciones de baja y media tensión, con interventoría y eficiencia energética.",
          "Mantenimiento: preventivo, correctivo y monitoreo remoto, para que ninguna instalación quede sin vigilancia una vez entregada.",
        ],
      },
      {
        type: "p",
        text: "Aclaración: los rangos de pérdidas y de capacidad efectiva mencionados son referencias técnicas del sector y varían según el clima, la ubicación, el tipo de suciedad y el estado de cada instalación. Por eso el primer paso siempre es un diagnóstico real de tu caso, no un promedio genérico.",
      },
      {
        type: "p",
        text: "¿Quieres saber cuánto está rindiendo de verdad tu sistema solar o tu instalación eléctrica —y cuánto podrías estar perdiendo sin notarlo? Escríbenos y lo revisamos contigo con datos.",
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
        a: "El monitoreo te dice qué está pasando (producción, fallas, caídas de rendimiento); la automatización hace que el sistema actúe solo — priorizar autoconsumo, gestionar baterías o transferir a respaldo ante un corte, sin esperar intervención humana.",
      },
      {
        q: "¿El monitoreo también sirve para instalaciones eléctricas normales, no solo solares?",
        a: "Sí. La termografía periódica de tableros, el monitoreo de variables eléctricas y las alarmas ante anomalías detectan calentamiento o consumos anómalos antes de que se conviertan en una falla costosa.",
      },
    ],
  },
  {
    slug: "estudio-factibilidad-solar-colombia-cuanto-produce-antes-de-instalar",
    title: "Antes de comprar los paneles: por qué un estudio de factibilidad decide cuánto vas a ahorrar de verdad",
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
        text: "La verdad es más aburrida y mucho más útil: cuánto vas a producir —y por lo tanto cuánto vas a ahorrar— depende de datos concretos de tu caso. Y esos datos se levantan antes de comprar nada, en lo que llamamos un estudio de factibilidad. Lo más inteligente que puedes hacer antes de invertir en paneles no es comprar paneles: es medir.",
      },
      { type: "h2", text: "El país ya decidió; falta que cada techo decida bien" },
      {
        type: "p",
        text: "Que la energía solar es una buena idea en Colombia ya no está en discusión a nivel de país. En 2025 la generación solar superó por primera vez al carbón en la generación anual de electricidad: el sol produjo 4.473,8 GWh, un 25% más que los 3.564,2 GWh del carbón, según la UPME. Y no es solo tema de grandes plantas: hacia mediados de 2026 Colombia ya superaba los 24.000 techos solares registrados entre hogares, comercios e industria.",
      },
      {
        type: "p",
        text: "Ese es justamente el punto. La decisión de país ya está tomada; la que falta es la de cada techo. Y ahí no sirve el promedio nacional: sirve el número de tu instalación. Dos casas en la misma cuadra, con el mismo panel, pueden producir muy distinto según hacia dónde miran, qué sombras tienen y cuánta energía consumen. El promedio no paga tu factura; tu sistema sí, si está bien dimensionado.",
      },
      { type: "h2", text: "\"¿Cuánto voy a producir?\" empieza por las horas de sol pico" },
      {
        type: "p",
        text: "El primer dato de cualquier estudio serio es el recurso solar del sitio, que en el sector se mide en Horas Sol Pico (HSP): las horas equivalentes al día en las que el sol pega con su máxima intensidad (1.000 W/m²). Es lo que traduce \"aquí hay buen sol\" en un número con el que se puede calcular producción real.",
      },
      {
        type: "p",
        text: "Y ese número cambia según dónde estés. Cali, donde trabajamos, recibe más de 1.700 horas de sol al año, con un recurso solar del orden de 4,5 kWh/m² al día. Medellín ronda las 4,3 HSP, mientras ciudades de la costa como Barranquilla o Cartagena se acercan a 5,4 HSP. La misma potencia instalada produce distinto en cada una. Por eso el recurso solar de tu ubicación —no el de un folleto genérico— es lo primero que hay que medir.",
      },
      { type: "h2", text: "El error más caro es dimensionar a ojo" },
      {
        type: "p",
        text: "Con el sol resuelto, viene la otra mitad de la ecuación: cuánta energía consumes tú. Aquí es donde más proyectos se tuercen, porque el sistema se dimensiona \"a ojo\" o al tamaño que le conviene al vendedor, no al que necesita el cliente. Y equivocarse cuesta en las dos direcciones.",
      },
      {
        type: "ul",
        items: [
          "Un sistema sobredimensionado —más grande de lo que tu consumo justifica— encarece el proyecto sin necesidad: pagas por una capacidad que produce excedentes que no siempre recuperas del todo.",
          "Un sistema subdimensionado —más pequeño de lo que debería— se queda corto: no cubre la demanda prevista y el ahorro real termina muy por debajo de lo prometido.",
        ],
      },
      {
        type: "p",
        text: "La forma de acertar no es adivinar: es leer tu consumo real. Tus facturas de energía de los últimos 12 meses dicen cuántos kilovatios-hora gastas mes a mes y cómo varía tu consumo en el año. Ese perfil, cruzado con las HSP de tu zona, es lo que permite dimensionar un sistema a la medida —ni grande de más, ni corto—.",
      },
      { type: "h2", text: "Qué mira, en concreto, un estudio de factibilidad" },
      {
        type: "p",
        text: "Un estudio de factibilidad bien hecho no es un formulario ni una cotización de una línea. Es el trabajo de ingeniería que convierte \"quiero paneles\" en \"esto es lo que vas a producir, ahorrar y recuperar\". Reúne, como mínimo:",
      },
      {
        type: "ol",
        items: [
          "Recurso solar del sitio: las HSP reales de tu ubicación, no un promedio nacional.",
          "Perfil de consumo: tus kWh mes a mes durante un año, para dimensionar contra tu demanda real.",
          "Espacio y estructura: cuántos paneles caben de verdad en tu techo o terreno, y si la estructura los soporta con seguridad.",
          "Sombras y orientación: un árbol, un tanque, un edificio vecino o una mala orientación pueden restar producción todos los días; se evalúan antes, no después.",
          "Análisis financiero: costo del sistema, ahorro estimado, tiempo de retorno y cómo entran los incentivos de ley y la venta de excedentes en tu caso particular.",
        ],
      },
      {
        type: "p",
        text: "Esa es, en el fondo, la misma lógica que hoy empujan los gobiernos de la región cuando desarrollan plataformas y herramientas de información para que quien invierte en solar decida con datos y no con corazonadas. La herramienta ayuda; el estudio de ingeniería aterriza esos datos a tu techo concreto.",
      },
      { type: "h2", text: "Cuánto cuesta y en cuánto se paga" },
      {
        type: "p",
        text: "Con el estudio en la mano, los números dejan de ser promesa y se vuelven rango. Como referencia de mercado en Colombia en 2026, un sistema solar residencial conectado a red —sin baterías— suele costar del orden de $3,5 a $5 millones de pesos por kWp instalado, con el valor por kWp bajando a medida que el sistema crece. En total, una instalación residencial llave en mano suele ubicarse entre unos $10 y $42 millones según su tamaño, e incluye paneles, inversor, estructura, instalación, certificación RETIE y trámites ante el operador de red.",
      },
      {
        type: "p",
        text: "¿Y el retorno? Para sistemas residenciales conectados a red, el tiempo de recuperación de la inversión suele estimarse en un rango de 4 a 6 años, dependiendo del consumo, la tarifa que pagas y qué tan bien quedó dimensionado el sistema. La palabra clave es \"dependiendo\": ese retorno lo define el estudio, no el folleto.",
      },
      {
        type: "quote",
        text: "El panel más caro no es el que más vatios tiene: es el que se compró sin saber cuánto iba a producir. Un buen estudio de factibilidad cuesta una fracción del sistema y evita el error que cuesta el proyecto entero.",
      },
      { type: "h2", text: "Cómo lo hacemos en DINASTEL SAS" },
      {
        type: "p",
        text: "En DINASTEL trabajamos cualquier proyecto con un mismo flujo integral: diagnóstico, diseño, ejecución y operación. El estudio de factibilidad es la primera etapa —el diagnóstico— y no es un paso suelto ni un extra: es lo que hace que todo lo demás tenga sentido. Preferimos decirte con datos que un proyecto no te conviene, antes que venderte uno que no va a rendir.",
      },
      {
        type: "ul",
        items: [
          "Sistemas solares llave en mano: diagnóstico y estudio de factibilidad, diseño, legalización RETIE, instalación on-grid o híbrida y puesta en marcha, con la producción estimada sobre tu consumo real, no sobre un promedio.",
          "Ingeniería eléctrica y de redes: la base segura y bien dimensionada sobre la que se conecta cualquier sistema solar, con interventoría y eficiencia energética.",
          "Telecomunicaciones y automatización: instrumentación y monitoreo para verificar, ya en operación, que el sistema produce lo que el estudio prometió.",
          "Obras civiles: estructuras de soporte y adecuaciones necesarias, hechas para durar.",
          "Mantenimiento: preventivo, correctivo y monitoreo remoto, para que la producción estimada se sostenga año tras año.",
        ],
      },
      {
        type: "p",
        text: "Aclaración: las cifras de costo, HSP y tiempo de retorno de este artículo son referencias de mercado y varían según tu ubicación, tu consumo, la tarifa que pagas y las condiciones de cada proyecto. Precisamente por eso el primer paso siempre es un estudio real de tu caso, no un número prometido de memoria.",
      },
      {
        type: "p",
        text: "¿Quieres saber, con datos, cuánto produciría y ahorraría un sistema solar en tu techo antes de invertir un peso? Escríbenos y hacemos el estudio de factibilidad contigo.",
      },
    ],
    faq: [
      {
        q: "¿Qué es un estudio de factibilidad solar y por qué es necesario?",
        a: "Es el análisis técnico que mide el recurso solar de tu ubicación, tu consumo real, el espacio disponible, las sombras y el retorno financiero antes de comprar un sistema — evita comprar un sistema sobre o subdimensionado.",
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
        a: "Son las horas equivalentes al día en que el sol pega con su máxima intensidad (1.000 W/m²) — el dato base para calcular cuánto producirá realmente un sistema en tu ubicación. Cali tiene cerca de 4,5 HSP, Medellín 4,3, y ciudades de la costa hasta 5,4 HSP.",
      },
      {
        q: "¿Qué pasa si mi sistema solar queda mal dimensionado?",
        a: "Si queda sobredimensionado, pagas de más por una capacidad que no siempre recuperas en excedentes; si queda subdimensionado, no cubre tu demanda real y el ahorro termina muy por debajo de lo prometido.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
