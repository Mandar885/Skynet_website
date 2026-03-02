import { FaPhone, FaEnvelope, FaWifi } from 'react-icons/fa';
import ThemeToggle from '../ui/ThemeToggle';

export default function UtilityBar() {
  return (
    <div className="border-b border-[var(--border-color)] py-2 text-sm hidden md:block transition-colors duration-300" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="tel:+919876543210" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors">
            <FaPhone size={12} />
            <span>+91 97669 78910</span>
          </a>
          <a href="mailto:info@skynetinternet.com" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors">
            <FaEnvelope size={12} />
            <span>skynet.bhusawal@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-green-500 text-xs font-medium">
            <FaWifi size={12} />
            <span>Network: Operational</span>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
