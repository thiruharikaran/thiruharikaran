import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'
import { profile } from '../data/portfolio'
import emailjs from '@emailjs/browser'

const info = [
  { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'thiruharikaran-r', href: profile.linkedin },
  { icon: FiGithub, label: 'GitHub', value: 'thiruharikaran', href: profile.github },
  { icon: FiMapPin, label: 'Location', value: profile.location, href: null },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
  e.preventDefault()

  setLoading(true)

  try {
    await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    name: form.name,
    email: form.email,
    message: form.message,
    time: new Date().toLocaleString(),
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)

    setSent(true)
    setForm({ name: '', email: '', message: '' })
  } catch (error) {
    console.error('EmailJS Error:', error)
    alert('Failed to send message. Please try again.')
  } finally {
    setLoading(false)
  }
}

  return (
    <section id="contact" className="py-28 px-6 bg-base-800/40">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-heading mb-12">Let's build something together</h2>

        <div className="grid md:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 glass rounded-2xl p-6 space-y-5"
          >
            {info.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-cyan-accent/10 text-cyan-accent">
                    <Icon />
                  </span>
                  <div>
                    <p className="text-xs text-ink-500">{label}</p>
                    <p className="text-sm text-ink-100">{value}</p>
                  </div>
                </div>
              )
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="block hover:opacity-80 transition-opacity"
                >
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              )
            })}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 glass rounded-2xl p-6 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-ink-500 mb-1.5 block">Your name</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl bg-base-900 border border-base-600 px-4 py-2.5 text-sm text-ink-100 outline-none focus:border-cyan-accent transition-colors"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="text-xs text-ink-500 mb-1.5 block">Your email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl bg-base-900 border border-base-600 px-4 py-2.5 text-sm text-ink-100 outline-none focus:border-cyan-accent transition-colors"
                  placeholder="jane@company.com"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-ink-500 mb-1.5 block">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-xl bg-base-900 border border-base-600 px-4 py-2.5 text-sm text-ink-100 outline-none focus:border-cyan-accent transition-colors resize-none"
                placeholder="Tell me about the role or project..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-accent px-5 py-3 text-sm font-semibold text-base-950 hover:shadow-glow transition-shadow"
            >
              <FiSend /> Send Message
            </button>
            {sent && (
  <p className="text-sm text-green-400">
    ✅ Message sent successfully! I'll get back to you soon.
  </p>
)}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
