"use client";
import React from "react";
import { Note } from "../data";
interface NoteCardProps {
  note: Note;
}
const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const [formattedTime, setFormattedTime] = React.useState("");

  React.useEffect(() => {
    setFormattedTime(note.timestamp.toLocaleTimeString());
  }, [note.timestamp]);

  return (
    <div className="bg-background/50 border border-background/20 rounded-lg p-3 mb-3 shadow-sm">
      <div className="flex items-center mb-2">
        <span
          className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 ${
            note.author.name === "Agent"
              ? "bg-accent text-primary-foreground"
              : "bg-primary text-primary-foreground"
          }`}
        >
          {note.author.name[0]}
        </span>
        <span className="font-bold text-xs ml-2 text-sidebar-foreground">
          {note.author.name}
        </span>
        <span className="text-xs text-secondary ml-auto">{formattedTime}</span>
      </div>
      <textarea
        readOnly
        className="w-full text-sm resize-none bg-transparent focus:outline-none text-sidebar-foreground"
        rows={2}
        value={note.content}
      />
    </div>
  );
};
export default NoteCard;