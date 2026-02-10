'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#industries" className="inline-flex items-center text-indigo-200 hover:text-white mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Industries
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-7xl mb-6">💻</div>
              <h1 className="text-5xl font-bold mb-6">Technology</h1>
              <p className="text-xl text-gray-100 mb-8">
                Partner with technology companies to innovate faster. Build cutting-edge software products, platforms, and services that drive the future.
              </p>
              <a href="/#contact" className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition-all">
                Partner With Us
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl backdrop-blur-sm border border-white/10 p-12 flex items-center justify-center">
                <div className="text-9xl opacity-50">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Technology Solutions</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'SaaS Development',
                icon: '☁️',
                description: 'Build scalable, multi-tenant SaaS applications with modern architectures.',
                features: ['Multi-tenancy', 'Subscription Billing', 'User Management', 'API Development']
              },
              {
                title: 'Platform Engineering',
                icon: '🏗️',
                description: 'Create robust platforms that enable rapid application development and innovation.',
                features: ['Microservices', 'API Gateway', 'Service Mesh', 'Developer Portal']
              },
              {
                title: 'DevOps & CI/CD',
                icon: '🔄',
                description: 'Accelerate delivery with automated pipelines and infrastructure as code.',
                features: ['CI/CD Pipelines', 'Container Orchestration', 'Monitoring', 'Auto-scaling']
              },
              {
                title: 'Product Development',
                icon: '💡',
                description: 'Transform ideas into market-ready products with agile development methodologies.',
                features: ['MVP Development', 'Product Design', 'User Research', 'Iteration']
              },
              {
                title: 'Enterprise Software',
                icon: '🏢',
                description: 'Build robust enterprise applications with complex workflows and integrations.',
                features: ['Custom Software', 'Legacy Modernization', 'System Integration', 'Scalability']
              },
              {
                title: 'API & Integration',
                icon: '🔗',
                description: 'Connect systems and data with secure, scalable API solutions.',
                features: ['REST APIs', 'GraphQL', 'Webhooks', 'API Security']
              },
            ].map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 text-sm">
                      <svg className="w-4 h-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
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
          <h2 className="text-4xl font-bold text-center mb-16">Technology Stack</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { category: 'Frontend', techs: ['React', 'Next.js', 'TypeScript', 'Tailwind'], icon: '🎨' },
              { category: 'Backend', techs: ['Node.js', 'Python', 'Java', '.NET'], icon: '⚙️' },
              { category: 'Cloud', techs: ['AWS', 'Azure', 'GCP', 'Kubernetes'], icon: '☁️' },
              { category: 'Database', techs: ['PostgreSQL', 'MongoDB', 'Redis', 'Cosmos'], icon: '🗄️' },
            ].map((stack, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all">
                <div className="text-5xl mb-3">{stack.icon}</div>
                <h3 className="text-xl font-bold mb-3">{stack.category}</h3>
                <ul className="space-y-1">
                  {stack.techs.map((tech, idx) => (
                    <li key={idx} className="text-gray-600 text-sm">• {tech}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Why Tech Companies Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Technical Expertise', icon: '🎓', desc: 'Deep knowledge of modern tech stacks' },
              { title: 'Agile Delivery', icon: '⚡', desc: 'Fast iterations and continuous deployment' },
              { title: 'Scalable Architecture', icon: '📈', desc: 'Built to handle growth from day one' },
              { title: 'Security First', icon: '🔒', desc: 'Enterprise-grade security practices' },
              { title: 'Innovation Focus', icon: '💡', desc: 'Cutting-edge solutions and R&D' },
              { title: 'Partnership Approach', icon: '🤝', desc: 'Collaborative and transparent process' },
            ].map((reason, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-6xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build the Future?</h2>
          <p className="text-xl text-indigo-100 mb-8">Let's create innovative technology solutions together</p>
          <a href="/#contact" className="inline-block px-10 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition-all">
            Start Your Project
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
