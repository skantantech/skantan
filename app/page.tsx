'use client';

import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ServiceShowcase from '@/components/ServiceShowcase';
import Industries from '@/components/Industries';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <ServiceShowcase />
      <Services />
      <Industries />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
