// Preguntas frecuentes sobre las líneas de negocio.
// Base de las preguntas que la gente hace habitualmente sobre solar, eléctrico y legalización.
// Diseñado para alimentarse/actualizarse desde el asistente Dinai (DINASTEL OS): cuando una
// consulta se repite en app.dinastel.com, su respuesta madura y baja aquí. Cada bloque genera
// marcado FAQPage (schema.org) para SEO. Mantener respuestas cortas, verificables y sin cifras
// inventadas.

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqGrupo {
  categoria: string;
  items: FaqItem[];
}

export const faqGrupos: FaqGrupo[] = [
  {
    categoria: "Energía solar",
    items: [
      {
        q: "¿Cuánto puedo ahorrar en mi factura con energía solar?",
        a: "Depende de su consumo y de la radiación de su zona. Antes de proponer un sistema hacemos un estudio de factibilidad con su factura real, para que el ahorro proyectado sea un cálculo y no una promesa.",
      },
      {
        q: "¿Necesito baterías o me conecto a la red?",
        a: "Si busca reducir la factura, un sistema on-grid suele ser lo más rentable. Las baterías tienen sentido cuando necesita respaldo ante cortes o no tiene red disponible. Le dimensionamos la opción que corresponde a su caso, no la más costosa.",
      },
      {
        q: "¿Qué es AGPE y puedo vender mis excedentes de energía?",
        a: "AGPE es la figura de autogeneración a pequeña escala (CREG 174). Le permite inyectar a la red la energía que no consume y verla reflejada como crédito en su factura. Nosotros tramitamos ese registro por usted.",
      },
      {
        q: "¿Qué incentivos tributarios aplican a un sistema solar?",
        a: "La Ley 1715 permite deducción de renta, exclusión de IVA y depreciación acelerada. Estructuramos el trámite ante la UPME para que su proyecto acceda a los beneficios que le corresponden.",
      },
    ],
  },
  {
    categoria: "Eléctrico y legalización",
    items: [
      {
        q: "¿Qué es el RETIE y por qué me pueden rechazar la instalación?",
        a: "El RETIE es el reglamento de seguridad eléctrica obligatorio en Colombia. Sin dictamen de conformidad, el operador de red no energiza la instalación. La mayoría de trabajos informales fallan justo en esa parte documental.",
      },
      {
        q: "¿Hacen la legalización ante el operador de red (EMCALI, CELSIA)?",
        a: "Sí. Gestionamos el trámite completo de conexión y legalización de principio a fin, para que usted no tenga que coordinarlo con el operador.",
      },
      {
        q: "¿Separan la ingeniería de la mano de obra en la cotización?",
        a: "Siempre. Verá el valor de la ingeniería de detalle y el de la instalación por separado, nunca un combo opaco. Así decide con información real y compara de forma justa.",
      },
    ],
  },
  {
    categoria: "Trabajo con firmas integradoras (B2B)",
    items: [
      {
        q: "¿Subcontratan ingeniería de detalle e interventoría?",
        a: "Sí. Somos el tercero técnico de firmas integradoras y constructoras: diseño de detalle, legalización (RETIE, AGPE, UPME) e interventoría documental, incluidos proyectos de escala utility.",
      },
      {
        q: "¿En qué zonas prestan servicio?",
        a: "Operamos en Cali y el suroccidente colombiano, y ejecutamos ingeniería e interventoría documental para proyectos en el resto del país.",
      },
      {
        q: "¿Cómo solicito una cotización?",
        a: "Escríbanos por el formulario de contacto o por WhatsApp con los datos de su proyecto (o su factura de energía). Le presentamos una propuesta técnica y comercial a la medida.",
      },
    ],
  },
];
