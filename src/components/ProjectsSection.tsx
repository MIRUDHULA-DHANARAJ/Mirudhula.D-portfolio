// src/components/ProjectsSection.tsx
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  return (
    <section className="p-8 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}