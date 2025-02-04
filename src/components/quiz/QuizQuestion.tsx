import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

interface Question {
  question: string;
  options: string[];
}

interface QuizQuestionProps {
  question: Question;
  questionIndex: number;
  selectedAnswer: number;
  onAnswerSelect: (questionIndex: number, answerIndex: number) => void;
}

export const QuizQuestion = ({
  question,
  questionIndex,
  selectedAnswer,
  onAnswerSelect,
}: QuizQuestionProps) => {
  return (
    <Card className="p-6 bg-gradient-to-br from-[#1A1A1A] to-[#00FFFF]/5 border-[#00FFFF]/20">
      <h3 className="text-lg font-semibold mb-4 text-white">{question.question}</h3>
      <RadioGroup
        value={selectedAnswer?.toString()}
        onValueChange={(value) => onAnswerSelect(questionIndex, parseInt(value))}
      >
        <div className="space-y-2">
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex} className="flex items-center space-x-2">
              <RadioGroupItem value={optionIndex.toString()} id={`q${questionIndex}-a${optionIndex}`} />
              <Label htmlFor={`q${questionIndex}-a${optionIndex}`} className="text-white/90">{option}</Label>
            </div>
          ))}
        </div>
      </RadioGroup>
    </Card>
  );
};