"use client";
import React from "react";
import type { ChatMessage } from "../data";
interface ChatMessageProps {
  message: ChatMessage;
}
const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.author.name !== "Agent";
  return (
    <div
      className={`max-w-[75%] p-3 rounded-2xl shadow-md ${
        isUser
          ? "bg-blue-500 text-white self-end rounded-br-lg"
          : "bg-gray-200 text-gray-800 self-start rounded-bl-lg"
      }`}
    >
      {message.message}
    </div>
  );
};
export default ChatMessage;