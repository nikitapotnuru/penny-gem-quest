import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const DashboardContent = () => {
  return (
    <div className="p-6 space-y-6">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Learning Progress</h3>
          <Progress value={33} className="mb-2" />
          <p className="text-sm text-gray-600">33% Complete</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Reward Points</h3>
          <p className="text-3xl font-bold text-primary">150</p>
          <p className="text-sm text-gray-600">Points earned</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Next Goal</h3>
          <p className="text-sm text-gray-600">Complete Basic Finance Quiz</p>
        </Card>
      </section>
    </div>
  );
};