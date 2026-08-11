import React, { useState } from 'react';
import { Hexagon, ArrowRight, User, Users, GraduationCap, Building } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('student');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate role-based redirect
    if (role === 'instructor') navigate('/instructor-dashboard');
    else if (role === 'student') navigate('/student-dashboard');
    else if (role === 'parent') navigate('/parent-dashboard');
    else if (role === 'partner') navigate('/partner-dashboard');
  };

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md px-6 relative z-10">
        <div className="flex flex-col items-center mb-10">
          <Link to="/" className="flex items-center gap-2 mb-8 hover:scale-105 transition-transform">
            <Hexagon className="text-primary h-10 w-10" />
            <span className="font-sans font-black text-3xl tracking-tighter text-white">Clovrr.</span>
          </Link>
          <h2 className="text-2xl font-bold text-white mb-2">Welcome back</h2>
          <p className="text-gray-400 text-sm">Select your role and sign in</p>
        </div>

        <div className="bg-[#0a0a0a] rounded-3xl border border-white/10 shadow-2xl p-8">
          <div className="grid grid-cols-2 gap-3 mb-8">
            <button 
              type="button"
              onClick={() => setRole('student')}
              className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${role === 'student' ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'}`}
            >
              <GraduationCap className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Student</span>
            </button>
            <button 
              type="button"
              onClick={() => setRole('parent')}
              className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${role === 'parent' ? 'bg-blue-500/20 border-blue-500/50 text-blue-400' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'}`}
            >
              <Users className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Parent</span>
            </button>
            <button 
              type="button"
              onClick={() => setRole('partner')}
              className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${role === 'partner' ? 'bg-orange-500/20 border-orange-500/50 text-orange-400' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'}`}
            >
              <Building className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Partner (CSR)</span>
            </button>
            <button 
              type="button"
              onClick={() => setRole('instructor')}
              className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${role === 'instructor' ? 'bg-purple-500/20 border-purple-500/50 text-purple-400' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'}`}
            >
              <User className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Instructor</span>
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Email Address</label>
              <input 
                type="email" 
                placeholder="you@example.com"
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                required
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-300">Password</label>
                <a href="#" className="text-xs text-emerald-500 hover:text-emerald-400">Forgot password?</a>
              </div>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                required
              />
            </div>

            <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 mt-4">
              Sign In to Demo
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
        
        <div className="text-center mt-12 text-xs text-gray-600">
          <Link to="/" className="hover:text-gray-400 transition-colors">← Back to home</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
