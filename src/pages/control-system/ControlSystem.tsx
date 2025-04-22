
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Package, Settings, CreditCard, Mail, Ticket, LayoutDashboard } from "lucide-react";

const ControlSystem = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container py-12">
        <div className="mb-8 space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">GrowIQ Control System</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Manage your products, clients, billing, and support in one place.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Link to="/control-system/login">
              <Button size="lg">Login</Button>
            </Link>
            <Link to="/control-system/register">
              <Button size="lg" variant="outline">Register</Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Client Management
              </CardTitle>
              <CardDescription>
                Register, manage, and monitor client accounts
              </CardDescription>
            </CardHeader>
            <CardContent>
              Streamline client registration, provide service dashboards, and manage user information.
            </CardContent>
            <CardFooter>
              <Link to="/control-system/clients" className="w-full">
                <Button className="w-full">Manage Clients</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Product Setup
              </CardTitle>
              <CardDescription>
                Configure and customize product offerings
              </CardDescription>
            </CardHeader>
            <CardContent>
              Create and manage product plans for School, College, and E-Learning software solutions.
            </CardContent>
            <CardFooter>
              <Link to="/control-system/products" className="w-full">
                <Button className="w-full">Setup Products</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Automation
              </CardTitle>
              <CardDescription>
                Automate service lifecycle management
              </CardDescription>
            </CardHeader>
            <CardContent>
              Automatically create, suspend, or terminate services based on client actions and billing status.
            </CardContent>
            <CardFooter>
              <Link to="/control-system/automation" className="w-full">
                <Button className="w-full">Manage Automation</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Billing & Invoicing
              </CardTitle>
              <CardDescription>
                Manage payments and invoices
              </CardDescription>
            </CardHeader>
            <CardContent>
              Process payments, generate invoices, and handle automatic billing through multiple payment gateways.
            </CardContent>
            <CardFooter>
              <Link to="/control-system/billing" className="w-full">
                <Button className="w-full">Billing Dashboard</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Communication
              </CardTitle>
              <CardDescription>
                Send automated notifications and alerts
              </CardDescription>
            </CardHeader>
            <CardContent>
              Set up email and SMS communications for welcome messages, alerts, expiration notices, and more.
            </CardContent>
            <CardFooter>
              <Link to="/control-system/communication" className="w-full">
                <Button className="w-full">Communication Center</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="flex items-center gap-2">
                <Ticket className="h-5 w-5" />
                Ticketing
              </CardTitle>
              <CardDescription>
                Manage support tickets and inquiries
              </CardDescription>
            </CardHeader>
            <CardContent>
              Allow clients to raise support tickets, track their progress, and efficiently resolve issues.
            </CardContent>
            <CardFooter>
              <Link to="/control-system/tickets" className="w-full">
                <Button className="w-full">Support Center</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="md:col-span-2 lg:col-span-3">
            <CardHeader className="space-y-1">
              <CardTitle className="flex items-center gap-2">
                <LayoutDashboard className="h-5 w-5" />
                Admin Dashboard
              </CardTitle>
              <CardDescription>
                Comprehensive system overview and management
              </CardDescription>
            </CardHeader>
            <CardContent>
              Access statistics, customer information, pending actions, and manage all aspects of your control system from a central dashboard.
            </CardContent>
            <CardFooter>
              <Link to="/control-system/admin" className="w-full">
                <Button className="w-full">Admin Dashboard</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ControlSystem;
