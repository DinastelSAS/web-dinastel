import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { flujo } from "../data/servicios";

const detalle = [
  "Estudio de factibilidad y levantamiento en sitio: partimos de datos reales, no de supuestos.",
  "Ingeniería de detalle, memorias y trámite normativo (RETIE, AGPE, UPME) en un solo flujo.",
  "Instalación y montaje con nuestro propio equipo técnico, bajo interventoría.",
  "Operación, mantenimiento y monitoreo remoto para sostener el rendimiento en el tiempo.",
];

const icons = [
  <svg key="a" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
  <svg key="b" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>,
  <svg key="c" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.1 2.1-2-2z" /></svg>,
  <svg key="d" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
];

export function Proceso() {
  return (
    <section className="bg-neutral-50 px-5 py-14 sm:px-10 sm:py-16 lg:px-20 lg:py-20">
      <Container>
        <SectionHeading
          kicker="Cómo trabajamos"
          title="Un solo equipo, del diagnóstico a la operación."
          intro="Eléctrica, solar, telecomunicaciones y consultoría operan como una sola línea de trabajo, sin proveedores que usted tenga que coordinar."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {flujo.map((label, i) => (
            <Reveal key={label} delay={i * 0.1} variant="scale" className="group relative flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-card-hover">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white [&>svg]:h-5 [&>svg]:w-5">
                  {icons[i]}
                </span>
                <span className="text-[13px] font-bold text-neutral-300">0{i + 1}</span>
              </div>
              <div>
                <h3 className="text-[17px] font-extrabold text-neutral-900">{label}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-neutral-500">{detalle[i]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
