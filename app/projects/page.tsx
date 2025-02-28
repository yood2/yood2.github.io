import Project, { ProjectProps } from '@/components/project';
import { ProjectList } from '@/data/project-data';

const projects: ProjectProps[] = ProjectList;

export default function Projects() {
    return (
        <>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Some fun stuff I&apos;m working on:
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </>
    );
}
