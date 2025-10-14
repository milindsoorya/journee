"use client";
import React from "react";
import { ChevronDown } from "lucide-react";

interface DropdownButtonProps {
  isExpanded: boolean;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ isExpanded }) => {
  return (
    <div
      className={`flex items-center justify-center w-7 h-7 rounded-full bg-black/5 dark:bg-white/5 group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-all duration-200 ${
        isExpanded ? "rotate-180" : "rotate-0"
      }`}
    >
      <ChevronDown
        className={`w-4 h-4 transition-colors duration-200 ${
          isExpanded
            ? "text-primary"
            : "text-muted group-hover:text-primary"
        }`}
      />
    </div>
  );
};

export default DropdownButton;
