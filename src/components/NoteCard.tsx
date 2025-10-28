"use client";
import React from "react";
import type { DashboardNote } from "@/types/dashboard";

interface NoteCardProps {
  note: DashboardNote;
}

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const formattedTime = React.useMemo(
    () => new Date(note.timestamp).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
    [note.timestamp]
  );

  const badgeColor = note.author.name === "Agent" ? "bg-accent" : "bg-primary";

  return (
    <article className="bg-background/60 border border-border rounded-lg p-3 shadow-sm transition-transform duration-200 hover:translate-y-[-1px]">
      <header className="flex items-center mb-2 gap-2">
        <span
          className={`${badgeColor} text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center font-semibold text-xs flex-shrink-0`}
        >
          {note.author.name.slice(0, 2).toUpperCase()}
        </span>
        <div className="flex flex-col">
          <span className="font-semibold text-xs text-sidebar-foreground">{note.author.name}</span>
          <time dateTime={note.timestamp} className="text-[10px] text-muted-foreground uppercase tracking-wide">
            {formattedTime}
          </time>
        </div>
      </header>
      <p className="text-sm leading-relaxed text-sidebar-foreground whitespace-pre-wrap">{note.content}</p>
    </article>
  );
};

export default NoteCard;
