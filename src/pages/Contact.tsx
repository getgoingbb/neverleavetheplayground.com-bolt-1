import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Navigation } from '../components/Navigation';
import { Phone, Mail, MapPin, Calendar, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Stephen Jepson - Never Leave The Playground",
    "description": "Contact Stephen Jepson for keynote speaking, workshops, or questions about the Never Leave The Playground program",
    "url": "https://neverleavetheplayground.com/contact/",
    "mainEntity": {
      "@type": "Person",
      "name": "Stephen Jepson",
      "telephone": "(US) 407-349-5587",
      "email": "contact@neverleavetheplayground.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "(US) 407-349-5587",
        "contactType": "customer service",
        "availableLanguage": "English",
        "areaServed": "Worldwide"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Contact Stephen Jepson - Never Leave The Playground"
        description="Contact Stephen Jepson for keynote speaking, workshops, or questions about the Never Leave The Playground program. Get in touch today!"
        keywords="contact Stephen Jepson, keynote speaker booking, Never Leave The Playground contact, health wellness speaker"
        canonicalUrl="https://neverleavetheplayground.com/contact/"
        structuredData={structuredData}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Contact Stephen Jepson
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ready to bring the power of play to your organization or community? Get in touch with Stephen Jepson today!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">(US) 407-349-5587</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">Available through contact form</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Area</h3>
                    <p className="text-gray-600">Worldwide (Virtual & In-Person)</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Response Time</h3>
                    <p className="text-gray-600">Within 24-48 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Services Available</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">🎤 Keynote Speaking</h3>
                  <ul className="text-blue-800 space-y-1">
                    <li>• Corporate wellness events</li>
                    <li>• Health & fitness conferences</li>
                    <li>• Senior living communities</li>
                    <li>• Educational institutions</li>
                    <li>• Medical organizations</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-900 mb-3">📚 Workshops & Training</h3>
                  <ul className="text-green-800 space-y-1">
                    <li>• Staff wellness programs</li>
                    <li>• Community health initiatives</li>
                    <li>• Fitness professional training</li>
                    <li>• Senior activity programs</li>
                    <li>• Custom group sessions</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-purple-900 mb-3">🎥 Video Resources</h3>
                  <ul className="text-purple-800 space-y-1">
                    <li>• Complete video library access</li>
                    <li>• Custom training materials</li>
                    <li>• Implementation guides</li>
                    <li>• Ongoing support resources</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Get Started?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Call Direct</h3>
              <p className="text-gray-600 mb-6">Speak directly with Stephen about your needs</p>
              <a 
                href="tel:+14073495587" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                (407) 349-5587
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Send Email</h3>
              <p className="text-gray-600 mb-6">Detailed inquiries and booking requests</p>
              <a 
                href="mailto:contact@neverleavetheplayground.com?subject=Speaking Inquiry" 
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Send Email
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Calendar className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Check Availability</h3>
              <p className="text-gray-600 mb-6">View speaking schedule and book dates</p>
              <a 
                href="https://never-leave-the-playground.mailchimpsites.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                <ExternalLink className="mr-2 w-4 h-4" />
                View Schedule
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Additional Resources</h2>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🌐 Connect & Explore</h3>
            <p className="text-gray-700 mb-6">
              Explore Stephen's comprehensive resources and stay connected with the community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://shop.neverleavetheplayground.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                🛒 Video Shop
              </a>
              <a 
                href="/public-videos/" 
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                📺 Free Videos
              </a>
              <a 
                href="https://mailchi.mp/1d9e37b3ba0a/keep-moving-play" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
              >
                📧 Newsletter
              </a>
              <a 
                href="https://en.wikipedia.org/wiki/Stephen_Jepson" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
              >
                📖 Wikipedia
              </a>
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