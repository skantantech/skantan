'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#industries" className="inline-flex items-center text-blue-200 hover:text-white mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Industries
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-7xl mb-6">🏥</div>
              <h1 className="text-5xl font-bold mb-6">Healthcare Solutions</h1>
              <p className="text-xl text-gray-100 mb-8">
                Transform healthcare delivery with innovative technology solutions. Improve patient outcomes, streamline operations, and ensure compliance with industry regulations.
              </p>
              <a href="/#contact" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all">
                Discuss Your Project
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl backdrop-blur-sm border border-white/10 p-12 flex items-center justify-center">
                <div className="text-9xl opacity-50">💊</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Healthcare Solutions</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Electronic Health Records',
                icon: '📋',
                description: 'Modern EHR systems for comprehensive patient data management and care coordination.',
                features: ['Patient Records', 'Clinical Documentation', 'Interoperability', 'HIPAA Compliance']
              },
              {
                title: 'Telemedicine Platforms',
                icon: '💻',
                description: 'Secure virtual care platforms enabling remote patient consultations and monitoring.',
                features: ['Video Consultations', 'Remote Monitoring', 'Prescription Management', 'Secure Messaging']
              },
              {
                title: 'Practice Management',
                icon: '🏢',
                description: 'Streamline administrative tasks and optimize healthcare practice operations.',
                features: ['Appointment Scheduling', 'Billing & Claims', 'Revenue Cycle', 'Reporting']
              },
              {
                title: 'Medical Imaging',
                icon: '🔬',
                description: 'Advanced imaging solutions with AI-powered diagnostics and analysis.',
                features: ['PACS Integration', 'Image Analysis', 'AI Diagnostics', 'Cloud Storage']
              },
              {
                title: 'Patient Portals',
                icon: '👤',
                description: 'Empower patients with secure access to their health information and services.',
                features: ['Health Records', 'Appointment Booking', 'Lab Results', 'Billing Access']
              },
              {
                title: 'Healthcare Analytics',
                icon: '📊',
                description: 'Data-driven insights for better clinical and operational decision-making.',
                features: ['Population Health', 'Predictive Analytics', 'Quality Metrics', 'Cost Analysis']
              },
            ].map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 text-sm">
                      <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
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
          <h2 className="text-4xl font-bold text-center mb-16">Key Benefits</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Improved Patient Care', icon: '❤️', desc: 'Better outcomes through technology' },
              { title: 'Regulatory Compliance', icon: '✅', desc: 'HIPAA, HL7, FHIR standards' },
              { title: 'Cost Efficiency', icon: '💰', desc: 'Reduced operational costs' },
              { title: 'Enhanced Security', icon: '🔒', desc: 'Protected patient data' },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Transform Your Healthcare Organization</h2>
          <p className="text-xl text-blue-100 mb-8">Let's build innovative solutions for better patient care</p>
          <a href="/#contact" className="inline-block px-10 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all">
            Get Started
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
