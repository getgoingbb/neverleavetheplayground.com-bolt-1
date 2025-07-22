import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Navigation } from '../components/Navigation';
import { newsInterviewsSchema } from '../data/structuredData';
import { newsInterviewsSchema } from '../data/structuredData';
import { newsInterviewsSchema } from '../data/structuredData';

export const AboutMe: React.FC = () => {
  const combinedStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Stephen Jepson",
      "jobTitle": "Health and Wellness Expert",
      "description": "Expert in health, wellness, and the transformative power of play for longevity",
      "url": "https://neverleavetheplayground.com/",
      "image": "https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      "sameAs": [
        "https://www.facebook.com/stephen.jepson.56/",
        "https://x.com/stephenjepson56?lang=bg",
        "https://www.youtube.com/user/StephenJepson/videos",
        "https://en.wikipedia.org/wiki/Stephen_Jepson"
      ]
    },
    newsInterviewsSchema
  ];

  const combinedStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Stephen Jepson",
      "jobTitle": "Health and Wellness Expert",
      "description": "Expert in health, wellness, and the transformative power of play for longevity",
      "url": "https://neverleavetheplayground.com/",
      "image": "https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      "sameAs": [
        "https://www.facebook.com/stephen.jepson.56/",
        "https://x.com/stephenjepson56?lang=bg",
        "https://www.youtube.com/user/StephenJepson/videos",
        "https://en.wikipedia.org/wiki/Stephen_Jepson"
      ]
    },
    newsInterviewsSchema
  ];

  const combinedStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Stephen Jepson",
      "jobTitle": "Health and Wellness Expert",
      "description": "Expert in health, wellness, and the transformative power of play for longevity",
      "url": "https://neverleavetheplayground.com/",
      "image": "https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      "sameAs": [
        "https://www.facebook.com/stephen.jepson.56/",
        "https://x.com/stephenjepson56?lang=bg",
        "https://www.youtube.com/user/StephenJepson/videos",
        "https://en.wikipedia.org/wiki/Stephen_Jepson"
      ]
    },
    newsInterviewsSchema
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="About Stephen Jepson - Health Expert & Media Featured Speaker | Never Leave The Playground"
        description="Learn about Stephen Jepson, featured on PBS and NPR with 4M+ video views. Discover his inspiring journey promoting health, longevity, and cognitive vitality through playful movement. Media coverage, interviews, and speaking highlights."
        keywords="Stephen Jepson, Never Leave The Playground, founder, biography, health expert, longevity, brain health, PBS interviews, NPR radio, media coverage, television appearances, speaking events"
        canonicalUrl="https://neverleavetheplayground.com/about-me/"
        structuredData={combinedStructuredData}
        structuredData={combinedStructuredData}
        structuredData={combinedStructuredData}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About Stephen Jepson: The Visionary Behind Never Leave The Playground
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Speaking Engagements and Event Booking Information
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/about-me/stephen-jepson-lego-s2. copy copy copy.jpg" 
                alt="Stephen Jepson at LEGO exhibit demonstrating playful learning and cognitive engagement" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover max-h-96"
                width="600"
                height="600"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Stephen's Journey to Lifelong Vitality</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Stephen Jepson is a celebrated health and longevity expert, best known for his revolutionary "Never Leave The Playground" philosophy. His journey began not in a gym, but in a lifelong pursuit of mastering complex movements and activities that keep both the body and mind sharp.
                </p>
                <p>
                  At an age when many are slowing down, Stephen continues to defy expectations, demonstrating incredible agility, coordination, and cognitive function. He attributes his vibrant health to a consistent, joyful engagement in playful activities rather than strenuous, conventional exercise routines.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">His Philosophy in Action:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <strong>Play as Medicine:</strong> Stephen advocates for integrating simple, fun games into daily life to stimulate neurogenesis—the growth of new brain cells—and enhance physical capabilities.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <strong>Holistic Well-being:</strong> His methods focus on improving memory, concentration, balance, and overall physical fitness, proving that mental and physical health are deeply interconnected.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <strong>Inspiring Thousands:</strong> Through his videos, workshops, and speaking engagements, Stephen empowers individuals worldwide to embrace play as their secret weapon against aging and a path to a more fulfilling life.
                    </div>
                  </li>
                </ul>
                
                <p className="mt-6">
                  Join Stephen on this incredible journey to transform your health and discover the joy of never truly leaving the playground.
                </p>
              </div>
            </div>
          </div>

          {/* Featured Video */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">See Stephen's Philosophy in Action</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe 
                  src="https://www.youtube.com/embed/eICg4CMd2jU" 
                  title="Stephen Jepson's Philosophy in Action"
                  className="w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
              <p className="text-center mt-6 text-gray-600">
                Featured on Growing Bolder (PBS) • Over 4 Million Views
              </p>
              
              {/* News & Interviews Google Slides */}
              <div className="mt-12 bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📰 News & Interviews Collection</h3>
                <p className="text-gray-700 mb-6">
                  Explore Stephen's comprehensive media coverage, television interviews, radio appearances, and press features in this detailed presentation.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-md">
                    <div className="text-2xl mb-2">📺</div>
                    <h4 className="font-bold text-gray-900">TV Interviews</h4>
                    <p className="text-sm text-gray-600">PBS, Local News</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-md">
                    <div className="text-2xl mb-2">📻</div>
                    <h4 className="font-bold text-gray-900">Radio Shows</h4>
                    <p className="text-sm text-gray-600">NPR, Podcasts</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-md">
                    <div className="text-2xl mb-2">📰</div>
                    <h4 className="font-bold text-gray-900">Press Coverage</h4>
                    <p className="text-sm text-gray-600">Articles, Features</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-md">
                    <div className="text-2xl mb-2">🎤</div>
                    <h4 className="font-bold text-gray-900">Speaking Events</h4>
                    <p className="text-sm text-gray-600">Conferences, Summits</p>
                  </div>
                </div>
                <a 
                  href="https://docs.google.com/presentation/d/1Z6nVAYPKb5UmhSNWpm8MWYx5PNxvdFT3q0zYtlC5StQ/edit?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg"
                  aria-label="View Stephen Jepson's News & Interviews Google Slides presentation"
                  itemProp="url"
                  itemScope
                  itemType="https://schema.org/PresentationDigitalDocument"
                >
                  📰 View News & Interviews Collection
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              
              {/* News & Interviews Google Slides */}
              <div className="mt-12 bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📰 News & Interviews Collection</h3>
                <p className="text-gray-700 mb-6">
                  Explore Stephen's comprehensive media coverage, television interviews, radio appearances, and press features in this detailed presentation.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-md">
                    <div className="text-2xl mb-2">📺</div>
                    <h4 className="font-bold text-gray-900">TV Interviews</h4>
                    <p className="text-sm text-gray-600">PBS, Local News</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-md">
                    <div className="text-2xl mb-2">📻</div>
                    <h4 className="font-bold text-gray-900">Radio Shows</h4>
                    <p className="text-sm text-gray-600">NPR, Podcasts</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-md">
                    <div className="text-2xl mb-2">📰</div>
                    <h4 className="font-bold text-gray-900">Press Coverage</h4>
                    <p className="text-sm text-gray-600">Articles, Features</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-md">
                    <div className="text-2xl mb-2">🎤</div>
                    <h4 className="font-bold text-gray-900">Speaking Events</h4>
                    <p className="text-sm text-gray-600">Conferences, Summits</p>
                  </div>
                </div>
                <a 
                  href="https://docs.google.com/presentation/d/1Z6nVAYPKb5UmhSNWpm8MWYx5PNxvdFT3q0zYtlC5StQ/edit?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg"
                  aria-label="View Stephen Jepson's News & Interviews Google Slides presentation"
                  itemProp="url"
                  itemScope
                  itemType="https://schema.org/PresentationDigitalDocument"
                >
                  📰 View News & Interviews Collection
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              
              {/* News & Interviews Google Slides */}
              <div className="mt-12 bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📰 News & Interviews Collection</h3>
                <p className="text-gray-700 mb-6">
                  Explore Stephen's comprehensive media coverage, television interviews, radio appearances, and press features in this detailed presentation.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-md">
                    <div className="text-2xl mb-2">📺</div>
                    <h4 className="font-bold text-gray-900">TV Interviews</h4>
                    <p className="text-sm text-gray-600">PBS, Local News</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-md">
                    <div className="text-2xl mb-2">📻</div>
                    <h4 className="font-bold text-gray-900">Radio Shows</h4>
                    <p className="text-sm text-gray-600">NPR, Podcasts</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-md">
                    <div className="text-2xl mb-2">📰</div>
                    <h4 className="font-bold text-gray-900">Press Coverage</h4>
                    <p className="text-sm text-gray-600">Articles, Features</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-md">
                    <div className="text-2xl mb-2">🎤</div>
                    <h4 className="font-bold text-gray-900">Speaking Events</h4>
                    <p className="text-sm text-gray-600">Conferences, Summits</p>
                  </div>
                </div>
                <a 
                  href="https://docs.google.com/presentation/d/1Z6nVAYPKb5UmhSNWpm8MWYx5PNxvdFT3q0zYtlC5StQ/edit?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg"
                  aria-label="View Stephen Jepson's News & Interviews Google Slides presentation"
                  itemProp="url"
                  itemScope
                  itemType="https://schema.org/PresentationDigitalDocument"
                >
                  📰 View News & Interviews Collection
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img 
            src="https://shop.neverleavetheplayground.com/lovable-uploads/6899d407-7792-43de-a96f-7a440c293bf1.png" 
            alt="Never Leave The Playground Logo" 
            className="h-16 w-auto mx-auto mb-6 brightness-0 invert"
          />
          <p className="text-gray-400 mb-6">
            © 2025 Never Leave The Playground. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm">
            <a href="/keynote-speaker/" className="text-gray-300 hover:text-white transition-colors">
              Book Speaking & Sign Up for Newsletter
            </a>
            <span className="hidden sm:inline text-gray-600">|</span>
            <a href="https://shop.neverleavetheplayground.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              Visit Our Video Shop
            </a>
            <span className="hidden sm:inline text-gray-600">|</span>
            <a 
              href="https://en.wikipedia.org/wiki/Stephen_Jepson" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Stephen Jepson Wikipedia page"
            >
              Wikipedia
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};