import { UserPlus, Zap, Send } from 'lucide-react';
import { motion } from 'motion/react';

export function HowItWorksSection() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Sign up',
      description: 'Free trial – 50 emails to get started',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Zap,
      title: 'Get instant credits',
      description: 'Your account is ready immediately',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Send,
      title: 'Start sending',
      description: 'Launch campaigns right away',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-100/30 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Get started in 3 simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>

              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-blue-700 to-blue-400"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-8 border-l-blue-400"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}