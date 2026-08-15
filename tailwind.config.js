/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#080D17',
          900: '#0B1120',
          800: '#111827',
          700: '#182235',
          600: '#243044',
        },
        cyan: {
          accent: '#22D3EE',
        },
        blue: {
          accent: '#3B82F6',
        },
        ink: {
          100: '#E7ECF3',
          300: '#B7C1D1',
          500: '#8B98AC',
          700: '#5A6478',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)',
        'glow-radial':
          'radial-gradient(600px circle at var(--x) var(--y), rgba(34,211,238,0.08), transparent 40%)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        glow: '0 0 40px rgba(34, 211, 238, 0.15)',
      },
      animation: {
        blink: 'blink 1s steps(1) infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: 1 },
          '50.01%, 100%': { opacity: 0 },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
