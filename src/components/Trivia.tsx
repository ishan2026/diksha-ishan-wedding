import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, CheckCircle2, XCircle, Trophy } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  { id: 1, text: 'Who is more likely to fall asleep during a movie?', options: ['Diksha', 'Ishan'], correctAnswer: 1 },
  { id: 2, text: 'Who is more likely to be late?', options: ['Diksha', 'Ishan'], correctAnswer: 0 },
  { id: 3, text: 'Who is the better foodie?', options: ['Diksha', 'Ishan'], correctAnswer: 0 },
  { id: 4, text: 'Who spends more time shopping?', options: ['Diksha', 'Ishan'], correctAnswer: 0 },
  { id: 5, text: 'Who is more dramatic?', options: ['Diksha', 'Ishan'], correctAnswer: 0 },
  { id: 6, text: 'Who is more likely to forget anniversaries?', options: ['Diksha', 'Ishan'], correctAnswer: 1 },
  { id: 7, text: 'Who is more likely to start a dance party?', options: ['Diksha', 'Ishan'], correctAnswer: 0 },
  { id: 8, text: 'Who is more romantic?', options: ['Diksha', 'Ishan'], correctAnswer: 1 },
  { id: 9, text: 'Who takes longer to get ready?', options: ['Diksha', 'Ishan'], correctAnswer: 0 },
  { id: 10, text: 'Who wins arguments?', options: ['Diksha', 'Ishan'], correctAnswer: 0 },
];

const Trivia: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswer = (optionIndex: number) => {
    if (selectedOption !== null) return;

    setSelectedOption(optionIndex);
    const correct = optionIndex === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const getResultMessage = () => {
    if (score >= 8) return "You know the couple too well ❤️";
    if (score >= 5) return "Pretty good 😄";
    return "Come meet them at the wedding 😄";
  };

  return (
    <section className="py-20 px-8 bg-wedding-ivory">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="font-display text-wedding-maroon text-4xl mb-4 underline underline-offset-8 decoration-wedding-maroon/30">
          Couple Trivia
        </h2>
        <p className="font-serif text-wedding-maroon/60 italic text-sm mb-12">
          How Well Do You Know Diksha & Ishan?
        </p>

        <div className="relative bg-white border-2 border-wedding-maroon/20 p-8 rounded-3xl shadow-2xl min-h-[400px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div 
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-wedding-maroon font-display text-sm">Question {currentQuestion + 1}/10</span>
                  <div className="flex items-center gap-1">
                    <Heart className="text-wedding-red fill-wedding-red" size={16} />
                    <span className="text-wedding-maroon font-display text-sm">Score: {score}</span>
                  </div>
                </div>

                <h3 className="font-display text-wedding-maroon text-2xl mb-8">{questions[currentQuestion].text}</h3>

                <div className="grid grid-cols-1 gap-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={selectedOption !== null}
                      className={`
                        relative p-4 rounded-xl font-display text-lg transition-all duration-300 border-2
                        ${selectedOption === null 
                          ? 'bg-wedding-maroon/5 border-wedding-maroon/10 text-wedding-maroon hover:border-wedding-maroon hover:bg-wedding-maroon/10' 
                          : index === questions[currentQuestion].correctAnswer
                            ? 'bg-green-100 border-green-500 text-green-700'
                            : selectedOption === index
                              ? 'bg-red-100 border-red-500 text-red-700'
                              : 'bg-gray-50 border-gray-200 text-gray-400 opacity-50'
                        }
                      `}
                    >
                      {option}
                      {selectedOption !== null && index === questions[currentQuestion].correctAnswer && (
                        <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500" size={24} />
                      )}
                      {selectedOption === index && index !== questions[currentQuestion].correctAnswer && (
                        <XCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500" size={24} />
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-8"
              >
                <Trophy className="text-wedding-maroon mx-auto animate-bounce" size={80} />
                <h3 className="font-display text-wedding-maroon text-4xl">Final Score: {score}/10</h3>
                <p className="font-calligraphy text-wedding-maroon text-4xl">{getResultMessage()}</p>
                <button 
                  onClick={() => {
                    setCurrentQuestion(0);
                    setScore(0);
                    setShowResult(false);
                  }}
                  className="px-8 py-3 bg-wedding-maroon text-wedding-cream font-display font-bold rounded-full hover:bg-wedding-red transition-colors duration-300 shadow-lg"
                >
                  Play Again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Trivia;
