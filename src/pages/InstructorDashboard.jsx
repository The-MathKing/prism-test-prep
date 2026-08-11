import React from 'react';
import { Hexagon, Users, Calendar, Settings, LogOut, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';

const InstructorDashboard = () => {
  return (
    <div className="min-h-screen bg-[#050505] flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-[#0a0a0a] flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-white/10">
          <Link to="/" className="flex items-center gap-2">
            <Hexagon className="text-primary h-8 w-8" />
            <span className="font-sans font-black text-xl tracking-tighter text-white">Clovrr.</span>
          </Link>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-emerald-500/10 text-emerald-400 rounded-xl font-medium border border-emerald-500/20">
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors">
            <Users className="h-5 w-5" />
            My Cohorts
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors">
            <Calendar className="h-5 w-5" />
            Schedule
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors">
            <Settings className="h-5 w-5" />
            Settings
          </a>
        </nav>
        <div className="p-4 border-t border-white/10">
          <Link to="/login" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-xl font-medium transition-colors">
            <LogOut className="h-5 w-5" />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-20 border-b border-white/10 flex items-center justify-between px-8 bg-[#0a0a0a]/50 backdrop-blur-md sticky top-0 z-10">
          <h1 className="text-xl font-bold text-white">Overview</h1>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <div className="text-sm font-bold text-white">Aryan Padarthi</div>
              <div className="text-xs text-gray-500">Lead Instructor</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
              AP
            </div>
          </div>
        </header>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
              <h3 className="text-gray-400 text-sm font-medium mb-2">Active Students</h3>
              <div className="text-3xl font-bold text-white">24</div>
            </div>
            <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
              <h3 className="text-gray-400 text-sm font-medium mb-2">Upcoming Sessions</h3>
              <div className="text-3xl font-bold text-white">8</div>
            </div>
            <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
              <h3 className="text-gray-400 text-sm font-medium mb-2">Hours Logged (Week)</h3>
              <div className="text-3xl font-bold text-white">12.5</div>
            </div>
          </div>

          <h2 className="text-lg font-bold text-white mb-4">Today's Schedule</h2>
          <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden">
            <div className="p-6 text-center text-gray-500 py-12">
              <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No more sessions scheduled for today.</p>
              <button className="mt-4 text-emerald-500 font-medium hover:text-emerald-400">View Full Schedule</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InstructorDashboard;
