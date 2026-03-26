import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Calendar, User } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img src="/src/assets/logo.webp" alt="InfyMailer" className="w-40 h-10 object-contain" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Pricing
            </button>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200 rounded-full px-4 py-2 mr-2">
              <p className="text-sm font-semibold text-blue-700">
                📊 500 Million Verified B2B Data Available
              </p>
            </div>
            <a
              href="tel:+917002098782"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-semibold"
            >
              📞 +91-7002098782
            </a>
            <Button
              onClick={() => window.open('https://wa.me/message/CEP4OBODZQF7E1', '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Connect on WhatsApp
            </Button>
            <Button
              onClick={() => window.open('https://calendly.com/salezlift/30min', '_blank')}
              className="bg-gradient-to-r from-blue-700 to-blue-400 text-white"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book a Consultation
            </Button>
            <Button
              onClick={() => window.open('https://app.infymailer.com/customer/index.php', '_blank')}
              className="bg-gradient-to-r from-blue-700 to-blue-400 text-white"
            >
              <User className="w-4 h-4 mr-2" />
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('features')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Pricing
              </button>
              <a
                href="tel:+917002098782"
                className="text-gray-700 font-semibold hover:text-blue-600"
              >
                📞 +91-7002098782
              </a>
              <Button
                onClick={() => window.open('https://wa.me/message/CEP4OBODZQF7E1', '_blank')}
                className="bg-green-500 hover:bg-green-600 text-white justify-start"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Connect on WhatsApp
              </Button>
              <Button
                onClick={() => window.open('https://calendly.com/salezlift/30min', '_blank')}
                className="bg-gradient-to-r from-blue-700 to-blue-400 text-white"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book a Consultation
              </Button>
              <Button
                onClick={() => window.open('https://app.infymailer.com/customer/index.php', '_blank')}
                className="bg-gradient-to-r from-blue-700 to-blue-400 text-white"
              >
                <User className="w-4 h-4 mr-2" />
                Register
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}