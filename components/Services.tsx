'use client';

import { useState } from 'react';

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      category: 'Web Development',
      icon: '🌐',
      gradient: 'from-blue-500 to-cyan-500',
      image: '💻',
      description: 'Build professional, scalable websites with advanced tools and modern frameworks',
      link: '/services/web-development',
      offerings: [
        { name: 'Custom Website Design', detail: 'Tailored solutions for your brand identity' },
        { name: 'Responsive Development', detail: 'Mobile-first, cross-device compatibility' },
        { name: 'CMS Integration', detail: 'WordPress, Drupal, and custom CMS' },
        { name: 'Progressive Web Apps', detail: 'Fast, reliable, engaging web experiences' },
      ],
    },
    {
      category: 'E-Commerce Solutions',
      icon: '🛒',
      gradient: 'from-green-500 to-emerald-500',
      image: '🛍️',
      description: 'Launch your digital store and manage products online with powerful e-commerce platforms',
      link: '/services/ecommerce',
      offerings: [
        { name: 'E-Commerce Development', detail: 'Shopify, WooCommerce, Magento solutions' },
        { name: 'Payment Gateway Integration', detail: 'Secure payment processing systems' },
        { name: 'Inventory Management', detail: 'Real-time stock and order tracking' },
        { name: 'Shopping Cart Optimization', detail: 'Conversion-focused checkout flows' },
      ],
    },
    {
      category: 'Mobile App Development',
      icon: '📱',
      gradient: 'from-purple-500 to-pink-500',
      image: '📲',
      link: '/services/mobile-development',
      description: 'Build native mobile apps at lightning speed with cutting-edge technology',
      offerings: [
        { name: 'iOS Development', detail: 'Native Swift and SwiftUI applications' },
        { name: 'Android Development', detail: 'Kotlin and Java native apps' },
        { name: 'Cross-Platform Apps', detail: 'React Native and Flutter solutions' },
        { name: 'App Store Deployment', detail: 'End-to-end publishing support' },
      ],
    },
    {
      category: 'Mobile UI/UX Design',
      icon: '🎨',
      gradient: 'from-orange-500 to-red-500',
      image: '✨',
      link: '/services/ui-ux-design',
      description: 'Create intricate, beautiful mobile interfaces that users love',
      offerings: [
        { name: 'UI Design', detail: 'Beautiful, modern interface design' },
        { name: 'UX Research', detail: 'User testing and behavior analysis' },
        { name: 'Prototyping', detail: 'Interactive mockups and wireframes' },
        { name: 'Design Systems', detail: 'Consistent, scalable design patterns' },
      ],
    },
    {
      category: 'Social Media Marketing',
      icon: '📢',
      gradient: 'from-pink-500 to-rose-500',
      image: '📱',
      link: '/services/social-media-marketing',
      description: 'Leverage social networks to market products and achieve branding goals',
      offerings: [
        { name: 'Social Strategy', detail: 'Comprehensive social media planning' },
        { name: 'Content Creation', detail: 'Engaging posts, graphics, and videos' },
        { name: 'Community Management', detail: 'Active audience engagement' },
        { name: 'Social Advertising', detail: 'Targeted ad campaigns on all platforms' },
      ],
    },
    {
      category: 'Artificial Intelligence',
      icon: '🤖',
      gradient: 'from-indigo-500 to-blue-500',
      link: '/services/artificial-intelligence',
      image: '🧠',
      description: 'Bridge the gap between AI aspiration and implementation',
      offerings: [
        { name: 'Agentic AI', detail: 'Autonomous AI agents for business automation' },
        { name: 'Generative AI', detail: 'Custom GPT models and AI applications' },
        { name: 'Machine Learning', detail: 'Predictive analytics and ML solutions' },
        { name: 'AI Strategy', detail: 'AI roadmap and implementation planning' },
      ],
    },
    {
      category: 'Data & Analytics',
      icon: '📊',
      gradient: 'from-teal-500 to-green-500',
      image: '📈',
      link: '/services/data-analytics',
      description: 'Harness the power of data to drive business decisions',
      offerings: [
        { name: 'Data Engineering', detail: 'Build robust data pipelines and infrastructure' },
        { name: 'Business Intelligence', detail: 'Interactive dashboards and reporting' },
        { name: 'Advanced Analytics', detail: 'Deep insights from complex data' },
        { name: 'Data Governance', detail: 'Ensure data quality and compliance' },
      ],
    },
    {
      category: 'Cloud & DevOps',
      icon: '☁️',
      gradient: 'from-sky-500 to-blue-500',
      image: '⚡',
      link: '/services/cloud-solutions',
      description: 'Modernize your infrastructure for the cloud era',
      offerings: [
        { name: 'Cloud Migration', detail: 'Seamless transition to AWS, Azure, GCP' },
        { name: 'Cloud Native Development', detail: 'Build scalable cloud applications' },
        { name: 'DevOps Automation', detail: 'CI/CD pipelines and infrastructure as code' },
        { name: 'Site Reliability Engineering', detail: '24/7 monitoring and support' },
      ],
    },
    {
      category: 'ERP Solutions',
      icon: '⚙️',
      gradient: 'from-violet-500 to-purple-500',
      image: '🔧',
      link: '/services/erp-solutions',
      description: 'Integrate crucial business processes effectively with custom ERP systems',
      offerings: [
        { name: 'ERP Implementation', detail: 'SAP, Oracle, Microsoft Dynamics' },
        { name: 'Custom ERP Development', detail: 'Tailored enterprise resource planning' },
        { name: 'Process Automation', detail: 'Streamline business workflows' },
        { name: 'ERP Integration', detail: 'Connect systems and data sources' },
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 mb-4 uppercase tracking-wide">Our Services</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Technology Solutions
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver end-to-end services that transform your business through innovative technology
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
              onClick={() => setActiveTab(index)}
            >
              {/* Gradient Header with Icon */}
              <div className={`bg-gradient-to-r ${service.gradient} p-8 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 text-8xl opacity-10 transform translate-x-4 -translate-y-4">
                  {service.image}
                </div>
                <div className="text-5xl mb-4 relative z-10 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-2 relative z-10">
                  {service.category}
                </h4>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.offerings.map((offering, idx) => (
                    <div key={idx} className="flex items-start group/item">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}>
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 group-hover/item:text-blue-600 transition-colors">{offering.name}</div>
                        <div className="text-sm text-gray-600">{offering.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Footer */}
              <a 
                href={service.link || '#contact'}
                className={`block bg-gradient-to-r ${service.gradient} px-6 py-4 text-white font-semibold text-center group-hover:opacity-90 transition-all`}
              >
                <span className="flex items-center justify-center">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
