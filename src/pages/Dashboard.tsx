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
  ArrowLeft,
  Play,
  BookOpenCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { useToast } from "@/hooks/use-toast";
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

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const handleUndo = () => {
    navigate('/dashboard');
    toast({
      title: "Navigation",
      description: "Welcome back to dashboard",
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

  const handleSignOut = () => setShowSignOutDialog(true);

  const confirmSignOut = () => {
    toast({
      title: "Success",
      description: "You have successfully signed out.",
    });
    navigate('/');
  };

  const featuredVideos = [
    { title: "Introduction to Financial Planning", duration: "15 mins" },
    { title: "Understanding Investment Basics", duration: "20 mins" },
    { title: "Budgeting for Beginners", duration: "12 mins" }
  ];

  const featuredArticles = [
    { title: "10 Tips for Smart Saving", readTime: "5 mins" },
    { title: "Investment Strategies for Youth", readTime: "7 mins" },
    { title: "Understanding Credit Scores", readTime: "6 mins" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/80">
      <header className="border-b bg-white/5 backdrop-blur-lg">
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
              <Diamond className="h-5 w-5 text-primary animate-pulse" />
              <span className="font-semibold">250</span>
            </div>
            <Button variant="ghost" size="icon">
              <User className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 bg-white/10 backdrop-blur-lg border-r transition-transform duration-200 ease-in-out z-20 md:translate-x-0`}
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
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent/20 transition-colors"
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
              to="/shop"
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Shop</span>
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

      <main className={`p-4 ${isSidebarOpen ? "md:ml-64" : ""} transition-all duration-200`}>
        <div className="max-w-6xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Welcome Back!</h1>
          
          {/* Financial Overview */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg space-y-2 hover:transform hover:scale-105 transition-all">
              <h3 className="text-lg font-semibold text-primary">Total Balance</h3>
              <p className="text-2xl font-bold">₹25,000</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg space-y-2 hover:transform hover:scale-105 transition-all">
              <h3 className="text-lg font-semibold text-primary">Monthly Savings</h3>
              <p className="text-2xl font-bold">₹5,000</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg space-y-2 hover:transform hover:scale-105 transition-all">
              <h3 className="text-lg font-semibold text-primary">Reward Points</h3>
              <p className="text-2xl font-bold">250</p>
            </div>
          </section>

          {/* Featured Videos */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Play className="h-6 w-6 text-primary" />
              Featured Videos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {featuredVideos.map((video, index) => (
                <div key={index} className="p-4 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg hover:transform hover:scale-105 transition-all">
                  <h3 className="font-semibold text-primary">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.duration}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Articles */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <BookOpenCheck className="h-6 w-6 text-primary" />
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {featuredArticles.map((article, index) => (
                <div key={index} className="p-4 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg hover:transform hover:scale-105 transition-all">
                  <h3 className="font-semibold text-primary">{article.title}</h3>
                  <p className="text-sm text-muted-foreground">{article.readTime} read</p>
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