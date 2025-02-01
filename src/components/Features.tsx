import { Gem, PiggyBank, BookOpen, Trophy } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Age-Smart Learning",
    description: "Personalized financial education tailored to your age and experience level",
  },
  {
    icon: <PiggyBank className="w-6 h-6" />,
    title: "Expense Tracking",
    description: "Keep track of your spending with our intuitive expense tracker",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Daily Quizzes",
    description: "Test your knowledge and earn rewards through daily financial quizzes",
  },
  {
    icon: <Gem className="w-6 h-6" />,
    title: "Reward System",
    description: "Earn gems for completing courses and maintaining learning streaks",
  },
];

export const Features = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose PennyPilot?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform combines education with engagement to make financial literacy accessible and enjoyable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};