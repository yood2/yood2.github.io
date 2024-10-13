import { ProjectProps } from '@/components/project';

export const ProjectList: ProjectProps[] = [
    {
        title: 'Neuro-Signal Visualizer',
        desc: 'Created a data visualization component for the UBC Multifaceted Innovations in NeuroTechnology design team. Can receive signals at 256Hz and render EEG data with custom settings.',
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
        title: 'Data Cork',
        desc: "Interactive dashboard builder with several different components that you can 'pin' to make the perfect dashboard for you!",
        tags: ['Typescript', 'React', 'Next.js', 'TailwindCSS', 'Shadcn/ui'],
        source: 'https://github.com/',
        // demo: 'https://github.com/',
    },
];
