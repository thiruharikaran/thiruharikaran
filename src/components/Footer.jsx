import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-base-700 py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-500 font-mono">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.</p>
        <p>Chennai, India</p>
      </div>
    </footer>
  )
}
