import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 relative">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="16,2 30,28 2,28" stroke="url(#prism-grad)" strokeWidth="2" fill="none" />
              <defs>
                <linearGradient id="prism-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="50%" stopColor="oklch(0.65 0.22 250)" />
                  <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight">
            <span className="prism-gradient">PRISM</span>
            <span className="text-text-muted font-light ml-1">prep</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#method" className="text-sm text-text-muted hover:text-electric transition-colors duration-300">Method</a>
          <a href="#tutors" className="text-sm text-text-muted hover:text-electric transition-colors duration-300">Tutors</a>
          <a href="#investment" className="text-sm text-text-muted hover:text-electric transition-colors duration-300">Investment</a>
          <a
            href="#book"
            className="px-5 py-2.5 bg-electric text-navy font-semibold text-sm rounded-lg glow-btn"
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 flex flex-col gap-4">
          <a href="#method" onClick={() => setMenuOpen(false)} className="text-text-muted hover:text-electric transition-colors">Method</a>
          <a href="#tutors" onClick={() => setMenuOpen(false)} className="text-text-muted hover:text-electric transition-colors">Tutors</a>
          <a href="#investment" onClick={() => setMenuOpen(false)} className="text-text-muted hover:text-electric transition-colors">Investment</a>
          <a href="#book" onClick={() => setMenuOpen(false)} className="px-5 py-2.5 bg-electric text-navy font-semibold text-sm rounded-lg text-center glow-btn">
            Book Now
          </a>
        </div>
      </div>
    </nav>
  )
}
