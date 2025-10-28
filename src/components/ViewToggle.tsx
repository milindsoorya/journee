"use client";
import React from "react";
import { VIEW_OPTIONS, View } from "../types/view";

interface ViewToggleProps {
  currentView: View;
  setCurrentView: (view: View) => void;
  variant?: 'desktop' | 'mobile';
}

const ViewToggle: React.FC<ViewToggleProps> = ({ 
  currentView, 
  setCurrentView, 
  variant = 'desktop' 
}) => {
  const isMobile = variant === 'mobile';

  if (isMobile) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border p-3 md:hidden">
        <div className="flex bg-muted rounded-full p-1">
          {VIEW_OPTIONS.map(({ id, label, icon: ViewIcon }) => {
            const isActive = currentView === id;
            return (
              <button
                key={id}
                onClick={() => setCurrentView(id)}
                className={`
                  flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-colors
                  ${isActive 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                  }
                `}
                aria-pressed={isActive}
              >
                <ViewIcon className="w-4 h-4 flex-shrink-0" />
                <span className="whitespace-nowrap">{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop segmented control
  return (
    <div className="flex bg-muted rounded-full p-1 border border-border/20">
      {VIEW_OPTIONS.map(({ id, label, icon: ViewIcon }) => {
        const isActive = currentView === id;
        return (
          <button
            key={id}
            onClick={() => setCurrentView(id)}
            className={`
              flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${isActive 
                ? 'bg-primary text-primary-foreground shadow-sm' 
                : 'text-muted-foreground hover:bg-accent hover:text-foreground'
              }
            `}
            aria-pressed={isActive}
          >
            <ViewIcon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-primary-foreground' : ''}`} />
            <span className="hidden sm:inline whitespace-nowrap">{label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ViewToggle;