"use client";

import React, { useState } from "react";
import CollapsedView from "./CollapsedView";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <aside
      className={`bg-sidebar text-sidebar-foreground flex-shrink-0 flex flex-col relative transition-all duration-300 shadow-xl
        ${
          isCollapsed
            ? "w-[var(--sidebar-w-collapsed)] p-2"
            : "w-[var(--sidebar-w)] p-5"
        }`}
    >
      {isCollapsed ? (
        <CollapsedView onToggleCollapse={onToggleCollapse} />
      ) : (
        <>
          <DefaultView
            onToggleCollapse={onToggleCollapse}
            onMenuOpen={() => setIsMenuOpen(true)}
          />
          <ThemeToggler />
        </>
      )}
      {isMenuOpen && <UserProfile onClose={() => setIsMenuOpen(false)} />}
    </aside>
  );
};

export default LeftSidebar;