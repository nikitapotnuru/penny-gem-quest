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

  // Sample data - in a real app this would come from your backend
  const expenseData = [
    { name: "Food", value: 300 },
    { name: "Transportation", value: 200 },
    { name: "Entertainment", value: 150 },
    { name: "Shopping", value: 250 },
    { name: "Bills", value: 400 },
    { name: "Others", value: 100 },
  ];

  const progressData = [
    { name: "Completed", value: 75 },
    { name: "Remaining", value: 25 },
  ];

  const handleAddExpense = () => {
    console.log("Adding expense:", { amount, category });
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8 bg-gradient-to-br from-background to-background/80">
      <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
        Expense and Progress Tracker
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Expense Pie Chart */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-primary">Expense Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={expenseData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {expenseData.map((entry, index) => (
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

        {/* Progress Pie Chart */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-primary">Progress Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={progressData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {progressData.map((entry, index) => (
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
          <div className="flex items-end">
            <Button onClick={handleAddExpense} className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
              + Add Expense
            </Button>
          </div>
        </div>
      </div>

      {/* Spending Overview */}
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-primary">Spending Overview</h2>
        <div className="space-y-4">
          {expenseData.map((expense, index) => (
            <div
              key={expense.name}
              className="flex justify-between items-center p-2 bg-white/5 rounded hover:bg-white/10 transition-colors"
            >
              <span>{expense.name}</span>
              <span>₹{expense.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tracker;