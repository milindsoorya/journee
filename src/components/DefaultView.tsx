"use client";
import React, { useState } from "react";
import {
  Plus,
  ChevronRight,
} from "lucide-react";
import TripItem from "./TripItem";
import DropdownButton from "./DropdownButton";
import useDashboardData from "@/hooks/useDashboardData";

interface DefaultViewProps {
  onProfileToggle: () => void;
}

interface TripState {
  [key: string]: boolean;
}

const DefaultView: React.FC<DefaultViewProps> = ({
  onProfileToggle,
}) => {
  const [expandedTrips, setExpandedTrips] = useState<TripState>({});
  const { data, isLoading, error } = useDashboardData();

  const toggleTrip = (tripId: string) => {
    setExpandedTrips(prev => ({
      ...prev,
      [tripId]: !prev[tripId],
    }));
  };

  const isTripExpanded = (tripId: string) => expandedTrips[tripId] !== false;

  return (
    <>
      <button className="group flex items-center gap-2 bg-primary text-primary-foreground px-3 py-2.5 rounded-lg mb-4 font-medium hover:bg-primary/90 transition-colors shadow-sm border border-primary/20">
        <Plus className="w-4 h-4 flex-shrink-0" />
        <span>New Trip</span>
      </button>

      <nav className="flex-grow overflow-y-auto space-y-2">
        <div className="flex items-center gap-2 mb-4 pt-1">
          <div className="w-1.5 h-6 bg-primary rounded-full" />
          <h3 className="h3 text-muted-foreground">Trips & Ideas</h3>
        </div>

        <div className="space-y-1">
          {isLoading && <p className="text-xs text-muted-foreground">Loading trips…</p>}
          {error && <p className="text-xs text-red-500">Unable to load your trips.</p>}
          {data?.trips.map(trip => (
            <div key={trip.id}>
              <button
                onClick={() => toggleTrip(trip.id)}
                className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200 group border border-transparent hover:border-subtle"
              >
                <TripItem trip={trip} />
                {trip.isFolder && (
                  <DropdownButton isExpanded={isTripExpanded(trip.id)} />
                )}
              </button>

              {trip.isFolder && isTripExpanded(trip.id) && trip.versions.length > 0 && (
                <div className="ml-7 space-y-1 animate-in slide-in-from-top duration-200">
                  {trip.versions.map((version, index) => (
                    <button
                      key={version.id}
                      className={`w-full flex items-center justify-between py-2 px-3 rounded-md small transition-all duration-150 group relative overflow-hidden ${
                        version.status === "final"
                          ? "bg-primary/5 border border-primary/20 text-primary font-medium"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      } ${index === 0 ? "mt-1.5" : ""}`}
                    >
                      <span className="truncate">{version.name}</span>
                      <div className="flex items-center gap-2">
                        {version.status === "final" && (
                          <div className="w-2 h-2 bg-primary rounded-full" />
                        )}
                        <ChevronRight
                          className={`w-3 h-3 ${
                            version.status === "final"
                              ? "text-primary"
                              : "text-muted-foreground group-hover:text-foreground"
                          }`}
                        />
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      <div className="mt-6 pt-4 border-t border-subtle">
        <button
          onClick={onProfileToggle}
          className="w-full flex items-center gap-3 py-3 px-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200 group border border-transparent hover:border-subtle"
        >
          <div className="relative flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center font-semibold text-primary-foreground shadow-sm">
              MS
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-secondary" />
          </div>
          <div className="flex-grow min-w-0">
            <span className="p font-medium text-foreground block">Milind Soorya</span>
          </div>
          <DropdownButton isExpanded={false} />
        </button>
      </div>
    </>
  );
};

export default DefaultView;
