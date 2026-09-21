import { ReactNode } from "react";
import { Container } from "./Container";

// Cabecera estándar de página interior.
export function PageHero({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <section
      className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-10 sm:pb-20 sm:pt-40 lg:px-20"
      style={{ background: "radial-gradient(ellipse at 25% 10%, #0d4f73 0%, #082f45 60%, #05202f 100%)" }}
    >
      <Container>
        <div className="max-w-[760px]">
          <div className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-accent-300">{kicker}</div>
          <h1 className="text-[2.1rem] font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>
          {intro && <p className="mt-5 max-w-[620px] text-[17px] leading-relaxed text-neutral-300">{intro}</p>}
        </div>
      </Container>
    </section>
  );
}
