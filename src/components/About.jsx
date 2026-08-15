import { motion } from 'framer-motion'
import { profile, quickFacts } from '../data/portfolio'

const AboutPhoto = () => (
  <div className="glass rounded-2xl p-2 mb-4">
    <img
      src={profile.photo}
      alt={profile.name}
      className="w-full rounded-xl object-cover object-top max-h-72"
    />
  </div>
)

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="mx-auto max-w-6xl grid md:grid-cols-5 gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3"
        >
          <p className="eyebrow mb-3">About</p>
          <h2 className="section-heading mb-6">
            Turning ideas into <span className="gradient-text">shipped software</span>
          </h2>
          <p className="text-ink-300 leading-relaxed">
            {profile.summary}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:col-span-2"
        >
          <AboutPhoto />
          <div className="grid grid-cols-2 gap-4">
          {quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="glass rounded-2xl p-5 flex flex-col justify-between min-h-[110px]"
            >
              <span className="font-mono text-xs text-cyan-accent">{fact.value}</span>
              <span className="text-sm text-ink-300 mt-2">{fact.label}</span>
            </div>
          ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
