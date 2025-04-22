
import React from "react";
import ControlSystemLayout from "@/components/control-system/ControlSystemLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Ticket, 
  Plus, 
  Search, 
  MessageSquare, 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  AlertCircle, 
  Eye 
} from "lucide-react";

const Ticketing = () => {
  return (
    <ControlSystemLayout title="Support Ticketing">
      <div className="flex justify-between items-center mb-6">
        <p className="text-muted-foreground">
          Manage client support requests, track ticket status, and provide timely responses.
        </p>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-1">
            <CheckCircle className="h-4 w-4" />
            My Assigned
          </Button>
          <Button className="gap-1">
            <Plus className="h-4 w-4" />
            New Ticket
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Tickets</CardTitle>
            <Ticket className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">243</div>
            <p className="text-xs text-muted-foreground mt-1">
              All time tickets
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Open</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">-5%</span> from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground mt-1">
              Awaiting response
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Response Time</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4h</div>
            <p className="text-xs text-muted-foreground mt-1">
              Average first response
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="open">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="open">Open (32)</TabsTrigger>
          <TabsTrigger value="progress">In Progress (18)</TabsTrigger>
          <TabsTrigger value="urgent">Urgent (5)</TabsTrigger>
          <TabsTrigger value="closed">Closed (188)</TabsTrigger>
        </TabsList>
        
        <TabsContent value="open">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Open Tickets</CardTitle>
                  <CardDescription>
                    Support tickets waiting to be assigned or processed
                  </CardDescription>
                </div>
                <div className="relative w-64">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input 
                    placeholder="Search tickets..." 
                    className="pl-8 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ticket ID</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Assigned To</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { id: "TKT-2025-001", subject: "Can't access Student Portal", client: "Acme School", priority: "High", created: "Apr 18, 2025 (3h ago)", assigned: "Unassigned" },
                    { id: "TKT-2025-002", subject: "Billing discrepancy for April invoice", client: "Bright Academy", priority: "Medium", created: "Apr 18, 2025 (5h ago)", assigned: "Unassigned" },
                    { id: "TKT-2025-003", subject: "Need help with new faculty onboarding", client: "Future College", priority: "Low", created: "Apr 17, 2025 (1d ago)", assigned: "Jane Smith" },
                    { id: "TKT-2025-004", subject: "Error uploading course materials", client: "Global Learning", priority: "Medium", created: "Apr 17, 2025 (1d ago)", assigned: "Unassigned" },
                    { id: "TKT-2025-005", subject: "Student registration issue", client: "Tech University", priority: "High", created: "Apr 16, 2025 (2d ago)", assigned: "John Doe" },
                    { id: "TKT-2025-006", subject: "Payment gateway integration", client: "Wisdom Institute", priority: "Medium", created: "Apr 16, 2025 (2d ago)", assigned: "Unassigned" },
                  ].map((ticket, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{ticket.id}</TableCell>
                      <TableCell>{ticket.subject}</TableCell>
                      <TableCell>{ticket.client}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                          ticket.priority === "High" 
                            ? "bg-red-100 text-red-800" 
                            : ticket.priority === "Medium" 
                              ? "bg-yellow-100 text-yellow-800" 
                              : "bg-green-100 text-green-800"
                        }`}>
                          {ticket.priority === "High" && <AlertCircle className="h-3 w-3 mr-1" />}
                          {ticket.priority === "Medium" && <AlertTriangle className="h-3 w-3 mr-1" />}
                          {ticket.priority === "Low" && <Clock className="h-3 w-3 mr-1" />}
                          {ticket.priority}
                        </span>
                      </TableCell>
                      <TableCell>{ticket.created}</TableCell>
                      <TableCell>
                        <span className={ticket.assigned === "Unassigned" ? "text-muted-foreground" : ""}>
                          {ticket.assigned}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="gap-1 h-8">
                          <Eye className="h-4 w-4" />
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="progress">
          <Card>
            <CardHeader>
              <CardTitle>In Progress Tickets</CardTitle>
              <CardDescription>
                Support tickets currently being worked on
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-12">
                Switch to the "Open" tab to view active tickets
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="urgent">
          <Card>
            <CardHeader>
              <CardTitle>Urgent Tickets</CardTitle>
              <CardDescription>
                High priority tickets requiring immediate attention
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-12">
                Switch to the "Open" tab to view active tickets
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="closed">
          <Card>
            <CardHeader>
              <CardTitle>Closed Tickets</CardTitle>
              <CardDescription>
                Support tickets that have been resolved
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-12">
                Switch to the "Open" tab to view active tickets
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </ControlSystemLayout>
  );
};

export default Ticketing;
