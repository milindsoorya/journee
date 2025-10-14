'use client';

import React from 'react';

const ChatInput = () => (
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
);

export default ChatInput;