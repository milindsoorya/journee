'use client';

import React from 'react';
import { DUMMY_NOTES } from '../data';

interface RightSidebarProps {
    isCollapsed: boolean;
    onToggleCollapse: () => void;
}

const NoteCard: React.FC<typeof DUMMY_NOTES[0]> = ({ user, isAgent, timestamp, content }) => (
    <div className="bg-gray-700 border border-gray-600 rounded-lg p-3 mb-3 shadow-sm">
        <div className="flex items-center mb-2">
            <span 
                className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                    isAgent ? 'bg-accent-teal text-white' : 'bg-primary-blue text-white'
                }`}
            >
                {user[0]}
            </span>
            <span className="font-bold text-xs ml-2 text-white">{user}</span>
            <span className="text-xs text-gray-400 ml-auto">{timestamp}</span>
        </div>
        <textarea 
            readOnly 
            className="w-full text-sm resize-none bg-transparent focus:outline-none text-white" 
            rows={2}
            value={content}
        />
    </div>
);

const RightSidebar: React.FC<RightSidebarProps> = ({ isCollapsed, onToggleCollapse }) => {
    // Dynamic width class based on desktop collapse state
    const widthClass = isCollapsed ? 'w-sidebar-w-collapsed p-2' : 'w-right-sidebar-w p-5';
    
    return (
        <aside 
            className={`bg-secondary-dark text-white flex-shrink-0 flex relative transition-all duration-300 shadow-xl 
                ${widthClass}`}
        >
 
            
            <div 
                className={`flex flex-col flex-grow w-full overflow-y-auto transition-opacity duration-200 ${
                    isCollapsed ? 'opacity-0 hidden' : 'opacity-100'
                }`}
            >
                <h2 className="text-xl font-semibold text-white border-b border-gray-300 pb-2 mb-4">Trip Assets</h2>
                
                {/* Asset Dropdowns */}
                <details className="mb-4" open>
                    <summary className="font-semibold text-sm cursor-pointer p-2 border-b border-gray-200 hover:text-primary-blue list-none text-white">✅ Checklist (3/5)</summary>
                    <p className="mt-2 text-sm space-x-2">
                        <a href="#" className="text-primary-blue hover:underline">Apple Notes</a> | 
                        <a href="#" className="text-primary-blue hover:underline">Notion</a>
                    </p>
                </details>
                
                {/* Export Section */}
                <div className="border-t border-gray-300 pt-4 mt-4 flex-shrink-0">
                    <h3 className="font-bold text-white mb-3">📤 Export & Share</h3>
                    <button className="w-full text-left p-2 rounded text-white bg-warning-orange hover:bg-yellow-600 transition-colors mb-2">⬇️ Download Complete Trip JSON</button>
                    <button className="w-full text-left p-2 rounded text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 transition-colors mb-2">🔗 Google Maps Route Link</button>
                    <button className="w-full text-left p-2 rounded text-white bg-accent-teal hover:bg-teal-600 transition-colors">🌐 Sharable Website Link</button>
                </div>

                {/* Notes Section (Pushed to bottom using flex utilities) */}
                <div className="mt-auto pt-4 border-t border-gray-300 flex-shrink-0">
                    <h3 className="font-bold text-white mb-3">📝 Trip Notes & Findings</h3>
                    {DUMMY_NOTES.map((note, index) => (
                        <NoteCard key={index} {...note} />
                    ))}
                    <textarea 
                        placeholder="Add a new note or finding..." 
                        className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-primary-blue focus:border-primary-blue"
                    />
                </div>
            </div>

            {/* Desktop Collapse Button - Fixed to viewport boundary */}
            <button 
                className="hidden lg:flex absolute top-1/2 -translate-y-1/2 w-5 h-10 bg-white text-secondary-dark shadow-lg border border-gray-300 z-50 items-center justify-center transition-all duration-300 ease-in-out"
                style={{ 
                    right: isCollapsed ? 'var(--right-sidebar-w-collapsed)' : 'var(--right-sidebar-w)', 
                    borderRadius: '5px 0 0 5px',
                    transform: `translateY(-50%) ${isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)'}`
                }}
                onClick={onToggleCollapse}
            >
                &#x25b6;
            </button>
        </aside>
    );
};

export default RightSidebar;