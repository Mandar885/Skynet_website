import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const validPincodes = ['411001','411002','411003','411004','411005','411006','411007','411008','411009','411010','411011','411012','411014','411015','411016','411017','411018','411019','411020','411021','411027','411028','411029','411030','411032','411033','411035','411036','411037','411038','411039','411040','411041','411042','411043','411044','411045','411046','411047','411048','411057','411058','412101','412105','412108','412114','412115'];

export default function AvailabilityChecker() {
  const [pincode, setPincode] = useState('');
  const [status, setStatus] = useState(null);
  const [checking, setChecking] = useState(false);

  const handleCheck = (e) => {
    e.preventDefault();
    if (pincode.length !== 6) return;
    setChecking(true);
    setStatus(null);
    setTimeout(() => {
      setStatus(validPincodes.includes(pincode) ? 'available' : 'unavailable');
      setChecking(false);
    }, 1500);
  };

  return (
    <section id="availability-checker" className="section-padding" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <div className="container-custom">
        <SectionHeading title="Check Availability" subtitle="Enter your pincode to check if Skynet is available in your area." />
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleCheck} className="flex gap-3">
            <div className="flex-1 relative">
              <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
              <input
                type="text"
                value={pincode}
                onChange={(e) => { setPincode(e.target.value.replace(/\D/g, '').slice(0, 6)); setStatus(null); }}
                placeholder="Enter 6-digit pincode"
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--color-primary)] transition-colors text-lg"
                style={{ backgroundColor: 'var(--bg-secondary)' }}
              />
            </div>
            <Button type="submit" disabled={pincode.length !== 6 || checking} size="lg">
              {checking ? (
                <span className="flex items-center gap-2">
                  <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                  Checking
                </span>
              ) : 'Check'}
            </Button>
          </form>

          <AnimatePresence>
            {status && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`mt-6 p-5 rounded-xl border flex items-center gap-4 ${
                  status === 'available' ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/10 border-red-500/30'
                }`}
              >
                {status === 'available' ? (
                  <>
                    <FaCheckCircle className="text-green-500 text-2xl shrink-0" />
                    <div>
                      <p className="font-semibold text-green-500">Service Available!</p>
                      <p className="text-sm text-[var(--text-secondary)]">Great news! Skynet is available in your area. Call us to get connected today!</p>
                    </div>
                  </>
                ) : (
                  <>
                    <FaTimesCircle className="text-red-500 text-2xl shrink-0" />
                    <div>
                      <p className="font-semibold text-red-500">Not Available Yet</p>
                      <p className="text-sm text-[var(--text-secondary)]">We're expanding fast! Leave your details and we'll notify you when we reach your area.</p>
                    </div>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
