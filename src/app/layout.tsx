import './globals.css';
import { Inter } from 'next/font/google';
import { ClientThemeProvider } from '../components/ClientThemeProvider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Journée Trip Planner',
  description: 'AI-assisted trip planning prototype.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mapsKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {mapsKey && (
          <script
            async
            src={`https://maps.googleapis.com/maps/api/js?key=${mapsKey}`}
          />
        )}
      </head>
      <body className="h-screen overflow-hidden antialiased bg-background text-foreground">
        <ClientThemeProvider>{children}</ClientThemeProvider>
      </body>
    </html>
  );
}
