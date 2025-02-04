import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Coins, PiggyBank, Calendar } from "lucide-react";

interface IncomeSetupProps {
  income: string;
  setIncome: (value: string) => void;
  incomeFrequency: string;
  setIncomeFrequency: (value: string) => void;
  savingsGoal: string;
  setSavingsGoal: (value: string) => void;
  onContinue: () => void;
}

export const IncomeSetup = ({
  income,
  setIncome,
  incomeFrequency,
  setIncomeFrequency,
  savingsGoal,
  setSavingsGoal,
  onContinue,
}: IncomeSetupProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="income">Monthly Income</Label>
          <div className="relative">
            <Coins className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="income"
              type="number"
              placeholder="Enter your monthly income"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="income-frequency">Income Frequency</Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Select value={incomeFrequency} onValueChange={setIncomeFrequency}>
              <SelectTrigger id="income-frequency" className="pl-10">
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="biweekly">Bi-weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="savings-goal">Monthly Savings Goal</Label>
          <div className="relative">
            <PiggyBank className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="savings-goal"
              type="number"
              placeholder="Enter your savings goal"
              value={savingsGoal}
              onChange={(e) => setSavingsGoal(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>
      <Button onClick={onContinue} className="w-full">
        Continue
      </Button>
    </div>
  );
};