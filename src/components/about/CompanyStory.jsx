import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const values = [
  { icon: '\u{1F3AF}', title: 'Our Mission', text: 'To provide affordable, high-speed internet access to every household and business, bridging the digital divide in our community.' },
  { icon: '\u{1F441}', title: 'Our Vision', text: 'To become the most trusted and loved internet service provider, known for unmatched speed, reliability, and customer care.' },
  { icon: '\u{1F48E}', title: 'Our Values', text: 'Transparency, reliability, innovation, and customer-first approach guide everything we do at Skynet Internet Services.' },
];

export default function CompanyStory() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container-custom">
        <SectionHeading title="Our Story" subtitle="From a small startup to a trusted internet provider serving thousands." />
        <div className="max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-[var(--text-secondary)] leading-relaxed text-lg mb-4">
              Founded in 2015, <strong className="text-[var(--text-primary)]">Skynet Internet Services</strong> began with a simple
              mission — to provide fast, reliable, and affordable internet to our local community. What started as a small operation
              serving a handful of neighborhoods has grown into a trusted ISP serving over 3,000 happy customers across Bhusawal.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed text-lg mb-4">
              We invested in cutting-edge fiber optic infrastructure from day one, ensuring our customers get the speeds they pay for —
              every single time. Our network is built for the future, capable of delivering gigabit speeds as demand grows.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
              Today, we continue to expand our coverage, improve our services, and maintain the personal touch that our customers love.
              At Skynet, you're never just a number — you're part of our family.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center p-8 rounded-2xl border border-[var(--border-color)] card-shadow"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">{item.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
