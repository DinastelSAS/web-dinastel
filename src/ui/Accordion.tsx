import { useState } from "react";

// Item de acordeón accesible para las preguntas frecuentes.
function Item({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-neutral-200">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-[16px] font-semibold text-neutral-900">{q}</span>
        <span
          className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-neutral-300 text-primary-600 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      <div className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="max-w-[62ch] pr-10 text-[15px] leading-relaxed text-neutral-600">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div>
      {items.map((it, i) => (
        <Item key={it.q} q={it.q} a={it.a} defaultOpen={i === 0} />
      ))}
    </div>
  );
}
