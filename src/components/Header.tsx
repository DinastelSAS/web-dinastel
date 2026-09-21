import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { contacto, nav, type NavItem } from "../data/site";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: "smooth" });
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
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
        setScrolled(window.scrollY > 40);
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
    setMenuOpen(false);
  }, [location.pathname]);

  const overHero = isHome && !scrolled && !menuOpen;
  const solid = !overHero;
  const linkColor = overHero ? "text-white/90 hover:text-white" : "text-neutral-700 hover:text-primary-700";

  function goSection(id: string) {
    setMenuOpen(false);
    if (isHome) {
      scrollToId(id);
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  }

  function renderItem(item: NavItem, mobile = false) {
    const cls = mobile
      ? "rounded-lg px-3 py-3 text-left text-[15px] font-medium text-neutral-800 hover:bg-neutral-50"
      : `text-[14px] font-medium transition-colors ${linkColor}`;
    if (item.section) {
      return (
        <button key={item.label} onClick={() => goSection(item.section!)} className={cls}>
          {item.label}
        </button>
      );
    }
    return (
      <NavLink
        key={item.label}
        to={item.to!}
        className={({ isActive }) =>
          mobile ? cls : `${cls} ${isActive ? (overHero ? "text-white" : "text-primary-700") : ""}`
        }
      >
        {item.label}
      </NavLink>
    );
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          solid ? "bg-white/95 shadow-[0_1px_0_rgba(15,23,42,0.08)] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-[14px] sm:px-8 sm:py-4 lg:px-12">
          <Link to="/" aria-label="DINASTEL S.A.S. — Inicio" className="flex-shrink-0">
            <img src={overHero ? "/assets/brand/logo-white.png" : "/assets/brand/logo.png"} alt="DINASTEL S.A.S." className="h-10 w-auto sm:h-11" />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">{nav.map((item) => renderItem(item))}</nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a href={contacto.app} className={`text-[14px] font-medium transition-colors ${linkColor}`}>Iniciar sesión</a>
            <Link to="/contacto" className="rounded-full bg-primary-600 px-5 py-[9px] text-[14px] font-semibold text-white transition-colors hover:bg-primary-700">
              Cotizar proyecto
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span className={`h-[2px] w-6 rounded-full transition-all duration-300 ${overHero ? "bg-white" : "bg-neutral-900"} ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-[2px] w-6 rounded-full transition-all duration-300 ${overHero ? "bg-white" : "bg-neutral-900"} ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>

        <div className="h-[2px] w-full bg-transparent">
          <div className="h-full bg-gradient-to-r from-primary-500 to-accent-400 transition-[width] duration-75" style={{ width: `${scrollPercent}%` }} />
        </div>
      </header>

      <div
        className={`fixed inset-x-0 top-[60px] z-40 overflow-hidden bg-white shadow-lg transition-[max-height] duration-300 ease-out lg:hidden ${
          menuOpen ? "max-h-[460px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {nav.map((item) => renderItem(item, true))}
          <a href={contacto.app} className="rounded-lg px-3 py-3 text-left text-[15px] font-medium text-neutral-800 hover:bg-neutral-50">Iniciar sesión</a>
          <Link to="/contacto" className="mt-2 rounded-full bg-primary-600 px-5 py-3 text-center text-[15px] font-semibold text-white">Cotizar proyecto</Link>
        </nav>
      </div>
    </>
  );
}
