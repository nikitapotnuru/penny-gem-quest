import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Menu, User, Diamond } from "lucide-react";

interface DashboardHeaderProps {
  toggleSidebar: () => void;
  points: number;
}

export const DashboardHeader = ({ toggleSidebar, points }: DashboardHeaderProps) => {
  return (
    <header className="border-b bg-white/5 backdrop-blur-lg">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <Logo />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Diamond className="h-5 w-5 text-primary animate-pulse" />
            <span className="font-semibold">{points}</span>
          </div>
          <Button variant="ghost" size="icon">
            <User className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};