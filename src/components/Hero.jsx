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
        {/* Pre-headline */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-electric/20 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-electric animate-pulse"></span>
          <span className="text-xs font-semibold text-text-muted uppercase tracking-[0.2em]">
            Now Accepting Grades 1–10
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-fade-in-up animate-delay-100">
          Math Acceleration.{' '}
          <br className="hidden sm:block" />
          <span className="text-gradient">Elite Preparation.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-text-primary max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animate-delay-200">
          From unbreakable early foundations to a perfect 800 SAT score. Direct 1:1 mentorship by a USACO Platinum competitor and 1530 SAT scorer.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 mb-12 animate-fade-in-up animate-delay-300">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-electric mb-1">800</span>
            <span className="text-xs text-text-muted uppercase tracking-widest">SAT Math</span>
          </div>
          <div className="w-px h-12 bg-electric/20 hidden sm:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-electric mb-1">Top 500</span>
            <span className="text-xs text-text-muted uppercase tracking-widest">USACO Rank</span>
          </div>
          <div className="w-px h-12 bg-electric/20 hidden sm:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-electric mb-1">1st Place</span>
            <span className="text-xs text-text-muted uppercase tracking-widest">State Coach</span>
          </div>
        </div>

        {/* CTA */}
        <div className="animate-fade-in-up animate-delay-400">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfXTa5Kfnwd6TsTCOZ7ijmsJakfQABwBLsdrJSZfDFfq7Hq8Q/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-electric text-navy font-bold text-lg rounded-xl glow-btn hover:scale-[1.02] transition-transform"
          >
            Book an Intake Session
          </a>
        </div>
      </div>
    </section>
  )
}
