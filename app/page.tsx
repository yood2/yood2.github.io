import Personal from '@/components/personal';
import Project, { ProjectProps } from '@/components/project';
import { ProjectList } from '@/data/project-data';

export default function Home() {
    return (
        <>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Hi, I&apos;m Daniel! 👋
            </h1>
            <Personal />
            <p className="text-base sm:text-lg">
                I am a student at the University of British Columbia doing a
                combined major in Business and Computer Science. I like fast
                code 💻, chess ♟️, and coffee ☕️.
            </p>
        </>
    );
}
