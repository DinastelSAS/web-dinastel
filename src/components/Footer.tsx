import { contacto, nav } from "../data/site";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 84;
  window.scrollTo({ top, behavior: "smooth" });
}

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-900 px-5 pb-10 pt-14 sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-8">
        <div className="flex flex-wrap justify-between gap-8">
          <div className="max-w-[320px]">
            <div className="mb-2.5 text-lg font-extrabold tracking-wide text-white">DINASTEL</div>
            <p className="text-sm leading-relaxed text-neutral-500">
              Ingenieria electrica, energia solar y consultoria integradas para el crecimiento
              sostenido de su empresa.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-neutral-600">
              Comprometidos con la etica, la calidad y la seguridad en cada proyecto.
            </p>
          </div>
          <div className="flex flex-wrap gap-14">
            <div className="flex flex-col gap-2.5">
              <div className="mb-1 text-xs font-bold tracking-[0.1em] text-neutral-400">EMPRESA</div>
              {nav.filter((n) => n.id !== "integraciones" && n.id !== "crecimiento").map((n) => (
                <button key={n.id} onClick={() => scrollToId(n.id)} className="text-left text-sm text-neutral-300 hover:text-white">
                  {n.label}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="mb-1 text-xs font-bold tracking-[0.1em] text-neutral-400">CONTACTO</div>
              <a href={`mailto:${contacto.email}`} className="text-sm text-neutral-300 hover:text-white">{contacto.email}</a>
              <a href={`https://wa.me/57${contacto.telefono}`} target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-300 hover:text-white">
                {contacto.telefonoDisplay}
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-6 text-[13px] text-neutral-600">
          © 2026 Dinastel S.A.S. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
