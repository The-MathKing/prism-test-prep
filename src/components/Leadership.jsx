import React from 'react';
import { Award, BookOpen, Trophy, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Leadership = () => {
  return (
    <section id="leadership" className="py-24 bg-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight mb-6">
            Leadership & <span className="text-gradient">Credentials</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Built by a high-achieving student, for high-achieving students.
          </p>
        </div>

        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 border-t border-white/10 relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
          
          <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
            <div className="w-48 h-48 rounded-full bg-slate-800 border-4 border-emerald-500/30 overflow-hidden shrink-0 flex items-center justify-center">
              {/* Fallback image/icon if no photo is available */}
              <div className="text-emerald-500/50">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>

            <div>
              <div className="mb-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-emerald-400 text-sm font-semibold border border-primary/20">
                Founder & CEO
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Aryan Padarthi</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Elite STEM competitor dedicated to democratizing advanced education through near-peer mentorship and community reinvestment.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                    <BookOpen className="h-5 w-5 text-emerald-400" />
                  </div>
                  <span className="text-gray-200 font-medium">1530 SAT</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                    <Trophy className="h-5 w-5 text-emerald-400" />
                  </div>
                  <span className="text-gray-200 font-medium">2x AIME Qualifier</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                    <Award className="h-5 w-5 text-emerald-400" />
                  </div>
                  <span className="text-gray-200 font-medium">USACO Platinum</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                    <MapPin className="h-5 w-5 text-emerald-400" />
                  </div>
                  <span className="text-gray-200 font-medium">State MATHCOUNTS Coach</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Leadership;
