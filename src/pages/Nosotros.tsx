import { usePageMeta } from "../ui/usePageMeta";
import { PageHero } from "../ui/PageHero";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { CtaBanner } from "../components/CtaBanner";
import { Trayectoria } from "../components/Trayectoria";
import { Aliados } from "../components/Aliados";
import { empresa, nosotrosImg } from "../data/site";

const principios = [
  {
    title: "La ingeniería es el diferenciador, no el precio",
    desc: "Competimos por rigor técnico y cumplimiento normativo. Es lo que hace que un proyecto se energice legalmente y acceda a los beneficios de ley.",
  },
  {
    title: "Ingeniería y mano de obra, siempre separadas",
    desc: "Nunca un combo opaco. El cliente ve cada valor por separado y decide con información real.",
  },
  {
    title: "Un solo equipo, no proveedores que coordinar",
    desc: "Eléctrica, solar, telecomunicaciones y obra civil operan integradas, con una sola contraparte técnica responsable.",
  },
  {
    title: "Empresa formal, desde el primer día",
    desc: "Contabilidad, expedientes y soportes documentales organizados para responder ante clientes grandes sin improvisar.",
  },
];

export function Nosotros() {
  usePageMeta({
    title: "Nosotros — DINASTEL S.A.S., ingeniería con visión de negocio",
    description:
      "DINASTEL S.A.S. integra ingeniería eléctrica, solar y consultoría en un solo equipo técnico. Empresa joven, equipo experimentado, operación formal en Cali y el suroccidente.",
    path: "/nosotros",
  });

  return (
    <>
      <PageHero
        kicker="Sobre nosotros"
        title="Ingeniería con visión de negocio."
        intro="Las empresas necesitan energía confiable para crecer, no más proveedores que coordinar. Integramos ingeniería eléctrica, solar y consultoría en un solo equipo técnico."
      />

      <section className="bg-white px-5 py-12 sm:px-10 sm:py-16 lg:px-20">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="aspect-[4/3] w-full overflow-hidden rounded-[20px] lg:order-2">
            <img src={nosotrosImg} alt="Equipo técnico DINASTEL en obra" className="h-full w-full object-cover" loading="lazy" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[1.6rem] font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-[2.1rem]">
              Una empresa joven con un equipo que no lo es.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-neutral-600">
              {empresa.nombreLegal} se constituyó en 2026, pero su equipo técnico acumula años
              ejecutando ingeniería eléctrica y solar en el suroccidente colombiano: desde
              interventoría de parques solares de escala utility hasta sistemas residenciales
              llave en mano.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-neutral-600">
              Trabajamos con dos públicos: firmas integradoras que subcontratan ingeniería,
              legalización e interventoría, y clientes finales que buscan reducir su factura con
              un sistema solar sin trámites que coordinar. A ambos los respalda la misma exigencia
              documental y técnica.
            </p>
            <p className="mt-6 text-[13px] font-medium uppercase tracking-[0.12em] text-primary-600">
              {empresa.tagline}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-neutral-50 px-5 py-16 sm:px-10 sm:py-20 lg:px-20">
        <Container>
          <Reveal>
            <h2 className="text-[1.6rem] font-extrabold tracking-tight text-neutral-900 sm:text-[2.1rem]">Nuestros principios</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {principios.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.08} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card">
                <h3 className="text-[17px] font-extrabold leading-snug text-neutral-900">{p.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-neutral-600">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Trayectoria />

      <Aliados />

      <CtaBanner />
    </>
  );
}
