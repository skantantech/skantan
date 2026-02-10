'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ERPSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#services" className="inline-flex items-center text-indigo-200 hover:text-white mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-7xl mb-6">⚙️</div>
              <h1 className="text-5xl font-bold mb-6">ERP Solutions</h1>
              <p className="text-xl text-gray-100 mb-8">
                Integrate crucial business processes effectively with custom ERP systems. Increase your company's overall efficiency with our development services.
              </p>
              <a href="/#contact" className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition-all">
                Implement ERP
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-3xl backdrop-blur-sm border border-white/10 p-12 flex items-center justify-center">
                <div className="text-9xl opacity-50">🔧</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">ERP Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              {
                title: 'ERP Implementation',
                icon: '🚀',
                description: 'Deploy industry-leading ERP systems like SAP, Oracle, or Microsoft Dynamics.',
                features: ['System Selection', 'Configuration', 'Data Migration', 'User Training']
              },
              {
                title: 'Custom ERP Development',
                icon: '⚡',
                description: 'Build tailored ERP solutions that perfectly fit your unique business processes.',
                features: ['Custom Modules', 'API Development', 'Integration', 'Scalability']
              },
              {
                title: 'Process Automation',
                icon: '🤖',
                description: 'Streamline business workflows with intelligent automation and optimization.',
                features: ['Workflow Automation', 'Business Rules', 'Approval Processes', 'Notifications']
              },
              {
                title: 'ERP Integration',
                icon: '🔗',
                description: 'Connect your ERP with CRM, e-commerce, and other business systems.',
                features: ['API Integration', 'Data Synchronization', 'Real-time Updates', 'Third-party Connectors']
              },
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-4xl font-bold text-center mb-16">ERP Modules</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Financial Management', icon: '💰', desc: 'General ledger, accounts payable/receivable' },
              { title: 'Inventory Management', icon: '📦', desc: 'Stock tracking, warehouse management' },
              { title: 'Human Resources', icon: '👥', desc: 'Employee management, payroll, benefits' },
              { title: 'Manufacturing', icon: '🏭', desc: 'Production planning, quality control' },
              { title: 'Supply Chain', icon: '🚚', desc: 'Procurement, logistics, distribution' },
              { title: 'CRM Integration', icon: '🤝', desc: 'Customer relationship management' },
            ].map((module, index) => (
              <div key={index} className="text-center p-6 rounded-xl border-2 border-gray-200 hover:border-indigo-500 transition-all">
                <div className="text-5xl mb-4">{module.icon}</div>
                <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                <p className="text-gray-600">{module.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-indigo-100 mb-8">Let's implement an ERP solution that drives efficiency and growth</p>
          <a href="/#contact" className="inline-block px-10 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition-all">
            Schedule a Demo
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
