import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { SparklesIcon, CheckCircleIcon, RefreshCwIcon, HomeIcon } from "lucide-react";

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
      options: ["A type of investment", "A plan for managing money", "A bank account", "A credit card"],
      correctAnswer: 1,
    },
    {
      question: "What is interest?",
      options: ["Free money from the bank", "A fee for borrowing money", "A type of credit card", "A savings account"],
      correctAnswer: 1,
    },
    {
      question: "What is saving?",
      options: ["Spending all your money", "Borrowing money", "Setting aside money for later", "Investing in stocks"],
      correctAnswer: 2,
    },
    {
      question: "What is income?",
      options: ["Money you spend", "Money you earn", "Money you borrow", "Money you save"],
      correctAnswer: 1,
    },
    {
      question: "What is a credit score?",
      options: ["Your bank balance", "Your savings amount", "A measure of creditworthiness", "Your monthly income"],
      correctAnswer: 2,
    },
  ],
  intermediate: [
    {
      question: "What is compound interest?",
      options: ["Interest on the initial amount only", "Interest on both principal and accumulated interest", "A fixed interest rate", "A type of loan"],
      correctAnswer: 1,
    },
    {
      question: "What is diversification?",
      options: ["Putting all money in one investment", "Spreading investments across different assets", "Saving money in a bank", "Taking out loans"],
      correctAnswer: 1,
    },
    {
      question: "What is inflation?",
      options: ["Rising prices over time", "Falling prices over time", "Stable prices", "Fixed interest rates"],
      correctAnswer: 0,
    },
    {
      question: "What is a mutual fund?",
      options: ["A single stock", "A savings account", "A pool of different investments", "A type of loan"],
      correctAnswer: 2,
    },
    {
      question: "What is an emergency fund?",
      options: ["Money for daily expenses", "Money saved for unexpected costs", "Money invested in stocks", "Money borrowed from a bank"],
      correctAnswer: 1,
    },
  ],
  expert: [
    {
      question: "What is asset allocation?",
      options: ["Buying only stocks", "Distribution of investments across asset classes", "Saving in a bank account", "Taking loans"],
      correctAnswer: 1,
    },
    {
      question: "What is a bear market?",
      options: ["Rising market prices", "Stable market prices", "Falling market prices", "No market activity"],
      correctAnswer: 2,
    },
    {
      question: "What is a P/E ratio?",
      options: ["Price to earnings ratio", "Profit to expense ratio", "Payment to equity ratio", "Principal to interest ratio"],
      correctAnswer: 0,
    },
    {
      question: "What is a derivative?",
      options: ["A direct investment", "A financial contract based on underlying assets", "A type of stock", "A savings account"],
      correctAnswer: 1,
    },
    {
      question: "What is market capitalization?",
      options: ["Total market value", "Total company debt", "Total company revenue", "Total company profit"],
      correctAnswer: 0,
    },
  ],
};

const calculateRewardPoints = (score: number): number => score * 10;

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
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [currentAnswers, setCurrentAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleDifficultySelect = (selected: Difficulty) => {
    setDifficulty(selected);
    setCurrentAnswers(new Array(5).fill(-1));
  };

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...currentAnswers];
    newAnswers[questionIndex] = answerIndex;
    setCurrentAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (!difficulty) return;
    const quizQuestions = questions[difficulty];
    const correctCount = currentAnswers.reduce(
      (acc, answer, index) => acc + (answer === quizQuestions[index].correctAnswer ? 1 : 0),
      0
    );
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
    setDifficulty(null);
    setCurrentAnswers([]);
    setIsCompleted(false);
    setScore(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white p-6 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-500">
            Financial Literacy Quiz
          </h1>
          <p className="text-lg text-gray-300">
            Test your financial knowledge and earn reward points!
          </p>
        </div>

        {/* Difficulty Selection */}
        {!difficulty && (
          <Card className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg space-y-6">
            <h2 className="text-2xl font-semibold text-center">Choose Your Level</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              {["beginner", "intermediate", "expert"].map((level) => (
                <Button
                  key={level}
                  onClick={() => handleDifficultySelect(level as Difficulty)}
                  className="w-full md:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                  variant="outline"
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </Button>
              ))}
            </div>
          </Card>
        )}

        {/* Quiz Questions */}
        {difficulty && !isCompleted && (
          <Card className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg space-y-6">
            <h2 className="text-2xl font-semibold text-center">
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Level Quiz
            </h2>
            <div className="space-y-6">
              {questions[difficulty].map((q, questionIndex) => (
                <div key={questionIndex} className="space-y-2">
                  <p className="text-lg font-medium">{q.question}</p>
                  <RadioGroup
                    value={currentAnswers[questionIndex].toString()}
                    onValueChange={(value) =>
                      handleAnswerSelect(questionIndex, parseInt(value))
                    }
                  >
                    {q.options.map((option, optionIndex) => (
                      <div
                        key={optionIndex}
                        className="flex items-center space-x-2"
                      >
                      <RadioGroupItem
                          value={optionIndex.toString()}
                          id={`q${questionIndex}-a${optionIndex}`}
                          className="border-2 border-purple-400 focus:border-purple-600 focus:ring-purple-600"
                        />
                        <Label
                          htmlFor={`q${questionIndex}-a${optionIndex}`}
                          className="text-purple-300 hover:text-purple-400 transition-colors cursor-pointer"
                        >
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              ))}
            </div>
            <Button
              onClick={handleSubmit}
              disabled={currentAnswers.some((answer) => answer === -1)}
              className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            >
              Submit Quiz <CheckCircleIcon className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        )}

        {/* Quiz Results */}
        {isCompleted && (
          <Card className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg space-y-6 text-center">
            <h2 className="text-2xl font-semibold">Quiz Results</h2>
            <div className="space-y-4">
              <p className="text-xl">
                You got <span className="text-green-400 font-bold">{score}</span> out of{" "}
                <span className="text-gray-300">5</span> questions correct!
              </p>
              <p className="text-lg text-gray-300">{getMotivationalMessage(score)}</p>
              <p className="text-lg">
                You earned{" "}
                <span className="text-yellow-400 font-bold">
                  {calculateRewardPoints(score)} reward points!
                </span>
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button
                onClick={handleRetry}
                className="w-full md:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              >
                Try Again <RefreshCwIcon className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => navigate("/dashboard")}
                variant="outline"
                className="w-full md:w-auto text-black border-white/50 hover:bg-white/10 transition-colors"
              >
                Back to Dashboard <HomeIcon className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Quiz;