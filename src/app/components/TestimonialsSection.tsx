import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Marketing Director',
      company: 'TechStart Solutions',
      avatar: 'https://images.unsplash.com/photo-1584940121258-c2553b66a739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc21hbiUyMGNvbmZpZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDAxMzMzOXww&ixlib=rb-4.1.0&q=80&w=1080',
      quote:
        'InfyMailer solved our email deliverability issues instantly. We went from 60% to 95% inbox placement in just one week!',
    },
    {
      name: 'Priya Sharma',
      role: 'Founder & CEO',
      company: 'GrowthLeads',
      avatar: 'https://images.unsplash.com/photo-1752650736215-0130f82db4fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVudHJlcHJlbmV1ciUyMHNtaWxpbmd8ZW58MXx8fHwxNzc0MDI4MTE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      quote:
        'The dedicated IPs and smart rotation are game-changers. We scaled from 10K to 100K emails/day without any blocks.',
    },
    {
      name: 'Amit Patel',
      role: 'Digital Marketing Manager',
      company: 'E-Commerce Pro',
      avatar: 'https://images.unsplash.com/photo-1551989745-347c28b620e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhhcHB5fGVufDF8fHx8MTc3NDAyODExM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      quote:
        'Best decision we made! No more warm-up hassles, and their support team is incredibly responsive. Highly recommend!',
    },
    {
      name: 'Sneha Reddy',
      role: 'Head of Sales',
      company: 'CloudTech India',
      avatar: 'https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NzQxMDUyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      quote:
        'The ROI is incredible. Our email campaigns now generate 3x more leads with significantly better open rates.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Loved by{' '}
            <span className="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
              Professionals
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            See what our customers have to say
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 flex-grow leading-relaxed">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}