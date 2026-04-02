import logo from "@/assets/logo_new.webp";


export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="InfyMailer" className="w-40 h-10 object-contain bg-white" />
            </div>
            <p className="text-gray-400 mb-4">
              Send bulk emails from day one without blocks or warm-up. Dedicated IPs, smart
              rotation, and fully managed infrastructure.
            </p>
            <div className="flex gap-4 text-gray-400">
              <a href="tel:+917002098782" className="hover:text-white transition-colors">
                📞 +91-7002098782
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="hover:text-white transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="tel:+917002098782"
                  className="hover:text-white transition-colors"
                >
                  Call: +91-7002098782
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/message/CEP4OBODZQF7E1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Chat
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/salezlift/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Book Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 InfyMailer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}