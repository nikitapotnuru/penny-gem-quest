import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Difficulty = "beginner" | "intermediate" | "expert";

interface QuizDifficultySelectorProps {
  onSelect: (difficulty: Difficulty) => void;
}

export const QuizDifficultySelector = ({ onSelect }: QuizDifficultySelectorProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Brain className="h-12 w-12 text-[#00FFFF] animate-bounce" />
        </div>
        <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#00FFFF] to-[#FF007F] bg-clip-text text-transparent">
          Financial Literacy Quiz
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["beginner", "intermediate", "expert"].map((level) => (
            <Card 
              key={level} 
              className="p-6 hover:shadow-lg transition-all transform hover:-translate-y-1 bg-gradient-to-br from-[#1A1A1A] to-[#00FFFF]/5"
            >
              <Button
                onClick={() => onSelect(level as Difficulty)}
                className="w-full bg-gradient-to-r from-[#00FFFF] to-[#FF007F] hover:opacity-90 text-white"
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};