import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Servicios } from "./components/Servicios";
import { Integraciones } from "./components/Integraciones";
import { Movimientos } from "./components/Movimientos";
import { Crecimiento } from "./components/Crecimiento";
import { Nosotros } from "./components/Nosotros";
import { Contacto } from "./components/Contacto";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="w-full overflow-x-clip bg-neutral-50 text-neutral-900">
      <Header />
      <Hero />
      <Servicios />
      <Integraciones />
      <Movimientos />
      <Crecimiento />
      <Nosotros />
      <Contacto />
      <Footer />
    </div>
  );
}
