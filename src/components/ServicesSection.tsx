import React from 'react';
import { BrainCircuitIcon, CodeIcon, BarChart3Icon, ShieldIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export const ServicesSection = () => {
  const services = [{
    icon: <BrainCircuitIcon size={32} className="text-blue-400" />,
    title: 'AI Development',
    description: 'Custom AI solutions tailored to your business needs, from machine learning models to neural networks.'
  }, {
    icon: <CodeIcon size={32} className="text-purple-400" />,
    title: 'Software Engineering',
    description: 'End-to-end software development with cutting-edge technologies and best practices.'
  }, {
    icon: <BarChart3Icon size={32} className="text-indigo-400" />,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with our advanced analytics solutions.'
  }, {
    icon: <ShieldIcon size={32} className="text-teal-400" />,
    title: 'AI Security',
    description: 'Protect your AI systems with our comprehensive security solutions and best practices.'
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
    <section id="services" className="py-20 relative mt-32">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our Services
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We offer a comprehensive range of AI and software development
            services to help your business thrive in the digital age.
          </p>
        </motion.div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 transition-all group"
            >
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-5 transition-transform"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};