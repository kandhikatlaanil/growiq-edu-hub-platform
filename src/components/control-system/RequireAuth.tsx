
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

// Define allowed roles
type UserRole = "admin" | "case_team" | "accounts_team" | "technician" | "super_admin" | "system_admin" | "client";
const ACCESS_RULES: Record<string, UserRole[]> = {
  "/control-system/admin": ["admin", "super_admin", "system_admin"],
  "/control-system/clients": ["admin", "super_admin", "system_admin", "accounts_team"],
  "/control-system/products": ["admin", "super_admin", "system_admin", "accounts_team"],
  "/control-system/automation": ["admin", "super_admin", "system_admin", "technician"],
  "/control-system/billing": ["admin", "super_admin", "system_admin", "accounts_team"],
  "/control-system/communication": ["admin", "super_admin", "system_admin", "accounts_team", "case_team", "technician"],
  "/control-system/tickets": ["admin", "super_admin", "system_admin", "case_team", "technician"],
};

const fallbackRolesForPath = (pathname: string): UserRole[] => {
  if (pathname.startsWith("/control-system/clients")) {
    return ACCESS_RULES["/control-system/clients"];
  }
  if (pathname.startsWith("/control-system/products")) {
    return ACCESS_RULES["/control-system/products"];
  }
  if (pathname.startsWith("/control-system/automation")) {
    return ACCESS_RULES["/control-system/automation"];
  }
  if (pathname.startsWith("/control-system/billing")) {
    return ACCESS_RULES["/control-system/billing"];
  }
  if (pathname.startsWith("/control-system/communication")) {
    return ACCESS_RULES["/control-system/communication"];
  }
  if (pathname.startsWith("/control-system/tickets")) {
    return ACCESS_RULES["/control-system/tickets"];
  }
  // Default: for admin dashboard or any new features, restrict to admin+
  return ACCESS_RULES["/control-system/admin"];
};

/**
 * Auth wrapper that:
 * - checks if user is logged in,
 * - fetches role from profiles,
 * - verifies route-based access,
 * - redirects or blocks as necessary.
 */
const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<UserRole | null>(null);

  useEffect(() => {
    let isMounted = true;

    const checkAuth = async () => {
      setLoading(true);

      // 1. Check session
      const { data: { session } } = await supabase.auth.getSession();
      if (!session || !session.user) {
        navigate("/control-system/login", { replace: true, state: { from: location.pathname } });
        return;
      }

      // 2. Fetch role from profiles
      const { data, error } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", session.user.id)
        .single();

      if (error || !data?.role) {
        setRole(null);
        setLoading(false);
        return;
      }

      if (isMounted) {
        setRole(data.role as UserRole);
        setLoading(false);
      }
    };

    checkAuth();
    return () => { isMounted = false; };
    // Only fire on mount or route change
    // eslint-disable-next-line
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] w-full">
        <Loader2 className="animate-spin h-8 w-8 text-primary" />
        <p className="mt-6 text-muted-foreground">Checking access...</p>
      </div>
    );
  }

  // Role check
  const allowedRoles = fallbackRolesForPath(location.pathname);
  if (!role || !allowedRoles.includes(role)) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] w-full">
        <div className="rounded-lg p-6 bg-destructive/10 border border-destructive text-destructive max-w-md text-center">
          <h2 className="font-bold text-lg mb-2">Unauthorized</h2>
          <p>You do not have permission to access this page.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default RequireAuth;
