'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function RetailEcommercePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-600 via-fuchsia-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#industries" className="inline-flex items-center text-purple-200 hover:text-white mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Industries
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-7xl mb-6">🛍️</div>
              <h1 className="text-5xl font-bold mb-6">Retail & E-Commerce</h1>
              <p className="text-xl text-gray-100 mb-8">
                Transform your retail business with omnichannel commerce solutions. Create seamless shopping experiences across all touchpoints.
              </p>
              <a href="/#contact" className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-all">
                Start Selling Online
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 rounded-3xl backdrop-blur-sm border border-white/10 p-12 flex items-center justify-center">
                <div className="text-9xl opacity-50">🛒</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Retail & E-Commerce Solutions</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Commerce Platforms',
                icon: '🛒',
                description: 'Custom online stores with advanced features for seamless shopping experiences.',
                features: ['Shopify', 'WooCommerce', 'Magento', 'Custom Solutions']
              },
              {
                title: 'Mobile Commerce',
                icon: '📱',
                description: 'Native shopping apps for iOS and Android with personalized experiences.',
                features: ['Mobile Apps', 'Push Notifications', 'Mobile Payments', 'In-App Shopping']
              },
              {
                title: 'Point of Sale',
                icon: '💳',
                description: 'Modern POS systems integrating online and offline sales channels.',
                features: ['Cloud POS', 'Inventory Sync', 'Customer Data', 'Loyalty Programs']
              },
              {
                title: 'Inventory Management',
                icon: '📦',
                description: 'Real-time inventory tracking across all sales channels and warehouses.',
                features: ['Stock Tracking', 'Multi-warehouse', 'Auto-reordering', 'Forecasting']
              },
              {
                title: 'Order Management',
                icon: '📋',
                description: 'Streamlined order processing from purchase to delivery.',
                features: ['Order Processing', 'Fulfillment', 'Shipping Integration', 'Returns Management']
              },
              {
                title: 'Customer Analytics',
                icon: '📊',
                description: 'Data-driven insights for personalization and better customer engagement.',
                features: ['Customer Segmentation', 'Behavior Analysis', 'Recommendations', 'Predictive Analytics']
              },
            ].map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 text-sm">
                      <svg className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
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
          <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Omnichannel Experience', icon: '🌐', desc: 'Seamless shopping across all channels' },
              { title: 'Personalization', icon: '✨', desc: 'AI-powered product recommendations' },
              { title: 'Payment Integration', icon: '💰', desc: 'Multiple payment gateways support' },
              { title: 'SEO Optimization', icon: '🔍', desc: 'Better visibility in search engines' },
              { title: 'Marketing Automation', icon: '📢', desc: 'Email, SMS, and social campaigns' },
              { title: 'Performance Analytics', icon: '📈', desc: 'Real-time sales and traffic data' },
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all">
                <div className="text-5xl">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-600 to-fuchsia-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Retail Business?</h2>
          <p className="text-xl text-purple-100 mb-8">Let's create an exceptional e-commerce experience</p>
          <a href="/#contact" className="inline-block px-10 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-all">
            Build Your Store
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
