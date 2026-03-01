import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaWifi, FaBuilding, FaTv, FaNetworkWired, FaShieldAlt, FaHeadset, FaArrowRight } from 'react-icons/fa';
import Button from '../components/ui/Button';

const services = [
  {
    icon: FaWifi, title: 'Fiber Broadband',
    description: 'Ultra-fast fiber optic broadband connections for homes with speeds up to 500 Mbps. Enjoy seamless streaming, gaming, and browsing with truly unlimited data.',
    features: ['Up to 500 Mbps', 'Unlimited Data', 'Free Wi-Fi Router', 'Same-day Installation'],
  },
  {
    icon: FaBuilding, title: 'Business Internet',
    description: 'Dedicated internet solutions for businesses of all sizes. Symmetric speeds, static IPs, and SLA-backed uptime guarantee for your critical operations.',
    features: ['Symmetric Speeds', 'Static IP Address', '99.9% Uptime SLA', 'Priority Support'],
  },
  {
    icon: FaTv, title: 'OTT Bundles',
    description: 'Get the best of entertainment with our OTT bundled plans. Access popular streaming platforms at no extra cost with select internet plans.',
    features: ['Prime Video', 'JioHotstar', 'Sony Liv', 'Zee5 & More'],
  },
  {
    icon: FaNetworkWired, title: 'Network Solutions',
    description: 'Complete networking solutions for homes and offices. From structured cabling to Wi-Fi mesh setups, we handle your entire network infrastructure.',
    features: ['Structured Cabling', 'Wi-Fi Mesh Setup', 'Network Security', 'Maintenance'],
  },
  {
    icon: FaShieldAlt, title: 'Security Solutions',
    description: 'Protect your digital life with our comprehensive security solutions. Firewall protection, DNS filtering, and parental controls included.',
    features: ['Firewall Protection', 'DNS Filtering', 'Parental Controls', 'Threat Monitoring'],
  },
  {
    icon: FaHeadset, title: '24/7 Support',
    description: 'Our dedicated support team is available round the clock to help you with any technical issues or queries. Get help via phone, email, or WhatsApp.',
    features: ['Phone Support', 'WhatsApp Support', 'Email Support', 'On-site Visits'],
  },
];

export default function Services() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <section className="page-header">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">Our Services</h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Comprehensive internet and networking solutions tailored to your needs.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl border border-[var(--border-color)] card-shadow hover:card-shadow-lg transition-all duration-300"
                style={{ backgroundColor: 'var(--bg-secondary)' }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 10%, transparent)' }}
                >
                  <service.icon className="text-2xl text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">{service.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-primary)' }} /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button variant="ghost" size="sm" className="!px-0 !text-[var(--color-primary)]">Learn More <FaArrowRight className="ml-2 text-xs" /></Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
}
