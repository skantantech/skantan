'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SocialMediaMarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-pink-600 via-rose-600 to-pink-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#services" className="inline-flex items-center text-pink-200 hover:text-white mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-7xl mb-6">📢</div>
              <h1 className="text-5xl font-bold mb-6">Social Media Marketing</h1>
              <p className="text-xl text-gray-100 mb-8">
                Leverage social networks to market your products and achieve branding goals. Create and share engaging content across all platforms.
              </p>
              <a href="/#contact" className="inline-block px-8 py-4 bg-white text-pink-600 rounded-full font-semibold hover:bg-gray-100 transition-all">
                Boost Your Presence
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-3xl backdrop-blur-sm border border-white/10 p-12 flex items-center justify-center">
                <div className="text-9xl opacity-50">📱</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Social Media Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Social Strategy',
                icon: '🎯',
                description: 'Comprehensive social media planning aligned with your business goals.',
                features: ['Goal Setting', 'Platform Selection', 'Content Calendar', 'Competitor Analysis']
              },
              {
                title: 'Content Creation',
                icon: '🎨',
                description: 'Engaging posts, graphics, videos, and stories that capture attention.',
                features: ['Graphic Design', 'Video Production', 'Copywriting', 'Photography']
              },
              {
                title: 'Community Management',
                icon: '💬',
                description: 'Active audience engagement and relationship building with followers.',
                features: ['Response Management', 'Engagement', 'Reputation Monitoring', 'Crisis Management']
              },
              {
                title: 'Social Advertising',
                icon: '📊',
                description: 'Targeted ad campaigns across all major social platforms.',
                features: ['Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'TikTok Ads']
              },
              {
                title: 'Influencer Marketing',
                icon: '⭐',
                description: 'Connect with influencers to expand your reach and credibility.',
                features: ['Influencer Outreach', 'Campaign Management', 'Performance Tracking', 'ROI Analysis']
              },
              {
                title: 'Analytics & Reporting',
                icon: '📈',
                description: 'Track performance and optimize strategies based on data insights.',
                features: ['Performance Metrics', 'Audience Insights', 'ROI Tracking', 'Monthly Reports']
              },
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 text-sm">
                      <svg className="w-4 h-4 text-pink-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
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
          <h2 className="text-4xl font-bold text-center mb-16">Platforms We Manage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Facebook', icon: '👥' },
              { name: 'Instagram', icon: '📷' },
              { name: 'LinkedIn', icon: '💼' },
              { name: 'Twitter/X', icon: '🐦' },
              { name: 'TikTok', icon: '🎵' },
              { name: 'YouTube', icon: '📺' },
              { name: 'Pinterest', icon: '📌' },
              { name: 'Snapchat', icon: '👻' },
            ].map((platform, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow hover:shadow-lg transition-all">
                <div className="text-5xl mb-3">{platform.icon}</div>
                <div className="font-semibold text-gray-900">{platform.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Grow Your Social Presence?</h2>
          <p className="text-xl text-pink-100 mb-8">Let's build your brand and engage your audience on social media</p>
          <a href="/#contact" className="inline-block px-10 py-4 bg-white text-pink-600 rounded-full font-semibold hover:bg-gray-100 transition-all">
            Start Your Campaign
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
