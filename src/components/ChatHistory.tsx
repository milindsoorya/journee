"use client";
import React from "react";
import { DUMMY_CHAT_MESSAGES } from "../data";
import ChatMessage from "./ChatMessage";

const ChatHistory = () => (
  <div className="p-5 flex-grow overflow-y-auto">
    <div className="flex flex-col space-y-4">
      {DUMMY_CHAT_MESSAGES.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  </div>
);

export default ChatHistory;