"use client";
import React from "react";
import type { Trip } from "../data";
interface TripItemProps {
  trip: Trip;
}
const TripItem: React.FC<TripItemProps> = ({ trip }) => (
  <div
    className={`text-sidebar-foreground text-sm ${
      trip.isFolder ? "font-bold" : ""
    } p-2 rounded hover:bg-background/10 transition-colors flex justify-between items-center`}
  >
    {trip.icon} {trip.title}
  </div>
);
export default TripItem;