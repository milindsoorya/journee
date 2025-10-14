'use client';

import React from 'react';

type View = 'itinerary' | 'map' | 'chat';

interface ViewToggleProps {
    currentView: View;
    setCurrentView: (view: View) => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ currentView, setCurrentView }) => (
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
);

export default ViewToggle;