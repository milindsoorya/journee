import { LucideIcon } from "lucide-react";
import { List, Map, MessageCircle } from "lucide-react";

export type View = 'itinerary' | 'map' | 'chat';

export const VIEW_OPTIONS = [
  { 
    id: 'itinerary' as View, 
    label: 'List', 
    icon: List as LucideIcon 
  },
  { 
    id: 'map' as View, 
    label: 'Map', 
    icon: Map as LucideIcon 
  },
  { 
    id: 'chat' as View, 
    label: 'Chat', 
    icon: MessageCircle as LucideIcon 
  },
] as const;