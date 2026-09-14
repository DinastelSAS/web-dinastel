import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { nav } from "../data/site";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 84;
  window.scrollTo({ top, behavior: "smooth" });
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [inContacto, setInContacto] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        setScrolled(window.scrollY > window.innerHeight * 0.78);
        const doc = document.documentElement;
        const scrollable = doc.scrollHeight - doc.clientHeight;
        setScrollPercent(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  useEffect(() => {
    const el = document.getElementById("contacto");
    if (!el) {
      setInContacto(false);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setInContacto(entry.isIntersecting), { threshold: 0.15 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [location.pathname]);

  const isDark = isHome && !scrolled && !menuOpen;
  const textColor = isDark ? "text-white" : "text-neutral-900";

  function go(id: string) {
    setMenuOpen(false);
    if (id.startsWith("/")) {
      navigate(id);
      return;
    }
    if (!isHome) {
      navigate("/", { state: { scrollTo: id } });
      return;
    }
    scrollToId(id);
  }

  function goContacto() {
    go("contacto");
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-[14px] transition-all duration-300 sm:px-8 sm:py-[18px] lg:px-14 ${
          scrolled || menuOpen || !isHome ? "bg-white/95 shadow-[0_1px_0_rgba(15,23,42,0.08)] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <Link to="/" aria-label="DINASTEL S.A.S. — Inicio">
          <img
            src={isDark ? "/assets/brand/logo-white.png" : "/assets/brand/logo.png"}
            alt="DINASTEL S.A.S."
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`text-sm font-medium transition-opacity hover:opacity-70 ${
                item.id.startsWith("/") && location.pathname.startsWith(item.id) ? "text-primary-600" : textColor
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://app.dinastel.com"
            className={`text-sm font-medium transition-opacity hover:opacity-70 ${textColor}`}
          >
            Iniciar sesión
          </a>
          <button
            onClick={goContacto}
            className="rounded-full bg-primary-600 px-[18px] py-[9px] text-sm font-semibold text-white transition-colors hover:bg-primary-700"
          >
            Contacto
          </button>
        </nav>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span className={`h-[2px] w-6 rounded-full transition-all duration-300 ${isDark ? "bg-white" : "bg-neutral-900"} ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-[2px] w-6 rounded-full transition-all duration-300 ${isDark ? "bg-white" : "bg-neutral-900"} ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </header>

      <div
        className={`fixed inset-x-0 top-[62px] z-40 overflow-hidden bg-white shadow-lg transition-[max-height] duration-300 ease-out md:hidden ${
          menuOpen ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="rounded-lg px-3 py-3 text-left text-base font-medium text-neutral-800 hover:bg-neutral-50"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://app.dinastel.com"
            className="rounded-lg px-3 py-3 text-left text-base font-medium text-neutral-800 hover:bg-neutral-50"
          >
            Iniciar sesión
          </a>
          <button
            onClick={goContacto}
            className="mt-2 rounded-full bg-primary-600 px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Contacto
          </button>
        </nav>
      </div>

      <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-primary-600 to-accent-500 transition-[width] duration-75"
          style={{ width: `${scrollPercent}%` }}
        />
      </div>

      <button
        onClick={goContacto}
        aria-label="Cotizar sin fronteras"
        className={`fixed bottom-5 right-5 z-[55] flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-white shadow-[0_10px_26px_rgba(13,79,115,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-700 sm:bottom-6 sm:right-6 sm:h-auto sm:w-auto sm:gap-2 sm:rounded-full sm:px-[26px] sm:py-4 sm:text-[15px] sm:font-bold ${
          (scrolled || !isHome) && !inContacto ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"
        }`}
      >
        <span className="sm:hidden" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
        <span className="hidden sm:inline">Cotizar sin fronteras →</span>
      </button>
    </>
  );
}
