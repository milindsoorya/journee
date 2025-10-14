"use client";
import React from "react";
interface UserProfileProps {
  onClose: () => void;
}
const UserProfile: React.FC<UserProfileProps> = ({ onClose }) => (
  <div className="absolute inset-0 bg-sidebar p-5 z-40 flex flex-col transition-transform duration-300 transform translate-x-0">
    <button
      className="text-sidebar-foreground text-lg font-semibold mb-6 self-start hover:text-primary"
      onClick={onClose}
    >
      &#x276E; Back
    </button>
    <div className="mb-8">
      <span className="text-secondary text-sm">milindsoorya@gmail.com</span>
    </div>
    <nav className="flex flex-col space-y-2">
      <a
        href="#"
        className="text-sidebar-foreground p-2 hover:bg-background/10 rounded"
      >
        ⭐ Upgrade Plan
      </a>
      <a
        href="#"
        className="text-sidebar-foreground p-2 hover:bg-background/10 rounded"
      >
        ⚙️ Settings
      </a>
      <a
        href="#"
        className="text-sidebar-foreground p-2 hover:bg-background/10 rounded"
      >
        ❓ Help
      </a>
      <a href="#" className="text-warning p-2 hover:bg-background/10 rounded">
        ➡️ Log out
      </a>
    </nav>
  </div>
);
export default UserProfile;