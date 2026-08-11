import React from 'react';
import { Clover, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 glass border-b border-white/10 top-0 left-0 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <Clover className="text-primary h-8 w-8" />
            <span className="font-sans font-bold text-2xl tracking-tight text-white">Clovrr</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/#method" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">The Clovrr Method</a>
            <a href="/#programs" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Programs</a>
            <Link to="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Portal Login</Link>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfXTa5Kfnwd6TsTCOZ7ijmsJakfQABwBLsdrJSZfDFfq7Hq8Q/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(5,150,105,0.4)]">
              Register Student
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-dark absolute top-20 left-0 w-full border-b border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
            <a href="/#method" className="block text-gray-300 hover:text-white font-medium py-2">The Clovrr Method</a>
            <a href="/#programs" className="block text-gray-300 hover:text-white font-medium py-2">Programs</a>
            <Link to="/login" className="block text-gray-300 hover:text-white font-medium py-2">Portal Login</Link>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfXTa5Kfnwd6TsTCOZ7ijmsJakfQABwBLsdrJSZfDFfq7Hq8Q/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="block text-center bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full font-medium w-full mt-2">
              Register Student
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
