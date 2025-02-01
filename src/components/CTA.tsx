import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Financial Journey?</h2>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Join thousands of users who are already mastering their finances with PennyPilot.
        </p>
        <Link
          to="/signup"
          className="px-8 py-3 bg-white text-primary hover:bg-gray-100 rounded-lg flex items-center gap-2 mx-auto w-fit transform transition-all hover:translate-y-[-2px]"
        >
          Get Started Now
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};