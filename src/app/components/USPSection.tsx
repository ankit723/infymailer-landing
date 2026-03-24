import { CheckCircle, X } from 'lucide-react';
import { motion } from 'motion/react';

export function USPSection() {
  const comparisons = [
    { feature: 'Warm-up required', infyMailer: 'Not needed' },
    { feature: 'Shared servers', infyMailer: 'Dedicated Private Servers' },
    { feature: 'Shared IPs', infyMailer: 'Your Own Dedicated IPs' },
    { feature: 'Complex setup', infyMailer: 'None' },
    { feature: 'High blocking risk', infyMailer: 'Minimized' },
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
          <div className="inline-block bg-gradient-to-r from-blue-700 to-blue-400 text-white px-6 py-3 rounded-full font-semibold mb-6">
            🚀 Our Unique Advantage
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Start Sending from Day 1 —{' '}
            <span className="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
              No Warm-Up Needed
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            See how InfyMailer stacks up against traditional email platforms
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-700 to-blue-400 text-white">
                <tr>
                  <th className="px-6 py-5 text-left font-semibold text-lg">Feature</th>
                  <th className="px-6 py-5 text-center font-semibold text-lg">Others</th>
                  <th className="px-6 py-5 text-center font-semibold text-lg">InfyMailer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisons.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-5 font-medium text-gray-900 text-lg">{item.feature}</td>
                    <td className="px-6 py-5">
                      <div className="flex justify-center">
                        <X className="w-7 h-7 text-red-500" />
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center justify-center gap-3">
                        <CheckCircle className="w-7 h-7 text-green-500 flex-shrink-0" />
                        <span className="font-semibold text-green-700 text-lg">{item.infyMailer}</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}