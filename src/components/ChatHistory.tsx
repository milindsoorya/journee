"use client";
import ChatMessage from "./ChatMessage";
import useDashboardData from "@/hooks/useDashboardData";

const ChatHistory = () => {
  const { data, isLoading, error } = useDashboardData();

  return (
    <section className="p-5 flex-grow overflow-y-auto">
      <div className="flex flex-col space-y-4">
        {isLoading && (
          <p className="text-sm text-muted-foreground">Loading recent conversations…</p>
        )}
        {error && (
          <p className="text-sm text-red-500">
            We couldn&apos;t load the chat history. Please refresh the page.
          </p>
        )}
        {!isLoading && !error && data && data.chatMessages.length === 0 && (
          <p className="text-sm text-muted-foreground">No messages yet. Start the conversation below!</p>
        )}
        {data?.chatMessages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
    </section>
  );
};

export default ChatHistory;