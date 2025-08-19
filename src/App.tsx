import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Play, Brain, Heart, Users, ArrowRight, Facebook, Twitter, Youtube } from 'lucide-react';
import { SEOHead } from './components/SEOHead';
import { Analytics } from './components/Analytics';
import { Navigation } from './components/Navigation';
import { AboutMe } from './pages/AboutMe';
import { TestimonialsMedia } from './pages/TestimonialsMedia';
import { Slides } from './pages/Slides';
import { HealthRevolution } from './pages/HealthRevolution';
import { Contact } from './pages/Contact';
import { organizationSchema, personSchema, websiteSchema, videoSchema } from './data/structuredData';

function HomePage() {
  // Enhanced structured data including presentation
  const presentationSchema = {
    "@context": "https://schema.org",
    "@type": "PresentationDigitalDocument",
    "name": "Never Leave The Playground - Complete Health & Wellness Presentation",
    "description": "Stephen Jepson's comprehensive presentation covering brain health, physical vitality, play-based fitness, and the science behind lifelong wellness through movement.",
    "url": "https://docs.google.com/presentation/d/e/2PACX-1vRCDChH9s5sGRuOeKpYrF8fLcXpJOr_BJTeH3fJQ5_lAAlLgWF3jkb_jL1jwNpVlGEv7r5RyDfK0UiS/pub?start=false&loop=false&delayms=3000",
    "author": {
      "@type": "Person",
      "name": "Stephen Jepson",
      "url": "https://neverleavetheplayground.com/about-me/",
      "sameAs": [
        "https://en.wikipedia.org/wiki/Stephen_Jepson",
        "https://www.youtube.com/user/StephenJepson/videos"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Never Leave The Playground",
      "url": "https://neverleavetheplayground.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://shop.neverleavetheplayground.com/lovable-uploads/6899d407-7792-43de-a96f-7a440c293bf1.png"
      }
    },
    "about": [
      "Health and Wellness",
      "Brain Training",
      "Physical Fitness",
      "Neuroplasticity",
      "Play-based Exercise",
      "Longevity",
      "Cognitive Health",
      "Balance Training",
      "Coordination Development"
    ],
    "educationalLevel": "All Levels",
    "learningResourceType": "Presentation",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "datePublished": "2025-01-13",
    "keywords": "Stephen Jepson, Never Leave The Playground, health presentation, brain training, play-based fitness, wellness slides, neuroplasticity, longevity"
  };

  const combinedStructuredData = [
    organizationSchema,
    personSchema,
    websiteSchema,
    videoSchema,
    presentationSchema
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <SEOHead
        title="Never Leave The Playground - Stephen Jepson's Health Revolution"
        description="Transform your health and longevity through the power of play. Stephen Jepson's revolutionary approach combines fun activities with cutting-edge science to enhance brain function, improve physical vitality, and unlock your body's natural potential for lifelong wellness. Featured on PBS with 4M+ views."
        keywords="Stephen Jepson, Never Leave The Playground, health revolution, brain health, longevity, playful movement, anti-aging, cognitive improvement, physical vitality, neuroplasticity, keynote speaker, wellness expert"
        canonicalUrl="https://neverleavetheplayground.com/"
        ogImage="https://neverleavetheplayground.com/images/stephen-jepson.jpg"
        structuredData={combinedStructuredData}
      />
      <Analytics />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Never Leave The <span className="text-blue-600">Playground</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Transform your health and longevity through the power of play. Stephen Jepson's revolutionary approach 
                combines fun activities with cutting-edge science to enhance brain function, improve physical vitality, 
                and unlock your body's natural potential for lifelong wellness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://speaker.neverleavetheplayground.com/" 
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                  aria-label="Book Stephen Jepson as keynote speaker"
                >
                  Book Stephen as Speaker
                  <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                </a>
                <a 
                  href="/public-videos/" 
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                  aria-label="Watch Stephen Jepson's public videos"
                >
                  <Play className="mr-2 w-5 h-5" aria-hidden="true" />
                  Watch Videos
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">4M+</div>
                  <div className="text-sm text-gray-600">Video Views</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Science of Playful Longevity
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how simple, enjoyable activities can revolutionize your health, 
              enhance brain function, and add years to your life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enhanced Brain Function</h3>
              <p className="text-gray-700 leading-relaxed">
                Stimulate neurogenesis and create new neural pathways through playful movement. 
                Improve memory, concentration, and cognitive agility naturally.
              </p>
            </article>

            <article className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Physical Vitality</h3>
              <p className="text-gray-700 leading-relaxed">
                Build balance, coordination, and strength without traditional exercise. 
                Maintain youthful energy and mobility through enjoyable activities.
              </p>
            </article>

            <article className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Impact</h3>
              <p className="text-gray-700 leading-relaxed">
                Join thousands who have transformed their lives. From Parkinson's support groups 
                to fitness professionals, everyone benefits from play-based wellness.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See Stephen's Philosophy in Action
            </h2>
            <p className="text-xl text-gray-600">
              Watch the viral interview that has inspired millions worldwide
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.youtube.com/embed/ycJwrwrYgGM" 
                title="Stephen Jepson's Philosophy in Action - Growing Bolder Interview"
                className="w-full h-full"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                loading="lazy"
              />
            </div>
            <p className="text-center mt-6 text-gray-600">
              Featured on Growing Bolder (PBS) • Over 4 Million Views
            </p>
          </div>
        </div>
      </section>

      {/* Social Media & Follow Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Follow Stephen Jepson</h2>
          <p className="text-lg text-gray-600 mb-8">
            Stay connected and get the latest insights on health, wellness, and the power of play
          </p>
          
          <div className="flex justify-center items-center space-x-8 mb-8">
            <a 
              href="https://www.facebook.com/stephen.jepson.56/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors group"
              aria-label="Follow Stephen Jepson on Facebook"
            >
              <Facebook className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span className="font-medium text-gray-900">Facebook</span>
            </a>
            
            <a 
              href="https://x.com/stephenjepson56?lang=bg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-4 rounded-lg bg-sky-50 hover:bg-sky-100 transition-colors group"
              aria-label="Follow Stephen Jepson on Twitter"
            >
              <Twitter className="w-8 h-8 text-sky-600 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span className="font-medium text-gray-900">Twitter</span>
            </a>
            
            <a 
              href="https://www.youtube.com/user/StephenJepson/videos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-4 rounded-lg bg-red-50 hover:bg-red-100 transition-colors group"
              aria-label="Subscribe to Stephen Jepson's YouTube channel"
            >
              <Youtube className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span className="font-medium text-gray-900">YouTube</span>
            </a>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Health?</h3>
            <p className="text-gray-700 mb-6">
              Book Stephen for your next event or explore our comprehensive video library
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/keynote-speaker/" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                aria-label="Book Stephen Jepson for speaking event"
              >
                Book Speaking Event
              </a>
              <a 
                href="https://shop.neverleavetheplayground.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                aria-label="Visit Never Leave The Playground video shop"
              >
                Visit Video Shop
              </a>
              <a 
                href="https://docs.google.com/presentation/d/1Z6nVAYPKb5UmhSNWpm8MWYx5PNxvdFT3q0zYtlC5StQ/edit?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
                aria-label="View Stephen Jepson's News & Interviews Google Slides presentation"
                itemProp="url"
                itemScope
                itemType="https://schema.org/PresentationDigitalDocument"
              >
                📰 News & Interviews (Google Slides)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <img 
              src="https://shop.neverleavetheplayground.com/lovable-uploads/6899d407-7792-43de-a96f-7a440c293bf1.png" 
              alt="Never Leave The Playground Logo" 
              className="h-16 w-auto mx-auto mb-6 brightness-0 invert"
              width="160"
              height="64"
            />
            
            {/* Special Offer Section */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-3">🎯 Limited Time: Lifetime Access Special</h3>
              <p className="text-green-100 text-lg mb-4">
                Get Stephen's complete video library + exclusive speaking event footage + bonus PDFs
              </p>
              <div className="flex items-center justify-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-white">$9.99</span>
                <span className="text-green-200 line-through text-xl">$49.99</span>
                <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">80% OFF</span>
              </div>
              <a 
                href="https://playgrounds.neverleavetheplayground.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                aria-label="Subscribe to Never Leave The Playground lifetime access special offer"
              >
                🚀 Get Lifetime Access Now - Save $40!
              </a>
              <p className="text-green-100 text-sm mt-3">
                ✅ 2 Core Training Videos • ✅ Speaking Event Footage • ✅ Bonus PDF Guides • ✅ Lifetime Updates
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm mb-6">
              <a href="/keynote-speaker/" className="text-gray-300 hover:text-white transition-colors">
                Book Speaking & Sign Up for Newsletter
              </a>
              <span className="hidden sm:inline text-gray-600" aria-hidden="true">|</span>
              <a 
                href="https://playgrounds.neverleavetheplayground.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Find playgrounds and activity locations near you"
              >
                Find A Playground Near You
              </a>
              <span className="hidden sm:inline text-gray-600" aria-hidden="true">|</span>
              <a 
                href="https://shop.neverleavetheplayground.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Visit Our Video Shop
              </a>
              <span className="hidden sm:inline text-gray-600" aria-hidden="true">|</span>
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
            
            <p className="text-gray-400">
              © 2025 Never Leave The Playground. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Mailchimp Script */}
      <script 
        id="mcjs"
        dangerouslySetInnerHTML={{
          __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/03e68a86c7ea68863e1fb316c/3f7486b8d9732656b5d31afb8.js");`
        }}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/testimonials-media" element={<TestimonialsMedia />} />
        <Route path="/slides" element={<Slides />} />
        <Route path="/a-health-revolution" element={<HealthRevolution />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
