import Personal from '@/components/personal';
import Navbar from '@/components/navbar';
import Project, { ProjectProps } from '@/components/project';

const projects: ProjectProps[] = [
    {
        image: '/images/cat.jpeg',
        title: 'Neuro-Signal Visualizer',
        desc: 'Created a data visualization component for the UBC Multifaceted Innovations in NeuroTechnology design team. Can receive up to 256 signals per second and render EEG data with custom settings.',
        tags: [
            'Typescript',
            'React',
            'Next.js',
            'TailwindCSS',
            'ReCharts',
            'Shadcn/ui',
        ],
        source: 'https://github.com/yood2/frontend-product-simulated-viz',
        demo: 'https://github.com/',
    },
    {
        image: '/images/cat.jpeg',
        title: 'cat',
        desc: 'its a cat. a really cute one! YAY FOR CATS! WOOHOOO',
        tags: ['cat', 'not a dog', 'react?', 'wowza'],
        source: 'https://github.com/',
        // demo: 'https://github.com/',
    },
];

export default function Home() {
    return (
        <div className="h-full flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="flex flex-col space-y-6 max-w-2xl w-full">
                <Navbar />
                <section id="about" className="space-y-4 py-4">
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
                <section id="projects" className="space-y-4 py-4">
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        Some things I&apos;m working on:
                    </h3>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                        {projects.map((project, index) => (
                            <Project key={index} {...project} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
