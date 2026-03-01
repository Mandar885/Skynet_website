import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import ThemeToggle from '../ui/ThemeToggle';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/plans', label: 'Plans' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar({ onCheckAvailability }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 border-b border-[var(--border-color)] ${
          isScrolled ? 'nav-bg shadow-lg' : ''
        }`}
        style={{ backgroundColor: isScrolled ? undefined : 'var(--bg-secondary)' }}
      >
        <div className="container-custom flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src="/images/Scroll_bar/BgRemove_SkynetLogo_Generated.png" alt="Skynet" className="w-10 h-10 object-contain" />
            <div>
              <h1 className="text-lg font-bold text-[var(--text-primary)] leading-tight">Skynet</h1>
              <p className="text-[10px] text-[var(--text-muted)] leading-tight tracking-wider uppercase">Internet Services</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === link.path
                    ? 'text-[var(--color-primary)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]'
                }`}
                style={location.pathname === link.path ? { backgroundColor: 'color-mix(in srgb, var(--color-primary) 10%, transparent)' } : {}}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Button variant="ghost" size="sm" onClick={() => setIsModalOpen(true)}>
              Login / Signup
            </Button>
            <Button size="sm" onClick={onCheckAvailability}>
              Check Availability
            </Button>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-[var(--text-primary)] p-2 cursor-pointer"
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-[var(--border-color)]"
            >
              <div className="px-5 py-4 space-y-2">
                {navLinks.map(link => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      location.pathname === link.path
                        ? 'text-[var(--color-primary)] bg-[var(--bg-tertiary)]'
                        : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 space-y-2 border-t border-[var(--border-color)]">
                  <Button variant="secondary" className="w-full" onClick={() => { setIsModalOpen(true); setIsMobileOpen(false); }}>
                    Login / Signup
                  </Button>
                  <Button className="w-full" onClick={() => { onCheckAvailability?.(); setIsMobileOpen(false); }}>
                    Check Availability
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
