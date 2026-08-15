import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/portfolio'

const filters = ['All', 'Full Stack', 'Blockchain', 'Web']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () =>
      active === 'All' ? projects : projects.filter((p) => p.tags.includes(active)),
    [active]
  )

  return (
    <section id="projects" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow mb-3">Featured Work</p>
            <h2 className="section-heading">Projects worth a closer look</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-2 text-xs font-mono transition-colors border ${
                  active === f
                    ? 'bg-cyan-accent text-base-950 border-cyan-accent font-semibold'
                    : 'border-base-600 text-ink-300 hover:border-cyan-accent/50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="glass rounded-2xl overflow-hidden group"
              >
                <div className="h-48 relative overflow-hidden border-b border-base-600 bg-base-900">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.imageAlt || project.title}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-base-700 via-base-800 to-base-900 flex items-center justify-center">
                      <span className="font-display text-2xl text-ink-700">{project.title}</span>
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-900/80 via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {project.tags.map((t) => (
                      <span key={t} className="font-mono text-[10px] uppercase tracking-wide text-cyan-accent">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-lg text-ink-100 font-medium">{project.title}</h3>
                  <p className="text-sm text-ink-500 mb-3">{project.subtitle}</p>
                  <p className="text-sm text-ink-300 leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] rounded-md border border-base-600 px-2 py-1 text-ink-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-ink-300 hover:text-cyan-accent transition-colors"
                    >
                      <FiGithub /> Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-ink-300 hover:text-cyan-accent transition-colors"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
