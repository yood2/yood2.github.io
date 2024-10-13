import Personal from '@/components/personal';
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
        demo: '/neuro',
    },
    {
        image: '/images/cat.jpeg',
        title: 'Data Cork',
        desc: "Interactive dashboard builder with several different components that you can 'pin' to make the perfect dashboard for you!",
        tags: ['Typescript', 'React', 'Next.js', 'TailwindCSS', 'Shadcn/ui'],
        source: 'https://github.com/',
        // demo: 'https://github.com/',
    },
];

export default function Home() {
    return (
        <>
            <section id="about" className="space-y-4 py-4">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Hi, I&apos;m Daniel! 👋
                </h1>
                <Personal />
                <p className="text-base sm:text-lg">
                    I am a student at the University of British Columbia doing a
                    combined major in Business and Computer Science. I like
                    programming 💻, chess ♟️, running 👟, and coffee ☕️.
                    Currently fixated on Python internals and optimization.
                </p>
            </section>
            <section id="projects" className="space-y-4 py-4">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Some fun stuff I&apos;m working on:
                </h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                    {projects.map((project, index) => (
                        <Project key={index} {...project} />
                    ))}
                </div>
            </section>
        </>
    );
}
