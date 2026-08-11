import React from 'react';
import { Target, Activity, Users, LineChart, Code, CheckCircle, Video } from 'lucide-react';

const blocks = [
  {
    number: '01',
    title: 'Highly Targeted 8-Week Sprints',
    description: 'We break complex STEM subjects into 8-week mastery modules. Students tackle specific bottlenecks—from elementary fraction fluency to AP Chemistry equilibrium—with clear, measurable milestones.',
    icon: <Target className="w-6 h-6" />
  },
  {
    number: '02',
    title: 'The Socratic Sprints (60-Min Sessions)',
    description: 'We replace passive lectures with active, Socratic questioning. Our 4–6 student cohorts engage in live whiteboard collaboration, interactive simulations, and timed speed drills to build real test stamina.',
    icon: <Activity className="w-6 h-6" />
  },
  {
    number: '03',
    title: 'Verified Near-Peer Instructors',
    description: 'Our instructors aren\'t generalists; they are top-1% STEM achievers (1500+ SAT, AIME/USACO qualifiers, and 5s on AP Exams) who serve as mentors, teaching the exact systems they used to excel.',
    icon: <Users className="w-6 h-6" />
  },
  {
    number: '04',
    title: 'Data-Driven Progress Tracking',
    description: 'You are always in the loop. Parents receive automated post-session scorecards charting accuracy rates, assignment completion, and concept mastery after every class.',
    icon: <LineChart className="w-6 h-6" />
  }
];

const sessionMatrix = [
  { block: 'Block 1 (15 Min)', title: 'Concept Deconstruction', focus: 'Socratic inquiry' },
  { block: 'Block 2 (25 Min)', title: 'Guided Collaborative Execution', focus: 'Whiteboard / Desmos' },
  { block: 'Block 3 (10 Min)', title: 'Independent Speed Sprint', focus: 'Timed exam drill' },
  { block: 'Block 4 (10 Min)', title: 'Edge-Case Audit & Assignment', focus: 'Error breakdown' },
];

export default function Methodology() {
  return (
    <section id="method" className="relative py-24 sm:py-32 bg-slate-dark border-t border-white/5">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-[0.2em] mb-4 block">
            Our Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mb-6 tracking-tight text-white">
            Why Clovrr Beats Passive Tutoring
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We don't monitor silent worksheet drills. Every 60-minute Clovrr session follows an intensive <span className="text-emerald-400 font-bold">Learn-Apply-Test</span> methodology: Socratic concept breakdowns, live collaborative problem solving, and timed exam sprints to build real-world test stamina.
          </p>
        </div>

        {/* Matrix & Steps Flexbox */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-24">
          
          {/* 60-Min Matrix */}
          <div className="lg:col-span-5 bg-[#0a0a0a] rounded-3xl border border-white/10 p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-cyan-500"></div>
            <div className="flex items-center gap-3 mb-6">
              <Video className="w-6 h-6 text-emerald-400" />
              <h3 className="text-xl font-bold text-white">60-Minute Cohort Matrix</h3>
            </div>
            
            <div className="space-y-4">
              {sessionMatrix.map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-4 transition-all hover:bg-white/10">
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full whitespace-nowrap">
                    {item.block}
                  </span>
                  <div>
                    <h4 className="text-white font-bold text-sm">{item.title}</h4>
                    <p className="text-gray-400 text-xs mt-1 font-mono">{item.focus}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Pillars */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {blocks.map((block) => (
              <div key={block.number} className="bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all rounded-2xl p-6 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  {block.icon}
                </div>
                <span className="text-emerald-500 font-mono text-sm font-bold block mb-4">{block.number}</span>
                <h3 className="text-lg font-bold text-white mb-3">{block.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{block.description}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Parent Accountability & Tech Stack */}
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-gradient-to-br from-[#0a0a0a] to-[#121212] rounded-3xl border border-white/10 p-8 lg:p-10 shadow-2xl">
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center mb-6">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">The Clovrr Interactive Portal</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Instruction is delivered via our interactive digital classroom. Using live-tracked Desmos activities and visual science simulations, our instructors monitor your child's problem-solving steps in real time—intervening the second a concept breaks down.
            </p>
            <a href="https://www.youtube.com/watch?v=eh7U7mLiYr0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">
              See Desmos Pacing in Action <Activity className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-gradient-to-br from-[#0a0a0a] to-[#121212] rounded-3xl border border-white/10 p-8 lg:p-10 shadow-2xl">
            <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center mb-6">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Radical Parent Transparency</h3>
            <p className="text-gray-400 leading-relaxed">
              Never wonder what your child learned. After every single Clovrr session, parents receive an automated <span className="text-white font-bold">Progress Scorecard</span> detailing the exact concept mastered, independent drill accuracy rates, and assigned practice sets, supplemented by bi-weekly benchmark exams.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
