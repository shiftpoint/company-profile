import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans">
      <style jsx global>{`
        @font-face {
          font-family: 'CircularStd';
          src: url('https://db.onlinewebfonts.com/t/860c3ec7bbc5da3e97233ccecafe512e.woff2')
            format('woff2');
          font-weight: 700;
          font-style: normal;
        }
      `}</style>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-70"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <FeaturesSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>;
}