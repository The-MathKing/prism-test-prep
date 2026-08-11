import React from 'react';
import { Calculator, Atom, Dna, FlaskConical, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const subjects = [
  {
    id: "math",
    title: "Mathematics Pipeline",
    icon: <Calculator className="h-6 w-6 text-emerald-400" />,
    topics: ["Grades 1-5: Early Foundations & Speed", "Grades 6-8: Pre-Algebra & Algebra I", "Grades 8-10: Geometry & Algebra II", "Contest Math (MATHCOUNTS/AMC)", "Digital SAT Math"]
  },
  {
    id: "physics",
    title: "Physics Pipeline",
    icon: <Atom className="h-6 w-6 text-blue-400" />,
    topics: ["Grades 6-8: Intro Physical Science", "Grades 8-10: Honors/Pre-AP Physics", "Grades 9-10: AP Physics 1 Cohort"]
  },
  {
    id: "biology",
    title: "Biology Pipeline",
    icon: <Dna className="h-6 w-6 text-purple-400" />,
    topics: ["Grades 6-8: Foundations of Life Science", "Grades 8-10: Honors/Pre-AP Biology", "Grades 9-10: AP Biology Cohort"]
  },
  {
    id: "chemistry",
    title: "Chemistry Pipeline",
    icon: <FlaskConical className="h-6 w-6 text-orange-400" />,
    topics: ["Grades 7-8: Introductory Chemistry", "Grades 8-10: Honors/Pre-AP Chemistry", "Grades 9-10: AP Chemistry Cohort"]
  }
];

const SubjectCatalog = () => {
  return (
    <section id="programs" className="py-24 bg-[#0a101f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight mb-6">
            Pure STEM <span className="text-gradient">Specialization</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Spanning early arithmetic fluency to AP/Olympiad-level execution across Grades 1–10.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {subjects.map((subject, idx) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  {subject.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{subject.title}</h3>
              </div>
              <ul className="space-y-3">
                {subject.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-2xl border-t-[3px] border-emerald-500 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-white mb-2">Group Cohorts</h3>
            <div className="text-3xl font-bold text-emerald-400 mb-6">$20<span className="text-lg text-gray-400 font-medium">/hr per student</span></div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle2 className="h-5 w-5 text-emerald-500" /> 4 to 6 Students Max</li>
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle2 className="h-5 w-5 text-emerald-500" /> Taught by Specialized Peer Instructors</li>
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle2 className="h-5 w-5 text-emerald-500" /> Weekly Interactive Digital Classrooms</li>
            </ul>
            <button className="w-full py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/10">
              Join a Cohort
            </button>
          </div>

          <div className="glass-card p-8 rounded-2xl border-t-[3px] border-purple-500 relative flex flex-col h-full">
            <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Elite Tier
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Founder 1:1 Coaching</h3>
            <div className="text-3xl font-bold text-purple-400 mb-6">$60-$75<span className="text-lg text-gray-400 font-medium">/hr</span></div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle2 className="h-5 w-5 text-purple-500" /> Owner-Operated Exclusively</li>
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle2 className="h-5 w-5 text-purple-500" /> High School Students (Grades 9-10)</li>
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle2 className="h-5 w-5 text-purple-500" /> Adv. SAT Math, AMC 10, USACO, USAPhO</li>
            </ul>
            <button className="w-full py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors">
              Apply for 1:1
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SubjectCatalog;
