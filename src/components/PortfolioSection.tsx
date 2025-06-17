import React from 'react';
import { motion } from 'framer-motion';

export const PortfolioSection = () => {
  const projects = [
    {
      title: 'Workflow Management Platform for Sharia Housing Construction',
      description: 'A platform that automates workflows for Sharia-compliant housing projects, covering the full cycle from buyer acquisition to construction oversight—improving coordination, accountability, and decision-making across teams.',
      image: '/images/portfolio/portfolio-1.png',
      categories: ['Software Development', 'UI/UX Design'],
    },
    {
      title: 'AI Project Accounting System',
      description: 'An AI-powered project accounting system that automates financial tracking, budgeting, and reporting for construction projects. It features an integrated chatbot that acts as an AI agent, allowing users to query data and initiate actions through natural language commands.',
      image: '/images/portfolio/portfolio-2.png',
      categories: ['AI Integration', 'Software Development'],
    },
    {
      title: 'Task Management System',
      description: 'A task management system that automates the workflow of the system tailored to the unique requirements of Agrochemical company. This system ensures that the tasks are completed with factual data and accurate information.',
      image: '/images/portfolio/portfolio-3.png',
      categories: ['Software Development', 'UI/UX Design'],
    },
  ];

  const categoryColorMap: { [key: string]: { text: string; bg: string; border: string } } = {
    'Software Development': { text: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-500/30' },
    'UI/UX Design': { text: 'text-purple-400', bg: 'bg-purple-500/20', border: 'border-purple-500/30' },
    'AI Integration': { text: 'text-indigo-400', bg: 'bg-indigo-500/20', border: 'border-indigo-500/30' },
    'Workflow Automation': { text: 'text-cyan-400', bg: 'bg-cyan-500/20', border: 'border-cyan-500/30' },
    'Construction Tech': { text: 'text-violet-400', bg: 'bg-violet-500/20', border: 'border-violet-500/30' },
    'Data Analytics': { text: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/30' },
    'IoT': { text: 'text-red-400', bg: 'bg-red-500/20', border: 'border-red-500/30' },
    'Manufacturing': { text: 'text-yellow-400', bg: 'bg-yellow-500/20', border: 'border-yellow-500/30' },
    'Industry 4.0': { text: 'text-pink-400', bg: 'bg-pink-500/20', border: 'border-pink-500/30' },
    'Business Intelligence': { text: 'text-orange-400', bg: 'bg-orange-500/20', border: 'border-orange-500/30' },
    'AI/ML': { text: 'text-teal-400', bg: 'bg-teal-500/20', border: 'border-teal-500/30' },
    'Default': { text: 'text-gray-400', bg: 'bg-gray-500/20', border: 'border-gray-500/30' },
  };

  return (
    <section id="portfolio" className="py-[120px] bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Explore our successful projects and see how we've helped businesses transform through innovative AI solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
            >
              <div className="relative h-48 w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.categories.map((category, idx) => {
                    const colorScheme = categoryColorMap[category] || categoryColorMap['Default'];
                    return (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-xs font-medium rounded-full ${colorScheme.bg} ${colorScheme.text} ${colorScheme.border}`}
                      >
                        {category}
                      </span>
                    );
                  })}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-white/70">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 