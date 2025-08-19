import React from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about-me', label: 'About Me' },
    { href: '/keynote-speaker', label: 'Keynote Speaker' },
    { href: '/activities/', label: 'Activities' },
    { href: '/public-videos/', label: 'Public Videos' },
    { href: '/a-health-revolution', label: 'A Health Revolution' },
    { href: '/slides', label: 'Slides' },
    { href: '/testimonials-media', label: 'Testimonials & Media' },
    { href: 'https://playgrounds.neverleavetheplayground.com', label: 'Find A Playground Near You', external: true },
    { href: 'https://never-leave-the-playground.mailchimpsites.com/', label: 'Contact Us', external: true }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img 
              src="https://slides.neverleavetheplayground.com/assets/img/icon-222.png" 
              alt="Never Leave The Playground Logo" 
              className="h-12 w-auto"
              width="120"
              height="48"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                <span className="text-blue-600">Never Leave</span> The Playground
              </h1>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4" role="navigation" aria-label="Mobile navigation">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
