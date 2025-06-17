import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Shiftpoint's AI solutions have transformed our business operations, delivering remarkable growth and streamlining efficiency. Their expertise and dedication are truly unmatched.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp",
      rating: 5,
      categories: ['AI Solutions', 'Business Transformation'],
    },
    {
      quote: "The Shiftpoint team consistently delivers cutting-edge AI solutions that are highly effective. We've seen a significant boost in productivity, exceeding our initial expectations.",
      author: "Emily Rodriguez",
      role: "Head of Digital Transformation, FutureTech",
      rating: 5,
      categories: ['Digital Transformation', 'Productivity Tools'],
    },
    {
      quote: "Working with Shiftpoint has been a game-changer for our company. Their AI implementation strategies have greatly improved our operational efficiency and overall performance.",
      author: "Michael Chen",
      role: "Director of Innovation, Global Solutions",
      rating: 5,
      categories: ['AI Implementation', 'Efficiency Improvement'],
    },
    {
      quote: "Exceptional service and truly innovative solutions. Shiftpoint's team consistently goes above and beyond to ensure our project's success and long-term value.",
      author: "David Kim",
      role: "CEO, InnovateX",
      rating: 5,
      categories: ['Innovation', 'Client Success'],
    },
    {
      quote: "The attention to detail and profound technical expertise demonstrated by Shiftpoint is remarkable. They have helped us gain a crucial competitive advantage in the market.",
      author: "Lisa Wang",
      role: "Operations Director, TechFlow",
      rating: 5,
      categories: ['Technical Expertise', 'Competitive Advantage'],
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-[120px]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 flex flex-col justify-center h-full"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-white/80 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
              Discover how our cutting-edge AI solutions have empowered businesses across various industries to achieve remarkable growth, streamline operations, and innovate beyond their expectations. Our clients' success stories speak volumes about our dedication and expertise.
            </p>
          </motion.div>

          <div className="w-full lg:w-1/2 relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
              <Quote className="w-12 h-12 text-white/50" />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-1/3 flex flex-col items-center text-center md:text-left md:items-start"
              >
                <p className="font-semibold text-lg">{currentTestimonial.author}</p>
                <p className="text-white/60 text-sm mb-4">{currentTestimonial.role}</p>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex + '-text'}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-2/3 text-center md:text-left"
              >
                <p className="text-white/80 text-xl md:text-2xl italic mb-6">"{currentTestimonial.quote}"</p>
                <div className="flex justify-center md:justify-start gap-4 mt-8">
                  <button
                    onClick={handlePrev}
                    className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-[#9245FC] to-purple-600 text-white flex items-center justify-center hover:opacity-90 transition-colors"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};