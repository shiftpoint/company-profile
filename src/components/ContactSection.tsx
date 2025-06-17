import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
export const ContactSection = () => {
  return <section id="contact" className="py-20 relative">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#9245FC]/5 rounded-full filter blur-3xl"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Get in Touch
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Ready to transform your business with AI? Contact us today to
            discuss your project or learn more about our services.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/3 space-y-6">
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin size={20} className="text-blue-400" />
                </div>
                <h3 className="text-lg font-medium">Our Location</h3>
              </div>
              <p className="text-white/70">
                South Jakarta, Jakarta
              </p>
            </div>
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail size={20} className="text-purple-400" />
                </div>
                <h3 className="text-lg font-medium">Email Us</h3>
              </div>
              <p className="text-white/70">shiftpoint.id@gmail.com</p>
              <p className="text-white/70">shiftpoint.id@gmail.com</p>
            </div>
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone size={20} className="text-teal-400" />
                </div>
                <h3 className="text-lg font-medium">Call Us</h3>
              </div>
              <p className="text-white/70">+1 (555) 123-4567</p>
              <p className="text-white/70">+1 (555) 987-6543</p>
            </div>
          </div>
          <div className="lg:w-2/3 backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Your Name
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Your Email
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                  Subject
                </label>
                <input type="text" id="subject" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="How can we help?" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Your Message
                </label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition-all font-medium">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};