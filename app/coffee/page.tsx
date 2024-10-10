import Navbar from '@/components/navbar';

export default function Coffee() {
    return (
        <div className="h-full flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="flex flex-col space-y-6 max-w-2xl w-full">
                <Navbar />
                <p>Still building...</p>
            </div>
        </div>
    );
}
