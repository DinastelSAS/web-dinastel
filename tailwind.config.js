/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Paleta oficial DINASTEL S.A.S. — sincronizada 2026-08-07 con design-system
      // (`DINASTEL SAS/design-system/tailwind.config.js`), la fuente de verdad validada
      // contra el manual real en OneDrive/04 NEGOCIOS/DINASTEL S.A.S/Diseño_Corporativo
      // (identidad corporativa.png). primary-600 y neutral-800 son los hex exactos del
      // manual (Azul Petróleo / Gris Grafito); antes el hex exacto vivía en primary-700,
      // así que el color base de botones/nav (primary-600) no era el azul de marca real —
      // corregido aquí. accent pasa de ámbar a la tinta de azul más clara que la propia
      // marca ya usa en sus aplicaciones (bullets del tagline, icono de la app).
      colors: {
        primary: {
          50: "#eef5f8",
          100: "#d6e7ee",
          200: "#addode",
          300: "#7eb2c8",
          400: "#4a90ac",
          500: "#237294",
          600: "#0d4f73", // Azul Petróleo oficial — RGB 13 79 115 / CMYK 89 31 0 55
          700: "#0a3e5b",
          800: "#082f45",
          900: "#05202f",
        },
        accent: {
          50: "#e9f4fa",
          100: "#cce7f3",
          200: "#99cfe8",
          300: "#5fb3da",
          400: "#2e96c7",
          500: "#0e6fa0",
          600: "#0b5a82",
          700: "#094865",
          800: "#06364c",
          900: "#042433",
        },
        neutral: {
          50: "#f5f6f7",
          100: "#e9eaec",
          200: "#d3d5d9",
          300: "#b3b7bd",
          400: "#888d95",
          500: "#63676e",
          600: "#4a4e54",
          700: "#383b40",
          800: "#2e3238", // Gris Grafito oficial — RGB 46 50 56 / CMYK 71 60 53 60
          900: "#1c1e21",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px 0 rgb(0 0 0 / 0.05), 0 1px 3px 0 rgb(0 0 0 / 0.08)",
        "card-hover": "0 4px 6px -1px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.06)",
      },
    },
  },
  plugins: [],
};
