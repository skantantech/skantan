'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-700 via-slate-700 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#industries" className="inline-flex items-center text-gray-300 hover:text-white mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Industries
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-7xl mb-6">🏭</div>
              <h1 className="text-5xl font-bold mb-6">Manufacturing</h1>
              <p className="text-xl text-gray-100 mb-8">
                Embrace Industry 4.0 with smart manufacturing solutions. Optimize operations, improve quality, and drive innovation with advanced technology.
              </p>
              <a href="/#contact" className="inline-block px-8 py-4 bg-white text-gray-800 rounded-full font-semibold hover:bg-gray-100 transition-all">
                Modernize Manufacturing
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-slate-500/20 to-gray-500/20 rounded-3xl backdrop-blur-sm border border-white/10 p-12 flex items-center justify-center">
                <div className="text-9xl opacity-50">⚙️</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Smart Manufacturing Solutions</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'MES - Manufacturing Execution',
                icon: '⚡',
                description: 'Real-time production monitoring and control for optimal manufacturing processes.',
                features: ['Production Tracking', 'Quality Control', 'Downtime Analysis', 'OEE Monitoring']
              },
              {
                title: 'IoT & Smart Sensors',
                icon: '📡',
                description: 'Connect machines and equipment for real-time data collection and analysis.',
                features: ['Sensor Integration', 'Machine Connectivity', 'Predictive Maintenance', 'Asset Tracking']
              },
              {
                title: 'Supply Chain Management',
                icon: '🚚',
                description: 'End-to-end visibility and optimization of your manufacturing supply chain.',
                features: ['Procurement', 'Supplier Management', 'Logistics', 'Demand Planning']
              },
              {
                title: 'Quality Management',
                icon: '✅',
                description: 'Ensure product quality with automated inspection and testing systems.',
                features: ['Quality Assurance', 'Inspection Automation', 'Compliance Tracking', 'Defect Analysis']
              },
              {
                title: 'Production Planning',
                icon: '📋',
                description: 'Optimize production schedules and resource allocation for maximum efficiency.',
                features: ['Capacity Planning', 'Resource Optimization', 'Scheduling', 'Load Balancing']
              },
              {
                title: 'Digital Twin',
                icon: '🔄',
                description: 'Virtual replicas of physical assets for simulation and optimization.',
                features: ['3D Modeling', 'Simulation', 'Process Optimization', 'Performance Analysis']
              },
            ].map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 text-sm">
                      <svg className="w-4 h-4 text-gray-700 mr-2" fill="currentColor" viewBox="0 0 20 20">
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
          <h2 className="text-4xl font-bold text-center mb-16">Industry 4.0 Technologies</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'AI & Machine Learning', icon: '🤖', desc: 'Predictive analytics and optimization' },
              { title: 'Robotics & Automation', icon: '🦾', desc: 'Automated production lines' },
              { title: 'AR/VR Training', icon: '🥽', desc: 'Immersive worker training' },
              { title: 'Edge Computing', icon: '💻', desc: 'Real-time data processing' },
            ].map((tech, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-6xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
                <p className="text-gray-600">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-gray-700 to-slate-700">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Industry 4.0?</h2>
          <p className="text-xl text-gray-200 mb-8">Let's build smart manufacturing solutions for the future</p>
          <a href="/#contact" className="inline-block px-10 py-4 bg-white text-gray-800 rounded-full font-semibold hover:bg-gray-100 transition-all">
            Start Digital Transformation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
