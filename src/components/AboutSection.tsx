import React from 'react';
import { CheckCircleIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutSection = () => {
  const achievements = ['10+ years of experience in AI development', 'Worked with 200+ clients worldwide', 'Developed 50+ custom AI solutions', 'Team of 100+ AI experts and engineers'];
  
  return (
    <section id="about" className="py-20 relative">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-1/4 left-0 w-80 h-80 bg-[#9245FC]/5 rounded-full filter blur-3xl"
      />
      <div className="relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full max-w-md bg-white/20 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 shadow-2xl"
                >
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Team collaboration" className="w-full h-auto rounded-lg" />
                </motion.div>
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute -bottom-6 -right-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-4 shadow-lg max-w-xs"
                >
                  <p className="font-medium">
                    Our mission is to make AI accessible and practical for
                    businesses of all sizes.
                  </p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                About Shiftpoint
              </motion.h2>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white/80 mb-6"
              >
                Founded with a vision to bridge the gap between cutting-edge AI
                research and practical business applications, Shiftpoint has grown
                into a leading AI software house trusted by companies worldwide.
              </motion.p>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-white/80 mb-8"
              >
                Our team of AI specialists, software engineers, and industry
                experts work together to deliver solutions that not only leverage
                the latest in artificial intelligence but are also tailored to
                meet the unique challenges and goals of each client.
              </motion.p>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-3"
              >
                {achievements.map((achievement, index) => (
                  <motion.div 
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircleIcon size={20} className="text-blue-400 flex-shrink-0" />
                    <span>{achievement}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};