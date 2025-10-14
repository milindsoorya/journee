export type View = 'itinerary' | 'map' | 'chat';

export const VIEW_OPTIONS = [
  { id: 'itinerary' as View, label: 'List', icon: '📋' },
  { id: 'map' as View, label: 'Map', icon: '🗺️' },
  { id: 'chat' as View, label: 'Chat', icon: '💬' },
] as const;