
import React from "react";
import ControlSystemLayout from "@/components/control-system/ControlSystemLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Download, FileText, Plus, DollarSign, ArrowUpRight } from "lucide-react";

const Billing = () => {
  return (
    <ControlSystemLayout title="Billing & Invoicing">
      <div className="flex justify-between items-center mb-6">
        <p className="text-muted-foreground">
          Manage invoices, payments, and subscription billing for your clients.
        </p>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-1">
            <FileText className="h-4 w-4" />
            Reports
          </Button>
          <Button className="gap-1">
            <Plus className="h-4 w-4" />
            Create Invoice
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$84,324.56</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">+12%</span> from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,435.89</div>
            <p className="text-xs text-muted-foreground mt-1">
              32 unpaid invoices
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">243</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">+8</span> this month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg. Value</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$347.22</div>
            <p className="text-xs text-muted-foreground mt-1">
              Per subscription
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="invoices">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
          <TabsTrigger value="gateways">Payment Gateways</TabsTrigger>
        </TabsList>
        
        <TabsContent value="invoices">
          <Card>
            <CardHeader>
              <CardTitle>Recent Invoices</CardTitle>
              <CardDescription>
                View and manage all client invoices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice #</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Issue Date</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { id: "INV-2025-001", client: "Acme School", amount: "$899.00", issueDate: "Apr 01, 2025", dueDate: "Apr 15, 2025", status: "Paid" },
                    { id: "INV-2025-002", client: "Bright Academy", amount: "$499.00", issueDate: "Apr 01, 2025", dueDate: "Apr 15, 2025", status: "Paid" },
                    { id: "INV-2025-003", client: "Future College", amount: "$1,499.00", issueDate: "Apr 02, 2025", dueDate: "Apr 16, 2025", status: "Pending" },
                    { id: "INV-2025-004", client: "Global Learning", amount: "$299.00", issueDate: "Apr 03, 2025", dueDate: "Apr 17, 2025", status: "Pending" },
                    { id: "INV-2025-005", client: "Tech University", amount: "$799.00", issueDate: "Apr 05, 2025", dueDate: "Apr 19, 2025", status: "Overdue" },
                    { id: "INV-2025-006", client: "Wisdom Institute", amount: "$399.00", issueDate: "Apr 07, 2025", dueDate: "Apr 21, 2025", status: "Pending" },
                  ].map((invoice, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{invoice.id}</TableCell>
                      <TableCell>{invoice.client}</TableCell>
                      <TableCell>{invoice.amount}</TableCell>
                      <TableCell>{invoice.issueDate}</TableCell>
                      <TableCell>{invoice.dueDate}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          invoice.status === "Paid" 
                            ? "bg-green-100 text-green-800" 
                            : invoice.status === "Overdue" 
                              ? "bg-red-100 text-red-800" 
                              : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {invoice.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="gap-1 h-8">
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="subscriptions">
          <Card>
            <CardHeader>
              <CardTitle>Active Subscriptions</CardTitle>
              <CardDescription>
                View and manage client subscription plans
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Client</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>Next Billing</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { client: "Acme School", product: "School Management", plan: "Standard", amount: "$499/mo", startDate: "Jan 15, 2025", nextBilling: "May 15, 2025", status: "Active" },
                    { client: "Bright Academy", product: "School Management", plan: "Basic", amount: "$299/mo", startDate: "Feb 01, 2025", nextBilling: "May 01, 2025", status: "Active" },
                    { client: "Future College", product: "College Management", plan: "Premium", amount: "$1,499/mo", startDate: "Nov 10, 2024", nextBilling: "May 10, 2025", status: "Active" },
                    { client: "Global Learning", product: "E-Learning", plan: "Basic", amount: "$199/mo", startDate: "Mar 22, 2025", nextBilling: "Apr 22, 2025", status: "Trial" },
                    { client: "Tech University", product: "College Management", plan: "Standard", amount: "$899/mo", startDate: "Dec 05, 2024", nextBilling: "May 05, 2025", status: "Active" },
                    { client: "Wisdom Institute", product: "E-Learning", plan: "Standard", amount: "$399/mo", startDate: "Apr 01, 2025", nextBilling: "May 01, 2025", status: "Active" },
                  ].map((subscription, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{subscription.client}</TableCell>
                      <TableCell>{subscription.product}</TableCell>
                      <TableCell>{subscription.plan}</TableCell>
                      <TableCell>{subscription.amount}</TableCell>
                      <TableCell>{subscription.startDate}</TableCell>
                      <TableCell>{subscription.nextBilling}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          subscription.status === "Active" 
                            ? "bg-green-100 text-green-800" 
                            : subscription.status === "Trial" 
                              ? "bg-blue-100 text-blue-800" 
                              : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {subscription.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Manage
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="gateways">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Stripe",
                description: "Process credit cards globally with Stripe payment processing",
                status: "Connected",
                lastPayment: "Apr 18, 2025",
                logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
              },
              {
                name: "Razorpay",
                description: "India's leading payment gateway for domestic transactions",
                status: "Connected",
                lastPayment: "Apr 15, 2025",
                logo: "https://razorpay.com/build/browser/static/razorpay-logo.7d8715ff.svg",
              },
              {
                name: "PayPal",
                description: "Accept PayPal payments and international transactions",
                status: "Not Connected",
                lastPayment: "Never",
                logo: "https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg",
              },
              {
                name: "Bank Transfer",
                description: "Manual bank transfer payment processing",
                status: "Active",
                lastPayment: "Apr 10, 2025",
                logo: "https://cdn-icons-png.flaticon.com/512/2830/2830284.png",
              },
            ].map((gateway, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-start justify-between">
                  <div>
                    <CardTitle>{gateway.name}</CardTitle>
                    <CardDescription>{gateway.description}</CardDescription>
                  </div>
                  <div className="h-12 w-12 flex items-center justify-center">
                    <img 
                      src={gateway.logo} 
                      alt={`${gateway.name} logo`} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 text-sm">
                      <span className="text-muted-foreground">Status:</span>
                      <span className={
                        gateway.status === "Connected" || gateway.status === "Active"
                          ? "text-green-600 font-medium"
                          : "text-muted-foreground"
                      }>
                        {gateway.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 text-sm">
                      <span className="text-muted-foreground">Last Payment:</span>
                      <span>{gateway.lastPayment}</span>
                    </div>
                  </div>
                </CardContent>
                <CardContent className="pt-0">
                  <Button variant={gateway.status === "Connected" || gateway.status === "Active" ? "outline" : "default"} className="w-full">
                    {gateway.status === "Connected" || gateway.status === "Active" ? "Configure" : "Connect"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </ControlSystemLayout>
  );
};

export default Billing;
