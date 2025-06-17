import React from 'react';
import { CheckCircleIcon } from 'lucide-react';
export const AboutSection = () => {
  const achievements = ['10+ years of experience in AI development', 'Worked with 200+ clients worldwide', 'Developed 50+ custom AI solutions', 'Team of 100+ AI experts and engineers'];
  return <section id="about" className="py-20 relative">
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#9245FC]/5 rounded-full filter blur-3xl"></div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-full max-w-md backdrop-blur-xl bg-white/80 border border-gray-200 rounded-2xl p-6 shadow-lg">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Team collaboration" className="w-full h-auto rounded-lg" />
              </div>
              <div className="absolute -bottom-6 -right-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-4 shadow-lg max-w-xs">
                <p className="font-medium">
                  Our mission is to make AI accessible and practical for
                  businesses of all sizes.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About Shiftpoint
            </h2>
            <p className="text-white/80 mb-6">
              Founded with a vision to bridge the gap between cutting-edge AI
              research and practical business applications, Shiftpoint has grown
              into a leading AI software house trusted by companies worldwide.
            </p>
            <p className="text-white/80 mb-8">
              Our team of AI specialists, software engineers, and industry
              experts work together to deliver solutions that not only leverage
              the latest in artificial intelligence but are also tailored to
              meet the unique challenges and goals of each client.
            </p>
            <div className="space-y-3">
              {achievements.map((achievement, index) => <div key={index} className="flex items-center gap-3">
                  <CheckCircleIcon size={20} className="text-blue-400 flex-shrink-0" />
                  <span>{achievement}</span>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};