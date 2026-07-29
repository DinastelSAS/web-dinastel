/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Manual de marca oficial (Diseño_Corporativo/Caracterización visual.png, 2026-07-29):
      // primary = Azul Petróleo #0D4F73, neutral-800 = Gris Grafito #2E3238. accent (ámbar) se
      // conserva como color funcional de UI (checks, degradados) — el manual no define un
      // tercer color corporativo, así que no compite con la identidad oficial.
      colors: {
        primary: {
          50: "#edf7fd",
          100: "#d6edfa",
          200: "#a4d8f4",
          300: "#69bfec",
          400: "#25a1e4",
          500: "#167eb6",
          600: "#11628d",
          700: "#0D4F73",
          800: "#0b3c56",
          900: "#07293b",
        },
        accent: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        neutral: {
          50: "#f9fafa",
          100: "#f2f3f5",
          200: "#e3e5e8",
          300: "#c7cbd1",
          400: "#9aa1ac",
          500: "#737d8c",
          600: "#575f6b",
          700: "#434851",
          800: "#2E3238",
          900: "#1e2024",
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
