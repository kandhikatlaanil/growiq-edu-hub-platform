
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  Layout, 
  LayoutHeader, 
  LayoutContent, 
  LayoutSidebar 
} from "@/components/ui/layout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Users, 
  Package, 
  Settings, 
  CreditCard, 
  Mail, 
  Ticket, 
  LayoutDashboard, 
  LogOut 
} from "lucide-react";

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
}

const NavItem = ({ to, icon, label, active }: NavItemProps) => (
  <Link to={to} className="w-full">
    <Button
      variant={active ? "default" : "ghost"}
      className="w-full justify-start gap-2 mb-1"
    >
      {icon}
      <span>{label}</span>
    </Button>
  </Link>
);

interface ControlSystemLayoutProps {
  children: React.ReactNode;
  title: string;
}

const ControlSystemLayout = ({ children, title }: ControlSystemLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  // Simulate logout functionality
  const handleLogout = () => {
    // In a real app, you would clear auth state here
    navigate("/control-system/login");
  };

  return (
    <Layout>
      <LayoutHeader className="bg-primary text-primary-foreground py-4">
        <div className="container flex items-center justify-between">
          <Link to="/control-system" className="text-2xl font-bold">
            GrowIQ Control System
          </Link>
          <Button variant="outline" className="gap-2" onClick={handleLogout}>
            <LogOut size={16} />
            Logout
          </Button>
        </div>
      </LayoutHeader>
      <div className="container flex">
        <LayoutSidebar className="w-64 pt-6 pr-6">
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 px-4 text-lg font-semibold">Management</h3>
              <NavItem
                to="/control-system/admin"
                icon={<LayoutDashboard size={18} />}
                label="Dashboard"
                active={pathname === "/control-system/admin"}
              />
              <NavItem
                to="/control-system/clients"
                icon={<Users size={18} />}
                label="Clients"
                active={pathname === "/control-system/clients"}
              />
              <NavItem
                to="/control-system/products"
                icon={<Package size={18} />}
                label="Products"
                active={pathname === "/control-system/products"}
              />
            </div>
            
            <Separator />
            
            <div>
              <h3 className="mb-2 px-4 text-lg font-semibold">Operations</h3>
              <NavItem
                to="/control-system/automation"
                icon={<Settings size={18} />}
                label="Automation"
                active={pathname === "/control-system/automation"}
              />
              <NavItem
                to="/control-system/billing"
                icon={<CreditCard size={18} />}
                label="Billing"
                active={pathname === "/control-system/billing"}
              />
              <NavItem
                to="/control-system/communication"
                icon={<Mail size={18} />}
                label="Communication"
                active={pathname === "/control-system/communication"}
              />
              <NavItem
                to="/control-system/tickets"
                icon={<Ticket size={18} />}
                label="Ticketing"
                active={pathname === "/control-system/tickets"}
              />
            </div>
          </div>
        </LayoutSidebar>
        <LayoutContent className="flex-1 py-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          </div>
          {children}
        </LayoutContent>
      </div>
    </Layout>
  );
};

export default ControlSystemLayout;
