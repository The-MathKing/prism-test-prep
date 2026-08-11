import React from 'react';
import { Hexagon, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login for now
    navigate('/instructor-dashboard');
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
          <p className="text-gray-400 text-sm">Enter your credentials to access your portal</p>
        </div>

        <div className="bg-[#0a0a0a] rounded-3xl border border-white/10 shadow-2xl p-8">
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
              Sign In
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Don't have an account? <a href="#" className="text-emerald-500 hover:text-emerald-400 font-medium">Contact administration</a></p>
          </div>
        </div>
        
        <div className="text-center mt-12 text-xs text-gray-600">
          <Link to="/" className="hover:text-gray-400 transition-colors">← Back to home</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
