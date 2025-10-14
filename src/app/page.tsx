"use client";
import React, { useState, useEffect } from "react";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import CenterPanel from "../components/CenterPanel";
import { Menu, X, PanelLeft, PanelRight } from "lucide-react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowWidth;
};

export default function Home() {
  const windowWidth = useWindowWidth();
  const isDesktop = windowWidth >= 1024;
  
  const [isLeftCollapsed, setIsLeftCollapsed] = useState(!isDesktop);
  const [isRightCollapsed, setIsRightCollapsed] = useState(!isDesktop);
  const [showLeftMobile, setShowLeftMobile] = useState(false);
  const [showRightMobile, setShowRightMobile] = useState(false);

  // Update state on resize
  useEffect(() => {
    setIsLeftCollapsed(!isDesktop);
    setIsRightCollapsed(!isDesktop);
    if (isDesktop) {
      setShowLeftMobile(false);
      setShowRightMobile(false);
    }
  }, [isDesktop]);

  const toggleLeftSidebar = () => {
    if (isDesktop) {
      setIsLeftCollapsed(prev => !prev);
    } else {
      setShowLeftMobile(prev => !prev);
    }
  };

  const toggleRightSidebar = () => {
    if (isDesktop) {
      setIsRightCollapsed(prev => !prev);
    } else {
      setShowRightMobile(prev => !prev);
    }
  };

  const closeMobileSidebars = () => {
    setShowLeftMobile(false);
    setShowRightMobile(false);
  };

  return (
    <div className="h-screen flex relative">
      {/* Mobile Toggle Buttons */}
      {!isDesktop && (
        <>
          <button
            className="fixed top-4 left-4 z-50 p-3 bg-background/95 backdrop-blur-sm rounded-xl border shadow-lg hover:bg-accent/10 transition-all"
            onClick={toggleLeftSidebar}
          >
            {showLeftMobile ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

          <button
            className="fixed top-4 right-4 z-50 p-3 bg-background/95 backdrop-blur-sm rounded-xl border shadow-lg hover:bg-accent/10 transition-all"
            onClick={toggleRightSidebar}
          >
            {showRightMobile ? (
              <X className="w-5 h-5" />
            ) : (
              <PanelRight className="w-5 h-5" />
            )}
          </button>
        </>
      )}

      {/* Left Sidebar */}
      <LeftSidebar 
        isCollapsed={isDesktop ? isLeftCollapsed : !showLeftMobile}
        onToggleCollapse={toggleLeftSidebar}
        isMobileOpen={showLeftMobile}
        onMobileClose={closeMobileSidebars}
      />
      
      {/* Center Panel */}
      <div className="flex-1 relative z-10 min-w-0">
        <CenterPanel />
      </div>
      
      {/* Right Sidebar */}
      <RightSidebar 
        isCollapsed={isDesktop ? isRightCollapsed : !showRightMobile}
        onToggleCollapse={toggleRightSidebar}
        isMobileOpen={showRightMobile}
        onMobileClose={closeMobileSidebars}
      />

      {/* Mobile Overlay */}
      {(showLeftMobile || showRightMobile) && !isDesktop && (
        <div 
          className="fixed inset-0 bg-black/60 z-40"
          onClick={closeMobileSidebars}
        />
      )}
    </div>
  );
}