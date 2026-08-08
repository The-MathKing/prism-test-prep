export default function Hero() {
  return (
    <section id="book" className="relative min-h-screen flex items-center justify-center geometric-mesh overflow-hidden">
      {/* Radial glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.65_0.22_250_/_0.08)_0%,transparent_70%)]" />

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-electric/10 rotate-45 animate-pulse" />
      <div className="absolute bottom-32 right-16 w-24 h-24 border border-electric/5 rotate-12" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-electric/8 -rotate-12 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric/20 bg-electric/5 mb-8 animate-fade-in-up">
          <div className="w-2 h-2 rounded-full bg-electric animate-pulse" />
          <span className="text-xs font-medium text-electric tracking-wide uppercase">Elite Digital SAT Coaching</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-fade-in-up animate-delay-100">
          Master Module 2.{' '}
          <br className="hidden sm:block" />
          <span className="text-gradient">Break the 700+ Barrier.</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animate-delay-200">
          Elite Digital SAT Math coaching focused strictly on adaptive algorithms,
          complex systems, and advanced Desmos execution.
        </p>

        {/* CTA */}
        <div className="animate-fade-in-up animate-delay-300">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfXTa5Kfnwd6TsTCOZ7ijmsJakfQABwBLsdrJSZfDFfq7Hq8Q/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-electric text-navy font-bold text-lg rounded-xl glow-btn"
          >
            Book a Diagnostic Session
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto animate-fade-in-up animate-delay-400">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-electric">800</div>
            <div className="text-xs text-text-dim mt-1 uppercase tracking-wider">SAT Math</div>
          </div>
          <div className="text-center border-x border-electric/10">
            <div className="text-2xl sm:text-3xl font-bold text-electric">700+</div>
            <div className="text-xs text-text-dim mt-1 uppercase tracking-wider">Target Score</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-electric">1:1</div>
            <div className="text-xs text-text-dim mt-1 uppercase tracking-wider">Coaching</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <svg className="w-6 h-6 text-text-dim" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
