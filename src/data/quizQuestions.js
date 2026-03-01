export const quizQuestions = [
  {
    id: 1,
    question: 'What do you primarily use the internet for?',
    options: [
      { label: 'Basic browsing & email', value: 'basic' },
      { label: 'Streaming & social media', value: 'streaming' },
      { label: 'Work from home & video calls', value: 'work' },
      { label: 'Gaming & heavy downloads', value: 'gaming' },
    ],
  },
  {
    id: 2,
    question: 'How many devices will be connected?',
    options: [
      { label: '1-3 devices', value: 'few' },
      { label: '4-6 devices', value: 'moderate' },
      { label: '7-10 devices', value: 'many' },
      { label: '10+ devices', value: 'lots' },
    ],
  },
  {
    id: 3,
    question: 'Do you stream 4K content or play online games?',
    options: [
      { label: 'Rarely or never', value: 'no' },
      { label: 'Sometimes', value: 'sometimes' },
      { label: 'Frequently', value: 'often' },
      { label: 'All the time', value: 'always' },
    ],
  },
];

export function getRecommendedPlan(answers) {
  let score = 0;
  const usageScores = { basic: 0, streaming: 1, work: 2, gaming: 3 };
  score += usageScores[answers[0]] || 0;
  const deviceScores = { few: 0, moderate: 1, many: 2, lots: 3 };
  score += deviceScores[answers[1]] || 0;
  const streamingScores = { no: 0, sometimes: 1, often: 2, always: 3 };
  score += streamingScores[answers[2]] || 0;

  if (score <= 2) return 1;
  if (score <= 4) return 2;
  if (score <= 6) return 3;
  return 4;
}
