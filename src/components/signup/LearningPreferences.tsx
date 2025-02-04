import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useNavigate } from "react-router-dom";

interface LearningPreferencesProps {
  learningStyle: string;
  setLearningStyle: (value: string) => void;
  contentPreference: string;
  setContentPreference: (value: string) => void;
}

export const LearningPreferences = ({
  learningStyle,
  setLearningStyle,
  contentPreference,
  setContentPreference,
}: LearningPreferencesProps) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Learning Style</Label>
          <RadioGroup value={learningStyle} onValueChange={setLearningStyle}>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="visual" id="visual" />
                <Label htmlFor="visual">Visual Learning</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="reading" id="reading" />
                <Label htmlFor="reading">Reading & Writing</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="interactive" id="interactive" />
                <Label htmlFor="interactive">Interactive Learning</Label>
              </div>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <Label>Content Preference</Label>
          <RadioGroup value={contentPreference} onValueChange={setContentPreference}>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="videos" id="videos" />
                <Label htmlFor="videos">Video Tutorials</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="articles" id="articles" />
                <Label htmlFor="articles">Articles & Guides</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="quizzes" id="quizzes" />
                <Label htmlFor="quizzes">Quizzes & Exercises</Label>
              </div>
            </div>
          </RadioGroup>
        </div>
      </div>
      <Button onClick={() => navigate("/dashboard")} className="w-full">
        Finish
      </Button>
    </div>
  );
};