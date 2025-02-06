import { Link } from "react-router-dom";
import {
  BarChart2,
  BookOpen,
  ShoppingBag,
  Settings,
  LogOut,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

interface DashboardSidebarProps {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
  handleHomeClick: (e: React.MouseEvent) => void;
  handleSignOut: () => void;
}

export const DashboardSidebar = ({
  isSidebarOpen,
  closeSidebar,
  handleHomeClick,
  handleSignOut,
}: DashboardSidebarProps) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } w-64 bg-white/10 backdrop-blur-lg border-r transition-transform duration-200 ease-in-out z-20 md:translate-x-0`}
    >
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center mb-4">
          <Logo />
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
  );
};