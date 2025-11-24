import { Open_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import NavSidebar from '../components/layout/NavSidebar';
import Header from '../components/layout/Header';

const openSans = Open_Sans({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-open',
});

const fixel = localFont({
  src: [{ path: '../fonts/FixelDisplay-SemiBold.woff2' }],

  variable: '--font-display',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${openSans.variable} ${fixel.variable}`}>
        <div className="flex h-screen w-screen overflow-hidden">
          <NavSidebar />

          <div className="flex-1 flex flex-col h-full overflow-hidden">
            <Header />

            <main className="flex-1 overflow-auto p-4 md:p-0 md:pr-2">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
