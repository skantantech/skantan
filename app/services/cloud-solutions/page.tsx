'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CloudSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-sky-600 via-blue-600 to-sky-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#services" className="inline-flex items-center text-sky-200 hover:text-white mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-7xl mb-6">☁️</div>
              <h1 className="text-5xl font-bold mb-6">Cloud Solutions</h1>
              <p className="text-xl text-gray-100 mb-8">
                Modernize your infrastructure with cloud-native solutions. Migrate, optimize, and scale your applications in the cloud with confidence.
              </p>
              <a href="/#contact" className="inline-block px-8 py-4 bg-white text-sky-600 rounded-full font-semibold hover:bg-gray-100 transition-all">
                Start Your Cloud Journey
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-sky-500/20 rounded-3xl backdrop-blur-sm border border-white/10 p-12 flex items-center justify-center">
                <div className="text-9xl opacity-50">🌥️</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Cloud Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              {
                title: 'Cloud Migration',
                icon: '🚀',
                description: 'Seamlessly migrate your applications and data to the cloud with zero downtime.',
                features: ['Assessment', 'Strategy Planning', 'Migration Execution', 'Post-Migration Support']
              },
              {
                title: 'Cloud-Native Development',
                icon: '⚡',
                description: 'Build modern, scalable applications designed for the cloud from day one.',
                features: ['Microservices', 'Containers', 'Serverless', 'API-First Design']
              },
              {
                title: 'DevOps & CI/CD',
                icon: '🔄',
                description: 'Automate your development pipeline for faster, more reliable releases.',
                features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Automated Testing', 'Deployment Automation']
              },
              {
                title: 'Cloud Security',
                icon: '🛡️',
                description: 'Protect your cloud infrastructure with enterprise-grade security measures.',
                features: ['Identity Management', 'Encryption', 'Compliance', 'Threat Detection']
              },
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-sky-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-4xl font-bold text-center mb-16">Cloud Platforms We Support</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Amazon Web Services',
                icon: '🟠',
                services: ['EC2', 'S3', 'Lambda', 'RDS', 'EKS', 'CloudFront']
              },
              {
                name: 'Microsoft Azure',
                icon: '🔵',
                services: ['Virtual Machines', 'Blob Storage', 'Functions', 'AKS', 'SQL Database']
              },
              {
                name: 'Google Cloud Platform',
                icon: '🔴',
                services: ['Compute Engine', 'Cloud Storage', 'Cloud Functions', 'GKE', 'BigQuery']
              },
            ].map((platform, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-6xl mb-4">{platform.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{platform.name}</h3>
                <ul className="space-y-2">
                  {platform.services.map((service, idx) => (
                    <li key={idx} className="text-gray-700 flex items-center">
                      <svg className="w-4 h-4 text-sky-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {service}
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
          <h2 className="text-4xl font-bold text-center mb-16">Cloud Benefits</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Scalability', icon: '📈', desc: 'Scale up or down based on demand' },
              { title: 'Cost Savings', icon: '💰', desc: 'Pay only for what you use' },
              { title: 'Reliability', icon: '✅', desc: '99.9% uptime guarantee' },
              { title: 'Global Reach', icon: '🌍', desc: 'Deploy worldwide instantly' },
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Move to the Cloud?</h2>
          <p className="text-xl text-sky-100 mb-8">Let's build your cloud infrastructure for the future</p>
          <a href="/#contact" className="inline-block px-10 py-4 bg-white text-sky-600 rounded-full font-semibold hover:bg-gray-100 transition-all">
            Get Cloud Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
