'use client';

import React, { useState } from 'react';
import { DUMMY_TRIPS } from '../data';
import type { Trip } from '../data';

interface LeftSidebarProps {
    isCollapsed: boolean;
    onToggleCollapse: () => void;
}

const UserMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => (
    // User Menu Overlay (Visible when open)
    <div className="absolute inset-0 bg-secondary-dark p-5 z-40 flex flex-col transition-transform duration-300 transform translate-x-0">
        <button 
            className="text-white text-lg font-semibold mb-6 self-start hover:text-primary-blue" 
            onClick={onClose}
        >
            &#x276E; Back {/* <-- Close Indicator */}
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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Dynamic width class based on desktop collapse state (using CSS variables for transition)
    const widthClass = isCollapsed ? 'w-[var(--sidebar-w-collapsed)] p-2' : 'w-[var(--sidebar-w)] p-5';
    

    return (
        <aside 
            className={`bg-secondary-dark text-white flex-shrink-0 flex flex-col relative transition-all duration-300 shadow-xl 
                ${widthClass}`}
        >
 
            
            <h2 className={`text-xl font-bold mb-8 transition-opacity ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100'}`}>JOURNÉE</h2>
            
            <button 
                className={`bg-primary-blue text-white p-2 rounded mb-5 flex-shrink-0 whitespace-nowrap transition-opacity ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100 block'}`}
            >
                + New Trip
            </button>
            
            {/* Trip List */}
            <nav className={`flex-grow overflow-y-auto ${isCollapsed ? 'hidden' : 'block'}`}>
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
                                        {/* Status Dot */}
                                        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${version.status === 'final' ? 'dot-final' : 'dot-draft'}`}></span>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>

            {/* User Profile Footer */}
            <div className={`mt-auto border-t border-[#4a5d70] pt-2 flex-shrink-0 ${isCollapsed ? 'hidden' : 'block'}`}>
                <div 
                    className="flex items-center cursor-pointer p-1 hover:bg-[#34495e] rounded transition-colors"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <span className="w-8 h-8 rounded-full bg-accent-teal flex items-center justify-center font-bold text-sm flex-shrink-0">M</span>
                    <span className="ml-2 truncate text-sm flex-grow">Milind Soorya</span>
                    <span className="bg-red-500 text-white text-xs px-1 rounded-full flex-shrink-0">Upgrade</span>
                </div>
            </div>

            {/* Desktop Collapse Button */}
            <button 
                className="hidden lg:flex absolute top-1/2 -translate-y-1/2 w-5 h-10 bg-white text-secondary-dark shadow-lg border border-gray-300 z-50 items-center justify-center transition-all duration-300 ease-in-out"
                style={{ 
                    left: isCollapsed ? 'var(--sidebar-w-collapsed)' : 'var(--sidebar-w)', 
                    borderRadius: '0 5px 5px 0',
                    transform: `translateY(-50%) ${isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)'}`
                }}
                onClick={onToggleCollapse}
            >
                &#x25c0;
            </button>

            {/* User Menu Overlay */}
            {isMenuOpen && <UserMenu onClose={() => setIsMenuOpen(false)} />}
        </aside>
    );
};

export default LeftSidebar;