"use client";
import React, { useState } from "react";
import { X, PanelLeft } from "lucide-react";
import DefaultView from "./DefaultView";
import ThemeToggler from "./ThemeToggler";

interface LeftSidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({
  isCollapsed,
  onToggleCollapse,
  isMobileOpen = false,
  onMobileClose,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mobile full-screen sidebar
  if (isMobileOpen && !isCollapsed) {
    return (
      <div className="fixed inset-0 z-50 bg-sidebar flex flex-col md:hidden">
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 border-b border-border/30 bg-sidebar">
          <div className="flex items-center gap-3">
            <ThemeToggler />
            <h2 className="text-xl font-semibold text-sidebar-foreground">Journée</h2>
          </div>
          <button
            onClick={onToggleCollapse}
            className="p-2 rounded-lg hover:bg-accent/20 transition-colors"
          >
            <X className="w-5 h-5 text-sidebar-foreground" />
          </button>
        </div>
        
        {/* Mobile Content */}
        <div className="flex-1 overflow-y-auto p-4">
          <DefaultView
            onToggleCollapse={onToggleCollapse}
            onMenuOpen={() => setIsMenuOpen(true)}
          />
        </div>
      </div>
    );
  }

  // Desktop floating toggle (only show when collapsed on desktop)
  if (isCollapsed) {
    return (
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <button
          onClick={onToggleCollapse}
          className="group flex items-center justify-center w-12 h-12 bg-background border border-border rounded-r-full hover:bg-primary hover:border-primary transition-all duration-200 shadow-lg"
        >
          <PanelLeft className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
        </button>
      </div>
    );
  }

  // Desktop sidebar
  return (
    <aside className="bg-sidebar text-sidebar-foreground flex-shrink-0 flex flex-col border-r border-border hidden lg:block w-[var(--sidebar-w)] p-4">
      <div className="flex flex-col flex-grow h-full overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between py-3 mb-6 border-b border-border/30">
          <div className="flex items-center gap-3">
            <ThemeToggler />
            <h2 className="text-lg font-semibold text-sidebar-foreground">Journée</h2>
          </div>
          <button
            onClick={onToggleCollapse}
            className="p-2 hover:bg-destructive/10 rounded-md transition-colors"
          >
            <X className="w-4 h-4 text-sidebar-foreground" />
          </button>
        </div>
        
        {/* Content */}
        <DefaultView
          onToggleCollapse={onToggleCollapse}
          onMenuOpen={() => setIsMenuOpen(true)}
        />
      </div>
    </aside>
  );
};

export default LeftSidebar;