import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full border border-[var(--border-color)] flex items-center px-1 cursor-pointer transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-tertiary)' }}
      aria-label="Toggle theme"
    >
      <motion.div
        layout
        className="w-5 h-5 rounded-full flex items-center justify-center"
        style={{ backgroundColor: 'var(--color-primary)' }}
        animate={{ x: isDark ? 24 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {isDark ? (
          <FaMoon className="text-white text-[10px]" />
        ) : (
          <FaSun className="text-white text-[10px]" />
        )}
      </motion.div>
    </motion.button>
  );
}
