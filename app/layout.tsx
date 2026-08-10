import './globals.css';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EmbracedParenting',
  description: 'Compassionate parent coaching for families seeking more calm, connection, and confidence.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script src="https://www.instagram.com/embed.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
