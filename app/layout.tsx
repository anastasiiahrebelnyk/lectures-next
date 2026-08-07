import type { Metadata } from 'next';
import { Geist, Geist_Mono, Roboto } from 'next/font/google';
import './globals.css';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import TanstackProvider from '../components/TanstackProvider/TanstackProvider';
import AuthProvider from '../components/AuthProvider/AuthProvider';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  display: 'swap',
});

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: 'NoteHub',
  description: 'A place fir your notes',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <TanstackProvider>
          <AuthProvider>
            <Header />
            <main className="flex-1">
              {children}
              {modal}
            </main>
            <Footer />
          </AuthProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
