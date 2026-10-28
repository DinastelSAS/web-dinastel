import { usePageMeta } from "../ui/usePageMeta";
import { PageHero } from "../ui/PageHero";
import { FAQ } from "../components/FAQ";
import { CtaBanner } from "../components/CtaBanner";

export function PreguntasFrecuentes() {
  usePageMeta({
    title: "Preguntas frecuentes — Solar, RETIE, baterías y legalización | DINASTEL",
    description:
      "Respuestas sobre ahorro con energía solar, baterías, AGPE y venta de excedentes, RETIE, legalización ante EMCALI/CELSIA e ingeniería subcontratada.",
    path: "/preguntas-frecuentes",
  });
  return (
    <>
      <PageHero
        kicker="Preguntas frecuentes"
        title="Lo que más nos preguntan."
        intro="Dudas habituales sobre solar, baterías, legalización y trabajo con firmas integradoras. Si su caso es más específico, escríbanos."
      />
      <FAQ />
      <CtaBanner title="¿No encontró su respuesta?" desc="Cuéntenos su caso y le respondemos con datos, no con promesas." />
    </>
  );
}
