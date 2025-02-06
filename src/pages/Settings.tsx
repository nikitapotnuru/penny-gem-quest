import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings as SettingsIcon, Sliders, Moon, Sun } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(savedTheme === "dark" || (!savedTheme && prefersDark));
    
    // Apply theme
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
    
    toast({
      title: `${newTheme ? "Dark" : "Light"} mode activated`,
      description: `Theme preference has been saved.`,
    });
  };

  const handleSave = () => {
    toast({
      title: "Success",
      description: "Your settings have been saved.",
    });
  };

  return (
    <div className="min-h-screen bg-background p-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-4 justify-center mb-8">
          <div className="relative">
            <SettingsIcon className="h-12 w-12 text-primary animate-spin-slow" />
            <Sliders className="h-8 w-8 text-accent absolute -bottom-2 -right-2 animate-pulse" />
          </div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Settings</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold">Profile Settings</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <Button onClick={handleSave} className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                Save Changes
              </Button>
            </div>
          </div>

          <div className="space-y-6 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold">Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div className="flex items-center gap-2">
                  {isDarkMode ? (
                    <Moon className="h-5 w-5 text-primary" />
                  ) : (
                    <Sun className="h-5 w-5 text-primary" />
                  )}
                  <Label htmlFor="darkMode">Dark Mode</Label>
                </div>
                <Switch
                  id="darkMode"
                  checked={isDarkMode}
                  onCheckedChange={handleThemeToggle}
                  className="data-[state=checked]:bg-primary"
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="notifications">Enable Notifications</Label>
                <Switch id="notifications" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="emailUpdates">Email Updates</Label>
                <Switch id="emailUpdates" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;