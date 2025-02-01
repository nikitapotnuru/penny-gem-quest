import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 animate-fade-in">
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Master Your Money, One Gem at a Time
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Your Journey to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Financial Freedom
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          Free financial courses, age-smart learning, and rewards that make managing money both educational and enjoyable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <button className="px-8 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg flex items-center gap-2 transform transition-all hover:translate-y-[-2px]">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-3 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 rounded-lg transition-all hover:border-gray-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};