import Personal from '@/components/personal';
import Project, { ProjectProps } from '@/components/project';
import { ProjectList } from '@/data/project-data';

const projects: ProjectProps[] = ProjectList;

export default function Home() {
    return (
        <>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Hi, I&apos;m Daniel! 👋
            </h1>
            <Personal />
            <p className="text-base sm:text-lg">
                I am a student at the University of British Columbia doing a
                combined major in Business and Computer Science. Currently an
                undergrad CS TA and an incoming intern at Amazon. I like
                building cool stuff, chess, coffee, and running.
            </p>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Some fun stuff I&apos;m working on:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[800px] mx-auto auto-rows-fr">
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
            <p className="text-sm text-muted-foreground">
                Last Updated: April 25, 2025
            </p>
        </>
    );
}
