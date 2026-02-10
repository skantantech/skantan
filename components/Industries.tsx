'use client';

export default function Industries() {
  const industries = [
    {
      name: 'Healthcare',
      icon: '🏥',
      description: 'Seamless personalized care experiences, secure healthcare information access, and streamlined operations while ensuring compliance with industry regulations.',
      color: 'from-blue-500 to-cyan-500',
      link: '/industries/healthcare',
    },
    {
      name: 'Financial Services',
      icon: '🏦',
      description: 'Help banks, financial institutions, and insurers leverage digital to deliver new products, tailor customer experiences, and enhance loyalty.',
      color: 'from-green-500 to-emerald-500',
      link: '/industries/financial-services',
    },
    {
      name: 'Retail & E-Commerce',
      icon: '🛍️',
      description: 'Deliver consistent omni-channel experiences through digital commerce, personalized recommendations, and actionable customer insights.',
      color: 'from-purple-500 to-pink-500',
      link: '/industries/retail-ecommerce',
    },
    {
      name: 'Manufacturing',
      icon: '🏭',
      description: 'Leverage digital capabilities to improve supplier collaboration, accelerate time to market, and enhance the customer experience.',
      color: 'from-orange-500 to-red-500',
      link: '/industries/manufacturing',
    },
    {
      name: 'Technology',
      icon: '💻',
      description: 'Partner with innovative software companies to drive next-gen solutions for today\'s largest technological challenges.',
      color: 'from-indigo-500 to-blue-500',
      link: '/industries/technology',
    },
    {
      name: 'Telecommunications',
      icon: '📡',
      description: 'Accelerate innovation, enable new business models, and leverage analytics for new insights and business opportunities.',
      color: 'from-teal-500 to-green-500',
      link: '#',
    },
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 mb-4 uppercase tracking-wide">Industry Expertise</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Serving Diverse Industries
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bring deep domain expertise across multiple industries to deliver tailored solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <a
              key={index}
              href={industry.link}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden block"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              <div className="p-8 relative z-10">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  {industry.name}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
              <div className={`h-1 bg-gradient-to-r ${industry.color}`}></div>
            </a>
          ))}
        </div>

        {/* Case Studies Preview */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Digital Transformation for Global Bank',
                industry: 'Financial Services',
                result: '35% increase in customer satisfaction',
                icon: '📈',
              },
              {
                title: 'AI-Powered Healthcare Platform',
                industry: 'Healthcare',
                result: '50% reduction in processing time',
                icon: '⚕️',
              },
              {
                title: 'E-Commerce Platform Modernization',
                industry: 'Retail',
                result: '3x increase in online sales',
                icon: '🚀',
              },
            ].map((caseStudy, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-all">
                <div className="text-4xl mb-4">{caseStudy.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{caseStudy.title}</h4>
                <p className="text-sm text-blue-600 font-semibold mb-3">{caseStudy.industry}</p>
                <p className="text-gray-600">{caseStudy.result}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
