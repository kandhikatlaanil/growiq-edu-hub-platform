
import React from "react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className={cn("min-h-screen flex flex-col", className)}>
      {children}
    </div>
  );
}

interface LayoutHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function LayoutHeader({ children, className }: LayoutHeaderProps) {
  return (
    <header className={cn("border-b sticky top-0 z-50 bg-background", className)}>
      {children}
    </header>
  );
}

interface LayoutContentProps {
  children: React.ReactNode;
  className?: string;
}

export function LayoutContent({ children, className }: LayoutContentProps) {
  return (
    <main className={cn("flex-1", className)}>
      {children}
    </main>
  );
}

interface LayoutSidebarProps {
  children: React.ReactNode;
  className?: string;
}

export function LayoutSidebar({ children, className }: LayoutSidebarProps) {
  return (
    <aside className={cn("border-r", className)}>
      {children}
    </aside>
  );
}

interface LayoutFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function LayoutFooter({ children, className }: LayoutFooterProps) {
  return (
    <footer className={cn("border-t", className)}>
      {children}
    </footer>
  );
}
