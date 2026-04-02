import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-700 via-blue-500 to-blue-400 text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Start Your First Campaign Today
          </h2>
          <p className="text-xl lg:text-2xl mb-12 text-blue-100">
            Join 200+ organizations sending millions of emails with confidence
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              size="lg"
              onClick={() => window.location.href = 'tel:+917002098782'}
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button
              size="lg"
              onClick={() => window.open('https://wa.me/message/CEP4OBODZQF7E1', '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white text-lg px-8"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Connect on WhatsApp
            </Button>
          </div>

          <p className="text-blue-100">✓ No credit card required • Start sending in 5 minutes</p>

          {/* Contact Info */}
          <div className="mt-12 pt-12 border-t border-white/20">
            <p className="text-lg mb-4">Questions? We're here to help!</p>
            <div className="flex flex-wrap justify-center gap-8 text-lg">
              <a
                href="tel:+917002098782"
                className="hover:underline flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                +91-7002098782
              </a>
              <a
                href="https://wa.me/message/CEP4OBODZQF7E1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Chat
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}