'use client';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sm font-semibold text-blue-600 mb-4 uppercase tracking-wide">About Skantan</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              We're Built to Solve Business Problems
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Skantan Technologies Corporation, we listen first, learn, build fast, iterate quickly, and question absolutely everything. We use our creativity and deep engineering expertise to weave the newest advancements in Data and AI to deliver modern intelligent enterprises.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We build teams with our clients, and that collaboration, along with the resulting experience, is our difference. Our approach combines technical excellence with business understanding to drive meaningful transformation.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-gray-700">Years in Business</div>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">Global</div>
                <div className="text-gray-700">Presence</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
                <svg className="w-32 h-32 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-purple-100 rounded-2xl -z-10"></div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: '🎯', title: 'Innovation', description: 'Pushing boundaries with cutting-edge solutions' },
              { icon: '🤝', title: 'Collaboration', description: 'Building strong partnerships with our clients' },
              { icon: '⚡', title: 'Excellence', description: 'Delivering quality in every engagement' },
              { icon: '🚀', title: 'Agility', description: 'Adapting quickly to changing needs' },
            ].map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
