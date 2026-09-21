import { usePageMeta } from "../ui/usePageMeta";
import { Hero } from "../components/Hero";
import { ServiciosResumen } from "../components/ServiciosResumen";
import { FAQ } from "../components/FAQ";
import { CumplimientoStrip } from "../components/CumplimientoStrip";
import { ProyectoDestacado } from "../components/ProyectoDestacado";
import { Proceso } from "../components/Proceso";
import { Trayectoria } from "../components/Trayectoria";
import { Aliados } from "../components/Aliados";
import { CtaBanner } from "../components/CtaBanner";

export function Home() {
  usePageMeta({
    title: "DINASTEL S.A.S. — Ingeniería eléctrica y energía solar en Cali",
    description:
      "Ingeniería eléctrica, energía solar fotovoltaica y cumplimiento normativo (RETIE, AGPE, Ley 1715) en Cali y el suroccidente colombiano. Diseño, legalización, instalación y mantenimiento.",
    path: "/",
  });

  return (
    <>
      <Hero />
      <ServiciosResumen />
      <FAQ />
      <CumplimientoStrip />
      <ProyectoDestacado />
      <Proceso />
      <Trayectoria />
      <Aliados />
      <CtaBanner />
    </>
  );
}
