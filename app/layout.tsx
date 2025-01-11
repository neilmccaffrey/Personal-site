import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import '../lib/fontAwesome';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Neil McCaffrey',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {metadata.title && <title>{metadata.title as string}</title>}
        {metadata.description && (
          <meta name="description" content={metadata.description} />
        )}
        <link rel="icon" sizes="32x32" href="/images/favicon-32x32.png" />
      </head>
      <body className="overflow-x-hidden bg-gray-100 dark:bg-customDark flex flex-col min-h-screen overflow-hidden">
        <Header />
        <main className="container flex-grow mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
