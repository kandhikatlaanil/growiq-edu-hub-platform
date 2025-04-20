
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalClients: 0,
    activeSubscriptions: 0,
    pendingTickets: 0,
    monthlyRevenue: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      // Fetch total clients
      const { count: clientsCount } = await supabase
        .from("profiles")
        .select("*", { count: "exact" })
        .eq("role", "client");

      // Fetch active subscriptions
      const { count: subscriptionsCount } = await supabase
        .from("subscriptions")
        .select("*", { count: "exact" })
        .eq("status", "active");

      // Fetch pending tickets
      const { count: ticketsCount } = await supabase
        .from("tickets")
        .select("*", { count: "exact" })
        .eq("status", "open");

      setStats({
        totalClients: clientsCount || 0,
        activeSubscriptions: subscriptionsCount || 0,
        pendingTickets: ticketsCount || 0,
        monthlyRevenue: 0, // This would need more complex calculation
      });
    };

    fetchStats();
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalClients}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeSubscriptions}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pendingTickets}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{stats.monthlyRevenue.toLocaleString()}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
