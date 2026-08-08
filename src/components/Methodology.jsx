const cards = [
  {
    number: '01',
    title: 'The Adaptive Trap',
    description:
      'The Digital SAT\'s adaptive engine routes high-performers into Module 2 — a gauntlet of non-standard problems designed to punish surface-level memorization. Most students hit a ceiling they can\'t diagnose.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Why Standard Tutoring Fails',
    description:
      'Generic SAT prep treats math as a checklist. Module 2 demands pattern recognition across algebraic systems, coordinate geometry traps, and function-based reasoning that no formula sheet can cover.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728A9 9 0 015.636 5.636" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'The Prism Method',
    description:
      'We deconstruct every problem through structured logical layers — isolating the mathematical core, identifying the trap mechanism, and executing with precision. No guessing. No shortcuts. Pure analytical rigor.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

export default function Methodology() {
  return (
    <section id="method" className="relative py-24 sm:py-32 bg-slate-dark">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-electric uppercase tracking-[0.2em] mb-4 block">
            Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            The Module 2 Problem
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Understanding why the hardest section of the Digital SAT requires a fundamentally different approach.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.number}
              className="card-glow rounded-2xl bg-navy-light/60 p-8 flex flex-col"
            >
              {/* Card header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center text-electric">
                  {card.icon}
                </div>
                <span className="text-xs font-mono text-electric/40">{card.number}</span>
              </div>

              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed flex-1">
                {card.description}
              </p>

              {/* Bottom accent line */}
              <div className="mt-6 pt-6 border-t border-electric/10">
                <div className="w-8 h-0.5 bg-electric/30 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
