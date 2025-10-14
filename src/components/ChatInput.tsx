'use client';

import React from 'react';

const ChatInput = () => (
    <div className="flex items-center p-4 border-t border-secondary bg-background flex-shrink-0 shadow-md">
        <input 
            type="text" 
            placeholder="Talk with the Agent: Refine the trip, add interests, etc."
            className="flex-grow p-3 border border-secondary rounded-full mr-3 focus:ring-primary focus:border-primary bg-background text-foreground"
        />
        <button className="bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/80 transition-colors flex items-center justify-center">
            Send
        </button>
    </div>
);

export default ChatInput;