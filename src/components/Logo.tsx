import { Rocket, Coins } from "lucide-react";
import { Link } from "react-router-dom";

export const Logo = ({ className = "", size = "default" }: { className?: string; size?: "default" | "large" }) => {
  const iconSize = size === "large" ? "h-8 w-8" : "h-6 w-6";
  const smallIconSize = size === "large" ? "h-6 w-6" : "h-4 w-4";
  const textSize = size === "large" ? "text-3xl" : "text-xl";

  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <Rocket className={`${iconSize} text-primary animate-pulse`} />
        <Coins className={`${smallIconSize} text-accent absolute -bottom-1 -right-1`} />
      </div>
      <span className={`font-bold ${textSize} bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary animate-fade-in`}>
        PennyPilot
      </span>
    </Link>
  );
};