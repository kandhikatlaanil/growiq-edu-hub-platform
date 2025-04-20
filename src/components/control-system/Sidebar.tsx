
import { NavLink } from "react-router-dom";
import { Home, Users, Package, CreditCard, Ticket } from "lucide-react";

export default function Sidebar() {
  const links = [
    { to: "/control-system/dashboard", icon: Home, label: "Dashboard" },
    { to: "/control-system/clients", icon: Users, label: "Clients" },
    { to: "/control-system/products", icon: Package, label: "Products" },
    { to: "/control-system/billing", icon: CreditCard, label: "Billing" },
    { to: "/control-system/support", icon: Ticket, label: "Support" },
  ];

  return (
    <aside className="bg-gray-800 text-white w-64 flex-shrink-0">
      <div className="p-6">
        <h2 className="text-xl font-semibold">GrowIQ</h2>
      </div>
      <nav className="mt-6">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-6 py-3 text-sm ${
                isActive
                  ? "bg-gray-900 border-l-4 border-blue-500"
                  : "hover:bg-gray-700"
              }`
            }
          >
            <link.icon className="h-5 w-5" />
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
