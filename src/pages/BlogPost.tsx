import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getPostBySlug, blogPosts, type BlogBlock, type BlogPost as Post } from "../data/blog";
import { slideUp, transition } from "../foundations/motion";
import { autor, contacto, empresa, whatsappUrl } from "../data/site";
import { lineas } from "../data/servicios";
import { usePageMeta, useJsonLd } from "../ui/usePageMeta";
import { SITE, absoluteUrl, canonicalUrl } from "../seo/head";

// Artículo del blog (v2.2). Pensado para enseñar al lector y para que Google y los buscadores
// de IA lo entiendan y lo citen: índice con anclas, autor/revisor identificado, preguntas
// frecuentes y datos estructurados BlogPosting + BreadcrumbList + FAQPage.

export const slugify = (t: string) =>
  t
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-neutral-900">{part.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 id={slugify(block.text)} className="mb-3.5 mt-10 scroll-mt-28 text-[1.4rem] font-extrabold tracking-tight text-neutral-900 sm:text-[1.65rem]">
          {block.text}
        </h2>
      );
    case "p":
      return <p className="mb-4 text-[16px] leading-[1.75] text-neutral-700 sm:text-[17px]">{renderInline(block.text)}</p>;
    case "quote":
      return (
        <blockquote className="my-7 border-l-4 border-accent-400 bg-accent-50 px-5 py-4 text-[16px] font-medium italic leading-relaxed text-neutral-800">
          {renderInline(block.text)}
        </blockquote>
      );
    case "ul":
      return (
        <ul className="mb-5 flex flex-col gap-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[16px] leading-relaxed text-neutral-700">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d4f73" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mt-1.5 flex-shrink-0" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mb-5 flex flex-col gap-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[16px] leading-relaxed text-neutral-700">
              <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-[13px] font-bold text-primary-700">{i + 1}</span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ol>
      );
  }
}

// Categoría del artículo → línea de servicio relacionada (enlace interno).
function servicioRelacionado(post: Post) {
  const c = post.category.join(" ");
  const slug = /Eléctrica|Seguridad/.test(c)
    ? "ingenieria-electrica"
    : /Automatización|Telecomunicaciones/.test(c) && !/Almacenamiento/.test(c)
      ? "telecomunicaciones-automatizacion"
      : "sistemas-solares";
  return lineas.find((l) => l.slug === slug)!;
}

function Indice({ titulos, className = "" }: { titulos: string[]; className?: string }) {
  if (titulos.length < 3) return null;
  return (
    <nav aria-label="Índice del artículo" className={className}>
      <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-neutral-400">En este artículo</div>
      <ol className="flex flex-col gap-2 border-l border-neutral-200">
        {titulos.map((t) => (
          <li key={t}>
            <a href={`#${slugify(t)}`} className="-ml-px block border-l-2 border-transparent pl-3.5 text-[13.5px] leading-snug text-neutral-600 transition-colors hover:border-primary-500 hover:text-primary-700">
              {t}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  usePageMeta({
    title: post ? `${post.title} — Blog DINASTEL S.A.S.` : "Artículo no encontrado — Blog DINASTEL",
    description: post?.excerpt ?? "El artículo que busca no existe o cambió de dirección.",
    path: `/blog/${slug ?? ""}`,
    image: post?.coverImage,
    type: post ? "article" : "website",
  });

  const url = canonicalUrl(`/blog/${slug ?? ""}`);
  useJsonLd(
    "articulo",
    post
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          image: absoluteUrl(post.coverImage),
          datePublished: post.date,
          dateModified: post.date,
          inLanguage: "es-CO",
          articleSection: post.category,
          mainEntityOfPage: url,
          author: { "@type": "Organization", name: empresa.nombreLegal, url: `${SITE}/` },
          reviewedBy: { "@type": "Person", name: autor.nombre, jobTitle: autor.cargo, description: autor.credenciales },
          publisher: { "@type": "Organization", name: empresa.nombreLegal, logo: { "@type": "ImageObject", url: `${SITE}/assets/brand/logo.png` } },
        }
      : null,
  );
  useJsonLd(
    "migas",
    post
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE}/` },
            { "@type": "ListItem", position: 2, name: "Blog", item: canonicalUrl("/blog") },
            { "@type": "ListItem", position: 3, name: post.title, item: url },
          ],
        }
      : null,
  );
  useJsonLd(
    "faq-articulo",
    post?.faq?.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map((it) => ({ "@type": "Question", name: it.q, acceptedAnswer: { "@type": "Answer", text: it.a } })),
        }
      : null,
  );

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-5 py-32 text-center">
        <h1 className="text-2xl font-extrabold text-neutral-900">No encontramos este artículo</h1>
        <p className="text-neutral-500">Puede que el enlace esté mal escrito o que el artículo ya no exista.</p>
        <Link to="/blog" className="rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700">Volver al blog</Link>
      </div>
    );
  }

  const titulos = post.content.filter((b): b is { type: "h2"; text: string } => b.type === "h2").map((b) => b.text);
  const servicio = servicioRelacionado(post);
  const relacionados = blogPosts
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({ p, score: p.category.filter((c) => post.category.includes(c)).length }))
    .sort((a, b) => b.score - a.score || (a.p.date < b.p.date ? 1 : -1))
    .slice(0, 3)
    .map((x) => x.p);

  return (
    <article className="bg-white">
      <header className="relative overflow-hidden px-5 pb-28 pt-32 sm:px-10 sm:pb-32 sm:pt-40 lg:px-20">
        <motion.img
          src={post.coverImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,32,47,0.96) 0%, rgba(5,32,47,0.75) 50%, rgba(5,32,47,0.55) 100%)" }} />
        <motion.div initial="hidden" animate="visible" variants={slideUp} transition={{ ...transition.slow, delay: 0.1 }} className="relative mx-auto max-w-[1120px]">
          <nav aria-label="Ruta" className="mb-5 flex flex-wrap items-center gap-1.5 text-[13px] text-neutral-300">
            <Link to="/" className="hover:text-white">Inicio</Link>
            <span aria-hidden="true">/</span>
            <Link to="/blog" className="hover:text-white">Blog</Link>
          </nav>
          <div className="mb-4 flex flex-wrap gap-2">
            {post.category.map((c) => (
              <span key={c} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">{c}</span>
            ))}
          </div>
          <h1 className="max-w-[880px] text-[1.75rem] font-extrabold leading-[1.12] tracking-tight text-white sm:text-[2.5rem] lg:text-[2.9rem]">{post.title}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13.5px] text-neutral-300">
            <time dateTime={post.date}>{post.dateDisplay}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
            <span aria-hidden="true">·</span>
            <span>Revisado por Ing. {autor.nombre}</span>
          </div>
        </motion.div>
      </header>

      <div className="mx-auto -mt-16 grid max-w-[1120px] grid-cols-1 gap-10 px-5 pb-16 sm:-mt-20 sm:px-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:px-20 xl:px-0">
        <motion.div initial="hidden" animate="visible" variants={slideUp} transition={{ ...transition.slow, delay: 0.2 }} className="relative z-[1] min-w-0 rounded-2xl bg-white p-6 shadow-[0_20px_50px_-25px_rgba(8,31,45,0.35)] ring-1 ring-black/5 sm:p-10">
          <p className="mb-6 border-l-4 border-primary-500 pl-4 text-[17px] font-medium leading-relaxed text-neutral-800 sm:text-[18px]">{post.excerpt}</p>

          <details className="mb-8 rounded-xl border border-neutral-200 bg-neutral-50 p-4 lg:hidden">
            <summary className="cursor-pointer text-[14px] font-bold text-neutral-800">Índice del artículo</summary>
            <Indice titulos={titulos} className="mt-4" />
          </details>

          <div>
            {post.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          {post.faq && post.faq.length > 0 && (
            <section className="mt-12 border-t border-neutral-100 pt-8" aria-labelledby="faq-articulo">
              <h2 id="faq-articulo" className="mb-5 text-[1.4rem] font-extrabold tracking-tight text-neutral-900 sm:text-[1.65rem]">Preguntas frecuentes</h2>
              <div className="flex flex-col gap-3">
                {post.faq.map((item, i) => (
                  <details key={i} className="group rounded-xl border border-neutral-200 p-4 open:bg-neutral-50 sm:p-5" open={i === 0}>
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[16px] font-bold text-neutral-900 sm:text-[17px]">
                      {item.q}
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-neutral-300 text-primary-600 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                    </summary>
                    <p className="mt-3 text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Autor / revisor técnico */}
          <div className="mt-10 flex items-start gap-4 rounded-2xl border border-neutral-200 p-5 sm:p-6">
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-[16px] font-extrabold text-white" aria-hidden="true">VM</span>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-neutral-400">Revisión técnica</div>
              <div className="mt-1 text-[16px] font-extrabold text-neutral-900">Ing. {autor.nombre}</div>
              <div className="text-[13.5px] font-medium text-primary-700">{autor.credenciales}</div>
              <p className="mt-2 text-[14px] leading-relaxed text-neutral-600">{autor.cargo}. {autor.experiencia}</p>
            </div>
          </div>

          {/* Llamado a la acción ligado al servicio */}
          <div className="mt-6 overflow-hidden rounded-2xl bg-primary-800 p-6 text-white sm:p-8">
            <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent-300">Servicio relacionado</div>
            <h3 className="mt-2 text-[1.3rem] font-extrabold leading-tight sm:text-[1.5rem]">{servicio.title}</h3>
            <p className="mt-2 max-w-[520px] text-[14.5px] leading-relaxed text-neutral-300">{servicio.summary}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to={`/servicios#${servicio.slug}`} className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[14px] font-semibold text-primary-800 hover:bg-accent-50">
                Ver el servicio <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
              <a href={whatsappUrl(`Hola DINASTEL, leí el artículo "${post.title}" y quiero asesoría.`)} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-white/10">
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </motion.div>

        <aside className="hidden lg:block">
          <div className="sticky top-28 flex flex-col gap-6 pt-24">
            <Indice titulos={titulos} />
            <div className="rounded-2xl border border-neutral-200 p-5">
              <div className="text-[14px] font-bold text-neutral-900">¿Tiene un caso parecido?</div>
              <p className="mt-1.5 text-[13px] leading-relaxed text-neutral-600">Le respondemos con datos de su proyecto, no con promesas.</p>
              <Link to="/contacto" className="mt-4 inline-flex w-full justify-center rounded-full bg-primary-600 px-4 py-2.5 text-[13.5px] font-semibold text-white hover:bg-primary-700">Cotizar proyecto</Link>
              <a href={`mailto:${contacto.email}`} className="mt-2 block text-center text-[12.5px] text-neutral-500 hover:text-primary-700">{contacto.email}</a>
            </div>
          </div>
        </aside>
      </div>

      {relacionados.length > 0 && (
        <section className="border-t border-neutral-100 bg-neutral-50 px-5 py-14 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="mb-6 text-[1.4rem] font-extrabold tracking-tight text-neutral-900">Siga leyendo</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {relacionados.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="h-36 overflow-hidden">
                    <img src={p.coverImage} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-primary-600">{p.category[0]}</span>
                    <span className="text-[15px] font-bold leading-snug text-neutral-900 group-hover:text-primary-700">{p.title}</span>
                    <span className="mt-auto pt-1 text-[12px] text-neutral-400">{p.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
