import { FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function GetInTouch() {
  return (
    <section className="section-padding" style={{ background: 'linear-gradient(135deg, color-mix(in srgb, var(--color-primary) 8%, var(--bg-primary)), var(--bg-primary), color-mix(in srgb, var(--color-accent) 8%, var(--bg-primary)))' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">Ready to Get Connected?</h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">Get in touch with us today and experience the fastest internet in your area.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 px-6 py-3 rounded-xl border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--color-primary)] transition-all"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
            >
              <FaPhone className="text-[var(--color-primary)]" />
              <span className="font-medium">+91 98765 43210</span>
            </a>
            <a
              href="mailto:info@skynetinternet.com"
              className="flex items-center gap-3 px-6 py-3 rounded-xl border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--color-primary)] transition-all"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
            >
              <FaEnvelope className="text-[var(--color-primary)]" />
              <span className="font-medium">info@skynetinternet.com</span>
            </a>
          </div>
          <Link to="/contact">
            <Button size="lg">Contact Us <FaArrowRight className="ml-2" /></Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
