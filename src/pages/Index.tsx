import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <footer className="py-6 text-center text-muted-foreground">
        <p>© 2025 PennyPilot. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;