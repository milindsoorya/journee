"use client";
import React from "react";
import { 
  ChevronLeft, 
  User, 
  Crown, 
  Settings, 
  HelpCircle, 
  LogOut,
  Mail,
  Star
} from "lucide-react";

interface UserProfileProps {
  onClose: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ onClose }) => {
  return (
    <div className="absolute inset-0 bg-secondary flex flex-col overflow-y-auto p-1 gap-4">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-subtle sticky top-0 bg-secondary z-10">
        <button
          onClick={onClose}
          className="flex items-center gap-2 p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg transition-colors group"
          aria-label="Go back"
        >
          <ChevronLeft className="w-5 h-5 text-muted group-hover:text-foreground" />
          <span className="p font-medium">Back</span>
        </button>
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>

      {/* User Info Card */}
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
            <span className="h2 font-semibold text-primary-foreground">
              MS
            </span>
          </div>
          <div>
            <h3 className="h2 text-foreground">Milind Soorya</h3>
            <div className="p flex items-center gap-2 text-muted">
              <Mail className="w-4 h-4" />
              milindsoorya@gmail.com
            </div>
          </div>
        </div>

        {/* Profile Stats (Optional) */}
        <div className="grid grid-cols-3 gap-4 text-center py-4 bg-black/5 dark:bg-white/5 rounded-lg">
          <div>
            <div className="p font-semibold text-foreground">5</div>
            <div className="small text-muted">Trips</div>
          </div>
          <div>
            <div className="p font-semibold text-foreground">12</div>
            <div className="small text-muted">Ideas</div>
          </div>
          <div>
            <div className="p font-semibold text-foreground">3</div>
            <div className="small text-muted">Active</div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="px-4 pb-4 space-y-2 flex-1">
        <div className="mb-4 pt-2">
          <h4 className="h4 text-muted mb-2">
            Account
          </h4>
          
          {/* Upgrade Plan */}
          <a
            href="#"
            className="group flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 hover:from-primary/20 hover:to-primary/10 transition-all duration-200"
          >
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Crown className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-4 h-4 text-primary" />
                <span className="p font-medium text-foreground">Upgrade Plan</span>
              </div>
              <p className="small text-muted">Unlock premium features</p>
            </div>
          </a>

          {/* Settings */}
          <a
            href="#"
            className="flex items-center gap-4 p-4 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors group"
          >
            <div className="p-2 bg-black/5 dark:bg-white/5 rounded-lg">
              <Settings className="w-5 h-5 text-muted group-hover:text-foreground" />
            </div>
            <span className="p font-medium text-foreground">Settings</span>
          </a>

          {/* Help */}
          <a
            href="#"
            className="flex items-center gap-4 p-4 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors group"
          >
            <div className="p-2 bg-black/5 dark:bg-white/5 rounded-lg">
              <HelpCircle className="w-5 h-5 text-muted group-hover:text-foreground" />
            </div>
            <span className="p font-medium text-foreground">Help & Support</span>
          </a>
        </div>

        {/* Logout Section */}
        <div className="border-t border-subtle pt-4 mt-auto">
          <h4 className="h4 text-muted mb-3">
            Session
          </h4>
          <button
            onClick={() => {/* handle logout */}}
            className="w-full flex items-center gap-4 p-4 rounded-lg hover:bg-destructive/10 text-destructive border border-destructive/10 transition-all duration-200 group"
          >
            <div className="p-2 bg-destructive/10 rounded-lg group-hover:bg-destructive/20 transition-colors">
              <LogOut className="w-5 h-5" />
            </div>
            <span className="p font-medium">Log out</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default UserProfile;