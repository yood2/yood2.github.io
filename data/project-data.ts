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
        desc: 'Creating a open source Brain-Computer Interface for collecting and managing brain waves for the UBC Multifacted Innovations in Neuro-Tech team.',
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
        desc: 'Custom react components that use Markdown files as a CMS for a static site. Made this for when I wanted to try blogging.',
        tags: ['Typescript', 'React', 'Next.js', 'TailwindCSS', 'Shadcn/ui'],
        source: 'https://github.com/yood2/stadik',
    },
    {
        title: 'Hermes',
        desc: 'Desktop application to help with managing investment portfolios by automating stock analysis process. Currently only does Mean-Variance Analysis but will be adding other pricing models soon.',
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
