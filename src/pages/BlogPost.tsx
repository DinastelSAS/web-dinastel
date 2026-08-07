import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getPostBySlug, blogPosts, type BlogBlock } from "../data/blog";
import { slideUp, transition } from "../foundations/motion";
import { contacto } from "../data/site";

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold text-neutral-900">{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mb-3.5 mt-9 text-[1.4rem] font-extrabold tracking-tight text-neutral-900 sm:text-[1.65rem]">{block.text}</h2>;
    case "p":
      return <p className="mb-4 text-[16px] leading-relaxed text-neutral-700 sm:text-[17px]">{renderInline(block.text)}</p>;
    case "quote":
      return (
        <blockquote className="my-6 border-l-4 border-accent-400 bg-accent-50 px-5 py-4 text-[16px] font-medium italic leading-relaxed text-neutral-800">
          {renderInline(block.text)}
        </blockquote>
      );
    case "ul":
      return (
        <ul className="mb-5 flex flex-col gap-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[16px] leading-relaxed text-neutral-700">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d4f73" strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round" className="mt-1.5 flex-shrink-0">
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
              <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-[13px] font-bold text-primary-700">
                {i + 1}
              </span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ol>
      );
  }
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    if (!post) return;
    const prevTitle = document.title;
    document.title = `${post.title} — Blog DINASTEL S.A.S.`;
    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute("content") ?? "";
    metaDesc?.setAttribute("content", post.excerpt);
    window.scrollTo({ top: 0 });
    return () => {
      document.title = prevTitle;
      metaDesc?.setAttribute("content", prevDesc);
    };
  }, [post]);

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-5 py-32 text-center">
        <h1 className="text-2xl font-extrabold text-neutral-900">No encontramos este artículo</h1>
        <p className="text-neutral-500">Puede que el enlace esté mal escrito o el post ya no exista.</p>
        <Link to="/blog" className="rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700">
          Volver al blog
        </Link>
      </div>
    );
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="min-h-screen bg-white">
      <div className="relative h-[280px] w-full bg-cover bg-center sm:h-[380px]" style={{ backgroundImage: `url(${post.coverImage})` }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.35) 55%, rgba(15,23,42,0.15) 100%)" }} />
      </div>

      <div className="mx-auto max-w-[760px] px-5 sm:px-8">
        <motion.div initial="hidden" animate="visible" variants={slideUp} transition={transition.base} className="relative z-[1] -mt-16 rounded-2xl bg-white p-6 shadow-card sm:-mt-20 sm:p-10">
          <Link to="/blog" className="mb-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
            </svg>
            Volver al blog
          </Link>

          <div className="mb-3 flex flex-wrap gap-2">
            {post.category.map((c) => (
              <span key={c} className="rounded-full bg-primary-50 px-3 py-1 text-[11px] font-semibold text-primary-700">{c}</span>
            ))}
          </div>

          <h1 className="mb-3 text-[1.6rem] font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-[2.2rem]">
            {post.title}
          </h1>

          <div className="mb-6 flex items-center gap-2 text-sm text-neutral-500">
            <span>{post.author}</span>
            <span aria-hidden="true">·</span>
            <span>{post.dateDisplay}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>

          <div>
            {post.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-primary-100 bg-primary-50 p-6 sm:p-7">
            <h3 className="mb-1.5 text-lg font-extrabold text-neutral-900">
              ¿Quieres saber si tu instalación cumple con RETIE?
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-neutral-600">
              Cotiza sin fronteras y te decimos qué hace falta, sin trámites que coordinar por tu cuenta.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/57${contacto.telefono}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700"
              >
                Escribir por WhatsApp
              </a>
              <a
                href={`mailto:${contacto.email}`}
                className="rounded-full border border-primary-200 bg-white px-6 py-3 text-sm font-semibold text-primary-700 hover:bg-primary-50"
              >
                {contacto.email}
              </a>
            </div>
          </div>
        </motion.div>

        {related.length > 0 && (
          <div className="mb-16 mt-10">
            <h3 className="mb-4 text-sm font-bold tracking-[0.1em] text-neutral-400">SEGUIR LEYENDO</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="rounded-xl border border-neutral-200 p-5 text-sm font-semibold text-neutral-800 shadow-card hover:shadow-card-hover"
                >
                  {p.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
