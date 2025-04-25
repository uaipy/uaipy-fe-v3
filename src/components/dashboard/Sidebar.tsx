import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  LayoutDashboard, 
  Gauge,
  Settings, 
  ChevronLeft,
  ChevronRight,
  X,
  Menu
} from "lucide-react";
import logo from "@/assets/logo.svg";

interface SidebarProps {
  collapsed: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  isMobile: boolean;
}

type SidebarItem = {
  icon: React.ElementType;
  label: string;
  path: string;
  active?: boolean;
};

const mainNavItems: SidebarItem[] = [
  { icon: LayoutDashboard, label: "Painel", path: "/dashboard" },
  { icon: Gauge, label: "Análise", path: "/analytics" },
];

const secondaryNavItems: SidebarItem[] = [
  { icon: Settings, label: "Configurações", path: "/settings" },
];

export function Sidebar({ collapsed, onCollapsedChange, isMobile }: SidebarProps) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(!isMobile);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    onCollapsedChange?.(!collapsed);
  };

  const sidebarClasses = cn(
    "h-screen fixed left-0 top-0 z-30 flex flex-col bg-sidebar text-sidebar-foreground transition-all duration-300 ease-in-out",
    collapsed ? "w-[70px]" : "w-[240px]",
    isMobile ? (isOpen ? 'translate-x-0' : '-translate-x-full') : ''
  );

  const logoClasses = cn(
    "text-sidebar-foreground font-medium flex items-center transition-all duration-300 px-4 h-16",
    collapsed ? "justify-center" : "justify-start"
  );

  if (!isMobile) {
    return (
      <aside className={sidebarClasses}>
        <div className={logoClasses}>
          {collapsed ? (
            <div className="w-8 h-8 rounded-full bg-sidebar-primary perfect-center text-white font-bold">
              I
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full perfect-center text-white font-bold">
                <img src={logo} alt="UaiPY IoT" className="w-full h-full object-cover" />
              </div>
              <span className="text-lg font-semibold">UaiPY IoT</span>
            </div>
          )}
        </div>
        
        <div className="relative flex-1 flex flex-col overflow-y-auto">
          <nav className="flex-1 px-2 py-4 space-y-1">
            {mainNavItems.map((item) => (
              <NavItem 
                key={item.path} 
                item={{
                  ...item,
                  active: location.pathname === item.path
                }} 
                collapsed={collapsed} 
              />
            ))}
            
            <Separator className="my-4 bg-sidebar-border" />
            
            {secondaryNavItems.map((item) => (
              <NavItem 
                key={item.path} 
                item={{
                  ...item,
                  active: location.pathname === item.path
                }} 
                collapsed={collapsed} 
              />
            ))}
          </nav>
        </div>
        
        <div className="p-2 border-t border-sidebar-border">
          <Button 
            variant="ghost" 
            size="icon" 
            className="w-full h-10 justify-center text-sidebar-foreground hover:bg-sidebar-accent"
            onClick={() => onCollapsedChange?.(!collapsed)}
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </Button>
        </div>
      </aside>
    );
  } else {
    return (
      <>
        {/* Mobile Toggle Button */}
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 right-4 z-50 md:hidden"
          onClick={toggleSidebar}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        <nav
          className={`
            fixed top-0 left-0 h-full
            bg-background border-r
            transition-all duration-300 ease-in-out
            z-40
            ${isMobile ? (isOpen ? 'translate-x-0' : '-translate-x-full') : ''}
            ${collapsed ? 'w-[70px]' : 'w-[240px]'}
          `}
        >
          <div className="flex flex-col h-full">
            <div className="p-4 h-14 flex items-center justify-between">
              {!collapsed && <span className="font-semibold">Menu</span>}
              {!isMobile && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onCollapsedChange?.(!collapsed)}
                >
                  {collapsed ? (
                    <ChevronRight className="h-4 w-4" />
                  ) : (
                    <ChevronLeft className="h-4 w-4" />
                  )}
                </Button>
              )}
            </div>

            {/* Rest of the Sidebar content */}
            <div className="flex-1 flex flex-col gap-6 px-2 py-4">
              <div className="flex flex-col gap-1">
                {mainNavItems.map((item) => (
                  <Button
                    key={item.path}
                    variant={location.pathname === item.path ? "secondary" : "ghost"}
                    className={`justify-start ${collapsed ? 'px-2' : ''}`}
                    asChild
                  >
                    <Link to={item.path}>
                      <item.icon className={`h-4 w-4 ${!collapsed && 'mr-2'}`} />
                      {!collapsed && item.label}
                    </Link>
                  </Button>
                ))}
              </div>

              <div className="flex flex-col gap-1">
                {secondaryNavItems.map((item) => (
                  <Button
                    key={item.path}
                    variant={location.pathname === item.path ? "secondary" : "ghost"}
                    className={`justify-start ${collapsed ? 'px-2' : ''}`}
                    asChild
                  >
                    <Link to={item.path}>
                      <item.icon className={`h-4 w-4 ${!collapsed && 'mr-2'}`} />
                      {!collapsed && item.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Overlay for mobile */}
        {isMobile && isOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={toggleSidebar}
          />
        )}
      </>
    );
  }
}

function NavItem({ item, collapsed }: { item: SidebarItem; collapsed: boolean }) {
  const { icon: Icon, label, path, active } = item;
  
  const classes = cn(
    "group flex items-center px-3 py-2 text-sm rounded-md transition-all duration-200",
    active 
      ? "bg-sidebar-accent text-sidebar-primary font-medium" 
      : "text-sidebar-foreground hover:bg-sidebar-accent/50",
    collapsed ? "justify-center" : "justify-start"
  );

  const iconClasses = cn(
    "flex-shrink-0 transition-transform duration-200",
    active ? "text-sidebar-primary" : "text-sidebar-foreground",
    collapsed ? "w-5 h-5" : "w-5 h-5 mr-3"
  );
  
  return (
    <Link to={path} className={classes}>
      <Icon className={iconClasses} />
      {!collapsed && <span className="truncate">{label}</span>}
      {collapsed && (
        <div className="absolute left-full ml-2 p-2 rounded-md bg-sidebar-accent text-sidebar-foreground text-xs whitespace-nowrap opacity-0 translate-x-1 shadow-lg pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
          {label}
        </div>
      )}
    </Link>
  );
}
