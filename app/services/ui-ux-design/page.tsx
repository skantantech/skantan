'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function UIUXDesignPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#services" className="inline-flex items-center text-orange-200 hover:text-white mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-7xl mb-6">🎨</div>
              <h1 className="text-5xl font-bold mb-6">Mobile UI/UX Design</h1>
              <p className="text-xl text-gray-100 mb-8">
                Create intricate, beautiful mobile interfaces that users love. Design unique aesthetics that meet your project requirements.
              </p>
              <a href="/#contact" className="inline-block px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:bg-gray-100 transition-all">
                Start Designing
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl backdrop-blur-sm border border-white/10 p-12 flex items-center justify-center">
                <div className="text-9xl opacity-50">✨</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">UI/UX Design Services</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'User Research',
                icon: '🔍',
                description: 'Deep dive into user behavior, needs, and pain points to inform design decisions.',
                features: ['User Interviews', 'Surveys & Analytics', 'Persona Development', 'Journey Mapping']
              },
              {
                title: 'UI Design',
                icon: '🖼️',
                description: 'Beautiful, modern interface design that aligns with your brand and delights users.',
                features: ['Visual Design', 'Icon Design', 'Color Theory', 'Typography']
              },
              {
                title: 'Prototyping',
                icon: '🔧',
                description: 'Interactive prototypes that bring your ideas to life before development.',
                features: ['Wireframing', 'High-Fidelity Mockups', 'Interactive Prototypes', 'User Testing']
              },
              {
                title: 'Design Systems',
                icon: '📐',
                description: 'Scalable design systems for consistent user experiences across all platforms.',
                features: ['Component Libraries', 'Style Guides', 'Design Tokens', 'Documentation']
              },
              {
                title: 'Usability Testing',
                icon: '🧪',
                description: 'Validate designs with real users to ensure optimal user experience.',
                features: ['A/B Testing', 'Heatmaps', 'User Feedback', 'Analytics']
              },
              {
                title: 'Accessibility Design',
                icon: '♿',
                description: 'Inclusive design that works for everyone, meeting WCAG standards.',
                features: ['WCAG Compliance', 'Screen Reader Support', 'Color Contrast', 'Keyboard Navigation']
              },
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 text-sm">
                      <svg className="w-4 h-4 text-orange-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Design Tools We Use</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {['Figma', 'Sketch', 'Adobe XD', 'InVision', 'Framer', 'Principle'].map((tool, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow hover:shadow-lg transition-all">
                <div className="text-4xl mb-2">🎨</div>
                <div className="font-semibold text-gray-900">{tool}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Beautiful Designs?</h2>
          <p className="text-xl text-orange-100 mb-8">Let's design an exceptional user experience together</p>
          <a href="/#contact" className="inline-block px-10 py-4 bg-white text-orange-600 rounded-full font-semibold hover:bg-gray-100 transition-all">
            Start Your Design Project
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
