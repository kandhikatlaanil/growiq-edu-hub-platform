
import React from "react";
import ControlSystemLayout from "@/components/control-system/ControlSystemLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Mail, Plus, MessageSquare, Bell, Clock, Edit, Send, Eye } from "lucide-react";

const Communication = () => {
  return (
    <ControlSystemLayout title="Communication Center">
      <div className="flex justify-between items-center mb-6">
        <p className="text-muted-foreground">
          Manage all client communications, including emails, SMS notifications, and system alerts.
        </p>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-1">
            <Bell className="h-4 w-4" />
            View Templates
          </Button>
          <Button className="gap-1">
            <Plus className="h-4 w-4" />
            New Message
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="emails">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="emails">Email Communications</TabsTrigger>
          <TabsTrigger value="sms">SMS Notifications</TabsTrigger>
          <TabsTrigger value="automations">Automated Messages</TabsTrigger>
        </TabsList>
        
        <TabsContent value="emails">
          <Card>
            <CardHeader>
              <CardTitle>Email History</CardTitle>
              <CardDescription>
                View and manage all email communications with clients
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead>Recipient</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Sent Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { subject: "Welcome to GrowIQ School Management", recipient: "info@acmeschool.com", type: "Welcome", sentDate: "Apr 18, 2025", status: "Delivered" },
                    { subject: "Your Invoice #INV-2025-001 is Due", recipient: "billing@brightacademy.org", type: "Invoice", sentDate: "Apr 15, 2025", status: "Opened" },
                    { subject: "Important: Service Update Notification", recipient: "admin@futurecollege.edu", type: "Service", sentDate: "Apr 14, 2025", status: "Delivered" },
                    { subject: "Your Support Ticket #1234 Has Been Resolved", recipient: "support@globallearning.com", type: "Support", sentDate: "Apr 12, 2025", status: "Not Opened" },
                    { subject: "Subscription Renewal Reminder", recipient: "admin@techuniversity.edu", type: "Billing", sentDate: "Apr 10, 2025", status: "Opened" },
                    { subject: "New Feature Announcement: Analytics Dashboard", recipient: "All Clients", type: "Marketing", sentDate: "Apr 08, 2025", status: "Delivered" },
                  ].map((email, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{email.subject}</TableCell>
                      <TableCell>{email.recipient}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          email.type === "Welcome" 
                            ? "bg-blue-100 text-blue-800"
                            : email.type === "Invoice" || email.type === "Billing"
                              ? "bg-purple-100 text-purple-800"
                              : email.type === "Service"
                                ? "bg-orange-100 text-orange-800"
                                : email.type === "Support"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-gray-100 text-gray-800"
                        }`}>
                          {email.type}
                        </span>
                      </TableCell>
                      <TableCell>{email.sentDate}</TableCell>
                      <TableCell>
                        <span className={`flex items-center gap-1 ${
                          email.status === "Opened" 
                            ? "text-green-600"
                            : email.status === "Not Opened" 
                              ? "text-yellow-600"
                              : "text-muted-foreground"
                        }`}>
                          {email.status === "Opened" && <Eye className="h-3 w-3" />}
                          {email.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Send className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Showing 6 of 243 emails
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="sms">
          <Card>
            <CardHeader>
              <CardTitle>SMS Notifications</CardTitle>
              <CardDescription>
                View and manage SMS communications with clients
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Message</TableHead>
                    <TableHead>Recipient</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Sent Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { message: "Your invoice #INV-2025-005 is due tomorrow", recipient: "+1 (555) 123-4567", type: "Reminder", sentDate: "Apr 18, 2025", status: "Delivered" },
                    { message: "Your support ticket #1234 has been updated", recipient: "+1 (555) 234-5678", type: "Support", sentDate: "Apr 17, 2025", status: "Delivered" },
                    { message: "Service maintenance scheduled for April 20", recipient: "+1 (555) 345-6789", type: "Alert", sentDate: "Apr 15, 2025", status: "Failed" },
                    { message: "Your payment was successful", recipient: "+1 (555) 456-7890", type: "Payment", sentDate: "Apr 14, 2025", status: "Delivered" },
                    { message: "Your account has been activated", recipient: "+1 (555) 567-8901", type: "Account", sentDate: "Apr 12, 2025", status: "Delivered" },
                  ].map((sms, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium max-w-[300px] truncate">{sms.message}</TableCell>
                      <TableCell>{sms.recipient}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          sms.type === "Alert" 
                            ? "bg-red-100 text-red-800"
                            : sms.type === "Payment"
                              ? "bg-green-100 text-green-800"
                              : sms.type === "Reminder"
                                ? "bg-yellow-100 text-yellow-800"
                                : sms.type === "Support"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-gray-100 text-gray-800"
                        }`}>
                          {sms.type}
                        </span>
                      </TableCell>
                      <TableCell>{sms.sentDate}</TableCell>
                      <TableCell>
                        <span className={`${
                          sms.status === "Delivered" 
                            ? "text-green-600"
                            : sms.status === "Failed" 
                              ? "text-red-600"
                              : "text-muted-foreground"
                        }`}>
                          {sms.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Send className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="automations">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Welcome Email",
                description: "Sent automatically when a new client registers",
                trigger: "New Registration",
                deliveryChannel: "Email",
                lastSent: "Apr 18, 2025",
                status: "Active",
              },
              {
                title: "Invoice Reminder",
                description: "Sent 3 days before invoice due date",
                trigger: "Schedule (3 days before due)",
                deliveryChannel: "Email + SMS",
                lastSent: "Apr 15, 2025",
                status: "Active",
              },
              {
                title: "Payment Confirmation",
                description: "Sent when a payment is successfully processed",
                trigger: "Payment Successful",
                deliveryChannel: "Email",
                lastSent: "Apr 14, 2025",
                status: "Active",
              },
              {
                title: "Service Expiry Warning",
                description: "Sent 7 days before service expiration",
                trigger: "Schedule (7 days before expiry)",
                deliveryChannel: "Email + SMS",
                lastSent: "Apr 12, 2025",
                status: "Active",
              },
              {
                title: "Service Suspended Notice",
                description: "Sent when a service is suspended due to non-payment",
                trigger: "Service Suspension",
                deliveryChannel: "Email",
                lastSent: "Apr 10, 2025",
                status: "Active",
              },
              {
                title: "Support Ticket Updates",
                description: "Sent when there are updates to a support ticket",
                trigger: "Ticket Update",
                deliveryChannel: "Email",
                lastSent: "Apr 8, 2025",
                status: "Active",
              },
            ].map((automation, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle>{automation.title}</CardTitle>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      automation.status === "Active" 
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}>
                      {automation.status}
                    </span>
                  </div>
                  <CardDescription>{automation.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-2">
                      <span className="text-muted-foreground">Trigger:</span>
                      <span className="flex items-center gap-1">
                        {automation.trigger.includes("Schedule") ? (
                          <Clock className="h-3.5 w-3.5" />
                        ) : (
                          <Bell className="h-3.5 w-3.5" />
                        )}
                        {automation.trigger}
                      </span>
                    </div>
                    <div className="grid grid-cols-2">
                      <span className="text-muted-foreground">Channel:</span>
                      <span className="flex items-center gap-1">
                        {automation.deliveryChannel.includes("Email") && (
                          <Mail className="h-3.5 w-3.5" />
                        )}
                        {automation.deliveryChannel.includes("SMS") && (
                          <MessageSquare className="h-3.5 w-3.5" />
                        )}
                        {automation.deliveryChannel}
                      </span>
                    </div>
                    <div className="grid grid-cols-2">
                      <span className="text-muted-foreground">Last Sent:</span>
                      <span>{automation.lastSent}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" className="gap-1">
                    <Eye className="h-4 w-4" />
                    Preview
                  </Button>
                  <Button className="gap-1">
                    <Edit className="h-4 w-4" />
                    Edit
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </ControlSystemLayout>
  );
};

export default Communication;
