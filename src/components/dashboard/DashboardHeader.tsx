import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const DashboardHeader = () => {
  const navigate = useNavigate();
  
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
    </header>
  );
};