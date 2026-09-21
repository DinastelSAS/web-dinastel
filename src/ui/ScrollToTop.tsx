import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Al cambiar de ruta, vuelve al inicio — salvo que se navegue a un ancla concreta.
export function ScrollToTop() {
  const { pathname, hash, state } = useLocation();
  useEffect(() => {
    if (hash) return;
    if ((state as { scrollTo?: string } | null)?.scrollTo) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash, state]);
  return null;
}
