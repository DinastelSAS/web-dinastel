import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "../data/blog";
import { slideUp, transition } from "../foundations/motion";

export function Blog() {
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="min-h-screen bg-neutral-50">
      <section className="bg-primary-800 px-5 pb-14 pt-32 sm:px-10 sm:pb-16 sm:pt-40 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <motion.div initial="hidden" animate="visible" variants={slideUp} transition={transition.base}>
            <div className="mb-3.5 text-[13px] font-bold tracking-[0.14em] text-accent-400">BLOG DINASTEL</div>
            <h1 className="mb-4 max-w-[720px] text-[1.9rem] font-extrabold leading-tight tracking-tight text-white sm:text-[2.75rem]">
              Ingeniería eléctrica y energía solar, explicadas sin tecnicismos.
            </h1>
            <p className="max-w-[560px] text-[17px] leading-relaxed text-neutral-200">
              Guías prácticas, datos y buenas prácticas para tomar mejores decisiones sobre tu
              instalación eléctrica o tu sistema solar.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-10 sm:py-16 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          {posts.length === 0 ? (
            <p className="text-neutral-500">Muy pronto publicaremos el primer artículo.</p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={slideUp}
                  transition={{ ...transition.base, delay: i * 0.08 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-card transition-shadow hover:shadow-card-hover"
                  >
                    <div
                      className="h-[180px] w-full bg-neutral-200 bg-cover bg-center transition-transform duration-300 group-hover:scale-[1.03]"
                      style={{ backgroundImage: `url(${post.coverImage})` }}
                    />
                    <div className="flex flex-1 flex-col gap-2.5 p-6">
                      <div className="flex flex-wrap gap-2">
                        {post.category.slice(0, 2).map((c) => (
                          <span key={c} className="rounded-full bg-primary-50 px-3 py-1 text-[11px] font-semibold text-primary-700">
                            {c}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-lg font-extrabold leading-snug text-neutral-900 group-hover:text-primary-700">
                        {post.title}
                      </h2>
                      <p className="line-clamp-3 text-sm leading-relaxed text-neutral-500">{post.excerpt}</p>
                      <div className="mt-auto flex items-center gap-2 pt-2 text-xs font-medium text-neutral-400">
                        <span>{post.dateDisplay}</span>
                        <span aria-hidden="true">·</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
