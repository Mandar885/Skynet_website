import { motion } from 'framer-motion';

export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, boxShadow: 'var(--shadow-xl)' } : {}}
      className={`bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-color)] shadow-[var(--shadow-md)] overflow-hidden transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
