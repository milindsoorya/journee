"use client";

import React from "react";
import useDashboardData from "@/hooks/useDashboardData";
import NoteCard from "./NoteCard";

const TripNotes = () => {
  const { data, isLoading, error } = useDashboardData();

  return (
    <section className="mt-auto pt-4 border-t border-background/20 flex-shrink-0">
      <h3 className="font-bold text-sidebar-foreground mb-3">📝 Trip Notes & Findings</h3>
      <div className="space-y-3">
        {isLoading && <p className="text-xs text-muted-foreground">Fetching the latest notes…</p>}
        {error && (
          <p className="text-xs text-red-500">Unable to load notes right now. Try again shortly.</p>
        )}
        {!isLoading && !error && data && data.notes.length === 0 && (
          <p className="text-xs text-muted-foreground">No notes yet. Start tracking your discoveries here.</p>
        )}
        {data?.notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
      <textarea
        placeholder="Add a new note or finding..."
        className="mt-4 w-full p-2 border border-secondary rounded-lg text-sm focus:ring-primary focus:border-primary bg-background text-foreground"
      />
    </section>
  );
};

export default TripNotes;
