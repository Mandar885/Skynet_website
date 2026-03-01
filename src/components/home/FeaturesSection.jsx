import { motion } from 'framer-motion';
import { features } from '../../data/features';
import SectionHeading from '../ui/SectionHeading';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function FeaturesSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container-custom">
        <SectionHeading
          title="Why Choose Skynet?"
          subtitle="We deliver more than just internet — we deliver an experience you can rely on every day."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -8 }}
              className="group p-6 rounded-2xl border border-[var(--border-color)] card-shadow hover:card-shadow-xl transition-all duration-300"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 10%, transparent)' }}
              >
                <feature.icon className="text-2xl text-[var(--color-primary)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{feature.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
