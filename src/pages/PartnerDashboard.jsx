import React from 'react';
import { Hexagon, Users, DollarSign, History, Building, LogOut, LayoutDashboard, Copy, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PartnerDashboard = () => {
  const [copied, setCopied] = React.useState(false);
  const partnerCode = "RADHA15";

  const handleCopy = () => {
    navigator.clipboard.writeText(partnerCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            Overview
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors">
            <Users className="h-5 w-5" />
            Referred Families
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors">
            <History className="h-5 w-5" />
            Payout History
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
          <h1 className="text-xl font-bold text-white">CSR Partner Portal</h1>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-bold text-white">Radha Krishna Temple</div>
              <div className="text-xs text-emerald-500">Verified CSR Partner</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold">
              <Building className="h-5 w-5" />
            </div>
          </div>
        </header>

        <div className="p-4 md:p-8">
          <div className="bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-lg font-bold text-white mb-2">Your Partner Code</h2>
              <p className="text-gray-400 text-sm max-w-md">
                Share this code with your community. Families receive a 10% discount on tuition, and 15% of their monthly payments are automatically tracked and paid out to your organization.
              </p>
            </div>
            <div className="flex items-center gap-3 bg-black border border-white/10 rounded-xl p-2 w-full md:w-auto">
              <div className="px-6 py-3 font-mono text-xl font-bold tracking-widest text-emerald-400">
                {partnerCode}
              </div>
              <button 
                onClick={handleCopy}
                className={`p-3 rounded-lg transition-colors flex items-center justify-center ${copied ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 hover:bg-white/10 text-white'}`}
              >
                {copied ? <CheckCircle className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#111] border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-gray-400 text-sm font-medium mb-2">Total Donated (YTD)</h3>
                <div className="text-4xl font-bold text-emerald-400 flex items-center gap-1">
                  <DollarSign className="h-8 w-8" />
                  1,245.00
                </div>
              </div>
            </div>
            <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
              <h3 className="text-gray-400 text-sm font-medium mb-2">Active Families</h3>
              <div className="text-4xl font-bold text-white">12</div>
            </div>
            <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
              <h3 className="text-gray-400 text-sm font-medium mb-2">Next Payout (Est. Sep 1)</h3>
              <div className="text-4xl font-bold text-white">$450.00</div>
            </div>
          </div>

          <h2 className="text-xl font-bold text-white mb-4">Recent Payouts</h2>
          <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-sm text-gray-400">
              <thead className="bg-white/5 text-gray-300 font-medium">
                <tr>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Reference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">August 1, 2026</td>
                  <td className="px-6 py-4 font-bold text-white">$420.00</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20">
                      Paid
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs">ACH-938120</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">July 1, 2026</td>
                  <td className="px-6 py-4 font-bold text-white">$375.00</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20">
                      Paid
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs">ACH-847291</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PartnerDashboard;
