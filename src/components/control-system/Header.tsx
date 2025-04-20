
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

export default function Header() {
  const [notifications, setNotifications] = useState<number>(0);

  useEffect(() => {
    const fetchNotifications = async () => {
      const { count } = await supabase
        .from("notifications")
        .select("*", { count: "exact" })
        .eq("read", false)
        .eq("user_id", (await supabase.auth.getUser()).data.user?.id);

      setNotifications(count || 0);
    };

    fetchNotifications();
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Control System</h1>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            {notifications > 0 && (
              <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                {notifications}
              </span>
            )}
          </Button>
          <Button onClick={handleSignOut}>Sign Out</Button>
        </div>
      </div>
    </header>
  );
}
