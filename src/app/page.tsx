'use client';

import React, { useState } from 'react';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import CenterPanel from '../components/CenterPanel';

export default function Home() {
  const [isLeftCollapsed, setIsLeftCollapsed] = useState(false);
  const [isRightCollapsed, setIsRightCollapsed] = useState(false);
  
  const toggleLeftCollapse = () => setIsLeftCollapsed(prev => !prev);
  const toggleRightCollapse = () => setIsRightCollapsed(prev => !prev);

  return (
    <div className="h-full flex">
      
      {/* 1. Left Sidebar */}
      <LeftSidebar 
        isCollapsed={isLeftCollapsed} 
        onToggleCollapse={toggleLeftCollapse} 
      />
      
      {/* 2. Center Panel (Main Content) */}
      <div className="flex-grow">
        <CenterPanel />
      </div>
      
      {/* 3. Right Sidebar */}
      <RightSidebar 
        isCollapsed={isRightCollapsed} 
        onToggleCollapse={toggleRightCollapse} 
      />
    </div>
  );
}