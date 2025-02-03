import { BookOpen, DollarSign, PiggyBank } from "lucide-react";

const Learn = () => {
  const age = 25; // This would come from user context in a real app

  const getAgeGroup = (age: number) => {
    if (age < 20) return "Teens";
    if (age < 40) return "Adults";
    return "Seniors";
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Learn Financial Management</h1>

      {/* Main Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-semibold">Budgeting Basics</h2>
          </div>
          <p className="text-muted-foreground">
            Learn the fundamentals of creating and maintaining a budget that works
            for your lifestyle.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-semibold">Investment Ideas</h2>
          </div>
          <p className="text-muted-foreground">
            Discover various investment options and strategies to grow your wealth
            over time.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <PiggyBank className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-semibold">Saving Strategies</h2>
          </div>
          <p className="text-muted-foreground">
            Master effective techniques to save money and achieve your financial
            goals.
          </p>
        </div>
      </div>

      {/* Recommended Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">
          Recommended for {getAgeGroup(age)}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {getAgeGroup(age) === "Teens" && (
            <>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Smart Saving Habits</h3>
                <p className="text-muted-foreground">
                  Learn how to develop good saving habits early in life.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Understanding Money</h3>
                <p className="text-muted-foreground">
                  Basic concepts about money management and financial responsibility.
                </p>
              </div>
            </>
          )}
          {getAgeGroup(age) === "Adults" && (
            <>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Investment Basics</h3>
                <p className="text-muted-foreground">
                  Start your investment journey with fundamental knowledge.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Career Financial Planning</h3>
                <p className="text-muted-foreground">
                  Plan your finances alongside your career growth.
                </p>
              </div>
            </>
          )}
          {getAgeGroup(age) === "Seniors" && (
            <>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Retirement Planning</h3>
                <p className="text-muted-foreground">
                  Optimize your retirement savings and investment strategy.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Estate Planning</h3>
                <p className="text-muted-foreground">
                  Learn about managing and protecting your wealth for the future.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Learn;