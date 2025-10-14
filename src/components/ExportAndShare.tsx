"use client";
import React from "react";
const ExportAndShare = () => {
  return (
    <div className="border-t border-background/20 pt-4 mt-4 flex-shrink-0">
      <h3 className="font-bold text-sidebar-foreground mb-3">
        📤 Export & Share
      </h3>
      <button className="w-full text-left p-2 rounded text-white bg-warning hover:bg-opacity-80 transition-colors mb-2">
        ⬇️ Download Complete Trip JSON
      </button>
      <button className="w-full text-left p-2 rounded text-foreground bg-background border border-secondary hover:bg-opacity-80 transition-colors mb-2">
        🔗 Google Maps Route Link
      </button>
      <button className="w-full text-left p-2 rounded text-white bg-accent hover:bg-opacity-80 transition-colors">
        🌐 Sharable Website Link
      </button>
    </div>
  );
};
export default ExportAndShare;