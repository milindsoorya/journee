'use client';

import { useTheme } from 'next-themes';
import React from 'react';
import { DUMMY_NOTES } from '../data';
import type { Note } from '../data';

interface RightSidebarProps {
    isCollapsed: boolean;
    onToggleCollapse: () => void;
}

const NoteCard: React.FC<{ note: Note }> = ({ note }) => {
    const [formattedTime, setFormattedTime] = React.useState('');

    React.useEffect(() => {
        setFormattedTime(note.timestamp.toLocaleTimeString());
    }, [note.timestamp]);

    return (
        <div className="bg-background/50 border border-background/20 rounded-lg p-3 mb-3 shadow-sm">
            <div className="flex items-center mb-2">
                <span 
                    className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                        note.author.name === 'Agent' ? 'bg-accent text-primary-foreground' : 'bg-primary text-primary-foreground'
                    }`}
                >
                    {note.author.name[0]}
                </span>
                <span className="font-bold text-xs ml-2 text-sidebar-foreground">{note.author.name}</span>
                <span className="text-xs text-secondary ml-auto">{formattedTime}</span>
            </div>
            <textarea 
                readOnly 
                className="w-full text-sm resize-none bg-transparent focus:outline-none text-sidebar-foreground" 
                rows={2}
                value={note.content}
            />
        </div>
);
};

const RightSidebar: React.FC<RightSidebarProps> = ({ isCollapsed, onToggleCollapse }) => {
    const { theme, setTheme } = useTheme();
    return (
        <aside 
            className={`bg-sidebar text-sidebar-foreground flex-shrink-0 flex flex-col relative transition-all duration-300 shadow-xl 
                ${isCollapsed ? 'w-[var(--sidebar-w-collapsed)] p-2' : 'w-[var(--sidebar-w)] p-5'}`}
        >
            {isCollapsed ? (
                <div>
                    <button 
                        className="text-sidebar-foreground hover:text-primary transition-colors"
                        onClick={onToggleCollapse}
                        aria-label="Toggle sidebar"
                    >
                        &#x25c0;
                    </button>
                    <div className="[writing-mode:vertical-lr] text-sidebar-foreground text-lg font-semibold transform rotate-180 mx-auto mt-4">
                        Trip Assets
                    </div>
                </div>
            ) : (
                <div className="flex flex-col flex-grow w-full overflow-y-auto">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-sidebar-foreground border-b border-background/20 pb-2 mb-4">Trip Assets</h2>
                        <button 
                            className="text-sidebar-foreground hover:text-primary transition-colors"
                            onClick={onToggleCollapse}
                            aria-label="Toggle sidebar"
                        >
                            &#x25b6;
                        </button>
                    </div>
                    
                    {/* Asset Dropdowns */}
                    <details className="mb-4" open>
                        <summary className="font-semibold text-sm cursor-pointer p-2 border-b border-background/20 hover:text-primary list-none text-sidebar-foreground">📝 Notes</summary>
                        <p className="mt-2 text-sm space-y-2">
                            <a href="#" className="text-primary hover:underline block">Apple Notes</a>
                            <a href="#" className="text-primary hover:underline block">Notion</a>
                            <input 
                                type="url" 
                                placeholder="Custom photo album URL..." 
                                className="w-full p-1.5 border border-secondary rounded text-xs focus:ring-primary focus:border-primary bg-background text-foreground mt-2"
                            />
                        </p>
                    </details>

                    <details className="mb-4">
                        <summary className="font-semibold text-sm cursor-pointer p-2 border-b border-background/20 hover:text-primary list-none text-sidebar-foreground">🎵 Playlists</summary>
                        <div className="mt-2 text-sm space-y-2">
                            <a href="#" className="text-primary hover:underline block">Apple Music</a>
                            <a href="#" className="text-primary hover:underline block">YouTube Music</a>
                            <a href="#" className="text-primary hover:underline block">Spotify</a>
                            <input 
                                type="url" 
                                placeholder="Custom playlist URL..." 
                                className="w-full p-1.5 border border-secondary rounded text-xs focus:ring-primary focus:border-primary bg-background text-foreground mt-2"
                            />
                        </div>
                    </details>

                    <details className="mb-4">
                        <summary className="font-semibold text-sm cursor-pointer p-2 border-b border-background/20 hover:text-primary list-none text-sidebar-foreground">📸 Photos</summary>
                        <div className="mt-2 text-sm space-y-2">
                            <a href="#" className="text-primary hover:underline block">Apple Photos</a>
                            <a href="#" className="text-primary hover:underline block">Google Photos</a>
                            <input 
                                type="url" 
                                placeholder="Custom photo album URL..." 
                                className="w-full p-1.5 border border-secondary rounded text-xs focus:ring-primary focus:border-primary bg-background text-foreground mt-2"
                            />
                        </div>
                    </details>
                    
                    {/* Export Section */}
                    <div className="border-t border-background/20 pt-4 mt-4 flex-shrink-0">
                        <h3 className="font-bold text-sidebar-foreground mb-3">📤 Export & Share</h3>
                        <button className="w-full text-left p-2 rounded text-white bg-warning hover:bg-opacity-80 transition-colors mb-2">⬇️ Download Complete Trip JSON</button>
                        <button className="w-full text-left p-2 rounded text-foreground bg-background border border-secondary hover:bg-opacity-80 transition-colors mb-2">🔗 Google Maps Route Link</button>
                        <button className="w-full text-left p-2 rounded text-white bg-accent hover:bg-opacity-80 transition-colors">🌐 Sharable Website Link</button>
                    </div>

                    {/* Notes Section */}
                    <div className="mt-auto pt-4 border-t border-background/20 flex-shrink-0">
                        <h3 className="font-bold text-sidebar-foreground mb-3">📝 Trip Notes & Findings</h3>
                        {DUMMY_NOTES.map(note => (
                            <NoteCard key={note.id} note={note} />
                        ))}
                        <textarea 
                            placeholder="Add a new note or finding..." 
                            className="w-full p-2 border border-secondary rounded-lg text-sm focus:ring-primary focus:border-primary bg-background text-foreground"
                        />
                    </div>
                </div>
            )}
        </aside>
    );
};

export default RightSidebar;