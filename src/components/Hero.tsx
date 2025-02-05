import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Logo } from "@/components/Logo";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      toast({
        title: "Success!",
        description: "You've successfully signed in.",
      });
      navigate('/dashboard');
    } else {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full flex justify-center py-8 bg-gradient-to-r from-primary/10 to-accent/10">
        <Logo size="large" className="transform scale-150" />
      </div>
      <section className="flex-grow flex items-center justify-center px-4 animate-fade-in">
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
            <Link to="/signup" className="px-8 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg flex items-center gap-2 transform transition-all hover:translate-y-[-2px]">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Sign In</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                  <DialogTitle>Sign In</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSignIn} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Sign In
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
    </div>
  );
};