import { useEffect } from "react";
import { fotoLg, type FotoObra } from "../data/obra";

// Visor a pantalla completa. Esc cierra, flechas navegan.
export function Lightbox({
  fotos,
  index,
  onClose,
  onChange,
}: {
  fotos: FotoObra[];
  index: number;
  onClose: () => void;
  onChange: (i: number) => void;
}) {
  const f = fotos[index];
  const prev = () => onChange((index - 1 + fotos.length) % fotos.length);
  const next = () => onChange((index + 1) % fotos.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  });

  const btn =
    "flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={f.titulo}
      className="fixed inset-0 z-[60] flex flex-col bg-neutral-900/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-4 py-3 text-neutral-300 sm:px-6" onClick={(e) => e.stopPropagation()}>
        <span className="text-[13px] font-semibold">{index + 1} / {fotos.length}</span>
        <button onClick={onClose} className={btn} aria-label="Cerrar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>
      </div>
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-3 sm:px-20">
        <img
          key={f.id}
          src={fotoLg(f.id)}
          alt={f.titulo}
          className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
        <button onClick={(e) => { e.stopPropagation(); prev(); }} className={`${btn} absolute left-2 top-1/2 -translate-y-1/2 sm:left-6`} aria-label="Anterior">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button onClick={(e) => { e.stopPropagation(); next(); }} className={`${btn} absolute right-2 top-1/2 -translate-y-1/2 sm:right-6`} aria-label="Siguiente">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>
      <div className="px-5 py-4 text-center" onClick={(e) => e.stopPropagation()}>
        <div className="text-[15px] font-semibold text-white">{f.titulo}</div>
        <div className="mt-0.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-accent-300">{f.categoria}</div>
      </div>
    </div>
  );
}
