import { Link, useLocation, useNavigate } from "react-router-dom";
import { contacto, empresa, nav } from "../data/site";

const year = new Date().getFullYear();

function MailIcon() {
  return (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>);
}
function WhatsappIcon() {
  return (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21l1.65-4.95A9 9 0 1 1 8.5 19.5Z" /></svg>);
}
function PinIcon() {
  return (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>);
}

export function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  function goSection(id: string) {
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  }

  return (
    <footer className="px-5 pb-8 pt-14 text-neutral-300 sm:px-10 lg:px-20" style={{ background: "linear-gradient(180deg, #082f45 0%, #05202f 100%)" }}>
      <div className="mx-auto max-w-[1180px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div className="max-w-[340px]">
            <Link to="/"><img src="/assets/brand/logo-white.png" alt="DINASTEL S.A.S." className="mb-4 h-8 w-auto" /></Link>
            <p className="text-sm leading-relaxed text-neutral-400">{empresa.frase}</p>
            <p className="mt-4 text-[12px] uppercase tracking-[0.12em] text-neutral-500">{empresa.tagline}</p>
          </div>

          <div>
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-neutral-500">Explorar</div>
            <ul className="flex flex-col gap-2.5">
              {nav.map((n) =>
                n.section ? (
                  <li key={n.label}>
                    <button onClick={() => goSection(n.section!)} className="text-left text-sm text-neutral-300 transition-colors hover:text-white">{n.label}</button>
                  </li>
                ) : (
                  <li key={n.label}>
                    <Link to={n.to!} className="text-sm text-neutral-300 transition-colors hover:text-white">{n.label}</Link>
                  </li>
                ),
              )}
              <li><Link to="/contacto" className="text-sm text-neutral-300 transition-colors hover:text-white">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-neutral-500">Contacto</div>
            <ul className="flex flex-col gap-3">
              <li><a href={`mailto:${contacto.email}`} className="flex items-center gap-2.5 text-sm text-neutral-300 transition-colors hover:text-white"><MailIcon /> {contacto.email}</a></li>
              <li><a href={`https://wa.me/57${contacto.telefono}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-neutral-300 transition-colors hover:text-white"><WhatsappIcon /> {contacto.telefonoDisplay}</a></li>
              <li className="flex items-start gap-2.5 text-sm text-neutral-400"><span className="mt-0.5"><PinIcon /></span><span>{contacto.direccion}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-white/10 pt-6 text-[13px] text-neutral-500 sm:flex-row">
          <span>© {year} {empresa.nombreLegal} · NIT {empresa.nit}</span>
          <span>Comprometidos con la ética, la calidad y la seguridad en cada proyecto.</span>
        </div>
      </div>
    </footer>
  );
}
