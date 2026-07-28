import { useEffect, useState } from "react";
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
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled ? "text-neutral-900" : "text-white";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-[18px] transition-all duration-300 sm:px-8 lg:px-14 ${
          scrolled ? "bg-white/90 shadow-[0_1px_0_rgba(15,23,42,0.08)] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <button
          onClick={() => scrollToId("hero")}
          className={`text-[26px] font-black leading-none tracking-wide sm:text-[32px] ${scrolled ? "text-primary-700" : "text-white"}`}
        >
          DINASTEL <span className="text-[0.5em] font-bold tracking-widest">SAS</span>
        </button>
        <nav className="flex flex-wrap items-center gap-4 sm:gap-6">
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              className={`text-sm font-medium transition-opacity hover:opacity-70 ${textColor}`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToId("contacto")}
            className="rounded-full bg-primary-600 px-[18px] py-[9px] text-sm font-semibold text-white transition-colors hover:bg-primary-700"
          >
            Contacto
          </button>
        </nav>
      </header>

      <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-primary-600 to-accent-500 transition-[width] duration-75"
          style={{ width: `${scrollPercent}%` }}
        />
      </div>

      <button
        onClick={() => scrollToId("contacto")}
        className={`fixed bottom-6 right-6 z-[55] flex items-center gap-2 rounded-full bg-primary-600 px-[26px] py-4 text-[15px] font-bold text-white shadow-[0_10px_26px_rgba(37,99,235,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-700 ${
          scrolled ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"
        }`}
      >
        Cotizar sin fronteras →
      </button>
    </>
  );
}
