import { ArrowRight } from "lucide-react";

export function ProjectCard({ project }) {
  const projectUrl = project.demo || project.github;

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-4 sm:p-6">
        <div className="mb-4 rounded-lg border border-gray-200 bg-gray-100 p-2 shadow-sm overflow-hidden">
          <div className="aspect-video overflow-hidden rounded-md">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <h3 className="text-xl mb-2 text-gray-900 text-center">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-center">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Project
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
