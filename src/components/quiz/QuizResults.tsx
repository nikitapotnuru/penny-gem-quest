import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface QuizResultsProps {
  score: number;
  onRetry: () => void;
}

export const QuizResults = ({ score, onRetry }: QuizResultsProps) => {
  const navigate = useNavigate();
  const rewardPoints = score * 10;
  
  const getMessage = (score: number): string => {
    switch (score) {
      case 1: return "Great start! Keep learning and you'll master this in no time!";
      case 2: return "Nice effort! You're on the right track—keep going!";
      case 3: return "Well done! You're making solid progress!";
      case 4: return "Impressive! You're really getting the hang of this!";
      case 5: return "Fantastic! You're a financial whiz—keep up the amazing work!";
      default: return "Keep practicing to improve your financial knowledge!";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 text-center text-white">
      <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
      <p className="text-xl mb-4">You got {score} out of 5 questions correct!</p>
      <p className="text-lg mb-6">{getMessage(score)}</p>
      <p className="text-lg mb-8">You earned {rewardPoints} reward points!</p>
      <div className="space-x-4">
        <Button 
          onClick={onRetry}
          className="bg-gradient-to-r from-[#00FFFF] to-[#FF007F] hover:opacity-90"
        >
          Try Again
        </Button>
        <Button 
          onClick={() => navigate("/dashboard")} 
          variant="outline"
          className="border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF]/10"
        >
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
};