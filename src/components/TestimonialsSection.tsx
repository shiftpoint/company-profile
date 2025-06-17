import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export const TestimonialsSection = () => {
  const testimonials = [{
    name: 'Sarah Johnson',
    position: 'CTO, TechVision',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    text: "Shiftpoint transformed our business with their AI solutions. Their team's expertise and innovative approach helped us achieve results we didn't think were possible."
  }, {
    name: 'Michael Chen',
    position: 'CEO, DataFlow',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    text: 'Working with Shiftpoint was a game-changer for us. Their AI solutions have significantly improved our efficiency and decision-making processes.'
  }, {
    name: 'Emily Rodriguez',
    position: 'Product Manager, InnovateX',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80',
    text: "The team at Shiftpoint doesn't just deliver technology—they deliver solutions that address real business challenges. Their AI expertise is unmatched."
  }];
  return <section id="testimonials" className="py-20 relative bg-gradient-to-br from-gray-900/50 to-gray-800/50">
    <div className="container mx-auto px-6">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          What Our Clients Say
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our clients have to say
          about working with Shiftpoint.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => <div key={index} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />)}
            </div>
            <p className="text-white/80 mb-6">"{testimonial.text}"</p>
            <div className="flex items-center gap-3">
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="font-medium">{testimonial.name}</h4>
                <p className="text-sm text-white/70">
                  {testimonial.position}
                </p>
              </div>
            </div>
          </div>)}
      </div>
    </div>
    <div className="relative z-10">
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#9245FC]/5 rounded-full filter blur-3xl"></div>
    </div>
  </section>;
};