import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Al cambiar de ruta, vuelve al inicio. Si la URL trae #ancla (ej. /servicios#movilidad-electrica
// o /proyectos#galeria), baja hasta esa sección — antes el ancla se ignoraba.
export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const t = window.setTimeout(() => {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
      }, 80);
      return () => window.clearTimeout(t);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);
  return null;
}
