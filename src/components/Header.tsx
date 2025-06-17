import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center w-fit m-auto">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'py-3 shadow-lg shadow-black/20' 
            : 'py-4'
        }`}
      >
        <div className="relative px-6">
          <nav className="flex justify-between items-center gap-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center"
            >
              <span 
                className="text-2xl font-bold bg-gradient-to-r from-[#9245FC] to-purple-500 bg-clip-text text-transparent" 
                style={{ fontFamily: 'CircularStd' }}
              >
                Shiftpoint.
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden md:flex items-center space-x-8"
            >
              <a href="#services" className="text-white/70 hover:text-white transition-colors whitespace-nowrap">
                Services
              </a>
              <a href="#about" className="text-white/70 hover:text-white transition-colors whitespace-nowrap">
                About
              </a>
              <a href="#features" className="text-white/70 hover:text-white transition-colors whitespace-nowrap">
                Features
              </a>
              <a href="#testimonials" className="text-white/70 hover:text-white transition-colors whitespace-nowrap">
                Testimonials
              </a>
              <a href="#contact" className="text-white/70 hover:text-white transition-colors whitespace-nowrap">
                Contact
              </a>
            </motion.div>

            {/* Contact Button */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden md:block"
            >
              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-[#9245FC] to-purple-600 text-white hover:opacity-90 transition-all whitespace-nowrap">
                Get Started
              </button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:hidden text-white" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 overflow-hidden"
              >
                <div className="p-4 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10">
                  <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col space-y-3"
                  >
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
                    <button className="w-full py-2 rounded-full bg-gradient-to-r from-[#9245FC] to-purple-600 text-white hover:opacity-90 transition-all">
                      Get Started
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Background Blur */}
        <div 
          className={`absolute inset-0 -z-10 backdrop-blur-xl transition-all duration-300 rounded-full ${
            isScrolled 
              ? 'bg-white/10' 
              : 'bg-white/5'
          }`}
        />
      </motion.header>
    </div>
  );
};