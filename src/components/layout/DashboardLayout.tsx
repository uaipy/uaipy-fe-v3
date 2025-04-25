import { ReactNode, useState, useEffect } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(window.innerWidth < 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setSidebarCollapsed(mobile);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const contentClasses = cn(
    "min-h-screen bg-background text-foreground transition-all duration-300 ease-in-out",
    "container mx-auto py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-6",
    sidebarCollapsed ? "ml-[70px]" : "ml-[240px]",
    isMobile ? "ml-0" : ""
  );

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar 
        collapsed={sidebarCollapsed} 
        onCollapsedChange={setSidebarCollapsed}
        isMobile={isMobile}
      />
      <main className={contentClasses}>
        {children}
      </main>
    </div>
  );
} 