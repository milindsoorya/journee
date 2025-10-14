import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '../components/ThemeProvider';

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
      <ThemeProvider>
        <body className="h-screen overflow-hidden antialiased bg-background text-foreground">
          {children}
          <script async src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>
        </body>
      </ThemeProvider>
    </html>
  );
}