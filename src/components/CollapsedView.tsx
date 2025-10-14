"use client";
import React from "react";
interface CollapsedViewProps {
  onToggleCollapse: () => void;
}
const CollapsedView: React.FC<CollapsedViewProps> = ({ onToggleCollapse }) => (
  <div className="flex flex-col items-center h-full">
    <button
      className="text-sidebar-foreground hover:text-primary transition-colors mb-4"
      onClick={onToggleCollapse}
      aria-label="Toggle sidebar"
    >
      &#x25b6;
    </button>
    <div className="[writing-mode:vertical-lr] text-sidebar-foreground text-lg font-semibold transform rotate-180 mx-auto">
      Trips
    </div>
  </div>
);
export default CollapsedView;