"use client";
import React from "react";
const TripAssets = () => {
  return (
    <>
      <details className="mb-4" open>
        <summary className="font-semibold text-sm cursor-pointer p-2 border-b border-background/20 hover:text-primary list-none text-sidebar-foreground">
          ✅ Notes
        </summary>
        <p className="mt-2 text-sm space-y-2">
          <a href="#" className="text-primary hover:underline block">
            Apple Notes
          </a>
          <a href="#" className="text-primary hover:underline block">
            Notion
          </a>
          <input
            type="url"
            placeholder="Custom photo album URL..."
            className="w-full p-1.5 border border-secondary rounded text-xs focus:ring-primary focus:border-primary bg-background text-foreground mt-2"
          />
        </p>
      </details>
      <details className="mb-4">
        <summary className="font-semibold text-sm cursor-pointer p-2 border-b border-background/20 hover:text-primary list-none text-sidebar-foreground">
          🎵 Playlists
        </summary>
        <div className="mt-2 text-sm space-y-2">
          <a href="#" className="text-primary hover:underline block">
            Apple Music
          </a>
          <a href="#" className="text-primary hover:underline block">
            YouTube Music
          </a>
          <a href="#" className="text-primary hover:underline block">
            Spotify
          </a>
          <input
            type="url"
            placeholder="Custom playlist URL..."
            className="w-full p-1.5 border border-secondary rounded text-xs focus:ring-primary focus:border-primary bg-background text-foreground mt-2"
          />
        </div>
      </details>
      <details className="mb-4">
        <summary className="font-semibold text-sm cursor-pointer p-2 border-b border-background/20 hover:text-primary list-none text-sidebar-foreground">
          📸 Photos
        </summary>
        <div className="mt-2 text-sm space-y-2">
          <a href="#" className="text-primary hover:underline block">
            Apple Photos
          </a>
          <a href="#" className="text-primary hover:underline block">
            Google Photos
          </a>
          <input
            type="url"
            placeholder="Custom photo album URL..."
            className="w-full p-1.5 border border-secondary rounded text-xs focus:ring-primary focus:border-primary bg-background text-foreground mt-2"
          />
        </div>
      </details>
    </>
  );
};
export default TripAssets;