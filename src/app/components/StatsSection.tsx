import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function StatsSection() {
  const stats = [
    { value: 200, suffix: '+', label: 'Clients' },
    { value: 1, suffix: 'M+', label: 'Emails/day' },
    { value: 99, suffix: '%', label: 'Uptime' },
    { value: 12, prefix: '<', suffix: ' hrs', label: 'Unblock' },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-400 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Trusted. Proven. Reliable.
          </h2>
          <p className="text-xl text-blue-100">
            The numbers speak for themselves
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
              <p className="text-lg text-blue-100 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({
  value,
  prefix,
  suffix,
}: {
  value: number;
  prefix: string;
  suffix: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-5xl lg:text-6xl font-bold">
      {prefix}
      {count}
      {suffix}
    </div>
  );
}