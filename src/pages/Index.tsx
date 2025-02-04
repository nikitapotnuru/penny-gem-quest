import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Logo } from "@/components/Logo";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-12">
          <Logo className="scale-150" />
        </div>
      </div>
      <Hero />
      <Features />
      <footer className="py-6 text-center text-muted-foreground">
        <p>© 2024 PennyPilot. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;