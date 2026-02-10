'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#services" className="inline-flex items-center text-cyan-200 hover:text-white mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-7xl mb-6">🌐</div>
              <h1 className="text-5xl font-bold mb-6">Web Development</h1>
              <p className="text-xl text-gray-100 mb-8">
                Build professional, scalable websites with advanced tools and modern frameworks. Get the flexibility you need to create without limits.
              </p>
              <a href="#contact" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all">
                Start Your Project
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl backdrop-blur-sm border border-white/10 p-12 flex items-center justify-center">
                <div className="text-9xl opacity-50">💻</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Web Development Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Website Design',
                icon: '🎨',
                description: 'Unique, brand-focused designs tailored to your business needs',
                features: ['Custom UI/UX', 'Brand Identity', 'Responsive Design', 'Modern Aesthetics']
              },
              {
                title: 'Responsive Development',
                icon: '📱',
                description: 'Mobile-first approach ensuring perfect display on all devices',
                features: ['Mobile Optimization', 'Cross-Browser Support', 'Fast Loading', 'Touch-Friendly']
              },
              {
                title: 'CMS Integration',
                icon: '⚙️',
                description: 'Easy content management with WordPress, Drupal, or custom CMS',
                features: ['WordPress', 'Headless CMS', 'Custom CMS', 'Easy Updates']
              },
              {
                title: 'Progressive Web Apps',
                icon: '⚡',
                description: 'Fast, reliable web experiences that work offline',
                features: ['Offline Support', 'Push Notifications', 'App-like Feel', 'Fast Performance']
              },
              {
                title: 'E-Learning Platforms',
                icon: '📚',
                description: 'Interactive learning management systems and online courses',
                features: ['Course Management', 'Video Streaming', 'Student Tracking', 'Certifications']
              },
              {
                title: 'Web Portals',
                icon: '🌟',
                description: 'Custom portals for employees, customers, or partners',
                features: ['User Management', 'Role-Based Access', 'Dashboard', 'Integration']
              },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
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

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'Python', 'PHP', 'WordPress', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'REST API'].map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow hover:shadow-lg transition-all">
                <div className="text-4xl mb-2">⚡</div>
                <div className="font-semibold text-gray-900">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Website?</h2>
          <p className="text-xl text-blue-100 mb-8">Let's create a powerful online presence for your business</p>
          <a href="/#contact" className="inline-block px-10 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all">
            Get a Free Quote
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
