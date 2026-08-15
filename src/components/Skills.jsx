import { motion } from 'framer-motion'
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiLink,
  FiTool,
} from 'react-icons/fi'
import { skills } from '../data/portfolio'

const icons = {
  Frontend: FiCode,
  Backend: FiServer,
  Database: FiDatabase,
  Blockchain: FiLink,
  Tools: FiTool,
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-base-800/40">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-3">Skills</p>
        <h2 className="section-heading mb-12">Toolkit I reach for</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => {
            const Icon = icons[group.category] ?? FiCode
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-cyan-accent/10 text-cyan-accent">
                    <Icon />
                  </span>
                  <h3 className="font-display font-medium text-ink-100">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs rounded-md border border-base-600 px-2.5 py-1.5 text-ink-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
