"use client";
import React from "react";
import { useTheme } from "next-themes";
const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  return (
    <div className="mt-4">
      <button
        className="flex items-center justify-center w-full p-2 rounded hover:bg-background/10 transition-colors"
        onClick={toggleTheme}
      >
        {theme === "light" ? "🌞" : "🌜"}
      </button>
    </div>
  );
};
export default ThemeToggler;