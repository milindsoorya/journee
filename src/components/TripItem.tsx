"use client";
import React from "react";
import type { DashboardTrip } from "@/types/dashboard";

interface TripItemProps {
  trip: DashboardTrip;
  compact?: boolean; // Add compact prop
}

const TripItem: React.FC<TripItemProps> = ({
  trip,
  compact = false, // Default to false
}) => (
  <div
    className={`text-sidebar-foreground flex items-center gap-2 transition-colors ${
      trip.isFolder ? "font-semibold" : "font-normal"
    } ${
      compact 
        ? "text-xs py-1 px-0" // Compact styling
        : "text-sm py-2 px-2" // Regular styling
    } hover:bg-accent/20 rounded ${
      compact ? "" : "hover:rounded"
    }`}
  >
    <span className="flex-shrink-0 w-4 h-4">
      {trip.icon || '🧳'}
    </span>
    <span className="truncate flex-1">
      {trip.title}
    </span>
  </div>
);

export default TripItem;
