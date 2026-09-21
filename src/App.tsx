import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./ui/ScrollToTop";
import { Home } from "./pages/Home";
import { Cumplimiento } from "./pages/Cumplimiento";
import { Nosotros } from "./pages/Nosotros";
import { Contacto } from "./pages/Contacto";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";

export default function App() {
  return (
    <div className="w-full overflow-x-clip bg-white text-neutral-900">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cumplimiento" element={<Cumplimiento />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
