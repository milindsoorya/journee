'use client';

import React, { useState } from 'react';

// --- View Components ---
const ItineraryView = () => (
    <div className="p-5">
        {/* Day 1 Container */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-8 shadow-sm">
            <h2 className="text-xl font-bold text-secondary-dark border-b border-gray-100 pb-2 mb-4">🗓️ Day 1 – Friday: Edinburgh → Morvich</h2>
            <p className="italic text-sm text-gray-500 mb-4">Approx driving time: 5.5–6 hrs total</p>
            
            {/* Time Block */}
            <div className="border-l-4 border-warning-orange pl-4 mb-6">
                <h3 className="text-lg font-semibold text-warning-orange mb-3">🕕 Morning</h3>
                <div className="flex items-center bg-gray-50 p-3 rounded-md hover:shadow-md transition-shadow mb-2">
                    <span className="font-semibold mr-4">Stirling Castle</span>
                    <span className="text-sm text-gray-600 flex-grow">Explore the courtyard.</span>
                    <div className="space-x-2 text-sm">
                        <button className="text-primary-blue hover:text-blue-700">📍</button>
                        <button className="text-primary-blue hover:text-blue-700">📝</button>
                    </div>
                </div>
            </div>
            {/* ... more content ... */}
            <div className="h-[50vh] text-center text-gray-400 mt-10 flex items-center justify-center">
                (Day 2 and Day 3 Content Here)
            </div>
        </div>
    </div>
);

const MapView = () => (
    <div className="p-5 h-full">
        <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-lg">
            🗺️ Interactive Map View Placeholder
        </div>
    </div>
);

const ChatHistory = () => (
    <div className="p-5 flex-grow overflow-y-auto">
        <div className="flex flex-col space-y-4">
            <div className="max-w-[75%] p-3 rounded-2xl bg-gray-100 text-secondary-dark self-start rounded-bl-lg">
                Hello! I've generated your initial **Highlands Route**. Take a look at Day 1.
            </div>
            <div className="max-w-[75%] p-3 rounded-2xl bg-primary-blue text-white self-end rounded-br-lg">
                The itinerary looks good, but can we swap the Stirling Castle stop?
            </div>
            {/* Filler content to enable scrolling */}
            <div className="max-w-[75%] p-3 rounded-2xl bg-gray-100 text-secondary-dark self-start rounded-bl-lg">
                I've updated Day 1 to include a stop at the **Falkirk Wheel**.
            </div>
            <div className="max-w-[75%] p-3 rounded-2xl bg-primary-blue text-white self-end rounded-br-lg">
                Bridge is fine, thanks!
            </div>
            <div className="max-w-[75%] p-3 rounded-2xl bg-gray-100 text-secondary-dark self-start rounded-bl-lg">
                The new route includes a ferry option for the Isle of Skye on Day 3. Let me know if you prefer the bridge.
            </div>
            <div className="max-w-[75%] p-3 rounded-2xl bg-primary-blue text-white self-end rounded-br-lg">
                Looks good!
            </div>
        </div>
    </div>
);

// --- Main Component ---

type View = 'itinerary' | 'map' | 'chat';

const CenterPanel: React.FC<{ onToggleLeftMobile: () => void; onToggleRightMobile: () => void }> = ({ onToggleLeftMobile, onToggleRightMobile }) => {
    const [currentView, setCurrentView] = useState<View>('itinerary');

    const renderContent = () => {
        if (currentView === 'chat') {
            // ChatView needs its own flex container for scrolling history and sticky input
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
                <button className="lg:hidden text-secondary-dark text-xl" onClick={onToggleLeftMobile}>&#x2261;</button> 
                
                <div className='flex-grow mx-4 text-center lg:text-left'>
                    <h1 className="text-2xl font-bold">Scotland: Highlands Adventure</h1>
                    <span className="text-sm text-gray-500 mr-4">1. Highlands Route (Active)</span>
                    <button className="text-primary-blue border border-primary-blue text-xs px-3 py-1 rounded-full hover:bg-primary-blue hover:text-white transition-colors">➕ New Version</button>
                </div>
                
                {/* View Toggles */}
                <div className="flex space-x-2">
                    {['itinerary', 'map', 'chat'].map(view => (
                        <button 
                            key={view} 
                            onClick={() => setCurrentView(view as View)}
                            className={`px-3 py-1 rounded transition-colors text-sm ${
                                currentView === view ? 'bg-primary-blue text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            {view === 'itinerary' ? '🗓️ List' : view === 'map' ? '🗺️ Map' : '💬 Chat'}
                        </button>
                    ))}
                </div>

                <button className="lg:hidden text-secondary-dark text-xl ml-4" onClick={onToggleRightMobile}>&#x2139;</button>
            </header>
            
            {/* Content Wrapper */}
            <div className={`flex-grow overflow-hidden ${currentView === 'chat' ? 'flex flex-col' : ''}`}>
                {renderContent()}
            </div>

            {/* Chat Input Bar (Only visible in Chat View) */}
            {currentView === 'chat' && (
                <div className="flex items-center p-4 border-t border-gray-200 bg-white flex-shrink-0 shadow-md">
                    <input 
                        type="text" 
                        placeholder="Talk with the Agent: Refine the trip, add interests, etc."
                        className="flex-grow p-3 border border-gray-300 rounded-full mr-3 focus:ring-primary-blue focus:border-primary-blue"
                    />
                    <button className="bg-primary-blue text-white p-3 rounded-full hover:bg-blue-600 transition-colors flex items-center justify-center">
                        Send
                    </button>
                </div>
            )}
        </main>
    );
};

export default CenterPanel;