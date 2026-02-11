'use client';

import { useState } from 'react';

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Skantan's ability to collaboratively apply the latest best practices in digital with their in-depth knowledge of our business enables us to move our digital initiatives forward faster and more confidently.",
      author: 'Sarah Johnson',
      position: 'CIO',
      company: 'TechCorp Industries',
      rating: 5,
    },
    {
      quote: "The team at Skantan took a keen interest in learning about our business and what makes us different. Their partnership approach has been invaluable to our success.",
      author: 'Michael Chen',
      position: 'VP of Digital Transformation',
      company: 'Global Financial Services',
      rating: 5,
    },
    {
      quote: "Through our partnership with Skantan, we have achieved many goals. They helped us build our platform with speed and achieve our infrastructure goals. The deployment frequency has increased dramatically.",
      author: 'Emily Rodriguez',
      position: 'VP of Engineering',
      company: 'HealthTech Solutions',
      rating: 5,
    },
    {
      quote: "Skantan has become part of our team with the same level of commitment to the success of the project. We really value their unique expertise and partnership approach.",
      author: 'David Williams',
      position: 'Head of Technology',
      company: 'Retail Innovations Inc',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-300 mb-4 uppercase tracking-wide">Testimonials</h2>
          <h3 className="text-4xl font-bold text-white mb-6">
            What Our Clients Say
          </h3>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-4xl mx-auto">
            <div className="text-6xl text-blue-600 mb-6">"</div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed italic">
              {testimonials[activeTestimonial].quote}
            </p>
            <div className="flex items-center mb-4">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div>
              <div className="font-bold text-gray-900 text-lg">
                {testimonials[activeTestimonial].author}
              </div>
              <div className="text-gray-600">
                {testimonials[activeTestimonial].position}, {testimonials[activeTestimonial].company}
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeTestimonial
                    ? 'bg-white w-8'
                    : 'bg-blue-300 hover:bg-blue-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mt-20">
          <h4 className="text-center text-white text-xl font-semibold mb-8">Trusted By Leading Companies</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center opacity-70">
            {[
              'Microsoft', 
              'AWS', 
              'Google Cloud', 
              'Salesforce',
              'ServiceNow',
              'Atlassian',
              'Adobe',
              'Databricks',
              'Snowflake',
              'Automation Anywhere',
              'UIPath',
              'Oracle',
              'SAP',
              'IBM',
              'Cisco',
              'VMware',
              'Red Hat',
              'MongoDB'
            ].map((partner, index) => (
              <div key={index} className="bg-white rounded-lg px-6 py-3 text-gray-800 font-bold text-sm md:text-base whitespace-nowrap">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
