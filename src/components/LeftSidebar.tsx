"use client";
import React, { useState } from "react";
import { X, PanelLeft } from "lucide-react";
import DefaultView from "./DefaultView";
import UserProfile from "./UserProfile";
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
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Mobile full-screen sidebar
  if (isMobileOpen && !isCollapsed) {
    return (
      <div className="fixed inset-0 z-50 bg-background flex flex-col md:hidden">
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 border-b border-subtle">
          <div className="flex items-center gap-3">
            <ThemeToggler />
            <h2 className="text-xl font-semibold text-foreground">Journée</h2>
          </div>
          <button
            onClick={onMobileClose}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>
        
        {/* Mobile Content */}
        <div className="relative flex-1 overflow-y-auto p-4">
          {isProfileOpen ? (
            <UserProfile onClose={() => setIsProfileOpen(false)} />
          ) : (
            <DefaultView onProfileToggle={() => setIsProfileOpen(true)} />
          )}
        </div>
      </div>
    );
  }

  // Desktop floating toggle (only show when collapsed on desktop)
  if (isCollapsed && !isMobileOpen) {
    return (
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <button
          onClick={onToggleCollapse}
          className="group flex items-center justify-center w-12 h-12 bg-primary border border-primary rounded-r-full hover:bg-primary/90 transition-all duration-200 shadow-lg"
        >
          <PanelLeft className="w-5 h-5 text-primary-foreground" />
        </button>
      </div>
    );
  }

  // Desktop sidebar
  return (
    <aside className="relative bg-secondary text-secondary-foreground flex-shrink-0 flex flex-col border-r border-subtle hidden lg:block w-[var(--sidebar-w)] p-4">
      <div className="relative flex flex-col flex-grow h-full overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between py-3 mb-6 border-b border-subtle">
          <div className="flex items-center gap-3">
            <ThemeToggler />
            <h2 className="text-lg font-semibold text-secondary-foreground">Journée</h2>
          </div>
          <button
            onClick={onToggleCollapse}
            className="p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-md transition-colors"
          >
            <X className="w-4 h-4 text-secondary-foreground" />
          </button>
        </div>
        
        {/* Content */}
        {isProfileOpen ? (
          <UserProfile onClose={() => setIsProfileOpen(false)} />
        ) : (
          <DefaultView onProfileToggle={() => setIsProfileOpen(true)} />
        )}
      </div>
    </aside>
  );
};

export default LeftSidebar;
