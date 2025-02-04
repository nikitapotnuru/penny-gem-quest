import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardContent } from "@/components/dashboard/DashboardContent";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <div className="ml-64">
        <DashboardHeader />
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;