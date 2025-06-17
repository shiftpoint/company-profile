import React from 'react';
import { Zap, Shield, Users, Clock, Globe, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="features" className="py-20 relative">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-0 right-1/4 w-60 h-60 bg-[#9245FC]/5 rounded-full filter blur-3xl"
      />
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Why Choose Shiftpoint
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We combine technical excellence with industry expertise to deliver
            AI solutions that drive real business value.
          </p>
        </motion.div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 transition-all"
            >
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};