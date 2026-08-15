import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowDown, FiMail } from 'react-icons/fi'
import { profile } from '../data/portfolio'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-grid pt-32 pb-20"
    >
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-cyan-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-accent/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-14 items-center w-full">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-6">
    <div className="h-16 w-16 rounded-full p-[2px] bg-gradient-to-br from-cyan-accent to-blue-accent shadow-glow">
      <img
        src={profile.photo}
        alt={profile.name}
        className="h-full w-full rounded-full object-cover border-2 border-base-900"
      />
    </div>
  </motion.div>


          <motion.p variants={item} className="eyebrow mb-5">
            FULL STACK DEVELOPER
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-ink-100"
          >
            {profile.name}
          </motion.h1>

          <motion.p variants={item} className="mt-4 font-mono text-lg text-cyan-accent">
            {profile.role}
          </motion.p>

          <motion.p variants={item} className="mt-5 text-ink-300 max-w-md leading-relaxed">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="/Thiruharikaran R Resume.pdf"
              download
              className="rounded-xl bg-cyan-accent px-5 py-3 text-sm font-semibold text-base-950 hover:shadow-glow transition-shadow"
            >
              Download Resume
            </a>
            <button
              onClick={() => scrollTo('projects')}
              className="rounded-xl border border-base-600 px-5 py-3 text-sm font-semibold text-ink-100 hover:border-cyan-accent/50 transition-colors"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="rounded-xl px-5 py-3 text-sm font-semibold text-ink-300 hover:text-cyan-accent transition-colors"
            >
              Contact Me
            </button>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-4 text-ink-300">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-cyan-accent transition-colors text-xl"
            >
              <FiGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-cyan-accent transition-colors text-xl"
            >
              <FiLinkedin />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="hover:text-cyan-accent transition-colors text-xl"
            >
              <FiMail />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="relative"
        >
          <div className="glass rounded-2xl shadow-glass overflow-hidden">
            <div className="flex items-center gap-2 border-b border-base-600 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" />
              <span className="ml-3 font-mono text-xs text-ink-500">whoami.sh</span>
            </div>
            <div className="p-6 font-mono text-sm leading-7 text-ink-300">
              <p><span className="text-cyan-accent">$</span> whoami</p>
              <p className="text-ink-100">{profile.name.toLowerCase().replace(/\s+/g, '_')}</p>
              <p className="mt-3"><span className="text-cyan-accent">$</span> cat role.txt</p>
              <p className="text-ink-100">Full Stack Software Developer</p>
              <p className="mt-3"><span className="text-cyan-accent">$</span> ls stack/</p>
              <p className="text-blue-accent">React.js Node.js Express.js MongoDB MySQL Solidity</p>
              <p className="mt-3"><span className="text-cyan-accent">$</span> echo $LOCATION</p>
              <p className="text-ink-100">{profile.location}</p>
              <p className="mt-3 flex items-center gap-1">
                <span className="text-cyan-accent">$</span>
                <span className="animate-blink">▍</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('about')}
        aria-label="Scroll down"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-500 hover:text-cyan-accent transition-colors"
      >
        <FiArrowDown size={20} />
      </motion.button>
    </section>
  )
}
