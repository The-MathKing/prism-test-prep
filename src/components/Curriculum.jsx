import React from 'react';
import { BookOpen, Calculator, Rocket, Infinity } from 'lucide-react';

const sprints = [
  {
    id: 'elementary',
    title: 'Fractions, Ratios & Arithmetic Speed Sprint',
    subtitle: 'Elementary Math (Grades 3–5)',
    description: 'Fixing pre-algebra failure points early before they compound in middle school.',
    focus: 'Core fractions, ratio mechanics, and foundational mental math speed.',
    icon: <Calculator className="w-8 h-8 text-blue-400" />
  },
  {
    id: 'middle',
    title: 'AMC 8 / MATHCOUNTS Contest Foundations Sprint',
    subtitle: 'Middle School Math',
    description: 'A deep dive into competitive logic, removing the reliance on basic formulas.',
    focus: 'Number theory, combinatorics, and modular arithmetic.',
    icon: <Infinity className="w-8 h-8 text-purple-400" />
  },
  {
    id: 'dsat',
    title: 'Module 2 Hard-Curve Mastery Sprint',
    subtitle: 'Digital SAT Math',
    description: 'Advanced adaptive strategies to beat the toughest algorithm-generated questions.',
    focus: 'Desmos shortcuts, rational functions, and complex systems.',
    icon: <BookOpen className="w-8 h-8 text-emerald-400" />
  },
  {
    id: 'physics',
    title: 'AP Physics 1 Kinematics & Mechanics Boot Camp',
    subtitle: 'High School Physics',
    description: 'A rigorous conceptual bridge into college-level Newtonian physics.',
    focus: 'Vectors, 2D projectile motion, and Newton\'s laws.',
    icon: <Rocket className="w-8 h-8 text-orange-400" />
  }
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="relative py-24 sm:py-32 bg-[#050505]">
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-[0.2em] mb-4 block">
            Structured 8-Week Mastery Sprints
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mb-6 text-white tracking-tight">
            No Endless Homework Help.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Our curriculum is built into structured, 8-week sprints designed to conquer specific academic bottlenecks—from AP Physics mechanics to Digital SAT Module 2 algebra traps. We give you a tangible outcome with natural mastery milestones.
          </p>
        </div>

        {/* Sprints Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {sprints.map((sprint) => (
            <div
              key={sprint.id}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-emerald-500/30 transition-all group flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-black/50 rounded-2xl flex items-center justify-center border border-white/5">
                  {sprint.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full">
                  {sprint.subtitle}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
                {sprint.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                {sprint.description}
              </p>
              
              <div className="bg-black/40 rounded-xl p-4 border border-white/5 mt-auto">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">
                  Core Focus
                </span>
                <p className="text-white text-sm font-medium">
                  {sprint.focus}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
