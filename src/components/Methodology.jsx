const cards = [
  {
    number: '01',
    title: 'The Reality of Early Childhood',
    description:
      'Young minds require a fundamentally different approach to learning. We focus on building rock-solid arithmetic fluency and number sense through engaging, structured lessons, ensuring students master the basics before moving to complex logic.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Role-Model Mentorship',
    description:
      'We don\'t just teach math; we show students what mathematical excellence looks like. By learning directly from mentors with perfect SAT scores and national olympiad awards, your child gains both an elite tutor and an inspiring role model.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'The Socratic Shift',
    description:
      'As students advance into middle and high school, our pedagogy evolves. We deploy the Socratic method to guide students through competitive math and complex SAT curveballs—drawing on our firsthand experience at the highest national levels.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

export default function Methodology() {
  return (
    <section id="method" className="relative py-24 sm:py-32 bg-slate-dark">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-electric uppercase tracking-[0.2em] mb-4 block">
            Pedagogy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            The Reality Check
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Understanding why a 5-year-old and a 15-year-old require fundamentally different approaches to mathematical excellence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.number}
              className="card-glow rounded-2xl bg-navy/50 p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center text-electric">
                  {card.icon}
                </div>
                <span className="text-xs font-mono text-electric/40">{card.number}</span>
              </div>
              <h3 className="text-xl font-bold mb-4 leading-snug">{card.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed flex-1">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
