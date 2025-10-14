"use client";
import React from "react";
import { Download, Link, Globe } from "lucide-react";

const ExportAndShare = () => {
  return (
    <div className="border-t border-subtle pt-4 mt-4 flex-shrink-0">
      <h3 className="font-semibold text-secondary-foreground mb-3">
        Export & Share
      </h3>
      <div className="flex items-center justify-around gap-2">
        <button className="flex-1 flex flex-col items-center gap-2 p-3 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
          <Download className="w-5 h-5 text-muted" />
          <span className="text-xs text-muted">JSON</span>
        </button>
        <button className="flex-1 flex flex-col items-center gap-2 p-3 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
          <Link className="w-5 h-5 text-muted" />
          <span className="text-xs text-muted">Maps</span>
        </button>
        <button className="flex-1 flex flex-col items-center gap-2 p-3 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
          <Globe className="w-5 h-5 text-muted" />
          <span className="text-xs text-muted">Web</span>
        </button>
      </div>
    </div>
  );
};

export default ExportAndShare;