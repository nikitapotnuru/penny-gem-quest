import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const EXPENSE_CATEGORIES = [
  "Food",
  "Transportation",
  "Entertainment",
  "Shopping",
  "Bills",
  "Others",
];
const COLORS = ["#7F00FF", "#E100FF", "#98FF98", "#00C49F", "#FFBB28", "#FF8042"];

const Tracker = () => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState(50); // Priority slider value (0-100)
  const [expenses, setExpenses] = useState<
    { name: string; value: number; priority: number }[]
  >([]);

  const handleAddExpense = () => {
    if (!amount || !category) return;

    const newExpense = {
      name: category,
      value: parseFloat(amount),
      priority: priority,
    };

    setExpenses([...expenses, newExpense]);
    setAmount("");
    setCategory("");
    setPriority(50); // Reset slider after adding
  };

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.value, 0);
  const highestPriority = Math.max(...expenses.map((e) => e.priority), 0);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8 bg-gradient-to-br from-background to-background/80">
      <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
        Expense and Progress Tracker
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Expense Pie Chart */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-primary">Expense Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={expenses}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {expenses.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        {/* Expense Summary */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg relative">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-semibold text-primary">Expense Summary</h2>
            {/* Dropdown Menu */}
            <div className="absolute top-4 right-4">
              <Label htmlFor="time-period" className="sr-only">
                Select Time Period
              </Label>
              <Select defaultValue="monthly">
                <SelectTrigger className="w-[150px] bg-white/5">
                  <SelectValue placeholder="Select Time Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-4 text-xl font-bold">
            <p>Total Expenses: ₹{totalExpenses.toFixed(2)}</p>
            <p>Highest Priority: {highestPriority}%</p>
            <p>Number of Expenses: {expenses.length}</p>
          </div>
        </div>
        </div>
      {/* Add Expense Section */}
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-primary">Add New Expense</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {EXPENSE_CATEGORIES.map((cat) => (
                  <SelectItem key={cat} value={cat.toLowerCase()}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount (₹)</Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount in ₹"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-white/5"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="priority">Priority</Label>
            <Slider
              value={[priority]}
              onValueChange={(value) => setPriority(value[0])}
              max={100}
              step={1}
              className="w-full"
            />
            <span className="text-sm text-muted-foreground">
              Priority: {priority}%
            </span>
          </div>
          <div className="flex items-end col-span-full">
            <Button
              onClick={handleAddExpense}
              className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              + Add Expense
            </Button>
          </div>
        </div>
      </div>
      {/* Spending Overview */}
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-primary">Spending Overview</h2>
        <div className="space-y-4">
          {expenses.map((expense, index) => (
            <div
              key={expense.name + index}
              className="flex justify-between items-center p-2 bg-white/5 rounded hover:bg-white/10 transition-colors"
              style={{ borderLeft: `4px solid ${COLORS[index % COLORS.length]}` }}
            >
              <span>{expense.name}</span>
              <span>₹{expense.value.toFixed(2)}</span>
              <span
                className={`text-xs px-2 py-1 rounded ${
                  expense.priority > 75
                    ? "bg-red-500 text-white"
                    : expense.priority > 50
                    ? "bg-yellow-500 text-black"
                    : "bg-green-500 text-white"
                }`}
              >
                Priority: {expense.priority}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tracker;