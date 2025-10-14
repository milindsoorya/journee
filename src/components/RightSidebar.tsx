"use client";
import React, { useState } from "react";
import { X, PanelRight } from "lucide-react";
import TripAssets from "./TripAssets";
import ExportAndShare from "./ExportAndShare";
import TripNotes from "./TripNotes";

interface RightSidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const RightSidebar: React.FC<RightSidebarProps> = ({
  isCollapsed,
  onToggleCollapse,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      {/* Collapsed State - Minimal Floating Toggle */}
      {isCollapsed && (
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
          <button
            onClick={onToggleCollapse}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="group relative flex items-center justify-center w-10 h-10 bg-background border border-border rounded-l-md hover:bg-primary hover:border-primary transition-all duration-200 shadow-sm"
            aria-label="Expand Trip Assets"
          >
            <PanelRight className="w-5 h-5 text-foreground group-hover:text-background transition-colors" />
            
            {/* Minimal Tooltip */}
            <div className="absolute right-full mr-2 px-2 py-1 bg-background text-foreground text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-md">
              Trip Assets
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-l-[5px] border-l-background border-b-[5px] border-b-transparent" />
            </div>
          </button>
        </div>
      )}

      {/* Sidebar Container - Clean */}
      <aside
        className={`bg-sidebar text-sidebar-foreground flex-shrink-0 flex flex-col relative transition-all duration-300 border-l border-border overflow-hidden
        ${
          isCollapsed
            ? "w-0 p-0"
            : "w-[var(--sidebar-w)] p-4"
        }`}
        onMouseEnter={() => !isCollapsed && setIsHovering(true)}
        onMouseLeave={() => !isCollapsed && setIsHovering(false)}
      >
        {/* Content */}
        {!isCollapsed && (
          <div className="flex flex-col flex-grow w-full h-full overflow-y-auto">
            {/* Minimal Header */}
            <div className="flex items-center justify-between py-3 mb-6 border-b border-border/30">
              <h2 className="text-lg font-semibold text-sidebar-foreground">
                Trip Assets
              </h2>
              
              {/* Single Close Button */}
              <button
                onClick={onToggleCollapse}
                className="p-2 hover:bg-destructive/10 hover:text-destructive rounded-md transition-colors group"
                aria-label="Close sidebar"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Clean Content Sections */}
            <div className="space-y-4">
              <TripAssets />
              <ExportAndShare />
              <TripNotes />
            </div>
          </div>
        )}
      </aside>

      {/* Minimal Mobile Overlay */}
      {!isCollapsed && (
        <div 
          className="fixed inset-0 bg-black/5 z-40 lg:hidden"
          onClick={onToggleCollapse}
        />
      )}
    </>
  );
};

export default RightSidebar;