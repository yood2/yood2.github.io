import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: 'yood2',
    description: 'personal site',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable}, min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-8 sm:py-16 px-8`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
