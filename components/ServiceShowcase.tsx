'use client';

export default function ServiceShowcase() {
  const showcaseServices = [
    {
      title: 'Web Development',
      description: 'Start developing your own professional website with our advanced tools. Get the flexibility you need to create without limits.',
      image: '🌐',
      gradient: 'from-blue-600 to-cyan-500',
      link: '/services/web-development',
      stats: { projects: '500+', satisfaction: '98%' }
    },
    {
      title: 'E-Commerce',
      description: 'List your products, get a digital store & share with customers. Manage & market products online.',
      image: '🛒',
      gradient: 'from-green-600 to-emerald-500',
      link: '/services/ecommerce',
      stats: { stores: '200+', revenue: '$50M+' }
    },
    {
      title: 'Mobile Apps',
      description: 'Build native mobile apps at lightning speed. Code faster, improve quality, reduce costs.',
      image: '📱',
      gradient: 'from-purple-600 to-pink-500',
      link: '/services/mobile-development',
      stats: { apps: '150+', downloads: '5M+' }
    },
    {
      title: 'UI/UX Design',
      description: 'Create unique aesthetics that meet project requirements with intricate design processes.',
      image: '🎨',
      gradient: 'from-orange-600 to-red-500',
      link: '/services/ui-ux-design',
      stats: { designs: '300+', awards: '25+' }
    },
    {
      title: 'Social Media',
      description: 'Create and share content on social media networks to achieve your marketing and branding goals.',
      image: '📢',
      gradient: 'from-pink-600 to-rose-500',
      link: '/services/social-media-marketing',
      stats: { campaigns: '400+', reach: '10M+' }
    },
    {
      title: 'ERP Solutions',
      description: 'Combine crucial business processes effectively with custom web design and ERP integration.',
      image: '⚙️',
      gradient: 'from-indigo-600 to-purple-500',
      link: '/services/erp-solutions',
      stats: { systems: '100+', users: '50K+' }
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-400 mb-4 uppercase tracking-wide">Featured Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your Digital Presence
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions designed to elevate your business to new heights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ padding: '2px' }}>
                <div className="h-full w-full bg-gray-900 rounded-2xl"></div>
              </div>

              <div className="relative z-10 p-8">
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform`}>
                  <span className="text-4xl">{service.image}</span>
                </div>

                {/* Title */}
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(service.stats).map(([key, value], idx) => (
                    <div key={idx} className="text-center">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        {value}
                      </div>
                      <div className="text-sm text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href={service.link || '#contact'}
                  className={`block w-full bg-gradient-to-r ${service.gradient} text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all text-center`}
                >
                  Explore Service
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6 text-lg">
            Ready to start your digital transformation journey?
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}
