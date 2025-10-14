import './globals.css';
import type { Metadata } from 'next';

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
      <body className="h-screen overflow-hidden antialiased bg-bg-light">{children}</body>
    </html>
  );
}