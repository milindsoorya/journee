import './globals.css';
import type { Metadata } from 'next';
import { ClientThemeProvider } from '../components/ClientThemeProvider';

export const metadata: Metadata = {
  title: 'Journée Trip Planner',
  description: 'AI-assisted trip planning prototype.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>
      </head>
      <body className="h-screen overflow-hidden antialiased bg-background text-foreground">
          <ClientThemeProvider>{children}</ClientThemeProvider>
        </body>
    </html>
  );
}