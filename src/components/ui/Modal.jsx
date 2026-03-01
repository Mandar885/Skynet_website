import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import Button from './Button';

export default function Modal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    modalRef.current?.focus();
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setForm({ name: '', email: '', password: '' });
      setErrors({});
      setSubmitted(false);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!isLogin && !form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.password) newErrors.password = 'Password is required';
    else if (form.password.length < 6) newErrors.password = 'Min 6 characters';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
    setForm({ name: '', email: '', password: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--color-primary)] transition-colors";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label={isLogin ? 'Login' : 'Sign Up'}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100%-2rem)] max-w-md rounded-2xl border border-[var(--border-color)] p-8 shadow-2xl"
            style={{ backgroundColor: 'var(--bg-secondary)' }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
              aria-label="Close"
            >
              <FaTimes size={20} />
            </button>

            <div className="flex mb-8 rounded-xl p-1" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
              <button
                onClick={() => { setIsLogin(true); setErrors({}); setSubmitted(false); }}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                  isLogin ? 'bg-[var(--color-primary)] text-white' : 'text-[var(--text-secondary)]'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => { setIsLogin(false); setErrors({}); setSubmitted(false); }}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                  !isLogin ? 'bg-[var(--color-primary)] text-white' : 'text-[var(--text-secondary)]'
                }`}
              >
                Sign Up
              </button>
            </div>

            {submitted && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 p-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-500 text-sm font-medium text-center">
                {isLogin ? 'Login successful!' : 'Account created successfully!'}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Full Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" className={inputClass} style={{ backgroundColor: 'var(--bg-tertiary)' }} />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" className={inputClass} style={{ backgroundColor: 'var(--bg-tertiary)' }} />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Password</label>
                <input type="password" name="password" value={form.password} onChange={handleChange} placeholder={isLogin ? 'Enter your password' : 'Create a password'} className={inputClass} style={{ backgroundColor: 'var(--bg-tertiary)' }} />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>
              <Button type="submit" className="w-full" size="lg">{isLogin ? 'Login' : 'Sign Up'}</Button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
