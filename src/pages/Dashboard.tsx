import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Play, BookOpenCheck } from "lucide-react";
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
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { FinancialOverview } from "@/components/dashboard/FinancialOverview";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showSignOutDialog, setShowSignOutDialog] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(true);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/dashboard');
    closeSidebar();
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
      <DashboardHeader toggleSidebar={toggleSidebar} points={250} />
      
      <DashboardSidebar
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
        handleHomeClick={handleHomeClick}
        handleSignOut={handleSignOut}
      />

      <main className={`p-4 ${isSidebarOpen ? "md:ml-64" : ""} transition-all duration-200`}>
        <div className="max-w-6xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Welcome !
          </h1>
          
          <FinancialOverview balance={25000} savings={5000} rewardPoints={250} />

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