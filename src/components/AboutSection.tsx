import React from 'react';
import { CheckCircleIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutSection = () => {
  const achievements = ['10+ years of experience in AI development', 'Worked with 200+ clients worldwide', 'Developed 50+ custom AI solutions', 'Team of 100+ AI experts and engineers'];
  
  return (
    <section id="about" className="py-[120px]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full max-w-md bg-white/20 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="relative">
                  <img src="/images/about.jpg" alt="Team collaboration" className="w-full h-96 rounded-lg opacity-60 object-cover" />
                  <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              About Shiftpoint
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-white/80 mb-6"
            >
              Founded with a vision to bridge the gap between cutting-edge AI
              research and practical business applications, Shiftpoint has grown
              into a leading AI software house trusted by companies worldwide.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white/80 mb-8"
            >
              Our team of AI specialists, software engineers, and industry
              experts work together to deliver solutions that not only leverage
              the latest in artificial intelligence but are also tailored to
              meet the unique challenges and goals of each client.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-3"
            >
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
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
    </section>
  );
};