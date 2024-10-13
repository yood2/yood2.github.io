import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Arrow = () => (
    <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M6 11L6 4L10.5 7.5L6 11Z" fill="currentColor"></path>
    </svg>
);

export default function Personal() {
    return (
        <div className="flex flex-col space-y-0 py-4">
            <Link href="https://www.linkedin.com/in/yood2/">
                <Button variant="link" className="px-0 justify-start">
                    <Arrow />
                    LinkedIn
                </Button>
            </Link>
            <Link href="https://github.com/yood2">
                <Button variant="link" className="px-0 justify-start">
                    <Arrow />
                    GitHub
                </Button>
            </Link>
        </div>
    );
}
