'use client';

import React from 'react';

const ChatHistory = () => (
    <div className="p-5 flex-grow overflow-y-auto">
        <div className="flex flex-col space-y-4">
            <div className="max-w-[75%] p-3 rounded-2xl bg-secondary text-foreground self-start rounded-bl-lg">
                Hello! I&apos;ve generated your initial **Highlands Route**. Take a look at Day 1.
            </div>
            <div className="max-w-[75%] p-3 rounded-2xl bg-primary text-primary-foreground self-end rounded-br-lg">
                The itinerary looks good, but can we swap the Stirling Castle stop?
            </div>
            {/* Filler content to enable scrolling */}
            <div className="max-w-[75%] p-3 rounded-2xl bg-secondary text-foreground self-start rounded-bl-lg">
                I&apos;ve updated Day 1 to include a stop at the **Falkirk Wheel**.
            </div>
            <div className="max-w-[75%] p-3 rounded-2xl bg-primary text-primary-foreground self-end rounded-br-lg">
                Bridge is fine, thanks!
            </div>
            <div className="max-w-[75%] p-3 rounded-2xl bg-secondary text-foreground self-start rounded-bl-lg">
                The new route includes a ferry option for the Isle of Skye on Day 3. Let me know if you prefer the bridge.
            </div>
            <div className="max-w-[75%] p-3 rounded-2xl bg-primary text-primary-foreground self-end rounded-br-lg">
                Looks good!
            </div>
        </div>
    </div>
);

export default ChatHistory;