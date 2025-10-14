"use client";
import React from "react";
import TripItem from "./TripItem";
import { DUMMY_TRIPS } from "../data";
interface DefaultViewProps {
  onToggleCollapse: () => void;
  onMenuOpen: () => void;
}
const DefaultView: React.FC<DefaultViewProps> = ({
  onToggleCollapse,
  onMenuOpen,
}) => {
  return (
    <div className="flex flex-col flex-grow w-full overflow-y-auto">
      <button className="bg-primary text-primary-foreground p-2 rounded mb-5 flex-shrink-0 whitespace-nowrap">
        + New Trip
      </button>

      <nav className="flex-grow overflow-y-auto">
        <h3 className="text-sm mb-4 opacity-80">Trips & Ideas</h3>
        {DUMMY_TRIPS.map((trip) => (
          <div key={trip.id} className="mb-3">
            <TripItem trip={trip} />
            {trip.isFolder && (
              <div className="ml-4 mt-1 pl-3 border-l-2 border-accent space-y-1">
                {trip.versions.map((version) => (
                  <a
                    key={version.id}
                    href="#"
                    className={`flex justify-between items-center p-1 rounded text-xs transition-colors ${
                      version.status === "final"
                        ? "bg-accent font-bold"
                        : "hover:bg-background/10"
                    }`}
                  >
                    <span className="truncate">{version.name}</span>
                    <span
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${
                        version.status === "final"
                          ? "bg-accent"
                          : "bg-secondary"
                      }`}
                    ></span>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="mt-auto border-t border-background/20 pt-2 flex-shrink-0">
        <div
          className="flex items-center cursor-pointer p-1 hover:bg-background/10 rounded transition-colors"
          onClick={onMenuOpen}
        >
          <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center font-bold text-sm flex-shrink-0">
            M
          </span>
          <span className="ml-2 truncate text-sm flex-grow">
            Milind Soorya
          </span>
          <span className="bg-warning text-warning-foreground text-xs px-1 rounded-full flex-shrink-0">
            Upgrade
          </span>
        </div>
      </div>
    </div>
  );
};
export default DefaultView;