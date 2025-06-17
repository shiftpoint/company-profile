import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, LineChart, Shield, Zap, Users } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Custom AI Development',
      description: 'Tailored AI solutions designed to meet your specific business needs and challenges.',
      color: 'text-blue-400'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Machine Learning Solutions',
      description: 'Advanced ML models and algorithms to help you make data-driven decisions.',
      color: 'text-purple-400'
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: 'Predictive Analytics',
      description: 'Forecast trends and patterns to stay ahead of the competition.',
      color: 'text-indigo-400'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'AI Security Solutions',
      description: 'Protect your business with cutting-edge AI-powered security systems.',
      color: 'text-cyan-400'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation solutions.',
      color: 'text-violet-400'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'AI Consulting',
      description: 'Expert guidance on implementing and optimizing AI in your business.',
      color: 'text-blue-500'
    },
  ];

  return (
    <section id="services" className="py-[120px] relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            We offer a comprehensive range of AI solutions to help businesses
            leverage the power of artificial intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className={`${service.color} mb-4`}>{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};