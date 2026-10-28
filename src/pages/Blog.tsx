import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { blogPosts, type BlogPost } from "../data/blog";
import { slideUp, transition } from "../foundations/motion";
import { usePageMeta, useJsonLd } from "../ui/usePageMeta";
import { SITE, canonicalUrl } from "../seo/head";
import { empresa } from "../data/site";

// Blog = centro de aprendizaje para el lector y fuente citable para Google y los buscadores
// de IA. Filtro por tema, artículo destacado y datos estructurados Blog + BreadcrumbList.

const ordenados = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
const temas = ["Todos", ...Array.from(new Set(ordenados.flatMap((p) => p.category.slice(0, 2))))];

function Tarjeta({ post, i }: { post: BlogPost; i: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, delay: Math.min(i, 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/blog/${post.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(8,31,45,0.45)]">
        <div className="h-[180px] overflow-hidden bg-neutral-200">
          <img src={post.coverImage} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div className="flex flex-1 flex-col gap-2.5 p-6">
          <div className="flex flex-wrap gap-2">
            {post.category.slice(0, 2).map((c) => (
              <span key={c} className="rounded-full bg-primary-50 px-3 py-1 text-[11px] font-semibold text-primary-700">{c}</span>
            ))}
          </div>
          <h2 className="text-[17px] font-extrabold leading-snug text-neutral-900 group-hover:text-primary-700">{post.title}</h2>
          <p className="line-clamp-3 text-[14px] leading-relaxed text-neutral-500">{post.excerpt}</p>
          <div className="mt-auto flex items-center gap-2 pt-2 text-xs font-medium text-neutral-400">
            <time dateTime={post.date}>{post.dateDisplay}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function Blog() {
  usePageMeta({
    title: "Blog — Energía solar e ingeniería eléctrica en Colombia | DINASTEL",
    description: "Guías prácticas sobre energía solar, baterías, RETIE, incentivos de la Ley 1715, agro solar y eficiencia energética en Colombia, revisadas por ingenieros.",
    path: "/blog",
  });
  useJsonLd("blog", {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `Blog ${empresa.nombreLegal}`,
    url: canonicalUrl("/blog"),
    inLanguage: "es-CO",
    publisher: { "@type": "Organization", name: empresa.nombreLegal, url: `${SITE}/` },
    blogPost: ordenados.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: canonicalUrl(`/blog/${p.slug}`), datePublished: p.date })),
  });

  const [tema, setTema] = useState("Todos");
  const [destacado, ...resto] = ordenados;
  const lista = useMemo(() => (tema === "Todos" ? resto : ordenados.filter((p) => p.category.includes(tema))), [tema, resto]);

  return (
    <div className="bg-neutral-50">
      <section className="relative overflow-hidden px-5 pb-14 pt-32 sm:px-10 sm:pb-16 sm:pt-40 lg:px-20" style={{ background: "radial-gradient(ellipse at 25% 10%, #0d4f73 0%, #082f45 60%, #05202f 100%)" }}>
        <div className="mx-auto max-w-[1180px]">
          <motion.div initial="hidden" animate="visible" variants={slideUp} transition={transition.slow}>
            <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-accent-300">Blog DINASTEL</div>
            <h1 className="mb-4 max-w-[760px] text-[2rem] font-extrabold leading-tight tracking-tight text-white sm:text-[2.8rem]">
              Energía solar e ingeniería eléctrica, explicadas con datos.
            </h1>
            <p className="max-w-[600px] text-[17px] leading-relaxed text-neutral-200">
              Guías prácticas para que tome mejores decisiones sobre su instalación eléctrica o su sistema solar. Cada artículo lo revisa nuestro equipo de ingeniería.
            </p>
          </motion.div>

          {destacado && (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="mt-10">
              <Link to={`/blog/${destacado.slug}`} className="group grid grid-cols-1 overflow-hidden rounded-[22px] border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:bg-white/10 md:grid-cols-[1.1fr_1fr]">
                <div className="h-56 overflow-hidden md:h-auto md:min-h-[300px]">
                  <img src={destacado.coverImage} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-col justify-center gap-3 p-6 sm:p-9">
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent-300">Más reciente · {destacado.category[0]}</span>
                  <h2 className="text-[1.4rem] font-extrabold leading-snug text-white sm:text-[1.7rem]">{destacado.title}</h2>
                  <p className="line-clamp-3 text-[15px] leading-relaxed text-neutral-300">{destacado.excerpt}</p>
                  <span className="mt-1 inline-flex items-center gap-2 text-[14px] font-semibold text-white">
                    Leer artículo <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      <section className="px-5 py-12 sm:px-10 sm:py-16 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap" role="tablist" aria-label="Filtrar por tema">
              {temas.map((t) => (
                <button
                  key={t}
                  role="tab"
                  aria-selected={tema === t}
                  onClick={() => setTema(t)}
                  className={`relative whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${tema === t ? "text-white" : "border border-neutral-300 bg-white text-neutral-700 hover:border-primary-400"}`}
                >
                  {tema === t && <motion.span layoutId="tema-activo" className="absolute inset-0 -z-0 rounded-full bg-primary-600" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
                  <span className="relative">{t}</span>
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {lista.map((post, i) => (
                <Tarjeta key={post.slug} post={post} i={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
