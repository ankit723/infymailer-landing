import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import avatar1 from "@/assets/avatar1.jpg"
import avatar2 from "@/assets/avatar2.jpg"
import avatar3 from "@/assets/avatar3.jpg"
import avatar4 from "@/assets/avatar4.jpg"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Kunal Chatterjee ',
      role: 'Lifecycle Marketing Manager',
      avatar: avatar1,
      quote: 'I tried many bulk email tools but never got consistent results. InfyMailer finally worked for me, and I’ve already recommended it to others.',
    },
    {
      name: 'Daniel Whitmor',
      role: 'Director of Demand Generation',
      avatar: avatar2,
      quote:'he platform is very easy to use, and the support team is quick and helpful whenever needed. The data provided was relevant and actually usable, which made running campaigns much smoother.'
    },
    {
      name: 'Ursula Santos',
      role: 'Senior Marketing Lead',
      avatar: avatar3,
      quote:'Getting started was simple, and everything worked as expected from day one. The system feels reliable, and I didn’t have to spend time fixing issues or tweaking settings.”',
    },
    {
      name: 'Michael R. Lawson',
      role: 'Head of Growth',
      avatar: avatar4,
      quote: 'InfyMailer is the exact email outreach solution that I always wish existed. We’ve tried almost every product that people in the outbound space talks about and none of them even comes close to this.',
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