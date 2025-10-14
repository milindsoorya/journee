'use client';

import React, { useState } from 'react';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import CenterPanel from '../components/CenterPanel';

export default function Home() {
  const [isLeftCollapsed, setIsLeftCollapsed] = useState(false);
  const [isRightCollapsed, setIsRightCollapsed] = useState(false);
  
  // State for mobile view visibility
  const [isLeftMobileOpen, setIsLeftMobileOpen] = useState(false);
  const [isRightMobileOpen, setIsRightMobileOpen] = useState(false);

  // Desktop Toggle Handlers
  const toggleLeftCollapse = () => setIsLeftCollapsed(prev => !prev);
  const toggleRightCollapse = () => setIsRightCollapsed(prev => !prev);

  // Mobile Toggle Handlers (for buttons in CenterPanel)
  const toggleLeftMobile = () => {
    setIsLeftMobileOpen(prev => !prev);
    // Ensure the other sidebar is closed when opening one on mobile
    if (!isLeftMobileOpen) setIsRightMobileOpen(false);
  };
  const toggleRightMobile = () => {
    setIsRightMobileOpen(prev => !prev);
    if (!isRightMobileOpen) setIsLeftMobileOpen(false);
  };

  // Dynamic Tailwind class generation for the main grid container
  const getGridClass = () => {
    let base = 'grid-cols-[var(--sidebar-w)_1fr_var(--right-sidebar-w)]';
    if (isLeftCollapsed && isRightCollapsed) base = 'grid-cols-[var(--sidebar-w-collapsed)_1fr_var(--right-sidebar-w-collapsed)]';
    else if (isLeftCollapsed) base = 'grid-cols-[var(--sidebar-w-collapsed)_1fr_var(--right-sidebar-w)]';
    else if (isRightCollapsed) base = 'grid-cols-[var(--sidebar-w)_1fr_var(--right-sidebar-w-collapsed)]';
    
    // On large screens (lg), use the calculated grid; on small screens, use a single column
    return `${base} lg:grid-cols-[auto_1fr_auto]`;
  };

  return (
    <div className={`h-full grid transition-all duration-300 ease-in-out ${getGridClass()}`}>
      
      {/* 1. Left Sidebar (Fixed on Mobile, Managed by State) */}
      <LeftSidebar 
        isCollapsed={isLeftCollapsed} 
        onToggleCollapse={toggleLeftCollapse} 
        isMobileOpen={isLeftMobileOpen}
        onToggleMobile={toggleLeftMobile}
      />
      
      {/* 2. Center Panel (Main Content) */}
      <CenterPanel 
        onToggleLeftMobile={toggleLeftMobile} 
        onToggleRightMobile={toggleRightMobile} 
      />
      
      {/* 3. Right Sidebar (Fixed on Mobile, Managed by State) */}
      <RightSidebar 
        isCollapsed={isRightCollapsed} 
        onToggleCollapse={toggleRightCollapse} 
        isMobileOpen={isRightMobileOpen}
        onToggleMobile={toggleRightMobile}
      />

      {/* 4. Desktop Spacers (Hidden on Mobile)
           These dummy divs occupy space on the desktop grid to ensure CenterPanel is correctly centered 
           when the main grid uses 'auto' columns for fixed-width sidebars. 
      */}
      <div className={`hidden lg:block ${isLeftCollapsed ? 'w-sidebar-w-collapsed' : 'w-sidebar-w'}`}></div>
      <div className={`hidden lg:block ${isRightCollapsed ? 'w-right-sidebar-w-collapsed' : 'w-right-sidebar-w'}`}></div>
    </div>
  );
}