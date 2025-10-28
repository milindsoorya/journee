"use client";
import React from "react";
import type { DashboardChatMessage } from "@/types/dashboard";

interface ChatMessageProps {
  message: DashboardChatMessage;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.author.name !== "Agent";
  const formattedTime = React.useMemo(
    () => new Date(message.timestamp).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
    [message.timestamp]
  );

  const formattedBody = React.useMemo(() => {
    const escapeHtml = (input: string) =>
      input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

    const withBasicFormatting = escapeHtml(message.message)
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br />");

    return withBasicFormatting;
  }, [message.message]);

  return (
    <article
      className={`max-w-[90%] sm:max-w-[75%] md:max-w-[65%] flex flex-col gap-1 p-3 rounded-2xl shadow-sm border ${
        isUser
          ? "self-end rounded-br-md bg-primary text-primary-foreground border-primary/30"
          : "self-start rounded-bl-md bg-muted/70 text-foreground border-border"
      }`}
    >
      <header className="flex items-center justify-between gap-3 text-xs uppercase tracking-wide text-muted-foreground">
        <span className="font-semibold text-foreground/80">{message.author.name}</span>
        <time dateTime={message.timestamp} className="text-[10px] sm:text-xs">
          {formattedTime}
        </time>
      </header>
      <p
        className="text-sm leading-relaxed whitespace-pre-wrap break-words"
        dangerouslySetInnerHTML={{ __html: formattedBody }}
      />
    </article>
  );
};

export default ChatMessage;
