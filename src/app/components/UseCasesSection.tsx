import { Briefcase, TrendingUp, Users, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

export function UseCasesSection() {
  const useCases = [
    {
      icon: Briefcase,
      title: 'Agencies & Freelancers',
      description: 'Manage multiple client campaigns with dedicated infrastructure',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: TrendingUp,
      title: 'B2B Marketers',
      description: 'Reach decision-makers with high deliverability and professional setup',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Users,
      title: 'Lead Gen Teams',
      description: 'Scale your outreach without worrying about blocks or reputation',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Rocket,
      title: 'SaaS Companies',
      description: 'Send transactional and marketing emails with enterprise reliability',
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Perfect for Every{' '}
            <span className="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
              Use Case
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by professionals across industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <useCase.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
              <p className="text-gray-600 text-sm">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}