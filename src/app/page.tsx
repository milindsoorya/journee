'use client';

import React, { useState } from 'react';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import CenterPanel from '../components/CenterPanel';

export default function Home() {
  const [isLeftCollapsed, setIsLeftCollapsed] = useState(false);
  const [isRightCollapsed, setIsRightCollapsed] = useState(false);
  
  // Desktop Toggle Handlers
  const toggleLeftCollapse = () => setIsLeftCollapsed(prev => !prev);
  const toggleRightCollapse = () => setIsRightCollapsed(prev => !prev);

  // Dynamic Tailwind class generation for the main grid container
  const getGridClass = () => {
    let base = 'grid-cols-[var(--sidebar-w)_1fr_var(--right-sidebar-w)]';
    if (isLeftCollapsed && isRightCollapsed) base = 'grid-cols-[var(--sidebar-w-collapsed)_1fr_var(--right-sidebar-w-collapsed)]';
    else if (isLeftCollapsed) base = 'grid-cols-[var(--sidebar-w-collapsed)_1fr_var(--right-sidebar-w)]';
    else if (isRightCollapsed) base = 'grid-cols-[var(--sidebar-w)_1fr_var(--right-sidebar-w-collapsed)]';
    
    return base;
  };

  return (
    <div className={`h-full grid transition-all duration-300 ease-in-out ${getGridClass()}`}>
      
      {/* 1. Left Sidebar */}
      <LeftSidebar 
        isCollapsed={isLeftCollapsed} 
        onToggleCollapse={toggleLeftCollapse} 
      />
      
      {/* 2. Center Panel (Main Content) */}
      <CenterPanel />
      
      {/* 3. Right Sidebar */}
      <RightSidebar 
        isCollapsed={isRightCollapsed} 
        onToggleCollapse={toggleRightCollapse} 
      />
    </div>
  );
}