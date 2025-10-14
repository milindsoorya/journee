"use client";
import React from "react";
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
  return (
    <aside
      className={`bg-sidebar text-sidebar-foreground flex-shrink-0 flex flex-col relative transition-all duration-300 shadow-lg border-l border-secondary
    ${
      isCollapsed
        ? "w-[var(--sidebar-w-collapsed)] p-2"
        : "w-[var(--sidebar-w)] p-5"
    }`}
    >
      {isCollapsed ? (
        <div className="flex flex-col items-center h-full">
          <button
            className="text-sidebar-foreground hover:text-primary transition-colors mb-4"
            onClick={onToggleCollapse}
            aria-label="Toggle sidebar"
          >
            &#x25c0;
          </button>
          <div className="[writing-mode:vertical-lr] text-sidebar-foreground text-lg font-semibold transform rotate-180 mx-auto">
            Trip Assets
          </div>
        </div>
      ) : (
        <div className="flex flex-col flex-grow w-full overflow-y-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-sidebar-foreground border-b border-background/20 pb-2 mb-4">
              Trip Assets
            </h2>
            <button
              className="text-sidebar-foreground hover:text-primary transition-colors"
              onClick={onToggleCollapse}
              aria-label="Toggle sidebar"
            >
              &#x25b6;
            </button>
          </div>

          <TripAssets />
          <ExportAndShare />
          <TripNotes />
        </div>
      )}
    </aside>
  );
};

export default RightSidebar;