import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, Users, Calendar, Building,
  TrendingUp, UserPlus, LogOut, Search,
  Settings, ChevronRight, CheckCircle, Plus
} from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-[#050505] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0a0a0a] border-r border-white/5 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-white/5">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Clovrr</span>
          </Link>
          <div className="mt-2 text-xs font-mono text-emerald-500 uppercase tracking-widest">
            Admin Portal
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {[
            { id: 'overview', icon: LayoutDashboard, label: 'Command Center' },
            { id: 'users', icon: Users, label: 'User Directory' },
            { id: 'cohorts', icon: Calendar, label: 'Sprint Cohorts' },
            { id: 'partners', icon: Building, label: 'CSR Partners' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id 
                  ? 'bg-emerald-500/10 text-emerald-400 font-semibold' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors">
            <LogOut className="w-5 h-5" />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Topbar */}
        <header className="h-20 bg-[#0a0a0a]/50 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-8">
          <h1 className="text-2xl font-bold text-white capitalize">
            {activeTab.replace('-', ' ')}
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search portal..." 
                className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 w-64"
              />
            </div>
            <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-8 relative">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            {activeTab === 'overview' && <OverviewTab />}
            {activeTab === 'users' && <UsersTab />}
            {activeTab === 'cohorts' && <CohortsTab />}
            {activeTab === 'partners' && <PartnersTab />}
          </div>
        </div>
      </main>
    </div>
  );
}

function OverviewTab() {
  const metrics = [
    { label: 'Active Students', value: '142', trend: '+12%', icon: Users },
    { label: 'Active Cohorts', value: '24', trend: '+3', icon: Calendar },
    { label: 'CSR Partners', value: '8', trend: '+1', icon: Building },
    { label: 'Monthly MRR', value: '$12,450', trend: '+8.5%', icon: TrendingUp },
  ];

  return (
    <div className="space-y-8">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {metrics.map((m, i) => (
          <div key={i} className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400">
                <m.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
                {m.trend}
              </span>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">{m.label}</h3>
            <div className="text-3xl font-bold text-white">{m.value}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-6">Recent Platform Activity</h3>
          <div className="space-y-4">
            {[
              { log: 'New student enrolled in Algorithmic Logic Sprint', time: '10 mins ago', type: 'enrollment' },
              { log: 'CSR Partner "Houston Hindu Temple" paid out $450', time: '2 hours ago', type: 'financial' },
              { log: 'Instructor Aryan P. completed "MathCounts" session', time: '5 hours ago', type: 'academic' },
              { log: 'New parent account created', time: '1 day ago', type: 'system' }
            ].map((activity, i) => (
              <div key={i} className="flex items-center gap-4 py-3 border-b border-white/5 last:border-0">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-300">{activity.log}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-6">Upcoming Sprints (Next 7 Days)</h3>
          <div className="space-y-4">
            {[
              { class: 'Algorithmic Logic: Pre-USACO', instructor: 'Aryan P.', students: '5/6', date: 'Tomorrow, 5:00 PM' },
              { class: 'AMC 8 Contest Foundations', instructor: 'Aryan P.', students: '6/6', date: 'Wednesday, 4:30 PM' },
              { class: 'Academic Acceleration: Pre-Algebra', instructor: 'Sarah J.', students: '4/6', date: 'Thursday, 4:00 PM' },
            ].map((sprint, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">{sprint.class}</h4>
                  <p className="text-xs text-gray-400 mt-1">{sprint.instructor} • {sprint.date}</p>
                </div>
                <div className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                  {sprint.students}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function UsersTab() {
  const [showCreate, setShowCreate] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">Directory Management</h2>
        <button 
          onClick={() => setShowCreate(!showCreate)}
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black px-4 py-2 rounded-xl font-bold transition-colors"
        >
          <UserPlus className="w-4 h-4" />
          Create New User
        </button>
      </div>

      {showCreate && (
        <div className="bg-[#0a0a0a] border border-emerald-500/30 rounded-2xl p-6 mb-8 animate-in fade-in slide-in-from-top-4">
          <h3 className="text-lg font-bold text-white mb-4">Provision New Account</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-2 uppercase">Account Role</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500">
                <option>Student</option>
                <option>Parent</option>
                <option>Instructor</option>
                <option>Partner (CSR)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-2 uppercase">Full Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500" placeholder="e.g. John Doe" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-2 uppercase">Email Address</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500" placeholder="e.g. john@example.com" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-2 uppercase">Temporary Password</label>
              <div className="flex gap-2">
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white font-mono" value="Clovrr-84f9A" readOnly />
                <button className="bg-white/10 hover:bg-white/20 text-white px-4 rounded-lg font-bold text-sm">Regen</button>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-2 rounded-xl font-bold transition-colors">
              Provision Account
            </button>
          </div>
        </div>
      )}

      <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden">
        <table className="w-full text-left text-sm text-gray-400">
          <thead className="bg-white/5 border-b border-white/10 text-xs uppercase font-bold">
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {[
              { name: 'Aryan Padarthi', role: 'Instructor', email: 'aryan@clovrr.com', status: 'Active' },
              { name: 'Michael Chen', role: 'Student', email: 'mchen@gmail.com', status: 'Active' },
              { name: 'Sarah Jenkins', role: 'Parent', email: 'sarah.j@yahoo.com', status: 'Pending Invite' },
              { name: 'Dallas Hindu Temple', role: 'Partner', email: 'admin@nthm.org', status: 'Active' },
            ].map((user, i) => (
              <tr key={i} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 font-bold text-white">{user.name}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    user.role === 'Instructor' ? 'bg-purple-500/10 text-purple-400' :
                    user.role === 'Student' ? 'bg-blue-500/10 text-blue-400' :
                    user.role === 'Partner' ? 'bg-orange-500/10 text-orange-400' :
                    'bg-gray-500/10 text-gray-400'
                  }`}>{user.role}</span>
                </td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">
                  <span className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-yellow-500'}`}></div>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-gray-500 hover:text-white transition-colors">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CohortsTab() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-white mb-1">8-Week Sprints & Cohorts</h2>
          <p className="text-sm text-gray-400">Assign instructors and build rosters.</p>
        </div>
        <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black px-4 py-2 rounded-xl font-bold transition-colors">
          <Plus className="w-4 h-4" />
          Create New Sprint
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {[
          {
            title: 'Algorithmic Logic: Pre-USACO & Robotics',
            instructor: 'Aryan Padarthi',
            time: 'Sundays, 4:00 PM CST',
            enrolled: 5,
            cap: 6,
            students: ['Michael C.', 'David W.', 'Aisha M.', 'Kevin L.', 'Priya R.']
          },
          {
            title: 'AMC 8 Contest Foundations',
            instructor: 'Aryan Padarthi',
            time: 'Wednesdays, 5:30 PM CST',
            enrolled: 6,
            cap: 6,
            students: ['Leo J.', 'Sophia K.', 'Ethan T.', 'Rohan P.', 'Emma S.', 'Oliver B.']
          },
        ].map((cohort, i) => (
          <div key={i} className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 block">Active Sprint</span>
                <h3 className="text-lg font-bold text-white leading-tight">{cohort.title}</h3>
              </div>
              <div className="text-xs font-mono text-gray-400 bg-white/5 px-2 py-1 rounded">
                {cohort.enrolled}/{cohort.cap} Enrolled
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Lead Instructor</span>
                <span className="text-white font-medium">{cohort.instructor}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Schedule</span>
                <span className="text-white font-medium">{cohort.time}</span>
              </div>
            </div>

            <div className="mt-auto border-t border-white/5 pt-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-gray-400 uppercase">Student Roster</span>
                <button className="text-xs font-bold text-emerald-400 hover:text-emerald-300">+ Add Student</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {cohort.students.map((student, j) => (
                  <span key={j} className="bg-white/5 border border-white/10 text-gray-300 text-xs px-2 py-1 rounded-md">
                    {student}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PartnersTab() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-white mb-1">CSR Partner Financials</h2>
          <p className="text-sm text-gray-400">Track community enrollment codes and manage 15% revenue share payouts.</p>
        </div>
      </div>

      <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden">
        <table className="w-full text-left text-sm text-gray-400">
          <thead className="bg-white/5 border-b border-white/10 text-xs uppercase font-bold">
            <tr>
              <th className="px-6 py-4">Partner Org</th>
              <th className="px-6 py-4">Discount Code</th>
              <th className="px-6 py-4">Active Students</th>
              <th className="px-6 py-4">Total Tuition Generated</th>
              <th className="px-6 py-4">15% Payout Due</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {[
              { org: 'Karya Siddhi Hanuman Temple', code: 'KSHT-CLOVRR', students: 12, tuition: '$2,400', payout: '$360' },
              { org: 'Islamic Society of Greater Houston', code: 'ISGH-STEM', students: 8, tuition: '$1,600', payout: '$240' },
              { org: 'Dallas Diyanet Mosque', code: 'DDM-ACADEMY', students: 5, tuition: '$1,000', payout: '$150' },
            ].map((partner, i) => (
              <tr key={i} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 font-bold text-white">{partner.org}</td>
                <td className="px-6 py-4">
                  <span className="font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded text-xs">{partner.code}</span>
                </td>
                <td className="px-6 py-4 text-white font-medium">{partner.students}</td>
                <td className="px-6 py-4">{partner.tuition}</td>
                <td className="px-6 py-4 font-bold text-emerald-400">{partner.payout}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
