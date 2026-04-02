import { CheckCircle, Play, Phone, MessageCircle, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-blue-100/30 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Send Bulk Emails from Day One —{' '}
              <span className="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
                Without Blocks or Warm-Up
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Pre-warmed dedicated IPs, smart IP rotation, and fully configured email
              authentication
            </p>

            {/* Bullet Points */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-lg">No warm-up required</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-lg">Dedicated IPs (not shared)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-lg">DKIM, SPF, DMARC ready</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open('https://wa.me/message/CEP4OBODZQF7E1', '_blank')}
                className="border-2 border-green-500 text-green-600 hover:bg-green-50 text-lg px-8"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Connect on WhatsApp
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="space-y-3">
              <p className="text-sm text-gray-500">✓ No credit card required</p>
              <p className="text-sm text-gray-600 font-semibold">
                ⭐ Trusted by 200+ organizations
              </p>
              <p className="text-gray-700 mt-4">
                <strong>Prefer to talk?</strong> Call or WhatsApp us at{' '}
                <a
                  href="tel:+917002098782"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  +91-7002098782
                </a>
              </p>
            </div>
          </motion.div>

          {/* Right Content - Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-blue-50 aspect-video flex items-center justify-center group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1762330466791-8db62b3c9eee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMG1hcmtldGluZyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzQwMTMyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Email Marketing Dashboard"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-blue-600 ml-1" />
                </div>
              </div>
            </div>
            <p className="text-center mt-4 text-gray-600 font-medium">
              Watch how to get started
            </p>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg px-4 py-2 hidden lg:block"
            >
              <p className="text-sm font-semibold text-gray-700">99% Uptime</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg px-4 py-2 hidden lg:block"
            >
              <p className="text-sm font-semibold text-gray-700">1M+ Emails/day</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}