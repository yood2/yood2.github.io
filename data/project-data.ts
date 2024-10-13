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
        desc: "Building a interactive dashboard builder with several different components that you can 'pin' to make unique dashboards. Can also use existing spreadsheets and their formulas in their own 'pins'.",
        tags: [
            'Typescript',
            'Rust',
            'React',
            'Next.js',
            'TailwindCSS',
            'Shadcn/ui',
            'Tauri',
        ],
        // source: 'https://github.com/',
        // demo: 'https://github.com/',
    },
];
