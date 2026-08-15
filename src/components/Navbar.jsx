import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { nav } from '../data/portfolio'

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-6xl px-6 mt-4">
        <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between shadow-glass">
          <button
            onClick={() => scrollTo('home')}
            className="font-mono text-cyan-accent font-medium tracking-tight"
          >
            thiruharikaran<span className="text-ink-500">.dev</span>
          </button>

          <ul className="hidden md:flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    active === item.id
                      ? 'text-ink-100'
                      : 'text-ink-500 hover:text-ink-100'
                  }`}
                >
                  {item.label}
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-lg bg-base-700"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-ink-100 text-xl"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {open && (
          <div className="glass mt-2 rounded-2xl p-3 md:hidden">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-sm ${
                  active === item.id ? 'text-ink-100 bg-base-700' : 'text-ink-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
