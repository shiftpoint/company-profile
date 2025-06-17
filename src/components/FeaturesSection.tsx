import React from 'react';
import { Zap, Shield, Users, Clock, Globe, Lightbulb } from 'lucide-react';
export const FeaturesSection = () => {
  const features = [{
    icon: <Zap size={24} className="text-yellow-400" />,
    title: 'High Performance',
    description: 'Our AI solutions are optimized for speed and efficiency, delivering results in real-time.'
  }, {
    icon: <Shield size={24} className="text-blue-400" />,
    title: 'Robust Security',
    description: 'Enterprise-grade security to protect your data and AI systems from threats.'
  }, {
    icon: <Users size={24} className="text-green-400" />,
    title: 'Collaborative Approach',
    description: 'We work closely with your team to ensure the solution meets your specific needs.'
  }, {
    icon: <Clock size={24} className="text-purple-400" />,
    title: 'Rapid Development',
    description: 'Accelerated development cycles without compromising on quality or performance.'
  }, {
    icon: <Globe size={24} className="text-teal-400" />,
    title: 'Scalable Solutions',
    description: 'Our AI systems grow with your business, from startup to enterprise scale.'
  }, {
    icon: <Lightbulb size={24} className="text-orange-400" />,
    title: 'Innovative Thinking',
    description: "Pushing the boundaries of what's possible with AI to solve complex problems."
  }];
  return <section id="features" className="py-20 relative">
      <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-[#9245FC]/5 rounded-full filter blur-3xl"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Why Choose Shiftpoint
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We combine technical excellence with industry expertise to deliver
            AI solutions that drive real business value.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => <div key={index} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:translate-y-[-5px] transition-transform">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};