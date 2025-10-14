"use client";
import React, { useState } from "react";
import { X, Minimize2, ChevronLeft, PanelRight } from "lucide-react";
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
      {/* Collapsed State - Floating Toggle Button */}
      {isCollapsed && (
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
          <button
            onClick={onToggleCollapse}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="group relative flex items-center justify-center w-12 h-12 bg-background border border-border shadow-lg rounded-l-full hover:bg-primary hover:border-primary transition-all duration-200"
            aria-label="Expand sidebar"
          >
            <PanelRight className="w-5 h-5 text-foreground group-hover:text-background transition-colors" />
            
            {/* Tooltip */}
            <div className="absolute right-full mr-2 px-2 py-1 bg-background text-foreground text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
              Show Trip Assets
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[6px] border-l-background border-b-[6px] border-b-transparent" />
            </div>
          </button>
        </div>
      )}

      {/* Sidebar Container */}
      <aside
        className={`bg-sidebar text-sidebar-foreground flex-shrink-0 flex flex-col relative transition-all duration-300 shadow-xl border-l border-secondary overflow-hidden
        ${
          isCollapsed
            ? "w-0 p-0"
            : "w-[var(--sidebar-w)] p-5"
        }`}
        onMouseEnter={() => !isCollapsed && setIsHovering(true)}
        onMouseLeave={() => !isCollapsed && setIsHovering(false)}
      >
        {/* Content */}
        {!isCollapsed && (
          <div className="flex flex-col flex-grow w-full h-full overflow-y-auto">
            {/* Header with Close/Minimize Button */}
            <div className="flex items-center justify-between h-12 mb-6 border-b border-border pb-4">
              <div className="flex items-center">
                <h2 className="text-xl font-semibold text-sidebar-foreground">
                  Trip Assets
                </h2>
              </div>
              
              {/* Close/Minimize Button - Positioned on right */}
              <div className="flex items-center space-x-2">
                {/* Optional: Minimize icon (if you want both options) */}
                {/* <button
                  onClick={onToggleCollapse}
                  className="p-2 hover:bg-accent rounded-lg transition-colors opacity-60 hover:opacity-100"
                  aria-label="Minimize sidebar"
                  title="Minimize"
                >
                  <Minimize2 className="w-4 h-4 text-muted-foreground" />
                </button> */}
                
                {/* Primary Close Button */}
                <button
                  onClick={onToggleCollapse}
                  className="p-2 hover:bg-destructive hover:text-destructive-foreground rounded-lg transition-all duration-200 group relative"
                  aria-label="Close sidebar"
                  title="Close Trip Assets"
                >
                  <X className="w-5 h-5" />
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-destructive/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-6">
              <TripAssets />
              <ExportAndShare />
              <TripNotes />
            </div>

            {/* Alternative: Floating close button on top-right corner */}
            {!isCollapsed && (
              <button
                onClick={onToggleCollapse}
                className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm hover:bg-destructive hover:text-destructive-foreground rounded-full shadow-lg transition-all duration-200 opacity-0 hover:opacity-100 group"
                aria-label="Close sidebar"
                title="Close"
              >
                <X className="w-5 h-5" />
                <div className="absolute -inset-1 bg-destructive/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            )}
          </div>
        )}
      </aside>

      {/* Overlay when sidebar is open (optional - for mobile/responsive) */}
      {!isCollapsed && (
        <div 
          className="fixed inset-0 bg-black/10 z-40 lg:hidden"
          onClick={onToggleCollapse}
        />
      )}
    </>
  );
};

export default RightSidebar;