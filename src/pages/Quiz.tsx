import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { QuizDifficultySelector } from "@/components/quiz/QuizDifficultySelector";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { QuizResults } from "@/components/quiz/QuizResults";

type Difficulty = "beginner" | "intermediate" | "expert";

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

const questions: Record<Difficulty, Question[]> = {
  beginner: [
    {
      question: "What is a budget?",
      options: [
        "A type of investment",
        "A plan for managing money",
        "A bank account",
        "A credit card"
      ],
      correctAnswer: 1
    },
    {
      question: "What is interest?",
      options: [
        "Free money from the bank",
        "A fee for borrowing money",
        "A type of credit card",
        "A savings account"
      ],
      correctAnswer: 1
    },
    {
      question: "What is saving?",
      options: [
        "Spending all your money",
        "Borrowing money",
        "Setting aside money for later",
        "Investing in stocks"
      ],
      correctAnswer: 2
    },
    {
      question: "What is income?",
      options: [
        "Money you spend",
        "Money you earn",
        "Money you borrow",
        "Money you save"
      ],
      correctAnswer: 1
    },
    {
      question: "What is a credit score?",
      options: [
        "Your bank balance",
        "Your savings amount",
        "A measure of creditworthiness",
        "Your monthly income"
      ],
      correctAnswer: 2
    }
  ],
  intermediate: [
    {
      question: "What is compound interest?",
      options: [
        "Interest on the initial amount only",
        "Interest on both principal and accumulated interest",
        "A fixed interest rate",
        "A type of loan"
      ],
      correctAnswer: 1
    },
    {
      question: "What is diversification?",
      options: [
        "Putting all money in one investment",
        "Spreading investments across different assets",
        "Saving money in a bank",
        "Taking out loans"
      ],
      correctAnswer: 1
    },
    {
      question: "What is inflation?",
      options: [
        "Rising prices over time",
        "Falling prices over time",
        "Stable prices",
        "Fixed interest rates"
      ],
      correctAnswer: 0
    },
    {
      question: "What is a mutual fund?",
      options: [
        "A single stock",
        "A savings account",
        "A pool of different investments",
        "A type of loan"
      ],
      correctAnswer: 2
    },
    {
      question: "What is an emergency fund?",
      options: [
        "Money for daily expenses",
        "Money saved for unexpected costs",
        "Money invested in stocks",
        "Money borrowed from a bank"
      ],
      correctAnswer: 1
    }
  ],
  expert: [
    {
      question: "What is asset allocation?",
      options: [
        "Buying only stocks",
        "Distribution of investments across asset classes",
        "Saving in a bank account",
        "Taking loans"
      ],
      correctAnswer: 1
    },
    {
      question: "What is a bear market?",
      options: [
        "Rising market prices",
        "Stable market prices",
        "Falling market prices",
        "No market activity"
      ],
      correctAnswer: 2
    },
    {
      question: "What is a P/E ratio?",
      options: [
        "Price to earnings ratio",
        "Profit to expense ratio",
        "Payment to equity ratio",
        "Principal to interest ratio"
      ],
      correctAnswer: 0
    },
    {
      question: "What is a derivative?",
      options: [
        "A direct investment",
        "A financial contract based on underlying assets",
        "A type of stock",
        "A savings account"
      ],
      correctAnswer: 1
    },
    {
      question: "What is market capitalization?",
      options: [
        "Total market value",
        "Total company debt",
        "Total company revenue",
        "Total company profit"
      ],
      correctAnswer: 0
    }
  ]
};

const Quiz = () => {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [currentAnswers, setCurrentAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const { toast } = useToast();

  const handleDifficultySelect = (selected: Difficulty) => {
    console.log("Selected difficulty:", selected);
    setDifficulty(selected);
    setCurrentAnswers(new Array(5).fill(-1));
  };

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    console.log("Selected answer:", answerIndex, "for question:", questionIndex);
    const newAnswers = [...currentAnswers];
    newAnswers[questionIndex] = answerIndex;
    setCurrentAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (!difficulty) return;

    const quizQuestions = questions[difficulty];
    const correctCount = currentAnswers.reduce((acc, answer, index) => {
      return acc + (answer === quizQuestions[index].correctAnswer ? 1 : 0);
    }, 0);

    console.log("Quiz submitted with score:", correctCount);
    setScore(correctCount);
    setIsCompleted(true);

    toast({
      title: "Quiz Completed!",
      description: `You earned ${correctCount * 10} reward points!`,
    });
  };

  const handleRetry = () => {
    console.log("Retrying quiz");
    setDifficulty(null);
    setCurrentAnswers([]);
    setIsCompleted(false);
    setScore(0);
  };

  if (!difficulty) {
    return <QuizDifficultySelector onSelect={handleDifficultySelect} />;
  }

  if (isCompleted) {
    return <QuizResults score={score} onRetry={handleRetry} />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8 text-center text-white">
        {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Level Quiz
      </h2>
      <div className="space-y-8">
        {questions[difficulty].map((q, questionIndex) => (
          <QuizQuestion
            key={questionIndex}
            question={q}
            questionIndex={questionIndex}
            selectedAnswer={currentAnswers[questionIndex]}
            onAnswerSelect={handleAnswerSelect}
          />
        ))}
        <div className="text-center">
          <Button
            onClick={handleSubmit}
            disabled={currentAnswers.some((answer) => answer === -1)}
            className="bg-gradient-to-r from-[#00FFFF] to-[#FF007F] hover:opacity-90"
          >
            Submit Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
