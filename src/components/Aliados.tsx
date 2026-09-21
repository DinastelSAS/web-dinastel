import { Container } from "../ui/Container";
import { aliados } from "../data/site";

export function Aliados() {
  return (
    <section className="bg-neutral-50 px-5 py-14 sm:px-10 lg:px-20">
      <Container>
        <div className="mb-8 text-center text-[13px] font-semibold uppercase tracking-[0.12em] text-neutral-500">
          Firmas integradoras y clientes con quienes trabaja el equipo
        </div>
        <div
          className="overflow-hidden"
          style={{ maskImage: "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)" }}
        >
          <div className="animate-marquee flex w-max items-center gap-4">
            {[...aliados, ...aliados].map((name, i) => (
              <div
                key={name + i}
                className="flex-shrink-0 whitespace-nowrap rounded-xl border border-neutral-200 bg-white px-6 py-3.5 text-sm font-bold tracking-wide text-neutral-600"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
