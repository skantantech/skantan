'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function MobileDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#services" className="inline-flex items-center text-pink-200 hover:text-white mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-7xl mb-6">📱</div>
              <h1 className="text-5xl font-bold mb-6">Mobile App Development</h1>
              <p className="text-xl text-gray-100 mb-8">
                Build native mobile apps at lightning speed. Code faster, improve quality, and reduce costs with our expert mobile development team.
              </p>
              <a href="/#contact" className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-all">
                Start Your App
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-3xl backdrop-blur-sm border border-white/10 p-12 flex items-center justify-center">
                <div className="text-9xl opacity-50">📲</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Mobile Development Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'iOS Development',
                icon: '🍎',
                description: 'Native iOS apps built with Swift and SwiftUI for the best performance and user experience.',
                features: ['Swift & SwiftUI', 'App Store Optimization', 'Core Data', 'Push Notifications']
              },
              {
                title: 'Android Development',
                icon: '🤖',
                description: 'Native Android apps using Kotlin and Java for optimal performance across all Android devices.',
                features: ['Kotlin & Java', 'Material Design', 'Firebase Integration', 'Google Play Services']
              },
              {
                title: 'Cross-Platform Apps',
                icon: '🔄',
                description: 'Build once, deploy everywhere with React Native or Flutter for cost-effective development.',
                features: ['React Native', 'Flutter', 'Single Codebase', 'Native Performance']
              },
              {
                title: 'App Maintenance & Support',
                icon: '🔧',
                description: 'Ongoing maintenance, updates, and technical support to keep your app running smoothly.',
                features: ['Bug Fixes', 'Performance Optimization', 'OS Updates', '24/7 Support']
              },
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
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
          <h2 className="text-4xl font-bold text-center mb-16">Our Development Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your vision and requirements', icon: '🔍' },
              { step: '02', title: 'Design', desc: 'Creating intuitive user interfaces', icon: '🎨' },
              { step: '03', title: 'Development', desc: 'Building with best practices', icon: '⚡' },
              { step: '04', title: 'Launch', desc: 'App store submission and deployment', icon: '🚀' },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{phase.icon}</div>
                <div className="text-4xl font-bold text-purple-600 mb-2">{phase.step}</div>
                <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Mobile App?</h2>
          <p className="text-xl text-purple-100 mb-8">Let's create an amazing mobile experience for your users</p>
          <a href="/#contact" className="inline-block px-10 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-all">
            Get a Free Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
