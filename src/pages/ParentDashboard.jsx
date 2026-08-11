import React, { useState } from 'react';
import { Hexagon, CreditCard, HeartHandshake, TrendingUp, LogOut, LayoutDashboard, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const ParentDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-[#050505] flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-[#0a0a0a] flex flex-col hidden md:flex">
        <div className="h-20 flex items-center px-6 border-b border-white/10">
          <Link to="/" className="flex items-center gap-2">
            <Hexagon className="text-primary h-8 w-8" />
            <span className="font-sans font-black text-xl tracking-tighter text-white">Clovrr.</span>
          </Link>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-2">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'dashboard' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'}`}
          >
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('students')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'students' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'}`}
          >
            <User className="h-5 w-5" />
            Students
          </button>
          <button 
            onClick={() => setActiveTab('billing')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'billing' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'}`}
          >
            <CreditCard className="h-5 w-5" />
            Billing
          </button>
        </nav>
        <div className="p-4 border-t border-white/10">
          <Link to="/login" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-xl font-medium transition-colors w-full">
            <LogOut className="h-5 w-5" />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-20 border-b border-white/10 flex items-center justify-between px-8 bg-[#0a0a0a]/50 backdrop-blur-md sticky top-0 z-10">
          <h1 className="text-xl font-bold text-white capitalize">{activeTab === 'dashboard' ? 'Parent Portal' : activeTab}</h1>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-bold text-white">Robert Smith</div>
              <div className="text-xs text-gray-500">Parent</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
              RS
            </div>
          </div>
        </header>

        <div className="p-4 md:p-8">
          {activeTab === 'dashboard' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#111] border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-gray-400 font-medium">CSR Impact Tracking</h3>
                      <HeartHandshake className="h-5 w-5 text-emerald-500" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">$145.00</div>
                    <p className="text-sm text-emerald-400 font-medium">Total Donated to Radha Krishna Temple</p>
                    <p className="text-xs text-gray-500 mt-2">15% of all your tuition payments are automatically redirected to your chosen partner.</p>
                  </div>
                </div>

                <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-gray-400 font-medium">Next Invoice</h3>
                    <CreditCard className="h-5 w-5 text-gray-500" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">$320.00</div>
                  <p className="text-sm text-gray-400">Due on Sep 1, 2026</p>
                  <button onClick={() => setActiveTab('billing')} className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-colors border border-white/10">
                    Manage Billing (Stripe)
                  </button>
                </div>
              </div>

              <h2 className="text-xl font-bold text-white mb-4">Enrolled Students</h2>
              <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-white/5 flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-lg">
                      SS
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Sarah Smith</h3>
                      <p className="text-sm text-gray-400">10th Grade</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider rounded-full">
                      AP Biology Cohort
                    </span>
                  </div>
                </div>
                
                <div className="p-6 bg-white/[0.02]">
                  <h4 className="text-sm font-medium text-gray-400 mb-4 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" /> Recent Feedback
                  </h4>
                  <div className="p-4 bg-black/40 border border-white/5 rounded-xl">
                    <p className="text-sm text-gray-300 leading-relaxed italic">
                      "Sarah is doing excellent in the unit on Mendelian Genetics. She actively participates in the Socratic deconstruction exercises and helps explain concepts to her peers. We will be focusing on Chi-square analysis next week."
                    </p>
                    <p className="text-xs text-gray-500 mt-3">— Aryan P. (Lead Instructor)</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'students' && (
            <div className="bg-[#111] border border-white/10 rounded-2xl p-8 text-center text-gray-500">
              <User className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Detailed performance reports for your students will appear here.</p>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="bg-[#111] border border-white/10 rounded-2xl p-8 text-center text-gray-500">
              <CreditCard className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Stripe Billing Portal Integration will open here.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ParentDashboard;
