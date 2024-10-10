export default function Home() {
    return (
        <div className="h-full flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="flex flex-col space-y-6 max-w-2xl w-full">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Hi, I&apos;m Daniel!
                </h3>
                <p className="text-base sm:text-lg">
                    I am a student at the University of British Columbia doing a
                    combined major in Business and Computer Science. I like
                    programming, chess, running, weightlifting, and coffee.
                    Currently fixated on Python internals and optimization.
                </p>
            </div>
        </div>
    );
}
