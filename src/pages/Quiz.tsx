import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

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

const calculateRewardPoints = (score: number): number => {
  return score * 10; // 1 correct = 10 points, 2 correct = 20 points, etc.
};

const getMotivationalMessage = (score: number): string => {
  switch (score) {
    case 1:
      return "Great start! Keep learning and you'll master this in no time!";
    case 2:
      return "Nice effort! You're on the right track—keep going!";
    case 3:
      return "Well done! You're making solid progress!";
    case 4:
      return "Impressive! You're really getting the hang of this!";
    case 5:
      return "Fantastic! You're a financial whiz—keep up the amazing work!";
    default:
      return "Keep practicing to improve your financial knowledge!";
  }
};

const Quiz = () => {
  const [difficulty, setDifficulty] = useState<"beginner" | "intermediate" | "expert" | null>(null);
  const [currentAnswers, setCurrentAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const { toast } = useToast();
  const navigate = useNavigate();

  console.log("Quiz component rendered with difficulty:", difficulty);

  const handleDifficultySelect = (selected: "beginner" | "intermediate" | "expert") => {
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

    const rewardPoints = calculateRewardPoints(correctCount);
    const message = getMotivationalMessage(correctCount);

    toast({
      title: "Quiz Completed!",
      description: `${message} You earned ${rewardPoints} reward points!`,
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
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Financial Literacy Quiz
          </h1>
          <div className="max-w-md mx-auto">
            <img src="/quiz-illustration.svg" alt="Quiz" className="w-48 h-48 mx-auto mb-6 animate-bounce-slow" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["beginner", "intermediate", "expert"].map((level) => (
            <Card 
              key={level} 
              className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm"
            >
              <Button
                onClick={() => handleDifficultySelect(level as "beginner" | "intermediate" | "expert")}
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                variant="outline"
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (isCompleted) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
        <p className="text-xl mb-4">You got {score} out of 5 questions correct!</p>
        <p className="text-lg mb-6">{getMotivationalMessage(score)}</p>
        <p className="text-lg mb-8">You earned {calculateRewardPoints(score)} reward points!</p>
        <div className="space-x-4">
          <Button onClick={handleRetry}>Try Again</Button>
          <Button onClick={() => navigate("/dashboard")} variant="outline">
            Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
        {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Level Quiz
      </h2>
      <div className="space-y-8">
        {questions[difficulty].map((q, questionIndex) => (
          <Card 
            key={questionIndex} 
            className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold mb-4">{q.question}</h3>
            <RadioGroup
              value={currentAnswers[questionIndex]?.toString()}
              onValueChange={(value) => handleAnswerSelect(questionIndex, parseInt(value))}
            >
              <div className="space-y-3">
                {q.options.map((option, optionIndex) => (
                  <div key={optionIndex} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                    <RadioGroupItem value={optionIndex.toString()} id={`q${questionIndex}-a${optionIndex}`} />
                    <Label htmlFor={`q${questionIndex}-a${optionIndex}`} className="flex-grow cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </Card>
        ))}
        <div className="text-center">
          <Button
            onClick={handleSubmit}
            disabled={currentAnswers.some((answer) => answer === -1)}
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
          >
            Submit Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;