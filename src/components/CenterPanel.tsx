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
    const bottomPadding = "pb-24 md:pb-0"; // Extra space for ViewToggle + ChatInput on mobile
    
    switch (currentView) {
      case 'chat':
        return (
          <div className={`flex flex-col h-full ${bottomPadding}`}>
            <div className="flex-grow overflow-y-auto">
              <ChatHistory />
            </div>
            {/* ChatInput positioned above ViewToggle */}
            <div className="fixed bottom-20 left-4 right-4 z-40 md:hidden">
              <ChatInput />
            </div>
          </div>
        );
      case 'itinerary':
        return (
          <div className={`h-full overflow-y-auto pb-20 md:pb-0`}>
            <ItineraryView />
          </div>
        );
      case 'map':
        return (
          <div className={`h-full overflow-y-auto pb-20 md:pb-0`}>
            <MapView />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="flex flex-col flex-grow bg-background h-full relative">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b border-border flex-shrink-0">
        <div className="flex-grow mx-4 text-center lg:text-left">
          <h1 className="text-xl font-bold text-foreground mb-1">
            {currentView === 'chat' ? 'Chat History' : 'Scotland: Highlands Adventure'}
          </h1>
          {currentView !== 'chat' && (
            <div className="flex items-center justify-center lg:justify-start gap-3 text-sm text-muted-foreground">
              <span>1. Highlands Route (Active)</span>
              <button className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
                + New Version
              </button>
            </div>
          )}
        </div>
        
        {/* Desktop View Toggle */}
        <div className="hidden md:flex">
          <ViewToggle currentView={currentView} setCurrentView={setCurrentView} />
        </div>
      </header>
      
      {/* Content */}
      <div className="flex-1 relative">
        {renderContent()}
        
        {/* Mobile View Toggle - Always fixed at bottom */}
        <ViewToggle 
          currentView={currentView} 
          setCurrentView={setCurrentView} 
          variant="mobile" 
        />
      </div>
    </main>
  );
};

export default CenterPanel;