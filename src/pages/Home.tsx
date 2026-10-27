import { usePageMeta } from "../ui/usePageMeta";
import { Hero } from "../components/Hero";
import { ServiciosResumen } from "../components/ServiciosResumen";
import { ObraReciente } from "../components/ObraReciente";
import { Aliados } from "../components/Aliados";
import { CumplimientoStrip } from "../components/CumplimientoStrip";
import { CtaBanner } from "../components/CtaBanner";

// Landing corta (v2.2): 6 bloques. El detalle vive en sus páginas:
// /servicios (para quién, líneas, proceso) · /proyectos (casos y galería) ·
// /nosotros (principios, trayectoria) · /preguntas-frecuentes · /cumplimiento.
export function Home() {
  usePageMeta({
    title: "DINASTEL S.A.S. — Ingeniería eléctrica y energía solar en Cali",
    description:
      "Ingeniería eléctrica, energía solar, baterías y cargadores para vehículo eléctrico en Cali y el suroccidente colombiano. Diseño, legalización RETIE/AGPE, instalación y mantenimiento.",
    path: "/",
  });

  return (
    <>
      <Hero />
      <ServiciosResumen />
      <ObraReciente />
      <Aliados />
      <CumplimientoStrip />
      <CtaBanner />
    </>
  );
}
