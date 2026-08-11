import React from 'react';
import { Users, Brain, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const methods = [
  {
    icon: <Users className="h-8 w-8 text-emerald-400" />,
    title: "Near-Peer Mentorship",
    description: "Instruction delivered by elite, high-achieving near-peer mentors who inspire young students, rather than passive corporate employees or automated worksheet programs."
  },
  {
    icon: <Brain className="h-8 w-8 text-emerald-400" />,
    title: "Socratic Problem Deconstruction",
    description: "We teach logic over memorization. Our interactive cohorts focus on breaking down complex problems and building deep conceptual understanding."
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-emerald-400" />,
    title: "10-15% Revenue-Share Model",
    description: "Transforming tuition into a recurring fundraising mechanism. We reinvest 15% directly back to partner temples, weekend heritage schools, and booster clubs."
  }
];

const Method = () => {
  return (
    <section id="method" className="py-24 bg-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight mb-6">
            The <span className="text-gradient">Clovrr</span> Method
          </h2>
          <p className="text-gray-400 text-lg">
            A radical shift in STEM education. We combine elite academic acceleration with a powerful Corporate Social Responsibility (CSR) engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="glass-card p-8 rounded-2xl hover:bg-slate-cards/90 transition-colors border-t border-emerald-500/20"
            >
              <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{method.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {method.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
