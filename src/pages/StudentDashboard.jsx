import React from 'react';
import { Hexagon, BookOpen, Video, Calendar, FileText, LogOut, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
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
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-emerald-500/10 text-emerald-400 rounded-xl font-medium border border-emerald-500/20">
            <LayoutDashboard className="h-5 w-5" />
            My Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors">
            <Calendar className="h-5 w-5" />
            Schedule
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors">
            <BookOpen className="h-5 w-5" />
            Resources
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors">
            <FileText className="h-5 w-5" />
            Assignments
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
          <h1 className="text-xl font-bold text-white">Student Portal</h1>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-bold text-white">Sarah Smith</div>
              <div className="text-xs text-gray-500">AP Biology Cohort</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold">
              SS
            </div>
          </div>
        </header>

        <div className="p-4 md:p-8">
          <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-2xl p-6 md:p-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Next Class: AP Biology</h2>
              <p className="text-emerald-400 font-medium flex items-center gap-2">
                <Calendar className="h-4 w-4" /> Today at 4:30 PM EST
              </p>
              <p className="text-gray-400 text-sm mt-2">Topic: Cellular Respiration & Photosynthesis</p>
            </div>
            <button className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <Video className="h-5 w-5" />
              Join Zoom Session
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-gray-400" /> Recent Resources
              </h3>
              <div className="bg-[#111] border border-white/10 rounded-2xl divide-y divide-white/5">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/5 rounded-lg text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">Unit {i} Study Guide.pdf</p>
                        <p className="text-xs text-gray-500">Added 2 days ago</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <FileText className="h-5 w-5 text-gray-400" /> Pending Assignments
              </h3>
              <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden">
                <div className="p-8 text-center text-gray-500 flex flex-col items-center">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                    <Hexagon className="h-8 w-8 text-gray-600" />
                  </div>
                  <p className="font-medium text-gray-400">All caught up!</p>
                  <p className="text-sm mt-1">No pending assignments at the moment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
