/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient, TripVersionStatus } = require('@prisma/client');

const datasourceUrl =
  process.env.DIRECT_DATABASE_URL ?? process.env.DATABASE_URL;

if (!datasourceUrl) {
  throw new Error(
    'Set DATABASE_URL or DIRECT_DATABASE_URL before running the seed script.'
  );
}

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: datasourceUrl,
    },
  },
});

async function main() {
  await prisma.note.deleteMany();
  await prisma.chatMessage.deleteMany();
  await prisma.tripVersion.deleteMany();
  await prisma.trip.deleteMany();
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      name: 'Milind Soorya',
      email: 'milindsoorya@gmail.com',
    },
  });

  const agent = await prisma.user.create({
    data: {
      name: 'Agent',
      email: 'agent@journee.com',
    },
  });

  const scotlandTrip = await prisma.trip.create({
    data: {
      title: 'Scotland',
      icon: '🏴',
      isFolder: true,
      ownerId: user.id,
      versions: {
        create: [
          {
            name: '1. Highlands Route',
            status: TripVersionStatus.final,
          },
          {
            name: '2. Coastal & Isles Option',
            status: TripVersionStatus.draft,
          },
          {
            name: '3. Test: 5 Day Camping',
            status: TripVersionStatus.draft,
          },
        ],
      },
    },
    include: {
      versions: true,
    },
  });

  await prisma.trip.create({
    data: {
      title: 'Italy Adventure',
      icon: '🇮🇹',
      isFolder: false,
      ownerId: user.id,
    },
  });

  const activeVersion = scotlandTrip.versions[0];

  await prisma.note.createMany({
    data: [
      {
        content:
          'Accommodation confirmed near Morvich. Check opening hours for the Three Sisters viewpoint hike (must arrive before 4 PM).',
        authorId: user.id,
        tripVersionId: activeVersion.id,
      },
      {
        content:
          "I've sourced three small, scenic spots to replace Stirling Castle. Will present options in chat.",
        authorId: agent.id,
        tripVersionId: activeVersion.id,
      },
    ],
  });

  const chatMessages = [
    {
      authorId: agent.id,
      message: "Hello! I've generated your initial **Highlands Route**. Take a look at Day 1.",
      timestamp: new Date('2023-10-14T10:00:00Z'),
    },
    {
      authorId: user.id,
      message: 'The itinerary looks good, but can we swap the Stirling Castle stop?',
      timestamp: new Date('2023-10-14T10:05:00Z'),
    },
    {
      authorId: agent.id,
      message: "I've updated Day 1 to include a stop at the **Falkirk Wheel**.",
      timestamp: new Date('2023-10-14T10:10:00Z'),
    },
    {
      authorId: user.id,
      message: 'Bridge is fine, thanks!',
      timestamp: new Date('2023-10-14T10:15:00Z'),
    },
    {
      authorId: agent.id,
      message:
        'The new route includes a ferry option for the Isle of Skye on Day 3. Let me know if you prefer the bridge.',
      timestamp: new Date('2023-10-14T10:20:00Z'),
    },
    {
      authorId: user.id,
      message: 'Looks good!',
      timestamp: new Date('2023-10-14T10:25:00Z'),
    },
  ];

  for (const message of chatMessages) {
    await prisma.chatMessage.create({
      data: {
        ...message,
        tripId: scotlandTrip.id,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
