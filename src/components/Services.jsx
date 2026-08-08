const features = [
  'Custom adaptive curriculum tailored to your Module 2 weaknesses',
  'Advanced Desmos mechanics and calculator strategy training',
  'Dedicated Google Classroom student portal with resources',
  'Real-time progress analytics and score trajectory tracking',
  'Flexible scheduling — weekdays and weekends',
]

export default function Services() {
  return (
    <section id="investment" className="relative py-24 sm:py-32 bg-slate-dark">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-electric uppercase tracking-[0.2em] mb-4 block">
            Investment
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            One Tier. No Compromises.
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Every student gets the full arsenal. No watered-down packages.
          </p>
        </div>

        {/* Premium tier card */}
        <div className="relative max-w-2xl mx-auto">
          {/* Glow background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-electric/20 via-electric/5 to-electric/20 rounded-3xl blur-xl" />

          <div className="relative glass rounded-3xl p-8 sm:p-12">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 pb-8 border-b border-electric/10">
              <div>
                <div className="text-xs font-semibold text-electric uppercase tracking-[0.15em] mb-2">
                  1-on-1 Elite Coaching
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">
                  DSAT Math Mastery
                </h3>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-black text-gradient">$75</span>
                <span className="text-text-dim text-sm">/hour</span>
              </div>
            </div>

            {/* Features list */}
            <ul className="space-y-4 mb-10">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-electric mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-muted text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfXTa5Kfnwd6TsTCOZ7ijmsJakfQABwBLsdrJSZfDFfq7Hq8Q/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-8 py-4 bg-electric text-navy font-bold text-lg rounded-xl glow-btn"
            >
              Book a Diagnostic Session
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
