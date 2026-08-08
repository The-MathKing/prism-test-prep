const tracks = [
  {
    number: '01',
    title: 'MATHCOUNTS & AMC 8 Pipeline',
    grades: 'Grades 5-8',
    focus: 'Competitive math foundations and Socratic problem-solving.',
    anchor: 'Coached 28 Ereckson Middle School students to a 1st Place Texas State Competition finish.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Algorithmic Logic & Pre-USACO',
    grades: 'Grades 6-8',
    focus: 'Competitive programming logic, discrete math, and C++/Java fundamentals.',
    anchor: 'Taught by a USACO Platinum rank (Top 500) competitor. The elite 1:1 tier for national-level programming.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Advanced Academic Math & AoPS',
    grades: 'Grades 4-7',
    focus: 'Accelerated academic tracking to ensure students place into high school calculus early.',
    anchor: 'Built on rigorous foundations from Art of Problem Solving (AoPS) coursework completion.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
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
            Youth & Middle School Division
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Curriculum Architecture
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Distinct 1:1 tracks engineered to build elite competitive math and programming foundations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tracks.map((track) => (
            <div
              key={track.number}
              className="card-glow rounded-2xl bg-navy-light/60 p-8 flex flex-col"
            >
              {/* Card header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center text-electric shrink-0">
                    {track.icon}
                  </div>
                  <span className="text-xs font-mono text-electric/40">{track.number}</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-slate-dark text-text-dim text-[10px] font-semibold uppercase tracking-wider">
                  {track.grades}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 leading-snug">{track.title}</h3>
              <p className="text-text-primary text-sm leading-relaxed mb-4">
                <span className="text-electric font-semibold">Focus:</span> {track.focus}
              </p>
              
              <p className="text-text-muted text-sm leading-relaxed flex-1 pt-4 border-t border-electric/10">
                {track.anchor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
