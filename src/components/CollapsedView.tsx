"use client";
import React from "react";
interface CollapsedViewProps {
  onToggleCollapse: () => void;
}
const CollapsedView: React.FC<CollapsedViewProps> = ({ onToggleCollapse }) => (
  <div className="flex flex-col items-center h-full">
    <div className="h-12 flex items-center">
      <button
        className="text-sidebar-foreground hover:text-primary transition-colors"
        onClick={onToggleCollapse}
        aria-label="Toggle sidebar"
      >
        &#x25b6;
      </button>
    </div>
    <div className="[writing-mode:vertical-lr] text-sidebar-foreground text-lg font-semibold transform rotate-180 mx-auto mt-4">
      Trips
    </div>
  </div>
);
export default CollapsedView;