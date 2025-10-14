"use client";
import React from "react";
import ItineraryView from './ItineraryView';
import MapView from './MapView';
import ChatHistory from './ChatHistory';
import ViewToggle from './ViewToggle';
import ChatInput from './ChatInput';
import { View } from "../types/view";

const CenterPanel: React.FC = () => {
  const [currentView, setCurrentView] = React.useState<View>('itinerary');

  const renderContent = () => {
    if (currentView === 'chat') {
      return (
        <div className="flex flex-col h-full">
          <div className="flex-grow overflow-y-auto">
            <ChatHistory />
          </div>
          <ChatInput />
        </div>
      );
    }
    return (
      <div className="overflow-y-auto h-full">
        {currentView === 'itinerary' ? <ItineraryView /> : <MapView />}
      </div>
    );
  };

  return (
    <main className="flex flex-col flex-grow bg-background relative overflow-hidden h-full">
      {/* Header - Simplified for mobile */}
      <header className="flex justify-between items-center p-4 border-b border-border flex-shrink-0">
        <div className="flex-grow mx-2 sm:mx-4 text-center lg:text-left space-y-1">
          <h1 className="text-lg sm:text-xl font-bold text-foreground truncate">
            Scotland: Highlands Adventure
          </h1>
          <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground flex-wrap">
            <span className="truncate">1. Highlands Route (Active)</span>
            <button className="text-primary border border-primary text-xs px-2 sm:px-3 py-1 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap ml-2">
              ➕ New Version
            </button>
          </div>
        </div>
        
        {/* View Toggle - Desktop only */}
        <div className="hidden md:flex">
          <ViewToggle currentView={currentView} setCurrentView={setCurrentView} />
        </div>
      </header>
      
      {/* Content Area */}
      <div className="flex-grow overflow-hidden flex flex-col">
        {renderContent()}
        
        {/* Mobile View Toggle - Bottom Bar */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border z-40 p-2">
          <ViewToggle 
            currentView={currentView} 
            setCurrentView={setCurrentView} 
            variant="mobile" 
          />
        </div>
        
        {/* Content padding for mobile bottom bar */}
        {currentView !== 'chat' && (
          <div className="md:hidden pb-16" /> // 16 = 4rem for bottom bar + safe area
        )}
      </div>
    </main>
  );
};

export default CenterPanel;