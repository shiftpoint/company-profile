import React from 'react';
import { ArrowRight, BrainCircuitIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background with Gradient */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #3d2b6d 50%, #1a1a1a 100%)',
            filter: 'blur(8px)',
            transform: 'scale(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </motion.div>

      {/* Decorative elements */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-1/4 left-10 w-40 h-40 bg-[#9245FC]/10 rounded-full filter blur-3xl"
      />
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-1/4 right-10 w-60 h-60 bg-purple-400/10 rounded-full filter blur-3xl"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:w-1/2"
          >
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white"
            >
              Connecting businesses with{' '}
              <span className="bg-gradient-to-r from-[#9245FC] to-purple-500 bg-clip-text text-transparent">
                the best IT experts
              </span>
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg text-white/70 mb-8 max-w-lg"
            >
              IT projects often need specialized skills that may be lacking in-house. 
              Outsourcing fills these gaps, ensuring flexibility, cost efficiency, and project success.
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-3 rounded-lg bg-[#9245FC] hover:bg-[#9245FC]/90 transition-all font-medium flex items-center justify-center gap-2 text-white">
                Get Started <ArrowRight size={18} />
              </button>
              <button className="px-8 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition-all text-white">
                Learn More
              </button>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <motion.div 
                initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
                animate={{ rotate: 3, scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-64 h-64 md:w-80 md:h-80 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <BrainCircuitIcon size={120} className="text-blue-300/80" />
                </motion.div>
              </motion.div>
              <motion.div 
                initial={{ rotate: 10, scale: 0.8, opacity: 0 }}
                animate={{ rotate: -2, scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute -bottom-6 -left-6 w-64 md:w-72 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-4 shadow-lg"
              >
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="font-bold">AI</span>
                  </div>
                  <div>
                    <p className="font-medium">Smart Solutions</p>
                    <p className="text-sm text-white/70">
                      Powered by Shiftpoint
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};