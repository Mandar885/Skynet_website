import { motion } from 'framer-motion';

export default function Button({ children, variant = 'primary', size = 'md', className = '', onClick, ...props }) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 cursor-pointer';

  const variants = {
    primary: 'bg-[var(--color-primary)] text-white hover:opacity-90 shadow-lg hover:shadow-xl',
    secondary: 'border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white',
    accent: 'bg-[var(--color-accent)] text-white hover:opacity-90',
    ghost: 'text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
}
