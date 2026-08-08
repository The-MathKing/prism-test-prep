const badges = [
  {
    acronym: 'USAMO',
    full: 'USA Mathematical Olympiad',
    color: 'from-blue-400 to-cyan-400',
    subtitle: 'Qualifiers',
  },
  {
    acronym: 'USAPhO',
    full: 'USA Physics Olympiad',
    color: 'from-violet-400 to-purple-400',
    subtitle: 'Qualifiers',
  },
  {
    acronym: 'USACO',
    full: 'USA Computing Olympiad',
    color: 'from-emerald-400 to-teal-400',
    subtitle: 'Platinum Division',
  },
  {
    acronym: 'USAEBO',
    full: 'USA Economics and Business Olympiad',
    color: 'from-amber-400 to-orange-400',
    subtitle: 'Gold Medalists',
  },
]

export default function Instructors() {
  return (
    <section id="tutors" className="relative py-24 sm:py-32 bg-navy">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Section header */}
        <span className="text-xs font-semibold text-electric uppercase tracking-[0.2em] mb-4 block">
          Our Tutors
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Olympiad-Level Minds.{' '}
          <span className="text-gradient">Your Corner.</span>
        </h2>
        <p className="text-text-muted max-w-2xl mx-auto mb-14 text-lg leading-relaxed">
          Taught by high-school olympiad competitors who've been through the trenches —
          national qualifiers who understand exactly how elite-level problem solving works.
        </p>

        {/* Credential badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {badges.map((badge) => (
            <div
              key={badge.acronym}
              className="card-glow rounded-2xl bg-navy-light/60 p-6 flex flex-col items-center gap-3"
            >
              <div className={`text-2xl sm:text-3xl font-black bg-gradient-to-br ${badge.color} bg-clip-text text-transparent`}>
                {badge.acronym}
              </div>
              <div className="text-xs text-text-dim uppercase tracking-wider leading-tight text-center">
                {badge.full}
              </div>
              <div className="mt-2 px-3 py-1 rounded-full bg-electric/10 text-electric text-[10px] font-semibold uppercase tracking-wider text-center">
                {badge.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
