export type TripVersion = {
    id: number;
    name: string;
    status: 'final' | 'draft';
};

export type Trip = {
    id: number;
    title: string;
    icon: string;
    versions: TripVersion[];
    isFolder: boolean;
};

export const DUMMY_TRIPS: Trip[] = [
    {
        id: 1,
        title: 'Scotland',
        icon: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
        isFolder: true,
        versions: [
            { id: 101, name: '1. Highlands Route', status: 'final' },
            { id: 102, name: '2. Coastal & Isles Option', status: 'draft' },
            { id: 103, name: '3. Test: 5 Day Camping', status: 'draft' },
        ],
    },
    {
        id: 2,
        title: 'Italy Adventure',
        icon: '🇮🇹',
        isFolder: false,
        versions: [],
    },
];

export const DUMMY_NOTES = [
    {
        user: 'Milind S.',
        isAgent: false,
        timestamp: '11:45 AM, Oct 14',
        content: 'Accommodation confirmed near Morvich. Check opening hours for the Three Sisters viewpoint hike (must arrive before 4 PM).',
    },
    {
        user: 'Agent',
        isAgent: true,
        timestamp: '12:05 PM, Oct 14',
        content: "I've sourced three small, scenic spots to replace Stirling Castle. Will present options in chat.",
    },
];