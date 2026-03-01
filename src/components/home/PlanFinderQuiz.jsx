import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaArrowLeft, FaRedo } from 'react-icons/fa';
import { quizQuestions, getRecommendedPlan } from '../../data/quizQuestions';
import { plans } from '../../data/plans';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function PlanFinderQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [started, setStarted] = useState(false);

  const handleAnswer = (value) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ(prev => prev + 1);
    } else {
      const planId = getRecommendedPlan(newAnswers);
      setResult(plans.find(p => p.id === planId));
    }
  };

  const reset = () => {
    setCurrentQ(0);
    setAnswers([]);
    setResult(null);
    setStarted(false);
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container-custom">
        <SectionHeading title="Find Your Perfect Plan" subtitle="Answer 3 quick questions and we'll recommend the best plan for you." />
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-[var(--border-color)] p-6 sm:p-8 card-shadow-lg" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <AnimatePresence mode="wait">
              {!started ? (
                <motion.div key="start" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-8">
                  <div className="text-6xl mb-4">&#127919;</div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Ready to find your ideal plan?</h3>
                  <p className="text-[var(--text-secondary)] mb-6">It takes less than 30 seconds!</p>
                  <Button onClick={() => setStarted(true)} size="lg">Start Quiz <FaArrowRight className="ml-2" /></Button>
                </motion.div>
              ) : result ? (
                <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center py-4">
                  <div className="text-5xl mb-4">&#127881;</div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">We Recommend</h3>
                  <div
                    className="my-6 p-6 rounded-xl border"
                    style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 10%, transparent)', borderColor: 'color-mix(in srgb, var(--color-primary) 20%, transparent)' }}
                  >
                    <h4 className="text-3xl font-bold text-[var(--color-primary)] mb-1">{result.name} Plan</h4>
                    <p className="text-lg text-[var(--text-secondary)]">{result.speed} at &#8377;{result.monthly}/month</p>
                  </div>
                  <div className="flex gap-3 justify-center flex-wrap">
                    <Button onClick={() => window.location.href = 'tel:+919876543210'}>Get This Plan</Button>
                    <Button variant="ghost" onClick={reset}><FaRedo className="mr-2" /> Retake Quiz</Button>
                  </div>
                </motion.div>
              ) : (
                <motion.div key={`q-${currentQ}`} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }}>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-[var(--text-muted)]">Question {currentQ + 1} of {quizQuestions.length}</span>
                    <div className="flex gap-1.5">
                      {quizQuestions.map((_, i) => (
                        <div
                          key={i}
                          className="h-2 w-8 rounded-full transition-colors"
                          style={{ backgroundColor: i <= currentQ ? 'var(--color-primary)' : 'var(--bg-tertiary)' }}
                        />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6">{quizQuestions[currentQ].question}</h3>
                  <div className="space-y-3">
                    {quizQuestions[currentQ].options.map((opt) => (
                      <motion.button
                        key={opt.value}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAnswer(opt.value)}
                        className="w-full text-left px-5 py-4 rounded-xl border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--color-primary)] transition-all cursor-pointer"
                        style={{ backgroundColor: 'var(--bg-tertiary)' }}
                      >
                        {opt.label}
                      </motion.button>
                    ))}
                  </div>
                  {currentQ > 0 && (
                    <button
                      onClick={() => { setCurrentQ(prev => prev - 1); setAnswers(prev => prev.slice(0, -1)); }}
                      className="mt-4 flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer transition-colors"
                    >
                      <FaArrowLeft /> Back
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
