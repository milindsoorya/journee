"use client";
import React from "react";
import { X, PanelRight } from "lucide-react";
import TripAssets from "./TripAssets";
import ExportAndShare from "./ExportAndShare";
import TripNotes from "./TripNotes";

interface RightSidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}

const RightSidebar: React.FC<RightSidebarProps> = ({
  isCollapsed,
  onToggleCollapse,
  isMobileOpen = false,
}) => {
  // Mobile full-screen sidebar
  if (isMobileOpen && !isCollapsed) {
    return (
      <div className="fixed inset-0 z-50 bg-background flex flex-col md:hidden">
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 border-b border-subtle">
          <h2 className="text-xl font-semibold text-foreground">Trip Assets</h2>
          <button
            onClick={onToggleCollapse}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>
        
        {/* Mobile Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <TripAssets />
          <ExportAndShare />
          <TripNotes />
        </div>
      </div>
    );
  }

  // Desktop floating toggle
  if (isCollapsed && !isMobileOpen) {
    return (
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <button
          onClick={onToggleCollapse}
          className="group flex items-center justify-center w-12 h-12 bg-primary border border-primary rounded-l-full hover:bg-primary/90 transition-all duration-200 shadow-lg"
        >
          <PanelRight className="w-5 h-5 text-primary-foreground" />
        </button>
      </div>
    );
  }

  // Desktop sidebar
  return (
    <aside className="bg-secondary text-secondary-foreground flex-shrink-0 flex flex-col border-l border-subtle hidden lg:block w-[var(--right-sidebar-w)] p-4">
      <div className="flex flex-col flex-grow h-full overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between py-3 mb-6 border-b border-subtle">
          <h2 className="text-lg font-semibold text-secondary-foreground">Trip Assets</h2>
          <button
            onClick={onToggleCollapse}
            className="p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-md transition-colors"
          >
            <X className="w-4 h-4 text-secondary-foreground" />
          </button>
        </div>
        
        {/* Content */}
        <div className="space-y-4">
          <TripAssets />
          <ExportAndShare />
          <TripNotes />
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;