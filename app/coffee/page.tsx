'use client';

import Generator from './components/generator';

export default function Coffee() {
    return (
        <>
            <div className="space-y-8 py-8">
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Coffee Journal
                </h2>
                <p className="text-base sm:text-lg">
                    Still building! This is where I plan to put my coffee notes.
                </p>
            </div>
            <div>
                <Generator />
            </div>
        </>
    );
}
