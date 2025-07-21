import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Navigation } from '../components/Navigation';
import { Star, Play } from 'lucide-react';

export const TestimonialsMedia: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Testimonials & Media - Never Leave The Playground"
        description="Read testimonials and see media coverage of Stephen Jepson's Never Leave The Playground program. Reviews, interviews, and success stories."
        keywords="Stephen Jepson testimonials, reviews, media coverage, success stories, health transformation"
        canonicalUrl="https://neverleavetheplayground.com/testimonials-media/"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Client Testimonials & Media Coverage
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Stephen Jepson's "Never Leave The Playground" philosophy is transforming lives around the globe. Hear from our community and see media highlights.
            </p>
          </div>
        </div>
      </section>

      {/* Rating Overview */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex justify-center items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">4.8 out of 5 Stars</h3>
            <p className="text-gray-600">Based on 127+ reviews from clients, organizations, and industry professionals</p>
          </div>
        </div>
      </section>

      {/* Industry Endorsements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Industry Leader Endorsements
          </h2>
          
          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 italic mb-6">
                "The incredible Stephen Jepson, the man who never left the playground… lectured in the Movement Camp tonight. No one that attended this lecture will ever be the same again. What an inspiration! What a role model!"
              </blockquote>
              <cite className="text-blue-600 font-semibold">— Bedros Keuilian, Ido Portal</cite>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 italic mb-6">
                "Stephen Jepson was a vibrant, refreshing, and entirely unique addition to our event. His presentation was equal parts hilarious and informative – a message that couldn't be more relevant in our current age of sedentary lifestyles."
              </blockquote>
              <cite className="text-green-600 font-semibold">— Fitness Business Summit</cite>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 italic mb-6">
                "Stephen's presentation was a blast!! With his wonderful, passionate, and personal authority Stephen won every person in the room over and received standing ovations from the crowd!"
              </blockquote>
              <cite className="text-purple-600 font-semibold">— Hasse Højland, Kolding School of Design</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Videos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Testimonial Videos: Real Stories of Transformation
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Parkinson's Outreach Group</h3>
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                <iframe 
                  src="https://www.youtube.com/embed/L3_bOVK-Dq8" 
                  title="Parkinson's Outreach Group Testimonial"
                  className="w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
              <p className="text-gray-600">
                "An incredibly unique, powerful, and motivating presentation. The Parkinson's Outreach Group greatly benefited from Stephen's insights and methods."
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Testimonial: Alan P. Tilman</h3>
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                <iframe 
                  src="https://www.youtube.com/embed/zLR0H7i1ZlI" 
                  title="Alan P. Tilman Personal Testimonial"
                  className="w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
              <p className="text-gray-600">
                "I liked and am intrigued about what I have heard, and I'm willing to give it a shot."
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Waterman Lakes Community</h3>
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                <iframe 
                  src="https://www.youtube.com/embed/M9vm5_-lE3U" 
                  title="Waterman Lakes Testimonial Highlights"
                  className="w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
              <p className="text-gray-600">
                Testimonial highlights from Waterman Lakes showcasing the impact of Stephen's program on community wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Featured Media Coverage
          </h2>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Reviews & Testimonials
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Real client experiences and testimonials showcasing the transformative power of Stephen's methods.
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe 
                  src="https://www.youtube.com/embed/zLR0H7i1ZlI" 
                  title="Reviews & Testimonials"
                  className="w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
              <p className="text-center mt-6 text-gray-600">
                Client testimonials and success stories from the Never Leave The Playground program
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Health?</h2>
          <p className="text-xl mb-8">
            Join thousands who have discovered the joy and benefits of never leaving the playground!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/keynote-speaker/" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Book Stephen for Your Event
            </a>
            <a 
              href="/public-videos/" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch More Videos
            </a>
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