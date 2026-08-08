const dsatFeatures = [
  'Custom adaptive curriculum tailored to your Module 2 weaknesses',
  'Advanced Desmos mechanics and calculator strategy training',
  'Dedicated Google Classroom student portal with resources',
  'Real-time progress analytics and score trajectory tracking',
  'Flexible scheduling — weekdays and weekends',
]

const youthFeatures = [
  'Choice of MATHCOUNTS, Pre-USACO, or AoPS tracks',
  'Socratic problem-solving and logical deconstruction',
  'Rigorous homework and progress tracking',
  'Temple Partnership Discount (15-20% off for members)',
  'Sibling/Group cohort rates available ($70/hr for two)',
  'Sliding scale financial flexibility upon inquiry',
]

export default function Services() {
  return (
    <section id="investment" className="relative py-24 sm:py-32 bg-slate-dark">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-electric uppercase tracking-[0.2em] mb-4 block">
            Investment
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Elite Coaching. Two Divisions.
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Transparent, uncompromising 1:1 tracks tailored to your student's exact stage.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Youth Division Tier */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-electric/10 to-transparent rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
            <div className="relative h-full flex flex-col glass rounded-3xl p-8 sm:p-10">
              <div className="mb-8 pb-8 border-b border-electric/10">
                <div className="text-xs font-semibold text-electric uppercase tracking-[0.15em] mb-2">
                  Youth & Middle School
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Foundational Mastery
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black text-white">$50</span>
                  <span className="text-text-dim text-sm">/hour</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {youthFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-electric mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-muted text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfXTa5Kfnwd6TsTCOZ7ijmsJakfQABwBLsdrJSZfDFfq7Hq8Q/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-4 border border-electric/30 text-electric hover:bg-electric/10 font-bold text-lg rounded-xl transition-all duration-300"
              >
                Youth Intake Form
              </a>
            </div>
          </div>

          {/* DSAT Tier */}
          <div className="relative group">
            {/* Glow background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-electric/20 via-electric/5 to-electric/20 rounded-3xl blur-xl" />
            <div className="relative h-full flex flex-col glass rounded-3xl p-8 sm:p-10 border border-electric/30">
              <div className="mb-8 pb-8 border-b border-electric/10">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-xs font-semibold text-electric uppercase tracking-[0.15em]">
                    High School Division
                  </div>
                  <span className="px-3 py-1 bg-electric/10 text-electric text-[10px] font-bold uppercase tracking-wider rounded-full">
                    Flagship
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  DSAT Math Mastery
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black text-gradient">$75</span>
                  <span className="text-text-dim text-sm">/hour</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {dsatFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-electric mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-muted text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfXTa5Kfnwd6TsTCOZ7ijmsJakfQABwBLsdrJSZfDFfq7Hq8Q/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-4 bg-electric text-navy font-bold text-lg rounded-xl glow-btn"
              >
                Book a Diagnostic Session
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
