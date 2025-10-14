"use client";
import React from "react";
interface TimeBlockProps {
  time: string;
  activities: {
    name: string;
    description: string;
  }[];
}
const TimeBlock: React.FC<TimeBlockProps> = ({ time, activities }) => {
  return (
    <div className="border-l-4 border-warning pl-4 mb-6">
      <h3 className="text-lg font-semibold text-warning mb-3">{time}</h3>
      {activities.map((activity, index) => (
        <div
          key={index}
          className="flex items-center bg-background p-3 rounded-md hover:shadow-md transition-shadow mb-2"
        >
          <span className="font-semibold mr-4 text-foreground">
            {activity.name}
          </span>
          <span className="text-sm text-secondary flex-grow">
            {activity.description}
          </span>
          <div className="space-x-2 text-sm">
            <button className="text-primary hover:text-blue-700">📍</button>
            <button className="text-primary hover:text-blue-700">📝</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TimeBlock;