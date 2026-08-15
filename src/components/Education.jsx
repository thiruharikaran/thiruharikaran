import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { education, certifications } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="py-28 px-6">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-14">
        <div>
          <p className="eyebrow mb-3">Education</p>
          <h2 className="section-heading mb-8">Academic background</h2>
          <div className="space-y-5">
            {education.map((ed, i) => (
              <motion.div
                key={ed.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <p className="font-mono text-xs text-ink-500 mb-1">{ed.period}</p>
                <h3 className="font-display text-base text-ink-100 font-medium">{ed.degree}</h3>
                <p className="text-sm text-ink-300">{ed.school}</p>
                <p className="text-sm text-cyan-accent mt-1">{ed.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow mb-3">Certifications</p>
          <h2 className="section-heading mb-8">Credentials</h2>
          <div className="space-y-5">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 flex gap-4"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-cyan-accent/10 text-cyan-accent">
                  <FiAward />
                </span>
                <div>
  <h3 className="font-display text-base text-ink-100 font-medium">
    {cert.title}
  </h3>

  <p className="text-sm text-cyan-accent mb-1">
    {cert.org}
  </p>

  <p className="text-sm text-ink-300">
    {cert.detail}
  </p>

  {cert.certificate && (
    <a
      href={cert.certificate}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 mt-3 text-sm text-cyan-accent hover:underline"
    >
      View Certificate →
    </a>
  )}
</div>
              </motion.div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  )
}
