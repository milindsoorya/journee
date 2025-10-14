"use client";
import React from "react";
import { View, VIEW_OPTIONS } from "../types/view";

interface ViewToggleProps {
  currentView: View;
  setCurrentView: (view: View) => void;
  variant?: 'desktop' | 'mobile'; // Add variant prop
}

const ViewToggle: React.FC<ViewToggleProps> = ({ 
  currentView, 
  setCurrentView, 
  variant = 'desktop' 
}) => {
  const isMobile = variant === 'mobile';
  
  return (
    <div className={`
      ${isMobile ? 'bg-muted/50 rounded-lg p-2 w-full' : 'bg-muted/50 rounded-full p-1 border border-border/50'}
      flex justify-center
    `}>
      {VIEW_OPTIONS.map(({ id, label, icon }) => {
        const isActive = currentView === id;
        return (
          <button
            key={id}
            onClick={() => setCurrentView(id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 relative ${
              isMobile 
                ? 'flex-1 justify-center' // Full width on mobile
                : 'mx-0.5' // Small margins on desktop
            } ${
              isActive
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:bg-accent hover:text-foreground'
            }`}
            aria-pressed={isActive}
          >
            <span className="text-base">{icon}</span>
            <span className={`
              ${isMobile ? 'block' : 'hidden sm:inline'}
              text-xs sm:text-sm
            `}>
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default ViewToggle;