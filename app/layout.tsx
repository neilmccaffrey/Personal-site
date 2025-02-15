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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        {metadata.title && <title>{metadata.title as string}</title>}
        {metadata.description && (
          <meta name="description" content={metadata.description} />
        )}
        <link rel="icon" sizes="32x32" href="/images/favicon-32x32.png" />
      </head>
      <body className="bg-gray-100 dark:bg-customDark flex flex-col min-h-screen">
        <Header />
        <main className="container flex-grow mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
