import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { contacto, nav, whatsappUrl } from "../data/site";
import { lineas } from "../data/servicios";

// Menú v2 (referencia navbar.gallery):
// - Escritorio (≥1024 px): barra que se vuelve "flotante" al hacer scroll, indicador animado
//   bajo el enlace activo y panel desplegable de Servicios con las 5 líneas.
// - Tablet y celular (<1024 px): menú a pantalla completa con enlaces grandes, las líneas de
//   servicio y los datos de contacto a mano.

const easeOut = [0.22, 1, 0.36, 1] as const;

function Chevron({ open }: { open: boolean }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function MegaServicios({ onNavigate }: { onNavigate: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -6, scale: 0.98 }}
      transition={{ duration: 0.18, ease: easeOut }}
      className="absolute left-1/2 top-full z-50 mt-3 w-[min(880px,calc(100vw-48px))] -translate-x-1/2 origin-top"
    >
      <div className="grid grid-cols-[1.6fr_1fr] overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_24px_60px_-20px_rgba(8,31,45,0.35)]">
        <div className="grid grid-cols-2 gap-1 p-3">
          {lineas.map((l) => (
            <Link
              key={l.slug}
              to={`/servicios#${l.slug}`}
              onClick={onNavigate}
              className="group flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-neutral-50"
            >
              <span className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-neutral-100">
                <img src={l.img} alt="" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" />
              </span>
              <span className="min-w-0">
                <span className="block text-[14px] font-bold leading-tight text-neutral-900 group-hover:text-primary-700">{l.title}</span>
                <span className="mt-0.5 line-clamp-2 block text-[12px] leading-snug text-neutral-500">{l.summary}</span>
              </span>
            </Link>
          ))}
        </div>
        <div className="flex flex-col justify-between gap-4 bg-primary-800 p-6 text-white">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent-300">Regla de la casa</div>
            <p className="mt-2 text-[15px] font-semibold leading-snug">Ingeniería y mano de obra, siempre cotizadas por separado.</p>
            <p className="mt-2 text-[13px] leading-relaxed text-neutral-300">Usted ve cada valor y compara de forma justa.</p>
          </div>
          <Link to="/servicios" onClick={onNavigate} className="group inline-flex items-center gap-2 text-[14px] font-semibold text-white">
            Ver todos los servicios
            <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function MenuMovil({ onClose }: { onClose: () => void }) {
  const items = nav;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-40 overflow-y-auto bg-white pt-[76px] lg:hidden"
    >
      <nav className="mx-auto flex max-w-[720px] flex-col px-5 pb-10 sm:px-10">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.04 * i, ease: easeOut }}
            className="border-b border-neutral-200"
          >
            <NavLink
              to={item.to}
              onClick={onClose}
              className={({ isActive }) => `flex items-baseline gap-4 py-4 text-[1.6rem] font-extrabold tracking-tight sm:text-[2rem] ${isActive ? "text-primary-600" : "text-neutral-900"}`}
            >
              <span className="w-7 text-[12px] font-bold text-neutral-400">0{i + 1}</span>
              {item.label}
            </NavLink>
            {item.label === "Servicios" && (
              <div className="-mt-1 grid grid-cols-1 gap-x-6 pb-4 pl-11 sm:grid-cols-2">
                {lineas.map((l) => (
                  <Link key={l.slug} to={`/servicios#${l.slug}`} onClick={onClose} className="py-1.5 text-[15px] font-medium text-neutral-600 hover:text-primary-700">
                    {l.title}
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.25, ease: easeOut }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Link to="/contacto" onClick={onClose} className="flex-1 rounded-full bg-primary-600 px-6 py-3.5 text-center text-[15px] font-semibold text-white">
            Cotizar proyecto
          </Link>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-full border-[1.5px] border-neutral-300 px-6 py-3.5 text-center text-[15px] font-semibold text-neutral-800">
            WhatsApp {contacto.telefonoDisplay}
          </a>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-1 text-[14px] text-neutral-500 sm:grid-cols-2">
          <a href={`mailto:${contacto.email}`} className="hover:text-primary-700">{contacto.email}</a>
          <span>{contacto.horario}</span>
          <a href={contacto.app} className="font-semibold text-neutral-700 hover:text-primary-700">Iniciar sesión →</a>
        </div>
      </nav>
    </motion.div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaTimer = useRef<number>();
  const { scrollYProgress } = useScroll();
  const progreso = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  const location = useLocation();
  const pathname = location.pathname.replace(/\/+$/, "") || "/"; // GitHub Pages sirve /ruta/
  const isHome = pathname === "/";

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        setScrolled(window.scrollY > 40);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  // Cerrar menús al cambiar de página.
  useEffect(() => {
    setMenuOpen(false);
    setMegaOpen(false);
  }, [location.pathname, location.hash]);

  // Bloquear el scroll de fondo con el menú móvil abierto y cerrar con Esc.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const overHero = isHome && !scrolled && !menuOpen;
  const floating = scrolled && !menuOpen;
  const linkColor = overHero ? "text-white/85 hover:text-white" : "text-neutral-600 hover:text-neutral-900";

  const abrirMega = () => {
    window.clearTimeout(megaTimer.current);
    setMegaOpen(true);
  };
  const cerrarMega = () => {
    window.clearTimeout(megaTimer.current);
    megaTimer.current = window.setTimeout(() => setMegaOpen(false), 140);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-0 transition-[padding] duration-300 lg:px-6" style={{ paddingTop: floating ? 10 : 0 }}>
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-300 ${
            floating
              ? "max-w-[1240px] bg-white/90 px-5 py-2.5 shadow-[0_10px_30px_-12px_rgba(8,31,45,0.25)] ring-1 ring-black/5 backdrop-blur-md sm:px-8 lg:rounded-full lg:px-6"
              : overHero
                ? "max-w-[1240px] bg-transparent px-5 py-4 sm:px-8 lg:px-6"
                : "max-w-[1240px] bg-white px-5 py-4 sm:px-8 lg:px-6"
          }`}
        >
          <Link to="/" aria-label="DINASTEL S.A.S. — Inicio" className="relative z-[60] flex-shrink-0">
            <img src={overHero ? "/assets/brand/logo-white.png" : "/assets/brand/logo.png"} alt="DINASTEL S.A.S." className={`w-auto transition-all duration-300 ${floating ? "h-9" : "h-10 sm:h-11"}`} />
          </Link>

          {/* Navegación de escritorio */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
            {nav.map((item) => {
              const active = pathname === item.to || (item.to !== "/" && pathname.startsWith(item.to + "/"));
              const isServicios = item.label === "Servicios";
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={isServicios ? abrirMega : undefined}
                  onMouseLeave={isServicios ? cerrarMega : undefined}
                >
                  <NavLink
                    to={item.to}
                    onFocus={isServicios ? abrirMega : undefined}
                    className={`relative isolate flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2 xl:px-3.5 text-[14px] font-medium transition-colors ${active ? (overHero ? "text-white" : "text-primary-700") : linkColor}`}
                    aria-haspopup={isServicios ? "true" : undefined}
                    aria-expanded={isServicios ? megaOpen : undefined}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-activo"
                        className={`absolute inset-0 -z-10 rounded-full ${overHero ? "bg-white/15" : "bg-primary-50"}`}
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                    {item.label}
                    {isServicios && <Chevron open={megaOpen} />}
                  </NavLink>
                  {isServicios && (
                    <AnimatePresence>{megaOpen && <MegaServicios onNavigate={() => setMegaOpen(false)} />}</AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a href={contacto.app} className={`hidden whitespace-nowrap rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors xl:inline-flex ${linkColor}`}>Iniciar sesión</a>
            <Link to="/contacto" className="group inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-primary-600 px-5 py-[9px] text-[14px] font-semibold text-white transition-all hover:bg-primary-700">
              Cotizar proyecto
              <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Botón de menú (tablet y celular) */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            className={`relative z-[60] flex h-11 items-center gap-2.5 rounded-full pl-4 pr-3 text-[13px] font-semibold transition-colors lg:hidden ${
              overHero ? "bg-white/15 text-white backdrop-blur-sm" : "bg-neutral-100 text-neutral-900"
            }`}
          >
            <span className="hidden sm:inline">{menuOpen ? "Cerrar" : "Menú"}</span>
            <span className="relative flex h-4 w-5 flex-col justify-between" aria-hidden="true">
              <span className={`h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-[2px] w-5 rounded-full bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>


      </header>

      {/* Barra de progreso de lectura (arriba de todo, con resorte) */}
      <motion.div className="fixed inset-x-0 top-0 z-[55] h-[3px] origin-left bg-gradient-to-r from-primary-500 to-accent-400" style={{ scaleX: progreso }} aria-hidden="true" />

      <AnimatePresence>{menuOpen && <MenuMovil onClose={() => setMenuOpen(false)} />}</AnimatePresence>
    </>
  );
}
