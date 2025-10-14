'use client';

import React, { useState } from 'react';
import { DUMMY_TRIPS } from '../data';
import type { Trip } from '../data';
import { useTheme } from './ThemeProvider';

interface LeftSidebarProps {
    isCollapsed: boolean;
    onToggleCollapse: () => void;
}

const UserMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => (
    <div className="absolute inset-0 bg-secondary-dark p-5 z-40 flex flex-col transition-transform duration-300 transform translate-x-0">
        <button 
            className="text-white text-lg font-semibold mb-6 self-start hover:text-primary-blue" 
            onClick={onClose}
        >
            &#x276E; Back
        </button>
        <div className="mb-8">
            <span className="text-draft-gray text-sm">milindsoorya@gmail.com</span>
        </div>
        <nav className="flex flex-col space-y-2">
            <a href="#" className="text-white p-2 hover:bg-[#34495e] rounded">⭐ Upgrade Plan</a>
            <a href="#" className="text-white p-2 hover:bg-[#34495e] rounded">⚙️ Settings</a>
            <a href="#" className="text-white p-2 hover:bg-[#34495e] rounded">❓ Help</a>
            <a href="#" className="text-red-400 p-2 hover:bg-[#34495e] rounded">➡️ Log out</a>
        </nav>
    </div>
);

const TripItem: React.FC<{ trip: Trip }> = ({ trip }) => (
    <div className={`text-white text-sm ${trip.isFolder ? 'font-bold' : ''} p-2 rounded hover:bg-[#34495e] transition-colors flex justify-between items-center`}>
        {trip.icon} {trip.title}
    </div>
);

const LeftSidebar: React.FC<LeftSidebarProps> = ({ isCollapsed, onToggleCollapse }) => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <aside 
            className={`text-white flex-shrink-0 flex flex-col relative transition-all duration-300 shadow-xl 
                ${isCollapsed ? 'w-[var(--sidebar-w-collapsed)] p-2' : 'w-[var(--sidebar-w)] p-5'}`}
            style={{ backgroundColor: 'var(--secondary-dark)' }}
        >
            {isCollapsed ? (
                <div>
                    <button 
                        className="text-white hover:text-primary-blue transition-colors"
                        onClick={onToggleCollapse}
                        aria-label="Toggle sidebar"
                    >
                        &#x25b6;
                    </button>
                    <div className="[writing-mode:vertical-lr] text-white text-lg font-semibold transform rotate-180 mx-auto mt-4">
                        Trips
                    </div>
                </div>
            ) : (
                <div className="flex flex-col flex-grow w-full overflow-y-auto">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold mb-8">JOURNÉE</h2>
                        <button 
                            className="text-white hover:text-primary-blue transition-colors"
                            onClick={onToggleCollapse}
                            aria-label="Toggle sidebar"
                        >
                            &#x25c0;
                        </button>
                    </div>
                    
                    <button 
                        className="bg-primary-blue text-white p-2 rounded mb-5 flex-shrink-0 whitespace-nowrap"
                    >
                        + New Trip
                    </button>
                    
                    <nav className="flex-grow overflow-y-auto">
                        <h3 className="text-sm mb-4 opacity-80">Trips & Ideas</h3>
                        {DUMMY_TRIPS.map(trip => (
                            <div key={trip.id} className="mb-3">
                                <TripItem trip={trip} />
                                {trip.isFolder && (
                                    <div className="ml-4 mt-1 pl-3 border-l-2 border-accent-teal space-y-1">
                                        {trip.versions.map(version => (
                                            <a 
                                                key={version.id} 
                                                href="#" 
                                                className={`flex justify-between items-center p-1 rounded text-xs transition-colors ${version.status === 'final' ? 'bg-accent-teal font-bold' : 'hover:bg-[#34495e]'}`}
                                            >
                                                <span className='truncate'>{version.name}</span>
                                                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${version.status === 'final' ? 'dot-final' : 'dot-draft'}`}></span>
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="mt-auto border-t border-[#4a5d70] pt-2 flex-shrink-0">
                        <div 
                            className="flex items-center cursor-pointer p-1 hover:bg-[#34495e] rounded transition-colors"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <span className="w-8 h-8 rounded-full bg-accent-teal flex items-center justify-center font-bold text-sm flex-shrink-0">M</span>
                            <span className="ml-2 truncate text-sm flex-grow">Milind Soorya</span>
                            <span className="bg-red-500 text-white text-xs px-1 rounded-full flex-shrink-0">Upgrade</span>
                        </div>
                    </div>

                    <div className="mt-4">
                        <button 
                            className="flex items-center justify-center w-full p-2 rounded hover:bg-[#34495e] transition-colors"
                            onClick={toggleTheme}
                        >
                            {theme === 'light' ? '🌞' : '🌜'}
                        </button>
                    </div>
                </div>
            )}
            {isMenuOpen && <UserMenu onClose={() => setIsMenuOpen(false)} />}
        </aside>
    );
};

export default LeftSidebar;