import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full">
            <div className="flex justify-start items-center space-x-4 py-2">
                <Button variant="link" className="px-2">
                    <Link href="/">Home</Link>
                </Button>
                <Button variant="link" className="px-2">
                    <a href="/projects">Projects</a>
                </Button>
            </div>
            <Separator />
        </nav>
    );
}
