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
    <div className="absolute inset-0 bg-sidebar flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b border-border sticky top-0 bg-sidebar z-10">
        <button
          onClick={onClose}
          className="flex items-center gap-2 p-2 hover:bg-accent rounded-lg transition-colors group"
          aria-label="Go back"
        >
          <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
          <span className="text-sm font-medium">Back</span>
        </button>
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>

      {/* User Info Card */}
      <div className="p-5 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
            <span className="text-sm font-semibold text-primary-foreground">
              MS
            </span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Milind Soorya</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              milindsoorya@gmail.com
            </div>
          </div>
        </div>

        {/* Profile Stats (Optional) */}
        <div className="grid grid-cols-3 gap-2 text-center py-3 bg-accent/20 rounded-lg">
          <div>
            <div className="text-foreground font-semibold text-sm">5</div>
            <div className="text-xs text-muted-foreground">Trips</div>
          </div>
          <div>
            <div className="text-foreground font-semibold text-sm">12</div>
            <div className="text-xs text-muted-foreground">Ideas</div>
          </div>
          <div>
            <div className="text-foreground font-semibold text-sm">3</div>
            <div className="text-xs text-muted-foreground">Active</div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="px-5 pb-6 space-y-1 flex-1">
        <div className="mb-4 pt-2">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            Account
          </h4>
          
          {/* Upgrade Plan */}
          <a
            href="#"
            className="group flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 hover:from-primary/20 hover:to-primary/10 transition-all duration-200"
          >
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Crown className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground">Upgrade Plan</span>
              </div>
              <p className="text-xs text-muted-foreground">Unlock premium features</p>
            </div>
          </a>

          {/* Settings */}
          <a
            href="#"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
          >
            <div className="p-2 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
              <Settings className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
            </div>
            <span className="font-medium text-foreground">Settings</span>
          </a>

          {/* Help */}
          <a
            href="#"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
          >
            <div className="p-2 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
              <HelpCircle className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
            </div>
            <span className="font-medium text-foreground">Help & Support</span>
          </a>
        </div>

        {/* Logout Section */}
        <div className="border-t border-border/30 pt-4 mt-auto">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Session
          </h4>
          <button
            onClick={() => {/* handle logout */}}
            className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-destructive/10 text-destructive border border-destructive/10 transition-all duration-200 group"
          >
            <div className="p-2 bg-destructive/10 rounded-lg group-hover:bg-destructive/20 transition-colors">
              <LogOut className="w-5 h-5" />
            </div>
            <span className="font-medium">Log out</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default UserProfile;