import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';
import Button from '../components/ui/Button';

const contactInfo = [
  { icon: FaPhone, label: 'Phone', value: '+91 98904 88782', href: 'tel:+919890488782' },
  { icon: FaWhatsapp, label: 'WhatsApp', value: '+91 97669 78910', href: 'https://wa.me/919766978910' },
  { icon: FaEnvelope, label: 'Email', value: 'skynet.bhusawal@gmail.com', href: 'mailto:skynet.bhusawal@gmail.com' },
  { icon: FaMapMarkerAlt, label: 'Address', value: 'Shop no. 12, Sardar Vallabhbhai Patel Complex, Bhusawal, Dist. Jalgaon, Maharashtra 425201', href: null },
  { icon: FaClock, label: 'Hours', value: 'Mon-Sat: 9AM - 8PM, Sun: 10AM - 5PM', href: null },
];

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <section className="page-header">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">Contact Us</h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">Have questions? We'd love to hear from you. Reach out to us anytime.</p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Send us a Message</h2>
              {submitted && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-500 font-medium">
                  Thank you for your message! Our team will get in touch with you shortly.
                </motion.div>
              )}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">Full Name</label>
                  <input type="text" {...register('name', { required: 'Name is required' })} placeholder="Enter your full name" className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--color-primary)] transition-colors" style={{ backgroundColor: 'var(--bg-secondary)' }} />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">Email</label>
                    <input type="email" {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })} placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--color-primary)] transition-colors" style={{ backgroundColor: 'var(--bg-secondary)' }} />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">Phone</label>
                    <input type="tel" {...register('phone', { required: 'Phone is required' })} placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--color-primary)] transition-colors" style={{ backgroundColor: 'var(--bg-secondary)' }} />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">Message</label>
                  <textarea {...register('message', { required: 'Message is required' })} rows={5} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--color-primary)] transition-colors resize-none" style={{ backgroundColor: 'var(--bg-secondary)' }} />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <FaPaperPlane className="mr-2" /> Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Get in Touch</h2>
              <div className="space-y-4 mb-8">
                {contactInfo.map(info => (
                  <div key={info.label} className="flex items-start gap-4 p-4 rounded-xl border border-[var(--border-color)]" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 10%, transparent)' }}>
                      <info.icon className="text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-muted)] mb-0.5">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-sm text-[var(--text-primary)] hover:text-[var(--color-primary)] transition-colors font-medium">{info.value}</a>
                      ) : (
                        <p className="text-sm text-[var(--text-primary)] font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl overflow-hidden border border-[var(--border-color)] h-64 flex items-center justify-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="text-center text-[var(--text-muted)]">
                  <FaMapMarkerAlt className="text-3xl mx-auto mb-2" />
                  <p className="text-sm">Google Maps Embed</p>
                  <p className="text-xs">Hinjewadi Phase 1, Pune</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
