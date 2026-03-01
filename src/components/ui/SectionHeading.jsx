import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${center ? 'text-center' : ''}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]" />
    </motion.div>
  );
}
