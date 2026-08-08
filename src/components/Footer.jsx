export default function Footer() {
  return (
    <footer className="relative py-12 bg-navy border-t border-electric/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo & location */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
                <polygon points="16,2 30,28 2,28" stroke="url(#footer-grad)" strokeWidth="2" fill="none" />
                <defs>
                  <linearGradient id="footer-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="50%" stopColor="oklch(0.65 0.22 250)" />
                    <stop offset="100%" stopColor="#a78bfa" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-lg font-bold tracking-tight">
                <span className="prism-gradient">PRISM</span>
                <span className="text-text-muted font-light ml-1">prep</span>
              </span>
            </div>
            <p className="text-text-dim text-sm flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Serving Allen, TX &amp; remote students nationwide
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="/privacy-policy.html"
              className="text-sm text-text-muted hover:text-electric transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service.html"
              className="text-sm text-text-muted hover:text-electric transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-text-dim text-xs">
            &copy; {new Date().getFullYear()} Prism Test Prep. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
