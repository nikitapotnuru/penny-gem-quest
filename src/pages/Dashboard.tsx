import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  BarChart2,
  BookOpen,
  ShoppingBag,
  Settings,
  LogOut,
  Menu,
  User,
  Diamond
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="flex items-center justify-between p-4">
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <Menu className="h-6 w-6" />
          </Button>
          <Link to="/dashboard" className="flex items-center gap-2">
            <span className="font-bold text-xl">PennyPilot</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Diamond className="h-5 w-5 text-primary" />
              <span className="font-semibold">250</span>
            </div>
            <Button variant="ghost" size="icon">
              <User className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 bg-background border-r transition-transform duration-200 ease-in-out z-20 md:translate-x-0`}
      >
        <div className="p-4 space-y-4">
          <nav className="space-y-2">
            <Link
              to="/dashboard"
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent"
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link
              to="/dashboard/expenses"
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent"
            >
              <BarChart2 className="h-5 w-5" />
              <span>Expense Tracker</span>
            </Link>
            <Link
              to="/dashboard/learn"
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent"
            >
              <BookOpen className="h-5 w-5" />
              <span>Learn</span>
            </Link>
            <Link
              to="/dashboard/shop"
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Shop</span>
            </Link>
            <Link
              to="/dashboard/settings"
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
            <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent text-red-500 w-full">
              <LogOut className="h-5 w-5" />
              <span>Sign Out</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className={`p-4 ${isSidebarOpen ? "md:ml-64" : ""} transition-all duration-200`}>
        <div className="max-w-6xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold">Welcome Back!</h1>
          
          {/* Age-specific Blog Carousel */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Recommended for You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">For Teens</h3>
                <p className="text-muted-foreground">Smart Saving Habits</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">For Adults</h3>
                <p className="text-muted-foreground">Investment Basics</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">For Seniors</h3>
                <p className="text-muted-foreground">Retirement Planning</p>
              </div>
            </div>
          </section>

          {/* Daily Financial Shorts */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Daily Financial Shorts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="aspect-video bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Video {index}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;