'use client';
import React from 'react';
import ItineraryView from './ItineraryView';
import MapView from './MapView';
import ChatHistory from './ChatHistory';
import ViewToggle from './ViewToggle';
import ChatInput from './ChatInput';

type View = 'itinerary' | 'map' | 'chat';

const CenterPanel: React.FC = () => {
    const [currentView, setCurrentView] = React.useState<View>('itinerary');

    const renderContent = () => {
        if (currentView === 'chat') {
            return <ChatHistory />;
        }
        return (
            <div className="overflow-y-auto h-full">
                {currentView === 'itinerary' ? <ItineraryView /> : <MapView />}
            </div>
        );
    };

    return (
        <main className="flex flex-col flex-grow bg-white relative overflow-hidden h-full">
            
            {/* Header */}
            <header className="flex justify-between items-center p-4 border-b border-gray-200 flex-shrink-0">
                <div className='flex-grow mx-4 text-center lg:text-left'>
                    <h1 className="text-2xl font-bold">Scotland: Highlands Adventure</h1>
                    <span className="text-sm text-gray-500 mr-4">1. Highlands Route (Active)</span>
                    <button className="text-primary-blue border border-primary-blue text-xs px-3 py-1 rounded-full hover:bg-primary-blue hover:text-white transition-colors">➕ New Version</button>
                </div>
                
                {/* View Toggles */}
                <ViewToggle currentView={currentView} setCurrentView={setCurrentView} />
            </header>
            
            {/* Content Wrapper */}
            <div className={`flex-grow overflow-hidden ${currentView === 'chat' ? 'flex flex-col' : ''}`}>
                {renderContent()}
            </div>

            {/* Chat Input Bar (Only visible in Chat View) */}
            {currentView === 'chat' && <ChatInput />}
        </main>
    );
};

export default CenterPanel;