"use client";

import React from "react";
import TimeBlock from "./TimeBlock";

const ItineraryView = () => (
  <div className="p-5">
    {/* Day 1 Container */}
    <div className="bg-card border border-slate-200 rounded-lg p-4 mb-8 shadow-sm">
      <h2 className="text-xl font-bold text-foreground border-b border-slate-200 pb-2 mb-4">
        🗓️ Day 1 – Friday: Edinburgh → Morvich
      </h2>
      <p className="italic text-sm text-slate-500 mb-4">
        Approx driving time: 5.5–6 hrs total
      </p>

      <TimeBlock
        time="🕕 Morning"
        activities={[
          {
            name: "Stirling Castle",
            description: "Explore the courtyard.",
          },
        ]}
      />
    </div>
  </div>
);

export default ItineraryView;