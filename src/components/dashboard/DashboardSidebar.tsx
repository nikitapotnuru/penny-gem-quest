import { Link } from "react-router-dom";
import { Home, Settings, ShoppingBag, BookOpen, Brain } from "lucide-react";

export const DashboardSidebar = () => {
  return (
    <aside className="w-64 border-r h-screen p-4 fixed left-0 top-0">
      <nav className="space-y-4">
        <Link to="/dashboard" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
          <Home className="h-5 w-5" />
          <span>Home</span>
        </Link>
        <Link to="/quiz" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
          <Brain className="h-5 w-5" />
          <span>Skill Level & Quiz</span>
        </Link>
        <Link to="/learn" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
          <BookOpen className="h-5 w-5" />
          <span>Learn</span>
        </Link>
        <Link to="/shop" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
          <ShoppingBag className="h-5 w-5" />
          <span>Shop</span>
        </Link>
        <Link to="/settings" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </Link>
      </nav>
    </aside>
  );
};