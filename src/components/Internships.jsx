import { motion } from 'framer-motion'
import { internships } from '../data/portfolio'

export default function Internships() {
  return (
    <section
      id="internships"
      className="py-28 px-6 bg-base-800/40"
    >
      <div className="mx-auto max-w-4xl">

        <p className="eyebrow mb-3">
          INTERNSHIPS & TRAINING
        </p>

        <h2 className="section-heading mb-12">
          Where I gained experience
        </h2>

        <div className="relative border-l border-base-600 pl-8 space-y-10">

          {internships.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: true,
                margin: '-60px',
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
              }}
              className="relative"
            >

              <span
                className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full bg-cyan-accent shadow-glow"
              />

              <p className="font-mono text-xs text-ink-500 mb-1">
                {exp.period}
              </p>

              <h3 className="font-display text-lg text-ink-100 font-medium">
                {exp.role}
              </h3>

              <p className="text-sm text-cyan-accent mb-3">
                {exp.org}
              </p>

              <ul className="space-y-1.5">
                {exp.points.map((point) => (
                  <li
                    key={point}
                    className="text-sm text-ink-300 flex gap-2"
                  >
                    <span className="text-ink-700">
                      —
                    </span>

                    {point}
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}