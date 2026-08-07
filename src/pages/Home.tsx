import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "../components/Hero";
import { Servicios } from "../components/Servicios";
import { Integraciones } from "../components/Integraciones";
import { Movimientos } from "../components/Movimientos";
import { Crecimiento } from "../components/Crecimiento";
import { Nosotros } from "../components/Nosotros";
import { Contacto } from "../components/Contacto";

export function Home() {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!scrollTo) return;
    const el = document.getElementById(scrollTo);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top, behavior: "smooth" });
  }, [location.state]);

  return (
    <>
      <Hero />
      <Servicios />
      <Integraciones />
      <Movimientos />
      <Crecimiento />
      <Nosotros />
      <Contacto />
    </>
  );
}
