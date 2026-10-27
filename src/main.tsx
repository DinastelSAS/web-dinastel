import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const container = document.getElementById("root")!;
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Si el HTML ya viene prerenderizado para ESTA ruta, React lo "hidrata" (no lo vuelve a pintar).
// Si no coincide (p. ej. una URL inexistente que GitHub Pages manda vía 404.html), se renderiza
// desde cero.
const norm = (p: string) => p.replace(/\/+$/, "") || "/";
const ssrPath = container.dataset.ssrPath;
if (ssrPath && container.firstElementChild && norm(ssrPath) === norm(window.location.pathname)) {
  ReactDOM.hydrateRoot(container, app);
} else {
  container.innerHTML = "";
  ReactDOM.createRoot(container).render(app);
}
