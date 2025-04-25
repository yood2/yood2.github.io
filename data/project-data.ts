import { ProjectProps } from '@/components/project';

export const ProjectList: ProjectProps[] = [
    // {
    //     title: 'Neuro-Signal Visualizer',
    //     desc: 'Created a data visualization component for the UBC Multifaceted Innovations in NeuroTechnology design team. Can receive signals at 256Hz and render EEG data with custom settings.',
    //     tags: [
    //         'Typescript',
    //         'React',
    //         'Next.js',
    //         'TailwindCSS',
    //         'ReCharts',
    //         'Shadcn/ui',
    //     ],
    //     source: 'https://github.com/yood2/frontend-product-simulated-viz',
    //     demo: '/neuro',
    // },
    {
        title: 'MINT Open Source System',
        desc: 'Creating a open source Brain-Computer Interface for collecting and managing brain waves.',
        tags: [
            'Typescript',
            'React',
            'Next.js',
            'TailwindCSS',
            'ReCharts',
            'Shadcn/ui',
        ],
        source: 'https://github.com/yood2/frontend-product-simulated-viz',
        demo: '/projects/moss',
    },
    {
        title: 'Stadik',
        desc: 'Custom React components that automatically render Markdown files into styled web pages, built originally for a personal blog.',
        tags: ['Typescript', 'React', 'Next.js', 'TailwindCSS', 'Shadcn/ui'],
        source: 'https://github.com/yood2/stadik',
    },
    {
        title: 'Hermes',
        desc: 'Desktop application that automates financial analysis for investment portfolios. Currently supports Mean-Variance Analysis, with additional pricing models planned.',
        tags: [
            'Typescript',
            'React',
            'Electron',
            'Python',
            'yFinance',
            'Numpy',
        ],
        source: 'https://github.com/yood2/hermes',
    },
];
