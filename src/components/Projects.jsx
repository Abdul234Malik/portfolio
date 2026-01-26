import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-center text-gray-900">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Link
              to="/projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
