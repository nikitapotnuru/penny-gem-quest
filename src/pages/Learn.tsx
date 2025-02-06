import { BookOpen, DollarSign, PiggyBank, GraduationCap, Brain } from "lucide-react";

const Learn = () => {
  const age = 25; // This would come from user context in a real app

  const getAgeGroup = (age: number) => {
    if (age < 20) return "Teens";
    if (age < 40) return "Adults";
    return "Seniors";
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8 bg-gradient-to-br from-background to-background/80">
      <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
        Learn Financial Management
      </h1>

      {/* Main Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg space-y-4 hover:transform hover:scale-105 transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary animate-pulse" />
            <h2 className="text-xl font-semibold">Budgeting Basics</h2>
          </div>
          <p className="text-muted-foreground">
            Learn the fundamentals of creating and maintaining a budget that works
            for your lifestyle.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg space-y-4 hover:transform hover:scale-105 transition-all">
          <div className="flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-primary animate-pulse" />
            <h2 className="text-xl font-semibold">Investment Ideas</h2>
          </div>
          <p className="text-muted-foreground">
            Discover various investment options and strategies to grow your wealth
            over time.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg space-y-4 hover:transform hover:scale-105 transition-all">
          <div className="flex items-center gap-2">
            <PiggyBank className="h-6 w-6 text-primary animate-pulse" />
            <h2 className="text-xl font-semibold">Saving Strategies</h2>
          </div>
          <p className="text-muted-foreground">
            Master effective techniques to save money and achieve your financial
            goals.
          </p>
        </div>
      </div>

      {/* Student Section */}
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="h-8 w-8 text-primary" />
          <h2 className="text-2xl font-semibold">Recommended for Students</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-primary/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Financial Literacy 101</h3>
            </div>
            <p className="text-muted-foreground">
              Essential financial concepts every student should know.
            </p>
          </div>
          <div className="p-4 border border-primary/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Student Budget Planning</h3>
            </div>
            <p className="text-muted-foreground">
              Learn to manage your finances while studying.
            </p>
          </div>
        </div>
      </div>

      {/* Recommended Section */}
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          Recommended for {getAgeGroup(age)}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {getAgeGroup(age) === "Teens" && (
            <>
              <div className="p-4 border border-primary/20 rounded-lg">
                <h3 className="font-semibold">Smart Saving Habits</h3>
                <p className="text-muted-foreground">
                  Learn how to develop good saving habits early in life.
                </p>
              </div>
              <div className="p-4 border border-primary/20 rounded-lg">
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