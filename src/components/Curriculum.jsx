const phases = [
  {
    number: '01',
    title: 'Early Foundations',
    grades: 'Grades 1-4',
    focus: 'Number sense, mental math speed, basic arithmetic fluency, and early logic puzzles.',
    anchor: 'Building an unbreakable mathematical foundation and instilling study discipline early through direct role-model mentorship.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'The Accelerated Middle Track',
    grades: 'Grades 5-8',
    focus: 'Pre-Algebra, Algebra I, Geometry, and introductory contest math (AMC 8, MATHCOUNTS).',
    anchor: 'Getting ahead of public school curriculum. Leverages direct experience coaching a middle school team to 1st Place at State.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Early High School & SAT Math',
    grades: 'Grades 9-10',
    focus: 'Advanced Algebra, SAT Math (Desmos mechanics, Module 2 curveballs), and AMC 10 prep.',
    anchor: 'Early mastery of standardized testing to secure a 700+ baseline before junior year, utilizing a perfect 800 score as proof of concept.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

export default function Curriculum() {
  return (
    <section id="curriculum" className="relative py-24 sm:py-32 bg-navy">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-electric uppercase tracking-[0.2em] mb-4 block">
            K-10 Math Pipeline
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            A Continuous Architecture
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Strictly defining our niche as math acceleration and elite preparation, from age 5 through 10th grade.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {phases.map((phase) => (
            <div
              key={phase.number}
              className="card-glow rounded-2xl bg-navy-light/60 p-8 flex flex-col"
            >
              {/* Card header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center text-electric shrink-0">
                    {phase.icon}
                  </div>
                  <span className="text-xs font-mono text-electric/40">Phase {phase.number}</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-slate-dark text-text-dim text-[10px] font-semibold uppercase tracking-wider">
                  {phase.grades}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 leading-snug">{phase.title}</h3>
              <p className="text-text-primary text-sm leading-relaxed mb-4">
                <span className="text-electric font-semibold">Focus:</span> {phase.focus}
              </p>
              
              <p className="text-text-muted text-sm leading-relaxed flex-1 pt-4 border-t border-electric/10">
                <span className="text-white/70 font-semibold">Value Prop:</span> {phase.anchor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
