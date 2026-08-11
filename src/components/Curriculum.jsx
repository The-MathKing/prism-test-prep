import React from 'react';
import { BookOpen, Calculator, Cpu, Infinity, Trophy } from 'lucide-react';

const sprints = [
  {
    id: 'competition',
    title: 'Elite Competition: MATHCOUNTS / AMC 8',
    subtitle: 'Grades 6–8',
    description: 'A deep dive into competitive logic, removing the reliance on basic formulas to prepare for state-level competition.',
    focus: 'Combinatorics, number theory, modular arithmetic, and timed test strategy.',
    anchor: '1st Place Texas State MATHCOUNTS Coaching Record; 2x AIME Qualifier',
    icon: <Trophy className="w-8 h-8 text-yellow-400" />
  },
  {
    id: 'logic',
    title: 'Algorithmic Logic: Pre-USACO & Robotics',
    subtitle: 'Grades 5–8',
    description: 'The prerequisite mathematical training required to dominate upper-level high school robotics and coding ecosystems.',
    focus: 'Discrete math, state-space fundamentals, and logical sequencing for FLL/VEX IQ.',
    anchor: 'USACO Platinum Rank; VEX V5/FTC Leadership',
    icon: <Cpu className="w-8 h-8 text-emerald-400" />
  },
  {
    id: 'acceleration',
    title: 'Academic Acceleration: Pre-Algebra Bridge',
    subtitle: 'Grades 3–5',
    description: 'Fixing the exact mathematical failure points that silently stall students before they enter competitive middle school tracks.',
    focus: 'Fractions, ratio mechanics, foundational mental math speed, and word problem deconstruction.',
    anchor: '4.4875 Weighted GPA; Top 1% Class Rank',
    icon: <Calculator className="w-8 h-8 text-blue-400" />
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
            Middle School Tracking Advantages.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We don't sell generic homework help. We offer three highly specialized 8-week sprints designed exclusively to dominate middle school math tracks and competition ecosystems.
          </p>
        </div>

        {/* Sprints Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {sprints.map((sprint) => (
            <div
              key={sprint.id}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-emerald-500/30 transition-all group flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400/0 via-emerald-400/50 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-black/50 rounded-2xl flex items-center justify-center border border-white/5 shadow-inner">
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
              
              <div className="bg-black/40 rounded-xl p-4 border border-white/5 mt-auto mb-4">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                  Core Focus
                </span>
                <p className="text-white text-sm font-medium">
                  {sprint.focus}
                </p>
              </div>

              <div className="flex items-start gap-3 bg-emerald-500/5 rounded-xl p-4 border border-emerald-500/10">
                <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider block mt-0.5 shrink-0">
                  Authority Anchor:
                </span>
                <p className="text-emerald-400 text-xs font-bold leading-relaxed">
                  {sprint.anchor}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
