export interface User {
    id: string;
    name: string;
    email: string;
    avatarUrl?: string;
}

export interface Note {
    id: string;
    author: User;
    timestamp: Date;
    content: string;
}

export interface TripVersion {
    id: string;
    name: string;
    status: 'final' | 'draft';
    notes: Note[];
}

export interface Trip {
    id: string;
    title: string;
    icon: string;
    versions: TripVersion[];
    isFolder: boolean;
    owner: User;
}

// --- DUMMY DATA ---

const mockUser: User = {
    id: 'user-1',
    name: 'Milind Soorya',
    email: 'milindsoorya@gmail.com',
};

const mockAgent: User = {
    id: 'agent-1',
    name: 'Agent',
    email: 'agent@journee.com',
}

export const DUMMY_TRIPS: Trip[] = [
    {
        id: 'trip-1',
        title: 'Scotland',
        icon: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
        isFolder: true,
        owner: mockUser,
        versions: [
            { id: 'v-101', name: '1. Highlands Route', status: 'final', notes: [] },
            { id: 'v-102', name: '2. Coastal & Isles Option', status: 'draft', notes: [] },
            { id: 'v-103', name: '3. Test: 5 Day Camping', status: 'draft', notes: [] },
        ],
    },
    {
        id: 'trip-2',
        title: 'Italy Adventure',
        icon: '🇮🇹',
        isFolder: false,
        owner: mockUser,
        versions: [],
    },
];

export const DUMMY_NOTES: Note[] = [
    {
        id: 'note-1',
        author: mockUser,
        timestamp: new Date('2023-10-14T11:45:00Z'),
        content: 'Accommodation confirmed near Morvich. Check opening hours for the Three Sisters viewpoint hike (must arrive before 4 PM).',
    },
    {
        id: 'note-2',
        author: mockAgent,
        timestamp: new Date('2023-10-14T12:05:00Z'),
        content: "I've sourced three small, scenic spots to replace Stirling Castle. Will present options in chat.",
    },
];
