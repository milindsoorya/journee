"use client";
import React, { useState } from "react";
import { X, PanelLeft, Menu } from "lucide-react";
import DefaultView from "./DefaultView";
import UserProfile from "./UserProfile";
import ThemeToggler from "./ThemeToggler";

interface LeftSidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({
  isCollapsed,
  onToggleCollapse,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Collapsed State - Floating Toggle Button */}
      {isCollapsed && (
        <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
          <button
            onClick={onToggleCollapse}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="group relative flex items-center justify-center w-12 h-12 bg-background border border-border shadow-lg rounded-r-full hover:bg-primary hover:border-primary transition-all duration-200"
            aria-label="Expand sidebar"
          >
            <PanelLeft className="w-5 h-5 text-foreground group-hover:text-background transition-colors" />
            
            {/* Tooltip */}
            <div className="absolute left-full ml-2 px-2 py-1 bg-background text-foreground text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
              Navigation Menu
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-r-[6px] border-r-background border-b-[6px] border-b-transparent" />
            </div>
          </button>
        </div>
      )}

      {/* Sidebar Container */}
      <aside
        className={`bg-sidebar text-sidebar-foreground flex-shrink-0 flex flex-col relative transition-all duration-300 shadow-xl border-r border-secondary overflow-hidden
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
            {/* Header with ThemeToggler, Title, and Close Button */}
            <div className="flex items-center justify-between h-12 mb-6 border-b border-border pb-4">
              <div className="flex items-center gap-3">
                {/* Theme Toggler - Same level as title */}
                <ThemeToggler />
                
                {/* Title */}
                <h2 className="text-xl font-semibold text-sidebar-foreground">
                  Journée
                </h2>
              </div>
              
              {/* Close Button */}
              <button
                onClick={onToggleCollapse}
                className="p-2 hover:bg-destructive hover:text-destructive-foreground rounded-lg transition-all duration-200 group relative"
                aria-label="Close sidebar"
                title="Close Navigation"
              >
                <X className="w-5 h-5" />
                <div className="absolute inset-0 bg-destructive/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            {/* Main Content */}
            <DefaultView
              onToggleCollapse={onToggleCollapse}
              onMenuOpen={() => setIsMenuOpen(true)}
            />
            
            {/* User Menu Overlay */}
            {isMenuOpen && (
              <div className="absolute inset-0 bg-sidebar/95 backdrop-blur-sm z-10 flex flex-col">
                <div className="flex items-center justify-between p-5 border-b border-border">
                  <h3 className="text-lg font-semibold">User Profile</h3>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-destructive rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-foreground" />
                  </button>
                </div>
                <UserProfile onClose={() => setIsMenuOpen(false)} />
              </div>
            )}
          </div>
        )}
      </aside>

      {/* Alternative: Hover-triggered expand preview (Optional) */}
      {isCollapsed && isHovering && (
        <div className="fixed left-0 top-0 h-full w-[200px] bg-sidebar/90 backdrop-blur-sm z-40 flex items-center justify-center opacity-0 animate-in slide-in-from-left duration-200">
          <div className="text-center">
            <Menu className="w-8 h-8 mx-auto mb-2 text-sidebar-foreground" />
            <p className="text-sm text-sidebar-foreground">Navigation</p>
          </div>
        </div>
      )}

      {/* Overlay for mobile */}
      {!isCollapsed && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={onToggleCollapse}
        />
      )}
    </>
  );
};

export default LeftSidebar;