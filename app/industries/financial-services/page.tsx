'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function FinancialServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#industries" className="inline-flex items-center text-green-200 hover:text-white mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Industries
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-7xl mb-6">💰</div>
              <h1 className="text-5xl font-bold mb-6">Financial Services</h1>
              <p className="text-xl text-gray-100 mb-8">
                Build secure, scalable fintech solutions that meet regulatory requirements. Transform banking, payments, and investment services with cutting-edge technology.
              </p>
              <a href="/#contact" className="inline-block px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-100 transition-all">
                Partner With Us
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-3xl backdrop-blur-sm border border-white/10 p-12 flex items-center justify-center">
                <div className="text-9xl opacity-50">🏦</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Financial Technology Solutions</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Digital Banking',
                icon: '🏦',
                description: 'Modern banking platforms with seamless digital experiences for customers.',
                features: ['Mobile Banking', 'Online Banking', 'Account Management', 'Digital Wallets']
              },
              {
                title: 'Payment Processing',
                icon: '💳',
                description: 'Secure payment gateway solutions for seamless transaction processing.',
                features: ['Payment Gateway', 'PCI Compliance', 'Fraud Detection', 'Multi-currency']
              },
              {
                title: 'Wealth Management',
                icon: '📊',
                description: 'Portfolio management and investment platforms with real-time analytics.',
                features: ['Portfolio Tracking', 'Risk Analysis', 'Robo-Advisory', 'Reporting']
              },
              {
                title: 'Lending Platforms',
                icon: '📝',
                description: 'Automated lending solutions with credit scoring and risk assessment.',
                features: ['Loan Origination', 'Credit Scoring', 'Document Verification', 'Compliance']
              },
              {
                title: 'RegTech Solutions',
                icon: '⚖️',
                description: 'Regulatory compliance and risk management technology solutions.',
                features: ['KYC/AML', 'Transaction Monitoring', 'Compliance Reporting', 'Audit Trails']
              },
              {
                title: 'Blockchain & Crypto',
                icon: '⛓️',
                description: 'Cryptocurrency exchanges and blockchain-based financial services.',
                features: ['Smart Contracts', 'Crypto Wallets', 'DeFi Solutions', 'NFT Platforms']
              },
            ].map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 text-sm">
                      <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
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
          <h2 className="text-4xl font-bold text-center mb-16">Security & Compliance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'PCI DSS', icon: '🔒', desc: 'Payment card industry compliance' },
              { title: 'SOC 2', icon: '✅', desc: 'Security and availability standards' },
              { title: 'GDPR', icon: '🛡️', desc: 'Data protection and privacy' },
              { title: 'ISO 27001', icon: '🏆', desc: 'Information security management' },
              { title: 'AML/KYC', icon: '🔍', desc: 'Anti-money laundering compliance' },
              { title: 'SEC/FINRA', icon: '⚖️', desc: 'Financial regulations' },
            ].map((standard, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all">
                <div className="text-5xl mb-3">{standard.icon}</div>
                <h3 className="text-xl font-bold mb-2">{standard.title}</h3>
                <p className="text-gray-600">{standard.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Innovate in Finance?</h2>
          <p className="text-xl text-green-100 mb-8">Let's build secure, compliant fintech solutions together</p>
          <a href="/#contact" className="inline-block px-10 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-100 transition-all">
            Schedule a Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
