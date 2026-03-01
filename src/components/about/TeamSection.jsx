import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { team } from '../../data/team';
import SectionHeading from '../ui/SectionHeading';

export default function TeamSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <div className="container-custom">
        <SectionHeading title="Meet Our Team" subtitle="The passionate people behind Skynet Internet Services." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="text-center p-8 rounded-2xl border border-[var(--border-color)] card-shadow"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">{member.initials}</span>
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{member.name}</h3>
              <p className="text-sm text-[var(--color-primary)] font-medium mb-4">{member.role}</p>
              <FaQuoteLeft className="mx-auto mb-2" style={{ color: 'var(--color-primary)', opacity: 0.2 }} />
              <p className="text-sm text-[var(--text-secondary)] italic leading-relaxed">"{member.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
