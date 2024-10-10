import Personal from '@/components/personal';
import Navbar from '@/components/navbar';

export default function Home() {
    return (
        <div className="h-full flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="flex flex-col space-y-6 max-w-2xl w-full">
                <Navbar />
                <section id="about">
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        Hi, I&apos;m Daniel! 👋
                    </h3>
                    <Personal />
                    <p className="text-base sm:text-lg">
                        I am a student at the University of British Columbia
                        doing a combined major in Business and Computer Science.
                        I like programming, chess, running, weightlifting, and
                        coffee. Currently fixated on Python internals and
                        optimization.
                    </p>
                </section>
                <section id="projects">
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        Projects
                    </h3>
                    <p className="text-base sm:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus sodales sollicitudin neque eu viverra. Etiam
                        egestas nec nunc et faucibus. Aenean interdum neque et
                        eros rutrum, at ornare mauris luctus. Ut felis quam,
                        iaculis tristique accumsan id, interdum eget massa.
                        Proin porta elit nisl, a tincidunt ligula cursus vitae.
                        Quisque in felis non orci ultricies commodo. Vestibulum
                        efficitur diam sed nibh semper gravida. Donec commodo
                        sed dolor et tristique. Suspendisse orci massa, ultrices
                        sit amet dui vitae, ornare faucibus nunc. Sed at semper
                        purus. Curabitur vel facilisis felis. Quisque nisl dui,
                        tincidunt sed lorem sit amet, vehicula faucibus urna.
                    </p>
                </section>
                <section id="coffee">
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        Coffee
                    </h3>
                    <p className="text-base sm:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus sodales sollicitudin neque eu viverra. Etiam
                        egestas nec nunc et faucibus. Aenean interdum neque et
                        eros rutrum, at ornare mauris luctus. Ut felis quam,
                        iaculis tristique accumsan id, interdum eget massa.
                        Proin porta elit nisl, a tincidunt ligula cursus vitae.
                        Quisque in felis non orci ultricies commodo. Vestibulum
                        efficitur diam sed nibh semper gravida. Donec commodo
                        sed dolor et tristique. Suspendisse orci massa, ultrices
                        sit amet dui vitae, ornare faucibus nunc. Sed at semper
                        purus. Curabitur vel facilisis felis. Quisque nisl dui,
                        tincidunt sed lorem sit amet, vehicula faucibus urna.
                    </p>
                </section>
            </div>
        </div>
    );
}
