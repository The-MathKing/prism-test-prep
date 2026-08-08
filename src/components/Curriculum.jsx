const categories = [
  {
    id: 'elementary',
    title: 'Elementary Foundations',
    subtitle: 'Grades 1–5',
    description: 'Mastering the core mathematical mechanisms required before entering middle school.',
    courses: [
      {
        name: 'Level 1: Number Sense',
        grades: 'Grades 1-2',
        focus: 'Addition, subtraction, place value, and mental math speed.',
      },
      {
        name: 'Level 2: Core Computations',
        grades: 'Grades 3-4',
        focus: 'Multiplication tables, long division, and introductory word problems.',
      },
      {
        name: 'Level 3: Fractions & Decimals',
        grades: 'Grade 5',
        focus: 'The bridge to middle school math. Fixes the most common failure point before Pre-Algebra.',
      },
    ],
  },
  {
    id: 'core',
    title: 'Academic Core',
    subtitle: 'Grades 6–10',
    description: 'Standardized secondary school tracks designed for rapid acceleration and mastery.',
    courses: [
      {
        name: 'Pre-Algebra',
        focus: 'Foundational variables, linear equations, and basic geometry.',
      },
      {
        name: 'Algebra 1',
        focus: 'Functions, polynomials, and graphing mechanics.',
      },
      {
        name: 'Geometry',
        focus: 'Proofs, spatial reasoning, and trigonometry introduction.',
      },
      {
        name: 'Algebra 2',
        focus: 'Advanced functions, logarithms, and complex numbers.',
      },
    ],
  },
  {
    id: 'elite',
    title: 'Elite & Competitive',
    subtitle: 'Grades 6–10',
    description: 'Premium tiers anchored by tutors with perfect SAT scores and national olympiad awards.',
    courses: [
      {
        name: 'MATHCOUNTS / AMC 8',
        focus: 'Socratic problem-solving for competitive middle school math teams.',
      },
      {
        name: 'DSAT Math / AMC 10',
        focus: 'Advanced adaptive strategies and Desmos mechanics for early high schoolers.',
      },
    ],
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
            Course Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Granular Curriculum
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Select the exact academic bottleneck your child is facing. We provide specialized instruction across the entire K-10 spectrum.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col rounded-3xl bg-navy-light/40 border border-electric/10 overflow-hidden"
            >
              {/* Category Header */}
              <div className="p-8 border-b border-electric/10 bg-electric/5">
                <div className="text-xs font-bold text-electric uppercase tracking-[0.15em] mb-2">
                  {category.subtitle}
                </div>
                <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Course List */}
              <div className="p-8 flex-1 flex flex-col gap-6">
                {category.courses.map((course, idx) => (
                  <div key={idx} className="relative pl-5 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-electric before:rounded-full">
                    <h4 className="text-base font-bold text-text-primary mb-1">
                      {course.name}
                      {course.grades && (
                        <span className="ml-2 text-[10px] uppercase tracking-wider text-text-muted font-normal bg-navy-lighter px-2 py-0.5 rounded-full">
                          {course.grades}
                        </span>
                      )}
                    </h4>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {course.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
