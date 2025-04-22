
import React from "react";
import ControlSystemLayout from "@/components/control-system/ControlSystemLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Edit, Trash } from "lucide-react";

const ClientManagement = () => {
  // Mock data for clients
  const clients = [
    { id: 1, name: "Acme School", email: "info@acmeschool.com", services: 3, status: "Active", dateJoined: "Jan 15, 2025" },
    { id: 2, name: "Bright Academy", email: "admin@brightacademy.org", services: 2, status: "Active", dateJoined: "Feb 03, 2025" },
    { id: 3, name: "Future College", email: "contact@futurecollege.edu", services: 5, status: "Active", dateJoined: "Dec 10, 2024" },
    { id: 4, name: "Global Learning", email: "support@globallearning.com", services: 1, status: "Inactive", dateJoined: "Mar 22, 2025" },
    { id: 5, name: "Tech University", email: "admin@techuniversity.edu", services: 4, status: "Active", dateJoined: "Feb 18, 2025" },
    { id: 6, name: "Wisdom Institute", email: "info@wisdominstitute.org", services: 2, status: "Pending", dateJoined: "Apr 05, 2025" },
    { id: 7, name: "Excel Education", email: "contact@exceledu.com", services: 3, status: "Active", dateJoined: "Jan 30, 2025" },
    { id: 8, name: "Knowledge Center", email: "admin@knowledgecenter.edu", services: 1, status: "Inactive", dateJoined: "Mar 11, 2025" },
  ];

  return (
    <ControlSystemLayout title="Client Management">
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-96">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search clients..." className="pl-8" />
        </div>
        <Button className="gap-1">
          <Plus className="h-4 w-4" />
          Add Client
        </Button>
      </div>
      
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Services</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date Joined</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell className="font-medium">{client.name}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>{client.services}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    client.status === "Active" 
                      ? "bg-green-100 text-green-800" 
                      : client.status === "Inactive" 
                        ? "bg-red-100 text-red-800" 
                        : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {client.status}
                  </span>
                </TableCell>
                <TableCell>{client.dateJoined}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-destructive">
                    <Trash className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="flex items-center justify-end mt-4 space-x-2">
        <Button variant="outline" size="sm">Previous</Button>
        <Button variant="outline" size="sm">Next</Button>
      </div>
    </ControlSystemLayout>
  );
};

export default ClientManagement;
