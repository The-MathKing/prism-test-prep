import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Star } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 border-primary/30 text-sm font-medium text-emerald-300">
            <Globe className="h-4 w-4" />
            <span>Community-Driven Impact</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tight mb-6 leading-tight">
            Near-Peer STEM Acceleration. <br className="hidden md:block" />
            <span className="text-gradient">Community-Driven Impact.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Elite 1:1 and small-group STEM coaching (Grades 1–10) in Math, Physics, Biology, and Chemistry. 
            <strong className="text-gray-200 font-semibold"> 15% of all tuition goes directly back to your local community center or religious organization.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-[#050505] bg-gray-700 flex items-center justify-center text-xs font-bold ${i === 1 ? 'bg-blue-500' : i === 2 ? 'bg-emerald-500' : i === 3 ? 'bg-purple-500' : i === 4 ? 'bg-orange-500' : 'bg-red-500'}`}>
                  {'SJRAM'.split('')[i-1]}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 text-yellow-400 text-sm">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-sm font-medium text-gray-300">
                Trusted by <span className="text-white font-bold">40+ students</span> and <span className="text-white font-bold">5+ nonprofits</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfXTa5Kfnwd6TsTCOZ7ijmsJakfQABwBLsdrJSZfDFfq7Hq8Q/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(5,150,105,0.4)] flex items-center justify-center gap-2">
              Register Student
              <ArrowRight className="h-5 w-5" />
            </a>
            
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScOQxm2t7tHM_55QooT6_mApD8ySYf1RY_ppAd8LP4K1cBW6Q/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full glass hover:bg-white/10 text-white font-semibold text-lg transition-all flex items-center justify-center">
              Partner With Us (CSR)
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
