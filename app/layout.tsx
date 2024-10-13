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
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className="h-full flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
                    <div className="flex flex-col space-y-6 max-w-2xl w-full">
                        <Navbar />
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
