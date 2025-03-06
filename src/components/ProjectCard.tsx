// src/components/ProjectCard.tsx
interface Project {
    title: string;
    description: string;
    technologies: string[];
    link: string;
  }
  
  export default function ProjectCard({ project }: { project: Project }) {
    return (
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-gray-100 px-2 py-1 rounded text-xs">{tech}</span>
          ))}
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-3 py-1 rounded">View Project</a>
      </div>
    );
  }