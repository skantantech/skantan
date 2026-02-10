'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ArtificialIntelligencePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#services" className="inline-flex items-center text-blue-300 hover:text-white mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-7xl mb-6">🤖</div>
              <h1 className="text-5xl font-bold mb-6">Artificial Intelligence</h1>
              <p className="text-xl text-gray-300 mb-8">
                Bridge the gap between AI aspiration and implementation with cutting-edge artificial intelligence solutions
              </p>
              <a href="#contact" className="inline-block px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:bg-gray-100 transition-all">
                Get Started
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl backdrop-blur-sm border border-white/10 p-12 flex items-center justify-center">
                <div className="text-9xl opacity-50">🧠</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our AI Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              {
                title: 'Agentic AI',
                description: 'Autonomous AI agents that can make decisions, take actions, and collaborate with humans to automate complex business processes.',
                icon: '🤖',
                features: ['Autonomous Decision Making', 'Multi-Agent Systems', 'Task Automation', 'Workflow Orchestration']
              },
              {
                title: 'Generative AI',
                description: 'Custom GPT models, chatbots, and AI applications that generate content, code, and creative solutions.',
                icon: '✨',
                features: ['Custom LLM Development', 'AI Chatbots', 'Content Generation', 'Code Assistants']
              },
              {
                title: 'Machine Learning',
                description: 'Predictive analytics, forecasting, and intelligent automation powered by advanced ML algorithms.',
                icon: '📊',
                features: ['Predictive Analytics', 'Pattern Recognition', 'Anomaly Detection', 'Recommendation Systems']
              },
              {
                title: 'AI Strategy & Consulting',
                description: 'Comprehensive AI roadmap development and implementation planning to transform your business.',
                icon: '🎯',
                features: ['AI Readiness Assessment', 'Strategy Development', 'Implementation Roadmap', 'Change Management']
              },
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Use Cases */}
          <h2 className="text-4xl font-bold text-center mb-16">AI Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Customer Service Automation', icon: '💬', desc: 'AI-powered chatbots and virtual assistants' },
              { title: 'Intelligent Document Processing', icon: '📄', desc: 'Automated data extraction and processing' },
              { title: 'Predictive Maintenance', icon: '🔧', desc: 'Forecast equipment failures before they happen' },
              { title: 'Fraud Detection', icon: '🛡️', desc: 'Real-time anomaly detection and prevention' },
              { title: 'Personalization', icon: '🎯', desc: 'Tailored user experiences and recommendations' },
              { title: 'Process Optimization', icon: '⚡', desc: 'Streamline operations with AI insights' },
            ].map((useCase, index) => (
              <div key={index} className="text-center p-6 rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-all">
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-blue-100 mb-8">Let's discuss how AI can drive innovation and efficiency in your organization</p>
          <a href="/#contact" className="inline-block px-10 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all">
            Schedule a Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
