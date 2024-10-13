import { Button } from '@/components/ui/button';
import Link from 'next/link';
import LinkIcon from './LinkIcon';

export default function Personal() {
    return (
        <div className="flex flex-col space-y-0 py-4">
            <Link href="https://www.linkedin.com/in/yood2/">
                <Button variant="link" className="px-0 justify-start">
                    <LinkIcon />
                    LinkedIn
                </Button>
            </Link>
            <Link href="https://github.com/yood2">
                <Button variant="link" className="px-0 justify-start">
                    <LinkIcon />
                    GitHub
                </Button>
            </Link>
        </div>
    );
}
