import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useNavigate } from "react-router-dom";
import { GraduationCap, BookOpen, Users, User } from "lucide-react";

const Learn = () => {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
    navigate(`/learn/${topic}`);
  };

  const recommendedForAdults = (
    <section className="space-y-6 p-6 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm rounded-lg shadow-lg">
      <div className="flex items-center gap-3">
        <GraduationCap className="h-8 w-8 text-primary animate-bounce" />
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Recommended for Adults
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-primary/10 hover:border-primary/20 transition-all hover:transform hover:scale-105">
          <BookOpen className="h-6 w-6 text-primary mb-2" />
          <h3 className="font-semibold text-primary">Advanced Investment Strategies</h3>
          <p className="text-sm text-muted-foreground">Master complex investment concepts</p>
        </div>
        
        <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-primary/10 hover:border-primary/20 transition-all hover:transform hover:scale-105">
          <Users className="h-6 w-6 text-primary mb-2" />
          <h3 className="font-semibold text-primary">Retirement Planning</h3>
          <p className="text-sm text-muted-foreground">Plan for a secure future</p>
        </div>
        
        <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-primary/10 hover:border-primary/20 transition-all hover:transform hover:scale-105">
          <User className="h-6 w-6 text-primary mb-2" />
          <h3 className="font-semibold text-primary">Tax Management</h3>
          <p className="text-sm text-muted-foreground">Optimize your tax strategy</p>
        </div>
      </div>
    </section>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Learning Resources</h1>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Select a Topic</h2>
        <RadioGroup value={selectedTopic} onValueChange={handleTopicSelect}>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="budgeting" id="budgeting" />
              <Label htmlFor="budgeting">Budgeting</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="investing" id="investing" />
              <Label htmlFor="investing">Investing</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="saving" id="saving" />
              <Label htmlFor="saving">Saving</Label>
            </div>
          </div>
        </RadioGroup>
      </div>
      {recommendedForAdults}
    </div>
  );
};

export default Learn;
