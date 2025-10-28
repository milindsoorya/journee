export interface DashboardUser {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string | null;
}

export interface DashboardNote {
  id: string;
  content: string;
  timestamp: string;
  author: DashboardUser;
  tripVersionId: string | null;
}

export type TripVersionStatus = 'final' | 'draft';

export interface DashboardTripVersion {
  id: string;
  name: string;
  status: TripVersionStatus;
  createdAt: string;
  notes: DashboardNote[];
}

export interface DashboardTrip {
  id: string;
  title: string;
  icon: string;
  isFolder: boolean;
  createdAt: string;
  owner: DashboardUser;
  versions: DashboardTripVersion[];
}

export interface DashboardChatMessage {
  id: string;
  message: string;
  timestamp: string;
  author: DashboardUser;
}

export interface DashboardResponse {
  trips: DashboardTrip[];
  notes: DashboardNote[];
  chatMessages: DashboardChatMessage[];
}
