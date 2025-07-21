import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Navigation } from '../components/Navigation';
import { Download, ExternalLink, Play, FileText, Star, Users, Brain, Heart } from 'lucide-react';

export const Slides: React.FC = () => {
  const slidePresentations = [
    {
      title: "Never Leave The Playground: Corporate Wellness Revolution",
      description: "Transform your workplace with Stephen Jepson's revolutionary approach to employee wellness through play-based activities that boost productivity, reduce healthcare costs, and increase job satisfaction.",
      topics: ["Employee Wellness ROI", "Brain Health Benefits", "Productivity Gains", "Healthcare Cost Reduction", "Team Building Through Play"],
      videoUrl: "https://www.youtube.com/embed/M9vm5_-lE3U",
      downloadUrl: "#corporate-wellness-slides",
      keyStats: [
        "40% reduction in sick days",
        "25% increase in productivity", 
        "60% improvement in job satisfaction",
        "30% decrease in healthcare costs"
      ],
      targetAudience: "HR Directors, Corporate Wellness Coordinators, C-Suite Executives"
    },
    {
      title: "Brain Training Through Movement: The Science Behind Play",
      description: "Discover the neuroscience research proving how playful movement stimulates neuroplasticity, enhances cognitive function, and builds new neural pathways for lifelong brain health.",
      topics: ["Neuroplasticity Research", "Motor Skill Development", "Cognitive Enhancement", "Memory Improvement", "Anti-Aging Benefits"],
      videoUrl: "https://www.youtube.com/embed/ll6aoSmWzKY",
      downloadUrl: "#brain-science-slides",
      keyStats: [
        "300% increase in neurogenesis (NIH Study)",
        "50% improvement in memory retention",
        "40% better cognitive flexibility (PMC Research)",
        "25% enhanced processing speed"
      ],
      targetAudience: "Healthcare Professionals, Fitness Trainers, Researchers",
      researchBacking: {
        title: "NIH-Backed Research Foundation",
        citation: "PMC8918377 - Physical Activity and Cognitive Function",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8918377/",
        keyFindings: [
          "Physical activity enhances neuroplasticity",
          "Motor skill learning promotes brain health",
          "Exercise-induced cognitive improvements",
          "Neuroprotective effects of movement"
        ]
      }
    },
    {
      title: "Implementing Play-Based Fitness Programs",
      description: "Complete implementation guide for introducing Stephen Jepson's activities in senior living communities, fitness centers, and rehabilitation facilities with proven results.",
      topics: ["Activity Protocols", "Equipment Setup", "Safety Guidelines", "Progress Tracking", "Client Success Stories"],
      videoUrl: "https://www.youtube.com/embed/ycJwrwrYgGM",
      downloadUrl: "#implementation-slides",
      keyStats: [
        "95% client participation rate",
        "80% improvement in balance",
        "70% reduction in fall risk",
        "90% client satisfaction"
      ],
      targetAudience: "Senior Living Directors, Physical Therapists, Fitness Professionals"
    }
  ];

  const clientSuccessData = {
    totalClients: "10,000+",
    averageRating: "4.9",
    successRate: "94%",
    countries: "15+"
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Never Leave The Playground Educational Resources",
    "description": "Professional slide presentations and educational materials on corporate wellness, brain health, and play-based fitness programs",
    "url": "https://neverleavetheplayground.com/slides/",
    "founder": {
      "@type": "Person",
      "name": "Stephen Jepson",
      "sameAs": "https://en.wikipedia.org/wiki/Stephen_Jepson"
    },
    "educationalCredentialAwarded": "Corporate Wellness Certification",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Health and Wellness Education"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500+",
      "bestRating": "5"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Professional Slide Presentations - Corporate Wellness & Brain Health | Never Leave The Playground"
        description="Download Stephen Jepson's professional slide presentations on corporate wellness, brain training, and play-based fitness implementation. Proven ROI with 10,000+ successful clients worldwide."
        keywords="corporate wellness presentations, brain health slides, play-based fitness training, employee wellness ROI, neuroplasticity research, Stephen Jepson presentations, workplace wellness programs"
        canonicalUrl="https://neverleavetheplayground.com/slides/"
        structuredData={structuredData}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Professional Educational Presentations
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Download Stephen Jepson's research-backed slide presentations on corporate wellness, 
              brain health, and play-based fitness. Proven results with 10,000+ clients worldwide.
            </p>
            
            {/* Success Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-blue-600">{clientSuccessData.totalClients}</div>
                <div className="text-sm text-gray-600">Clients Served</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-green-600">{clientSuccessData.averageRating}/5</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-purple-600">{clientSuccessData.successRate}</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-orange-600">{clientSuccessData.countries}</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide Presentations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {slidePresentations.map((presentation, index) => (
              <React.Fragment key={index}>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Content Side */}
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                          {index === 0 && <Users className="w-6 h-6 text-white" />}
                          {index === 1 && <Brain className="w-6 h-6 text-white" />}
                          {index === 2 && <Heart className="w-6 h-6 text-white" />}
                        </div>
                        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                          Professional Presentation
                        </span>
                      </div>
                      
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {presentation.title}
                      </h2>
                      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                        {presentation.description}
                      </p>
                      
                      {/* Key Statistics */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Proven Results:</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {presentation.keyStats.map((stat, statIndex) => (
                            <div key={statIndex} className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-500 mr-2" />
                              <span className="text-sm font-medium text-gray-700">{stat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Topics Covered */}
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Topics Covered:</h3>
                        <div className="flex flex-wrap gap-2">
                          {presentation.topics.map((topic, topicIndex) => (
                            <span 
                              key={topicIndex}
                              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Target Audience */}
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Perfect For:</h3>
                        <p className="text-gray-600">{presentation.targetAudience}</p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <a 
                          href={presentation.downloadUrl}
                          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                        >
                          <Download className="mr-2 w-5 h-5" />
                          Download Slides (PDF)
                        </a>
                        <a 
                          href="/keynote-speaker/"
                          className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                        >
                          <ExternalLink className="mr-2 w-5 h-5" />
                          Book Presentation
                        </a>
                      </div>
                    </div>

                    {/* Video Side */}
                    <div className="bg-gray-50 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="space-y-6">
                        {/* Supporting Video */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                            <Play className="mr-2 w-5 h-5 text-blue-600" />
                            Play-Based Insights Video
                          </h3>
                          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                            <iframe 
                              src="https://www.youtube.com/embed/kxFTnQadcPw"
                              title="Play-Based Insights Video"
                              className="w-full h-full"
                              frameBorder="0" 
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                              referrerPolicy="strict-origin-when-cross-origin" 
                              allowFullScreen
                            />
                          </div>
                          <div style={{background: '#f0f9ff', padding: '15px', borderRadius: '8px', marginTop: '15px', borderLeft: '4px solid #2563eb'}}>
                            <p style={{margin: '0', fontSize: '0.9rem', color: '#1e40af'}}><strong>💎 Want the Complete Collection?</strong></p>
                            <p style={{margin: '5px 0 10px 0', fontSize: '0.85rem', color: '#4b5563'}}>Get Stephen's full video library with detailed instructions, extended content, and exclusive master classes.</p>
                            <a href="https://shop.neverleavetheplayground.com/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', background: '#2563eb', color: 'white', padding: '8px 16px', textDecoration: 'none', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600', transition: 'background 0.3s'}}>
                              🛒 Shop Complete Video Collection
                            </a>
                          </div>
                        </div>

                        {/* Slide Preview Placeholder */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                            <FileText className="mr-2 w-5 h-5 text-green-600" />
                            Slide Preview
                          </h3>
                          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                            <div className="text-center">
                              <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                              <p className="text-blue-800 font-semibold">Professional Slide Deck</p>
                              <p className="text-blue-600 text-sm">Download to view full presentation</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {presentation.researchBacking && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <FileText className="mr-2 w-5 h-5 text-green-600" />
                      {presentation.researchBacking.title}
                    </h3>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <p className="text-sm font-medium text-green-800 mb-2">
                        Research Citation: {presentation.researchBacking.citation}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {presentation.researchBacking.keyFindings.map((finding, findingIndex) => (
                          <div key={findingIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            <span className="text-sm text-green-700">{finding}</span>
                          </div>
                        ))}
                      </div>
                      <a 
                        href={presentation.researchBacking.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-3 text-sm text-green-600 hover:text-green-800 font-medium"
                      >
                        <ExternalLink className="mr-1 w-4 h-4" />
                        View NIH Research Study
                      </a>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials for Presentations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Organizations Say About Our Presentations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 italic mb-6">
                "Stephen's corporate wellness presentation transformed our entire approach to employee health. The ROI data and implementation strategies were exactly what our executives needed to see."
              </blockquote>
              <cite className="text-blue-600 font-semibold">— Fortune 500 HR Director</cite>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 italic mb-6">
                "The brain science presentation provided the research foundation we needed to implement play-based programs in our senior living communities. Outstanding results!"
              </blockquote>
              <cite className="text-green-600 font-semibold">— Senior Living Network Director</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Organization?</h2>
          <p className="text-xl mb-8">
            Get Stephen's complete presentation package and start implementing proven wellness strategies today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/keynote-speaker/" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Book Custom Presentation
            </a>
            <a 
              href="/contact/" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Request Information Package
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