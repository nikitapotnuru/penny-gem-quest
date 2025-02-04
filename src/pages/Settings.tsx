import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings as SettingsIcon, User, Bell, Moon, Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";

const Settings = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Success",
      description: "Your settings have been saved.",
    });
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <div className="relative">
            <SettingsIcon className="h-12 w-12 text-primary animate-spin-slow" />
            <User className="h-6 w-6 text-accent absolute -bottom-1 -right-1" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Settings
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 space-y-6 bg-gradient-to-br from-white to-primary/5">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Profile Settings
            </h2>
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
              <Button onClick={handleSave} className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                Save Changes
              </Button>
            </div>
          </Card>

          <Card className="p-6 space-y-6 bg-gradient-to-br from-white to-accent/5">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Bell className="h-5 w-5 text-accent" />
              Preferences
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="notifications" className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  Enable Notifications
                </Label>
                <Switch id="notifications" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="darkMode" className="flex items-center gap-2">
                  <Moon className="h-4 w-4" />
                  Dark Mode
                </Label>
                <Switch id="darkMode" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="emailUpdates" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Updates
                </Label>
                <Switch id="emailUpdates" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;