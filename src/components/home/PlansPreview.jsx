import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import { plans, billingCycles } from '../../data/plans';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function PlansPreview() {
  const [cycle, setCycle] = useState('monthly');

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <div className="container-custom">
        <SectionHeading title="Our Plans" subtitle="Choose the perfect plan for your needs. All plans include unlimited data." />

        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-xl p-1.5 border border-[var(--border-color)]" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            {billingCycles.map(c => (
              <button
                key={c}
                onClick={() => setCycle(c)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all capitalize cursor-pointer ${
                  cycle === c ? 'bg-[var(--color-primary)] text-white shadow-md' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {c}
                {c === 'yearly' && <span className="ml-1 text-[10px] font-bold text-emerald-300">SAVE 15%</span>}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            {plans.map((plan, i) => (
              <motion.div
                key={`${plan.id}-${cycle}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className={`relative rounded-2xl p-6 border transition-all duration-300 ${
                  plan.popular ? 'border-[var(--color-primary)] glow-border' : 'border-[var(--border-color)]'
                }`}
                style={{ backgroundColor: 'var(--bg-secondary)' }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-[var(--color-primary)] text-white text-xs font-bold rounded-full whitespace-nowrap">MOST POPULAR</span>
                  </div>
                )}
                <div className="text-center mb-6 pt-2">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">{plan.name}</h3>
                  <p className="text-sm text-[var(--color-primary)] font-medium">{plan.speed}</p>
                </div>
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm text-[var(--text-muted)]">&#8377;</span>
                    <span className="text-4xl font-bold text-[var(--text-primary)]">{plan[cycle]}</span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mt-1 capitalize">per {cycle === 'monthly' ? 'month' : cycle === 'quarterly' ? 'quarter' : 'year'}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.slice(0, 4).map((feature, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <FaCheck className="text-green-500 text-xs shrink-0" /> {feature}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.popular ? 'primary' : 'secondary'} className="w-full" size="sm" onClick={() => window.location.href = 'tel:+919876543210'}>Choose Plan</Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-10">
          <Link to="/plans">
            <Button variant="ghost" size="lg">View All Plans <FaArrowRight className="ml-2" /></Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
