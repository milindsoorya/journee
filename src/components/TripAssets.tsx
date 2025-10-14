"use client";
import React from "react";
const TripAssets = () => {
  return (
    <>
      <details className="mb-2" open>
        <summary className="flex items-center justify-between font-semibold text-sm cursor-pointer p-2 hover:bg-gray-800 rounded-md text-sidebar-foreground">
          <span>📝 Notes</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </summary>
        <div className="mt-2 text-sm space-y-2 p-2">
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
        </div>
      </details>
      <details className="mb-2">
        <summary className="flex items-center justify-between font-semibold text-sm cursor-pointer p-2 hover:bg-gray-800 rounded-md text-sidebar-foreground">
          <span>🎵 Playlists</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </summary>
        <div className="mt-2 text-sm space-y-2 p-2">
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
      <details className="mb-2">
        <summary className="flex items-center justify-between font-semibold text-sm cursor-pointer p-2 hover:bg-gray-800 rounded-md text-sidebar-foreground">
          <span>📸 Photos</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </summary>
        <div className="mt-2 text-sm space-y-2 p-2">
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