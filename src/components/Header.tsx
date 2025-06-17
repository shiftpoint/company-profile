import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#9245FC] to-purple-500 bg-clip-text text-transparent" style={{
              fontFamily: 'CircularStd'
            }}>
              Shiftpoint.
            </span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-white/70 hover:text-white transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-600 hover:text-[#9245FC] transition-colors">
              About
            </a>
            <a href="#features" className="text-gray-600 hover:text-[#9245FC] transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-[#9245FC] transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-600 hover:text-[#9245FC] transition-colors">
              Contact
            </a>
          </div>
          {/* Contact Button */}
          <div className="hidden md:block">
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-all">
              Get Started
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden mt-4 p-4 rounded-lg backdrop-blur-lg bg-white/10 border border-white/20">
            <div className="flex flex-col space-y-3">
              <a href="#services" className="text-white/80 hover:text-white transition-colors">
                Services
              </a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors">
                About
              </a>
              <a href="#features" className="text-white/80 hover:text-white transition-colors">
                Features
              </a>
              <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                Contact
              </a>
              <button className="w-full py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
                Get Started
              </button>
            </div>
          </div>}
      </div>
    </header>;
};