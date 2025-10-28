# Journée Trip Planner

A modern trip planning workspace built with Next.js, Tailwind CSS, and Prisma. The interface features collapsible sidebars, a responsive center workspace, and live data sourced from a PostgreSQL database (compatible with Prisma Accelerate).

## Features

- **Responsive Layout:** Optimised for desktop and tablet breakpoints with mobile-specific controls and gestures.
- **Collapsible Sidebars:** Hide navigation panels on smaller screens to focus on itinerary, map, or chat content.
- **Live Data:** Trips, chat history, and notes are backed by a Prisma-managed PostgreSQL database with a reusable SWR data hook.
- **Component-Based Architecture:** Reusable UI primitives keep the codebase approachable and easy to extend.

## Prerequisites

- Node.js 18+
- npm 9+

## Environment Variables

Create a `.env` file using the template below:

```bash
cp .env.example .env
```

Update the values as needed:

- `DATABASE_URL` – Prisma Accelerate/Data Proxy URL (`prisma+postgres://...`)
- `DIRECT_DATABASE_URL` – direct Postgres connection string used by Prisma CLI commands
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` – optional browser key if you want to enable the Maps script

## Database Setup

1. Install dependencies and generate the Prisma client:
   ```bash
   npm install
   npm run db:push
   ```
2. Seed the database with the sample data used in the UI:
   ```bash
   npm run db:seed
   ```

`npm run db:push` uses `DIRECT_DATABASE_URL` under the hood, so make sure it points at a writable Postgres instance. The app itself reads and writes through Prisma Accelerate using `DATABASE_URL`. If you are not using Accelerate you can set both variables to the same standard Postgres connection string.

## Development

Run the development server with hot reloading:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to explore the app. Edit files under `src/` and the page refreshes automatically.

## Available Scripts

- `npm run dev` – start the dev server with Turbopack
- `npm run build` – create an optimised production build
- `npm run start` – run the production server
- `npm run lint` – lint the project
- `npm run db:push` – sync the Prisma schema to the database
- `npm run db:seed` – seed the database with starter content

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deployment

Deploy easily on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). Refer to the [Next.js deployment guide](https://nextjs.org/docs/app/building-your-application/deploying) for additional options.
