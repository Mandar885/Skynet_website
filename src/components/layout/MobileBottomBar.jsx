import { FaPhone, FaWhatsapp, FaWifi } from 'react-icons/fa';

export default function MobileBottomBar({ onCheckAvailability }) {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--border-color)] py-2 px-4 flex items-center justify-around md:hidden transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <a href="tel:+919876543210" className="flex flex-col items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors">
        <FaPhone size={18} />
        <span className="text-[10px] font-medium">Call</span>
      </a>
      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-green-500 hover:text-green-400 transition-colors">
        <FaWhatsapp size={18} />
        <span className="text-[10px] font-medium">WhatsApp</span>
      </a>
      <button onClick={onCheckAvailability} className="flex flex-col items-center gap-1 text-[var(--color-primary)] cursor-pointer">
        <FaWifi size={18} />
        <span className="text-[10px] font-medium">Availability</span>
      </button>
    </div>
  );
}
