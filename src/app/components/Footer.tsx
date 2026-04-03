import logo from "@/assets/logo_new.webp";
import { Calendar } from 'lucide-react';
import { Button } from './ui/button';


export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white py-4 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="InfyMailer" className="w-32 h-8 object-contain bg-white rounded" />
          </div>

          {/* Quick Links - Hidden on mobile to save space */}
          <div className="hidden md:flex gap-6 text-sm">
            <button
              onClick={() => scrollToSection('features')}
              className="hover:text-white transition-colors text-gray-400"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="hover:text-white transition-colors text-gray-400"
            >
              Pricing
            </button>
          </div>

          {/* Contact & Book Call */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+917002098782"
              className="hover:text-white transition-colors text-gray-400 text-sm"
            >
              📞 +91-7002098782
            </a>
            <Button
              onClick={() => window.open('https://calendly.com/infymailer/30min', '_blank')}
              size="sm"
              className="bg-gradient-to-r from-blue-700 to-blue-400 text-white hover:from-blue-800 hover:to-blue-500"
            >
              <Calendar className="w-3 h-3 mr-1" />
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}