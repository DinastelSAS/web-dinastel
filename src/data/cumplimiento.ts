// Cumplimiento normativo — el diferenciador real de DINASTEL frente a la competencia informal.
// La mayoría de instalaciones informales fallan en la parte documental, no en el montaje físico.

export interface Norma {
  codigo: string;
  nombre: string;
  que: string;
  hacemos: string;
}

export const normas: Norma[] = [
  {
    codigo: "RETIE",
    nombre: "Reglamento Técnico de Instalaciones Eléctricas",
    que: "Reglamento obligatorio que garantiza la seguridad de toda instalación eléctrica en Colombia. Sin dictamen de conformidad, la instalación no se puede energizar legalmente.",
    hacemos:
      "Diseñamos conforme a RETIE y entregamos el dictamen de conformidad que exige el operador de red.",
  },
  {
    codigo: "NTC 2050",
    nombre: "Código Eléctrico Colombiano",
    que: "Norma técnica que define cómo debe construirse una instalación eléctrica segura.",
    hacemos:
      "Aplicamos la NTC 2050 en cada diseño y memoria de cálculo, base para superar la revisión RETIE.",
  },
  {
    codigo: "Ley 1715 de 2014",
    nombre: "Fuentes No Convencionales de Energía",
    que: "Habilita los incentivos tributarios para energía solar: deducción de renta, exclusión de IVA y depreciación acelerada.",
    hacemos:
      "Estructuramos el trámite ante la UPME para que su proyecto acceda a los beneficios que le corresponden.",
  },
  {
    codigo: "CREG 174 de 2021",
    nombre: "Autogeneración a pequeña escala (AGPE)",
    que: "Regula la conexión de autogeneradores a la red y la entrega de excedentes de energía al sistema.",
    hacemos:
      "Tramitamos su registro AGPE para que pueda inyectar excedentes y verlos reflejados en la factura.",
  },
  {
    codigo: "AGPE",
    nombre: "Conexión simplificada ante el operador de red",
    que: "Procedimiento para conectar su sistema solar a la red del operador (EMCALI, CELSIA y otros).",
    hacemos:
      "Gestionamos el trámite completo de conexión simplificada de principio a fin, sin que usted tenga que coordinarlo.",
  },
  {
    codigo: "UPME 563 / MME 40284 de 2026",
    nombre: "Normativa vigente 2026",
    que: "Actualizaciones recientes: incentivos tributarios (Res. UPME 563) y exención de certificación plena para AGPE conectada a red menor a 10 kVA (Res. MME 40284).",
    hacemos:
      "Mantenemos cada proyecto al día con la regulación vigente, incluidos los cambios normativos de 2026.",
  },
];

export const promesaCumplimiento = {
  title: "El proyecto que no le rechaza el operador de red",
  desc: "La ingeniería y el cumplimiento normativo son nuestra garantía. No competimos por precio: competimos porque su proyecto pasa la revisión, se energiza legalmente y accede a los beneficios de ley.",
};
