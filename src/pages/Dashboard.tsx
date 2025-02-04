import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Home,
  BarChart2,
  BookOpen,
  ShoppingBag,
  Settings,
  LogOut,
  Menu,
  User,
  Diamond,
  Undo2,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { useToast } from "@/components/ui/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showSignOutDialog, setShowSignOutDialog] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleUndo = () => {
    navigate(-1);
    toast({
      title: "Action undone",
      description: "You've gone back to the previous page",
    });
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/dashboard');
    toast({
      title: "Navigation",
      description: "Welcome to your dashboard",
    });
  };

  const handleSignOut = () => {
    setShowSignOutDialog(true);
  };

  const confirmSignOut = () => {
    toast({
      title: "Success",
      description: "You have successfully signed out.",
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <Menu className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleUndo}>
              <Undo2 className="h-6 w-6" />
            </Button>
          </div>
          <Logo />
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
          <div className="flex justify-between items-center mb-4">
            <Logo />
            <Button variant="ghost" size="icon" onClick={closeSidebar} className="md:flex">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </div>
          <nav className="space-y-2">
            <Link
              to="/dashboard"
              onClick={handleHomeClick}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent"
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link
              to="/tracker"
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent"
            >
              <BarChart2 className="h-5 w-5" />
              <span>Expense and Progress Tracker</span>
            </Link>
            <Link
              to="/learn"
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent"
            >
              <BookOpen className="h-5 w-5" />
              <span>Learn</span>
            </Link>
            <Link
              to="/quiz"
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent"
            >
              <BookOpen className="h-5 w-5" />
              <span>Skill Level and Quiz</span>
            </Link>
            <Link
              to="/settings"
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
            <button 
              onClick={handleSignOut}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent text-red-500 w-full"
            >
              <LogOut className="h-5 w-5" />
              <span>Sign Out</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className={`p-4 ${isSidebarOpen ? "md:ml-64" : ""} transition-all duration-200`}>
        <div className="max-w-6xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold">Welcome!</h1>
          
          {/* Financial Overview */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 bg-white rounded-lg shadow-sm space-y-2">
              <h3 className="text-lg font-semibold">Total Balance</h3>
              <p className="text-2xl font-bold">₹25,000</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm space-y-2">
              <h3 className="text-lg font-semibold">Monthly Savings</h3>
              <p className="text-2xl font-bold">₹5,000</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm space-y-2">
              <h3 className="text-lg font-semibold">Reward Points</h3>
              <p className="text-2xl font-bold">250</p>
            </div>
          </section>

          {/* Latest Articles */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Latest Finance-Based Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold">Understanding Investment Basics</h3>
                <p className="text-muted-foreground">Learn the fundamentals of investing and how to get started...</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold">Smart Saving Strategies</h3>
                <p className="text-muted-foreground">Discover effective ways to save money and build wealth...</p>
              </div>
            </div>
          </section>

          {/* Featured Videos */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Featured Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((index) => (
                <div key={index} className="aspect-video bg-accent rounded-lg">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-muted-foreground">Video {index}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Sign Out Dialog */}
      <AlertDialog open={showSignOutDialog} onOpenChange={setShowSignOutDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Sign Out</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to sign out?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={confirmSignOut}>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Dashboard;