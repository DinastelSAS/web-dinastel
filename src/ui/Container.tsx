import { ReactNode } from "react";

// Ancho de contenido consistente en todo el sitio.
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-[1180px] ${className}`}>{children}</div>;
}
