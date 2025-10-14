"use client";
import React from "react";
import { DUMMY_NOTES } from "../data";
import NoteCard from "./NoteCard";
const TripNotes = () => {
  return (
    <div className="mt-auto pt-4 border-t border-background/20 flex-shrink-0">
      <h3 className="font-bold text-sidebar-foreground mb-3">
        📝 Trip Notes & Findings
      </h3>
      {DUMMY_NOTES.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
      <textarea
        placeholder="Add a new note or finding..."
        className="w-full p-2 border border-secondary rounded-lg text-sm focus:ring-primary focus:border-primary bg-background text-foreground"
      />
    </div>
  );
};
export default TripNotes;