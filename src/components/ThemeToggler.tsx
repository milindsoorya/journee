"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-accent transition-colors group"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
      ) : (
        <Moon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
      )}
    </button>
  );
};

export default ThemeToggler;