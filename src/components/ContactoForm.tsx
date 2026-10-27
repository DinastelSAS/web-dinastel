import { FormEvent, useState } from "react";
import { contacto } from "../data/site";

const inputClass =
  "w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-3 font-sans text-[15px] text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-200";

const labelClass = "mb-2 block text-[13px] font-semibold text-neutral-700";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/maqrkdyn";

export function ContactoForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-neutral-200 bg-white p-12 text-center shadow-card">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div className="mb-2 text-xl font-bold text-neutral-900">¡Gracias!</div>
        <p className="text-[15px] text-neutral-500">Recibimos su solicitud. Le contactaremos en menos de 24 horas hábiles.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-2xl border border-neutral-200 bg-white p-6 shadow-card sm:p-9">
      <input type="hidden" name="_subject" value="Nueva solicitud de cotización — dinastel.com" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="nombre">Nombre</label>
          <input id="nombre" type="text" name="nombre" required placeholder="Su nombre" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="empresa">Empresa (opcional)</label>
          <input id="empresa" type="text" name="empresa" placeholder="Nombre de su empresa" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required placeholder="correo@empresa.com" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="telefono">Teléfono / WhatsApp</label>
          <input id="telefono" type="tel" name="telefono" placeholder="+57 300 000 0000" className={inputClass} />
        </div>
      </div>
      <div>
        <label className={labelClass} htmlFor="tipo_proyecto">Tipo de proyecto</label>
        <select id="tipo_proyecto" name="tipo_proyecto" className={inputClass}>
          <option value="solar">Energía solar (cliente final)</option>
          <option value="electrico">Ingeniería eléctrica</option>
          <option value="baterias">Baterías / respaldo ante cortes</option>
          <option value="cargador_ve">Cargador para vehículo eléctrico</option>
          <option value="legalizacion">Legalización / RETIE / AGPE</option>
          <option value="b2b">Ingeniería subcontratada (firma integradora)</option>
          <option value="mantenimiento">Operación y mantenimiento</option>
          <option value="integral">Proyecto integral</option>
        </select>
      </div>
      <div>
        <label className={labelClass} htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" name="mensaje" rows={4} placeholder="Describa su proyecto. Si es solar, adjuntar su consumo o factura acelera la propuesta." className={`${inputClass} resize-y`} />
      </div>
      {status === "error" && (
        <p className="text-[14px] font-medium text-red-600">
          No se pudo enviar. Intente de nuevo o escríbanos directamente a {contacto.email}.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-1 self-start rounded-full bg-primary-600 px-8 py-3.5 text-[15px] font-semibold text-white transition-all hover:-translate-y-px hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : "Enviar solicitud"}
      </button>
    </form>
  );
}
