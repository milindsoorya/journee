"use client";
import React from "react";
import SendButton from "./SendButton";
const ChatInput = () => (
  <div className="flex items-center p-4 border-t border-secondary bg-background flex-shrink-0 shadow-md">
    <input
      type="text"
      placeholder="Talk with the Agent: Refine the trip, add interests, etc."
      className="flex-grow p-3 border border-secondary rounded-full mr-3 focus:ring-primary focus:border-primary bg-background text-foreground"
    />
    <SendButton />
  </div>
);
export default ChatInput;