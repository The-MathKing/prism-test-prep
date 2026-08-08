const features = [
  'Choice of Early Foundations, Accelerated Middle, or SAT tracks',
  'Pedagogy tailored to age: behavioral management to Socratic logic',
  'Rigorous homework and progress tracking across all phases',
  'Temple Partnership Discount (15-20% off for members)',
  'Sibling/Group cohort rates available ($70/hr for two students)',
  'Sliding scale financial flexibility upon inquiry',
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
            A singular, transparent rate for our entire K-10 pipeline. Discounts are structured to support our community.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="relative group max-w-lg mx-auto">
          {/* Glow background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-electric/20 via-electric/5 to-electric/20 rounded-3xl blur-xl" />
          <div className="relative h-full flex flex-col glass rounded-3xl p-8 sm:p-12 border border-electric/30">
            <div className="mb-8 pb-8 border-b border-electric/10">
              <div className="flex justify-between items-start mb-2">
                <div className="text-xs font-semibold text-electric uppercase tracking-[0.15em]">
                  K-10 Math Pipeline
                </div>
                <span className="px-3 py-1 bg-electric/10 text-electric text-[10px] font-bold uppercase tracking-wider rounded-full">
                  1-ON-1
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Premium Math Tutoring
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl sm:text-6xl font-black text-gradient">$50</span>
                <span className="text-text-dim text-sm">/hour</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-electric mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-primary text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfXTa5Kfnwd6TsTCOZ7ijmsJakfQABwBLsdrJSZfDFfq7Hq8Q/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-4 bg-electric text-navy font-bold text-lg rounded-xl glow-btn"
            >
              Book an Intake Session
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
