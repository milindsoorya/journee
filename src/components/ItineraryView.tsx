'use client';

import React from 'react';

const ItineraryView = () => (
    <div className="p-5">
        {/* Day 1 Container */}
        <div className="bg-card border border-secondary rounded-lg p-4 mb-8 shadow-sm">
            <h2 className="text-xl font-bold text-foreground border-b border-secondary pb-2 mb-4">🗓️ Day 1 – Friday: Edinburgh → Morvich</h2>
            <p className="italic text-sm text-secondary mb-4">Approx driving time: 5.5–6 hrs total</p>
            
            {/* Time Block */}
            <div className="border-l-4 border-warning pl-4 mb-6">
                <h3 className="text-lg font-semibold text-warning mb-3">🕕 Morning</h3>
                <div className="flex items-center bg-background p-3 rounded-md hover:shadow-md transition-shadow mb-2">
                    <span className="font-semibold mr-4 text-foreground">Stirling Castle</span>
                    <span className="text-sm text-secondary flex-grow">Explore the courtyard.</span>
                    <div className="space-x-2 text-sm">
                        <button className="text-primary hover:text-blue-700">📍</button>
                        <button className="text-primary hover:text-blue-700">📝</button>
                    </div>
                </div>
            </div>
            {/* ... more content ... */}
            <div className="h-[50vh] text-center text-secondary mt-10 flex items-center justify-center">
                (Day 2 and Day 3 Content Here)
            </div>
        </div>
    </div>
);

export default ItineraryView;