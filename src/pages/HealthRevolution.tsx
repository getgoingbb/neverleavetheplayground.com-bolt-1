import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Navigation } from '../components/Navigation';
import { Play, Brain, Heart, Zap, ArrowRight } from 'lucide-react';

export const HealthRevolution: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Play Your Way to a Healthier, Longer Life",
    "description": "Join Stephen Jepson's health revolution, transforming your well-being through playful movement. Discover how simple, enjoyable activities can lead to improved memory, better concentration, and enhanced physical health.",
    "thumbnailUrl": "https://i.ytimg.com/vi/qTvUThjpvus/maxresdefault.jpg",
    "uploadDate": "2014-09-12T08:00:00+08:00",
    "duration": "PT8M25S",
    "publisher": {
      "@type": "Organization",
      "name": "Never Leave The Playground",
      "logo": {
        "@type": "ImageObject",
        "url": "https://shop.neverleavetheplayground.com/lovable-uploads/6899d407-7792-43de-a96f-7a440c293bf1.png",
        "width": 600,
        "height": 60
      }
    },
    "embedUrl": "https://www.youtube.com/embed/qTvUThjpvus",
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": { "@type": "WatchAction" },
      "userInteractionCount": "22000"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="A Health Revolution - Never Leave The Playground"
        description="Join Stephen Jepson's health revolution, transforming your well-being through playful movement. Discover how simple, enjoyable activities can lead to improved memory, better concentration, and enhanced physical health."
        keywords="health revolution, Stephen Jepson, playful movement, memory improvement, concentration boost, physical health, brain function, metabolism, anti-aging, fun fitness"
        canonicalUrl="https://neverleavetheplayground.com/a-health-revolution/"
        structuredData={structuredData}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Join The Health Revolution: Play Your Way to Longevity
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Stephen Jepson unveils the secret to a healthier, more vibrant life through the transformative power of play.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Zap className="mr-3 w-8 h-8 text-blue-600" />
                Unlock Your Full Potential with Play
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Are you ready to redefine what it means to age? Stephen Jepson's "Never Leave The Playground" philosophy isn't just about fun; it's a profound health revolution. By re-engaging with the simple joy of play, you can activate powerful biological and cognitive benefits that lead to a longer, healthier, and more fulfilling life.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <Brain className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Memory & Focus</h3>
                  <p className="text-sm text-gray-600">Improve memory, concentration, and physical health with simple, engaging play activities.</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <Heart className="w-12 h-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Healthy Lifestyle</h3>
                  <p className="text-sm text-gray-600">Make a habit of healthier living through enjoyable games, making wellness effortless.</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <Zap className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Boost Metabolism</h3>
                  <p className="text-sm text-gray-600">Increase attention span and boost metabolism, resulting in profound health improvements.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Video */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Experience The Revolution</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe 
                  src="https://www.youtube.com/embed/qTvUThjpvus" 
                  title="Play Your Way to a Healthier, Longer Life"
                  className="w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
              <p className="text-center mt-6 text-gray-600">
                Witness the power of playful movement. For more inspiring videos, visit our{' '}
                <a href="/public-videos/" className="text-blue-600 hover:text-blue-800 font-medium">
                  Public Videos
                </a>{' '}
                page.
              </p>
            </div>
          </div>

          {/* Why Play Works */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Play is the Ultimate Anti-Aging Strategy
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Traditional exercise can feel like a chore, but play taps into our natural human desire for engagement and joy. Stephen's methods are designed to be "supercharged" ways of:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Growing New Brain Cells</h3>
                    <p className="text-gray-700">Stimulate neurogenesis and strengthen neural pathways through novel, fun movements.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Training the Body for Lifetime Fitness</h3>
                    <p className="text-gray-700">Build sustainable physical agility and coordination without the monotony.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Enhancing Concentration</h3>
                    <p className="text-gray-700">Unique games are specifically designed to sharpen your focus and attention span.</p>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                As we consistently use our muscles, they grow and improve. Similarly, new neural pathways in our brain open and continue to improve day by day through consistent, playful engagement. This is not just exercise; it's a blueprint for a lifetime of sustained vitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Health Revolution?</h2>
          <p className="text-xl mb-8">
            Join thousands who have discovered the transformative power of play-based wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/keynote-speaker/" 
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Book Stephen to Speak
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="/activities/" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              <Play className="mr-2 w-5 h-5" />
              Explore Activities
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