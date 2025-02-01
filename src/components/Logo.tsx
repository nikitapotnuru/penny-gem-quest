import { Rocket, Coins } from "lucide-react";
import { Link } from "react-router-dom";

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Rocket className="h-6 w-6 text-primary" />
        <Coins className="h-4 w-4 text-accent absolute -bottom-1 -right-1" />
      </div>
      <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
        PennyPilot
      </span>
    </Link>
  );
};