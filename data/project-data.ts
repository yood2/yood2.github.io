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
        title: 'Modded T440p',
        desc: 'Currently working on modding a Thinkpad T440p to be used as a Linux machine. Upgrading the screen, keyboard, and internals to make it a more modern machine.',
        tags: ['Linux', 'Thinkpad', 'T440p', 'Modding', 'Hardware'],
        // source: 'https://github.com/',
        demo: '/projects/thinkpad',
    },
];
