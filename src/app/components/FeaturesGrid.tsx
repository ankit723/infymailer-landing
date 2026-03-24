import { Server, RefreshCw, Calendar, Shield, Unlock, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export function FeaturesGrid() {
  const features = [
    {
      icon: Server,
      title: 'Dedicated IPs & Servers',
      description: 'Your own private infrastructure for maximum deliverability',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: RefreshCw,
      title: 'Smart IP Rotation (iMTA Core)',
      description: 'Automated rotation to prevent spam flags and maintain reputation',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: Calendar,
      title: 'Email Sequencing & Scheduling',
      description: 'Send campaigns at optimal times with automated sequences',
      gradient: 'from-pink-500 to-pink-600',
    },
    {
      icon: Shield,
      title: 'DKIM/SPF/DMARC Setup',
      description: 'Fully configured authentication for trusted delivery',
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: Unlock,
      title: 'Fast Unblock Support',
      description: 'Get unblocked in less than 12 hours with expert assistance',
      gradient: 'from-orange-500 to-orange-600',
    },
    {
      icon: Globe,
      title: 'Region-Based Sending',
      description: 'Target specific regions with optimized delivery routes',
      gradient: 'from-cyan-500 to-cyan-600',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Powerful Features for{' '}
            <span className="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
              Maximum Deliverability
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to run successful email campaigns
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}