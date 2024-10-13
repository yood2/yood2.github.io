'use client';

import Chart from './components/Chart';
import Link from 'next/link';

export default function Neuro() {
    return (
        <>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Neuro-Signal Visualizer
            </h2>
            <p>
                A common practice within neuro-physiology research is to use
                EEG&apos;s to monitor and model signals in the brain. In order
                to improve accessibility to research, UBC&apos;s Multifaceted
                Innovations in Neurotechnology design team is creating a suite
                of easy-to-use, open-source components that can be utilized by
                anyone interested in research.
            </p>
            <p>
                Below is a interactive example of our Neuro-Signal Visualizer
                component. It was coded in Typescript as a modular React
                component. Currently, it is capable of simulating neuro-signals,
                or can receive signals at speeds of ~256Hz from a WebSocket or
                API. In order to ensure performance, the front-end is only
                rendering batched updates which can be dynamically changed with
                the sliders below.
            </p>
            <p>
                Alternatively, if you want to use it as just a read tool for EDF
                files, I have made a EDF parsing Node module{' '}
                <Link
                    href="https://github.com/yood2/edf-parser"
                    className="text-blue-500 underline hover:text-blue-700"
                >
                    here
                </Link>
                .
            </p>
            <Chart />
        </>
    );
}
