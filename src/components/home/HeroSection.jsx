import { motion } from 'framer-motion';
import { FaPhone, FaWifi, FaBolt, FaClock, FaUsers } from 'react-icons/fa';
import Button from '../ui/Button';

export default function HeroSection({ onCheckAvailability }) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Background — subtle gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, var(--color-primary), transparent 70%)' }}
        />
        <div
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, var(--color-accent), transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, var(--color-primary), transparent 70%)' }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border mb-8"
              style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 8%, transparent)', color: 'var(--color-primary)', borderColor: 'color-mix(in srgb, var(--color-primary) 15%, transparent)' }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Fiber Optic Network — Now Live
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--text-primary)] mb-6 leading-[1.08] tracking-tight"
          >
            Blazing-Fast Internet{' '}
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">
              Built for You
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Fiber optic broadband with unlimited data, no FUP, and 24/7 support.
            Plans starting at just &#8377;499/month.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-wrap justify-center gap-4 mb-14">
            <Button size="lg" onClick={() => window.location.href = 'tel:+919876543210'}>
              <FaPhone className="mr-2" /> Call Now
            </Button>
            <Button variant="secondary" size="lg" onClick={onCheckAvailability}>
              <FaWifi className="mr-2" /> Check Availability
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {[
              { icon: FaBolt, value: '500+ Mbps', label: 'Max Speed' },
              { icon: FaClock, value: '99.9%', label: 'Uptime' },
              { icon: FaUsers, value: '5,000+', label: 'Happy Customers' },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[var(--border-color)]"
                style={{ backgroundColor: 'color-mix(in srgb, var(--bg-secondary) 80%, transparent)' }}
              >
                <stat.icon className="text-[var(--color-primary)] text-lg" />
                <div className="text-left">
                  <p className="text-sm font-bold text-[var(--text-primary)] leading-tight">{stat.value}</p>
                  <p className="text-xs text-[var(--text-muted)] leading-tight">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
