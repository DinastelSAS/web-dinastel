import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./ui/ScrollToTop";
import { Home } from "./pages/Home";
import { Cumplimiento } from "./pages/Cumplimiento";
import { Nosotros } from "./pages/Nosotros";
import { Contacto } from "./pages/Contacto";
import { Servicios } from "./pages/Servicios";
import { Proyectos } from "./pages/Proyectos";
import { NotFound } from "./pages/NotFound";
import { PreguntasFrecuentes } from "./pages/PreguntasFrecuentes";

// El blog (~150 KB de texto) se carga solo cuando se visita: la Home queda más liviana.
const Blog = lazy(() => import("./pages/Blog").then((m) => ({ default: m.Blog })));
const BlogPost = lazy(() => import("./pages/BlogPost").then((m) => ({ default: m.BlogPost })));

export default function App() {
  const location = useLocation();
  return (
    // reducedMotion="user": si el visitante pidió "reducir movimiento" en su equipo, se desactivan las animaciones.
    <MotionConfig reducedMotion="user">
    <div className="w-full overflow-x-clip bg-white text-neutral-900">
      <ScrollToTop />
      <Header />
      <main>
        {/* Transición entre páginas. initial={false}: la primera carga (HTML prerenderizado) no se anima. */}
        <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname.replace(/\/+$/, "") || "/"}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/cumplimiento" element={<Cumplimiento />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
          <Route path="/blog" element={<Suspense fallback={<div className="min-h-[80vh]" />}><Blog /></Suspense>} />
          <Route path="/blog/:slug" element={<Suspense fallback={<div className="min-h-[80vh]" />}><BlogPost /></Suspense>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
    </MotionConfig>
  );
}
