import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaTimes, FaChevronDown } from 'react-icons/fa';
import { plans, billingCycles } from '../data/plans';
import Button from '../components/ui/Button';
import PlanFinderQuiz from '../components/home/PlanFinderQuiz';

const comparisonFeatures = ['Speed', 'Unlimited Data', 'Free Router', 'Free Installation', '24/7 Support', 'Static IP', 'OTT Bundle', 'Priority Support'];

const faqs = [
  {
    question: 'What speeds can I expect on my plan?',
    answer: 'You will receive the speed mentioned in your plan. Our fiber optic network delivers consistent speeds with minimal fluctuation. Actual speeds may vary slightly depending on network conditions, device capability, and Wi-Fi interference.',
  },
  {
    question: 'Is there a data limit or FUP on any plan?',
    answer: 'No. All our plans come with truly unlimited data — no FUP (Fair Usage Policy), no throttling, and no hidden data caps. Use as much as you need, anytime.',
  },
  {
    question: 'How long does installation take?',
    answer: 'We typically complete installation within 24–48 hours of order confirmation, subject to feasibility in your area. Our team will coordinate a convenient time slot with you.',
  },
  {
    question: 'Is there a contract or lock-in period?',
    answer: 'Monthly plans have no lock-in — you can cancel anytime. Quarterly and yearly plans are prepaid for the selected duration and offer discounted rates.',
  },
  {
    question: 'What equipment is provided?',
    answer: 'All plans include a free dual-band Wi-Fi router. Premium and Ultra plans include an upgraded router with better range and performance. The router remains our property and should be returned if you cancel.',
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades apply from your next billing cycle. Contact our support team to make the switch.',
  },
  {
    question: 'What happens if my connection goes down?',
    answer: 'Our network maintains 99.9% uptime. In the rare event of an outage, our 24/7 support team will assist you. Standard and higher plans include priority issue resolution.',
  },
  {
    question: 'Do you offer static IP addresses?',
    answer: 'Yes, static IP is included free with Premium and Ultra plans. For Basic and Standard plans, you can add a static IP for a small monthly fee. Contact support for details.',
  },
  {
    question: 'Which areas do you cover?',
    answer: 'We are rapidly expanding across the city. Use the availability checker on our homepage to see if your area is covered. If not, you can register your interest and we will notify you when we expand to your location.',
  },
];

export default function Plans() {
  const [cycle, setCycle] = useState('monthly');
  const [openFaq, setOpenFaq] = useState(null);

  const hasFeature = (plan, feature) => {
    const map = {
      'Speed': plan.speed,
      'Unlimited Data': true,
      'Free Router': true,
      'Free Installation': plan.id >= 2,
      '24/7 Support': plan.id >= 2,
      'Static IP': plan.id >= 3,
      'OTT Bundle': plan.id >= 4,
      'Priority Support': plan.id >= 3,
    };
    return map[feature];
  };

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <section className="page-header">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">Our Plans</h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">Simple, transparent pricing. Choose the plan that fits your needs.</p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container-custom">
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-xl p-1.5 border border-[var(--border-color)]" style={{ backgroundColor: 'var(--bg-secondary)' }}>
              {billingCycles.map(c => (
                <button key={c} onClick={() => setCycle(c)} className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all capitalize cursor-pointer ${cycle === c ? 'bg-[var(--color-primary)] text-white shadow-md' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}>
                  {c}{c === 'yearly' && <span className="ml-1 text-[10px] font-bold text-emerald-300">SAVE 15%</span>}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <AnimatePresence mode="wait">
              {plans.map((plan, i) => (
                <motion.div
                  key={`${plan.id}-${cycle}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className={`relative rounded-2xl p-8 border transition-all flex flex-col ${plan.popular ? 'border-[var(--color-primary)] glow-border' : 'border-[var(--border-color)]'}`}
                  style={{ backgroundColor: 'var(--bg-secondary)' }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 bg-[var(--color-primary)] text-white text-xs font-bold rounded-full whitespace-nowrap">MOST POPULAR</span>
                    </div>
                  )}
                  <div className="text-center mb-8 pt-2">
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">{plan.name}</h3>
                    <p className="text-sm text-[var(--color-primary)] font-medium mb-4">{plan.speed}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-lg text-[var(--text-muted)]">&#8377;</span>
                      <span className="text-5xl font-bold text-[var(--text-primary)]">{plan[cycle]}</span>
                    </div>
                    <p className="text-sm text-[var(--text-muted)] mt-2 capitalize">per {cycle === 'monthly' ? 'month' : cycle === 'quarterly' ? 'quarter' : 'year'}</p>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, fi) => (
                        <li key={fi} className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                          <FaCheck className="text-green-500 text-xs shrink-0" /> {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant={plan.popular ? 'primary' : 'secondary'} className="w-full mt-auto" onClick={() => window.location.href = 'tel:+919876543210'}>
                      Get Started
                    </Button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] text-center mb-8">Plan Comparison</h2>
            <div className="overflow-x-auto rounded-xl border border-[var(--border-color)] relative" style={{ backgroundColor: 'var(--bg-secondary)' }}>
              <div className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none rounded-r-xl md:hidden" style={{ background: 'linear-gradient(to left, var(--bg-secondary), transparent)' }} />
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-[var(--border-color)]">
                    <th className="text-left py-4 px-5 text-[var(--text-secondary)] font-medium">Feature</th>
                    {plans.map(plan => (
                      <th key={plan.id} className="text-center py-4 px-4"><span className="font-bold text-[var(--text-primary)]">{plan.name}</span></th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map(feature => (
                    <tr key={feature} className="border-b border-[var(--border-color)] last:border-b-0">
                      <td className="py-4 px-5 text-sm text-[var(--text-secondary)]">{feature}</td>
                      {plans.map(plan => {
                        const val = hasFeature(plan, feature);
                        return (
                          <td key={plan.id} className="text-center py-4 px-4">
                            {typeof val === 'string' ? (
                              <span className="text-sm font-medium text-[var(--text-primary)]">{val}</span>
                            ) : val ? (
                              <FaCheck className="text-green-500 mx-auto" />
                            ) : (
                              <FaTimes className="text-red-400 mx-auto" />
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <PlanFinderQuiz />

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-[var(--text-secondary)] text-center mb-10 max-w-2xl mx-auto">Got questions? We have answers. Find everything you need to know about our internet plans and services.</p>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[var(--border-color)] overflow-hidden"
                style={{ backgroundColor: 'var(--bg-secondary)' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-medium text-[var(--text-primary)]">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-[var(--text-muted)]"
                    aria-hidden="true"
                  >
                    <FaChevronDown />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-[var(--text-secondary)] leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
}
