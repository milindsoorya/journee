"use client";
import React, { useState, useEffect } from "react";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import CenterPanel from "../components/CenterPanel";
import { Menu, X, PanelRight } from "lucide-react";
import { useWindowWidth } from "../hooks/useWindowWidth";

export default function Home() {
  const windowWidth = useWindowWidth();
  const isDesktop = windowWidth >= 1024;

  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(isDesktop);
  const [isRightSidebarOpen, setRightSidebarOpen] = useState(isDesktop);

  useEffect(() => {
    if (isDesktop) {
      setLeftSidebarOpen(true);
      setRightSidebarOpen(true);
    } else {
      setLeftSidebarOpen(false);
      setRightSidebarOpen(false);
    }
  }, [isDesktop]);

  const toggleLeftSidebar = () => setLeftSidebarOpen(prev => !prev);
  const toggleRightSidebar = () => setRightSidebarOpen(prev => !prev);
  const closeMobileSidebars = () => {
    if (!isDesktop) {
      setLeftSidebarOpen(false);
      setRightSidebarOpen(false);
    }
  };

  return (
    <div className="h-screen flex relative">
      {!isDesktop && (
        <>
          <button
            className="fixed top-4 left-4 z-50 p-3 bg-secondary backdrop-blur-sm rounded-xl border border-subtle shadow-lg hover:bg-secondary/80 transition-all"
            onClick={toggleLeftSidebar}
          >
            {isLeftSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <button
            className="fixed top-4 right-4 z-50 p-3 bg-secondary backdrop-blur-sm rounded-xl border border-subtle shadow-lg hover:bg-secondary/80 transition-all"
            onClick={toggleRightSidebar}
          >
            {isRightSidebarOpen ? <X className="w-5 h-5" /> : <PanelRight className="w-5 h-5" />}
          </button>
        </>
      )}

      <LeftSidebar 
        isCollapsed={!isLeftSidebarOpen}
        onToggleCollapse={toggleLeftSidebar}
        isMobileOpen={isLeftSidebarOpen && !isDesktop}
        onMobileClose={closeMobileSidebars}
      />
      
      <div className="flex-1 relative z-10 min-w-0">
        <CenterPanel />
      </div>
      
      <RightSidebar 
        isCollapsed={!isRightSidebarOpen}
        onToggleCollapse={toggleRightSidebar}
        isMobileOpen={isRightSidebarOpen && !isDesktop}
        onMobileClose={closeMobileSidebars}
      />

      {(isLeftSidebarOpen || isRightSidebarOpen) && !isDesktop && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={closeMobileSidebars}
        />
      )}
    </div>
  );
}