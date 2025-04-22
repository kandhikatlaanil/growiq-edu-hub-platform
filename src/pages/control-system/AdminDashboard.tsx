
import React from "react";
import ControlSystemLayout from "@/components/control-system/ControlSystemLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Package, 
  Ticket, 
  CreditCard, 
  ArrowUp, 
  ArrowDown 
} from "lucide-react";

const AdminDashboard = () => {
  return (
    <ControlSystemLayout title="Admin Dashboard">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">145</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowUp className="h-3 w-3 mr-1 text-green-500" />
              <span className="text-green-500 font-medium">12%</span> from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Services</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">243</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowUp className="h-3 w-3 mr-1 text-green-500" />
              <span className="text-green-500 font-medium">8%</span> from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Support Tickets</CardTitle>
            <Ticket className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowDown className="h-3 w-3 mr-1 text-red-500" />
              <span className="text-red-500 font-medium">5%</span> from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,532</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowUp className="h-3 w-3 mr-1 text-green-500" />
              <span className="text-green-500 font-medium">18%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 mt-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[
                { name: "Acme School", email: "info@acmeschool.com", date: "Apr 15, 2025" },
                { name: "Bright Academy", email: "admin@brightacademy.org", date: "Apr 14, 2025" },
                { name: "Future College", email: "contact@futurecollege.edu", date: "Apr 12, 2025" },
                { name: "Global Learning", email: "support@globallearning.com", date: "Apr 10, 2025" },
                { name: "Tech University", email: "admin@techuniversity.edu", date: "Apr 8, 2025" }
              ].map((client, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div>
                    <p className="font-medium">{client.name}</p>
                    <p className="text-sm text-muted-foreground">{client.email}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">{client.date}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Pending Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[
                { action: "Approve new client", type: "Client", status: "Pending" },
                { action: "Resolve service issue", type: "Support", status: "Urgent" },
                { action: "Process payment", type: "Billing", status: "Pending" },
                { action: "Update product plan", type: "Product", status: "Pending" },
                { action: "Respond to inquiry", type: "Support", status: "Normal" }
              ].map((action, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div>
                    <p className="font-medium">{action.action}</p>
                    <p className="text-sm text-muted-foreground">{action.type}</p>
                  </div>
                  <div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      action.status === "Urgent" 
                        ? "bg-red-100 text-red-800" 
                        : action.status === "Pending" 
                          ? "bg-yellow-100 text-yellow-800" 
                          : "bg-blue-100 text-blue-800"
                    }`}>
                      {action.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </ControlSystemLayout>
  );
};

export default AdminDashboard;
