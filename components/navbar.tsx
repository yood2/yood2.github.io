import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function Navbar() {
    return (
        <nav className="w-full">
            <div className="flex justify-start items-center space-x-4 py-2">
                <Button variant="link" className="px-2">
                    About Me
                </Button>
                <Button variant="link" className="px-2">
                    Projects
                </Button>
                <Button variant="link" className="px-2">
                    Coffee
                </Button>
            </div>
            <Separator />
        </nav>
    );
}
