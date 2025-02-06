interface FinancialOverviewProps {
  balance: number;
  savings: number;
  rewardPoints: number;
}

export const FinancialOverview = ({ balance, savings, rewardPoints }: FinancialOverviewProps) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg space-y-2 hover:transform hover:scale-105 transition-all">
        <h3 className="text-lg font-semibold text-primary">Total Balance</h3>
        <p className="text-2xl font-bold">₹{balance}</p>
      </div>
      <div className="p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg space-y-2 hover:transform hover:scale-105 transition-all">
        <h3 className="text-lg font-semibold text-primary">Monthly Savings</h3>
        <p className="text-2xl font-bold">₹{savings}</p>
      </div>
      <div className="p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg space-y-2 hover:transform hover:scale-105 transition-all">
        <h3 className="text-lg font-semibold text-primary">Reward Points</h3>
        <p className="text-2xl font-bold">{rewardPoints}</p>
      </div>
    </section>
  );
};