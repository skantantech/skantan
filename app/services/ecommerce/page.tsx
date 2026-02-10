'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ECommercePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#services" className="inline-flex items-center text-emerald-200 hover:text-white mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-7xl mb-6">🛒</div>
              <h1 className="text-5xl font-bold mb-6">E-Commerce Solutions</h1>
              <p className="text-xl text-gray-100 mb-8">
                Launch your digital store and manage products online. Build powerful e-commerce platforms that drive sales and growth.
              </p>
              <a href="#contact" className="inline-block px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-100 transition-all">
                Launch Your Store
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-3xl backdrop-blur-sm border border-white/10 p-12 flex items-center justify-center">
                <div className="text-9xl opacity-50">🛍️</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">E-Commerce Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              {
                title: 'Online Store Development',
                icon: '🏪',
                description: 'Custom e-commerce platforms built with Shopify, WooCommerce, Magento, or custom solutions.',
                features: ['Product Catalog', 'Shopping Cart', 'Order Management', 'Multi-Currency Support']
              },
              {
                title: 'Payment Gateway Integration',
                icon: '💳',
                description: 'Secure payment processing with all major payment providers and methods.',
                features: ['Stripe', 'PayPal', 'Square', 'Cryptocurrency']
              },
              {
                title: 'Inventory Management',
                icon: '📦',
                description: 'Real-time stock tracking, automated reordering, and warehouse management.',
                features: ['Stock Tracking', 'Auto Reorder', 'Warehouse Management', 'Supplier Integration']
              },
              {
                title: 'Marketing & SEO',
                icon: '📈',
                description: 'Drive traffic and sales with built-in marketing tools and SEO optimization.',
                features: ['Email Marketing', 'SEO Optimization', 'Analytics', 'Social Integration']
              },
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-4xl font-bold text-center mb-16">Platform Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Mobile Responsive', icon: '📱', desc: 'Perfect shopping experience on all devices' },
              { title: 'Fast Checkout', icon: '⚡', desc: 'One-click and guest checkout options' },
              { title: 'Product Reviews', icon: '⭐', desc: 'Build trust with customer reviews' },
              { title: 'Shipping Integration', icon: '🚚', desc: 'Real-time shipping rates and tracking' },
              { title: 'Customer Accounts', icon: '👤', desc: 'Personalized user experiences' },
              { title: 'Analytics Dashboard', icon: '📊', desc: 'Track sales and customer behavior' },
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl border-2 border-gray-200 hover:border-green-500 transition-all">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Selling Online?</h2>
          <p className="text-xl text-green-100 mb-8">Let's build your e-commerce success story together</p>
          <a href="/#contact" className="inline-block px-10 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-100 transition-all">
            Get Started Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
