import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Users, LineChart, Code2 } from 'lucide-react';

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Expert AI Team',
      description: 'Our team consists of experienced AI specialists and engineers with deep expertise in machine learning and artificial intelligence.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Cutting-edge Technology',
      description: 'We stay at the forefront of AI technology, implementing the latest advancements to deliver superior solutions.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure & Reliable',
      description: 'Security is our priority. We implement robust security measures to protect your data and AI systems.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Client-focused Approach',
      description: 'We work closely with you to understand your needs and deliver solutions that exceed expectations.',
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: 'Proven Results',
      description: 'Our track record speaks for itself, with successful implementations across various industries.',
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Custom Solutions',
      description: 'Every solution is tailored to your specific business needs and challenges.',
    },
  ];

  return (
    <section id="features" className="py-[120px]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            We combine technical expertise with industry best practices to deliver
            exceptional AI solutions that drive business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};