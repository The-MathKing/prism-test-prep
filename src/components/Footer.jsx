import React from 'react';
import { Hexagon, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#050b14] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Hexagon className="text-primary h-8 w-8" />
              <span className="font-sans font-bold text-2xl tracking-tight text-white">Clovrr</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Near-peer STEM acceleration and competition coaching built on a CSR engine. Reinvesting in our communities, one student at a time.
            </p>
            <div className="flex items-center gap-3 text-gray-400 mb-2">
              <MapPin className="h-5 w-5 text-emerald-500" />
              <span>Serving Allen, TX & Remote Students Nationwide</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <Mail className="h-5 w-5 text-emerald-500" />
              <a href="mailto:aryan.r.padarthi@gmail.com" className="hover:text-white transition-colors">aryan.r.padarthi@gmail.com</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Portals</h4>
            <ul className="space-y-3">
              <li><Link to="/login" className="text-gray-400 hover:text-emerald-400 transition-colors">Partner Login (CSR)</Link></li>
              <li><Link to="/login" className="text-gray-400 hover:text-emerald-400 transition-colors">Student Portal Link</Link></li>
              <li><Link to="/instructor-dashboard" className="text-gray-400 hover:text-emerald-400 transition-colors">Instructor Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Programs</h4>
            <ul className="space-y-3">
              <li><a href="/#programs" className="text-gray-400 hover:text-emerald-400 transition-colors">Group Cohorts</a></li>
              <li><a href="/#programs" className="text-gray-400 hover:text-emerald-400 transition-colors">Founder 1:1 Coaching</a></li>
              <li><a href="/#method" className="text-gray-400 hover:text-emerald-400 transition-colors">The Clovrr Method</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Clovrr STEM Learning. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
