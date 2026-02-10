'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function DataAnalyticsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-600 via-green-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#services" className="inline-flex items-center text-teal-200 hover:text-white mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-7xl mb-6">📊</div>
              <h1 className="text-5xl font-bold mb-6">Data & Analytics</h1>
              <p className="text-xl text-gray-100 mb-8">
                Transform raw data into actionable insights. Leverage advanced analytics, business intelligence, and data science to make informed decisions.
              </p>
              <a href="/#contact" className="inline-block px-8 py-4 bg-white text-teal-600 rounded-full font-semibold hover:bg-gray-100 transition-all">
                Unlock Your Data
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-3xl backdrop-blur-sm border border-white/10 p-12 flex items-center justify-center">
                <div className="text-9xl opacity-50">📈</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Data & Analytics Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Data Engineering',
                icon: '🔧',
                description: 'Build robust data pipelines and infrastructure for seamless data flow.',
                features: ['ETL/ELT Pipelines', 'Data Warehousing', 'Data Lakes', 'Real-time Processing']
              },
              {
                title: 'Business Intelligence',
                icon: '📊',
                description: 'Interactive dashboards and reports for data-driven decision making.',
                features: ['Power BI', 'Tableau', 'Looker', 'Custom Dashboards']
              },
              {
                title: 'Advanced Analytics',
                icon: '🧮',
                description: 'Predictive models and statistical analysis for business insights.',
                features: ['Predictive Modeling', 'Statistical Analysis', 'Forecasting', 'Trend Analysis']
              },
              {
                title: 'Data Science',
                icon: '🔬',
                description: 'Machine learning and AI-powered solutions for complex challenges.',
                features: ['ML Models', 'NLP', 'Computer Vision', 'Deep Learning']
              },
              {
                title: 'Data Visualization',
                icon: '📈',
                description: 'Transform complex data into intuitive, interactive visualizations.',
                features: ['Charts & Graphs', 'Geospatial Maps', 'Real-time Dashboards', 'Custom Viz']
              },
              {
                title: 'Data Governance',
                icon: '🛡️',
                description: 'Ensure data quality, security, and compliance across your organization.',
                features: ['Data Quality', 'MDM', 'Privacy Compliance', 'Data Catalogs']
              },
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 text-sm">
                      <svg className="w-4 h-4 text-teal-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
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
          <h2 className="text-4xl font-bold text-center mb-16">Analytics Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Customer Analytics', icon: '👥', desc: 'Understand customer behavior and preferences' },
              { title: 'Sales Forecasting', icon: '💰', desc: 'Predict future sales and revenue trends' },
              { title: 'Operational Analytics', icon: '⚙️', desc: 'Optimize processes and reduce costs' },
              { title: 'Risk Analytics', icon: '⚠️', desc: 'Identify and mitigate business risks' },
              { title: 'Marketing Analytics', icon: '📢', desc: 'Measure campaign effectiveness and ROI' },
              { title: 'Financial Analytics', icon: '📊', desc: 'Track KPIs and financial performance' },
            ].map((useCase, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all">
                <div className="text-5xl">{useCase.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Harness Your Data?</h2>
          <p className="text-xl text-teal-100 mb-8">Let's turn your data into a strategic asset</p>
          <a href="/#contact" className="inline-block px-10 py-4 bg-white text-teal-600 rounded-full font-semibold hover:bg-gray-100 transition-all">
            Start Your Analytics Journey
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
