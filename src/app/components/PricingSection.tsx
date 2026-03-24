import { CheckCircle, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: '₹5,000',
      emails: '100,000',
      features: [
        'Dedicated IP',
        'Pre-warmed infrastructure',
        'DKIM/SPF/DMARC setup',
        'Email support',
        'Basic analytics',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '₹10,000',
      emails: '300,000',
      features: [
        'Multiple dedicated IPs',
        'Smart IP rotation',
        'Pre-warmed infrastructure',
        'DKIM/SPF/DMARC setup',
        'Priority support',
        'Advanced analytics',
        'Email sequencing',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      emails: 'Unlimited',
      features: [
        'Custom IP pool',
        'Advanced rotation strategies',
        'Dedicated account manager',
        'White-glove setup',
        '24/7 phone support',
        'Custom integrations',
        'SLA guarantee',
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Simple,{' '}
            <span className="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.popular
                  ? 'border-2 border-blue-600 shadow-2xl scale-105'
                  : 'border border-gray-200 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-700 to-blue-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                {plan.price !== 'Custom' ? (
                  <div className="inline-block bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200 rounded-2xl px-6 py-3">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 text-lg"> /month</span>
                  </div>
                ) : (
                  <span className="text-4xl font-bold">{plan.price}</span>
                )}
              </div>
              <p className="text-gray-600 mb-6">
                <span className="font-semibold">{plan.emails}</span> emails
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => window.open('https://calendly.com/salezlift/30min', '_blank')}
                className={`w-full ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-700 to-blue-400 text-white hover:shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
                size="lg"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book a Consultation
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-gray-600"
        >
          <p>All plans include free trial with 50 emails • No credit card required</p>
        </motion.div>
      </div>
    </section>
  );
}