import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Plans', path: '/plans' },
  { label: 'Contact', path: '/contact' },
];

const services = ['Fiber Broadband', 'Business Internet', 'OTT Bundles', 'WiFi Solutions', 'Network Setup'];

const socials = [
  { icon: FaFacebook, href: '#', label: 'Facebook' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] transition-colors duration-300 pb-16 md:pb-0" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container-custom section-padding !pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/Scroll_bar/BgRemove_SkynetLogo_Generated.png" alt="Skynet" className="w-10 h-10 object-contain" />
              <div>
                <h3 className="font-bold text-[var(--text-primary)]">Skynet</h3>
                <p className="text-[10px] text-[var(--text-muted)] tracking-wider uppercase">Internet Services</p>
              </div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
              Providing lightning-fast fiber optic internet services to homes and businesses. Your trusted local ISP since 2016.
            </p>
            <div className="flex gap-3">
              {socials.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--color-primary)] transition-all"
                  style={{ backgroundColor: 'var(--bg-tertiary)' }}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map(service => (
                <li key={service}><Link to="/services" className="text-sm text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors">{service}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors">
                  <FaPhone size={14} /> +91 97669 78910
                </a>
              </li>
              <li>
                <a href="mailto:info@skynetinternet.com" className="flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors">
                  <FaEnvelope size={14} /> skynet.bhusawal@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                  <FaMapMarkerAlt size={14} className="mt-0.5 shrink-0" />
                  <span>Shop no. 12, Sardar Vallabhbhai Patel Complex, Bhusawal,Dist. Jalgaon, Maharashtra 425201</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border-color)] text-center">
          <p className="text-sm text-[var(--text-muted)]">&copy; {new Date().getFullYear()} Skynet Internet Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
