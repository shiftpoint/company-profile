import React from 'react';
import { ArrowRight, BrainCircuitIcon } from 'lucide-react';
export const HeroSection = () => {
  return <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-40 h-40 bg-[#9245FC]/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-60 h-60 bg-purple-400/10 rounded-full filter blur-3xl"></div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <div className="inline-block px-4 py-2 mb-6 backdrop-blur-md bg-purple-50 rounded-full border border-purple-100">
              <span className="text-sm font-medium text-[#9245FC]">
                Redefining AI Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Pioneering the Future with{' '}
              <span className="bg-gradient-to-r from-[#9245FC] to-purple-500 bg-clip-text text-transparent">
                Intelligent Solutions
              </span>
            </h1>
            <p className="text-lg text-white/70 mb-8 max-w-lg">
              Shiftpoint. transforms businesses through cutting-edge AI
              technology, delivering custom software solutions that drive
              innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition-all font-medium flex items-center justify-center gap-2">
                Get Started <ArrowRight size={18} />
              </button>
              <button className="px-8 py-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center rotate-3 shadow-lg">
                <BrainCircuitIcon size={120} className="text-blue-300/80" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-64 md:w-72 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-4 -rotate-2 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="font-bold">AI</span>
                  </div>
                  <div>
                    <p className="font-medium">Smart Solutions</p>
                    <p className="text-sm text-white/70">
                      Powered by Shiftpoint.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};