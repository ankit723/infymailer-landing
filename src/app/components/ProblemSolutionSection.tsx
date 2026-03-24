import { X, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function ProblemSolutionSection() {
  const problems = [
    'Limited email sending scale',
    'Complex setup & warm-up delays',
    'High costs',
    'Low open/reply rates',
    'Frequent account blocking',
  ];

  const solutions = [
    'Dedicated private servers',
    'Pre-warmed IP pools (iMTA technology)',
    'Fully managed infrastructure',
    'IP whitelisting with 24x7 support',
    'Blocking removal within 12 hours',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            From <span className="text-red-600">Problems</span> to{' '}
            <span className="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Stop struggling with email deliverability. We handle it for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-red-50 rounded-2xl p-8 border-2 border-red-200"
          >
            <h3 className="text-2xl font-bold mb-6 text-red-900">Common Problems</h3>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700 leading-relaxed">{problem}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 border-2 border-blue-200"
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
              InfyMailer Solutions
            </h3>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700 leading-relaxed">{solution}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}