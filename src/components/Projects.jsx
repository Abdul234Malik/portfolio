import { ExternalLink, Github } from "lucide-react";
export function Projects() {
  const projects = [
    {
      title: "Foodie",
      description: "Developed a fully functional, dynamic, and responsive front-end website using standard HTML and CSS, faithfully translating a static restaurant design image into a cross-platform user experience",
      tags: ["HTML", "CSS"],
      image: "pj-img/foodie-project.png",
      github: "https://github.com",
      demo: "",
    },
    {
      title: "Fresh Bite Cafe",
      description: "Implemented a comprehensive digital menu platform with an intuitive customer interface for placing orders and a streamlined, user-friendly back-end content management system (CMS) for staff updates.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "pj-img/fresh-bite.png",
      github: "https://github.com",
      demo: "",
    },
    {
      title: "Expense Tracker (Fullstack)",
      description: "Developed a secure, authentication-protected expense tracking application that utilizes a robust backend built with FastAPI and a persistent data storage layer powered by MySQL, ensuring data integrity and user privacy.",
      tags: ["React", "MySQL", "FastAPI"],
      image: "pj-img/exp-tracker.png",
      github: "https://github.com",
      demo: "",
    },
    {
      title: "Nigerian States App",
      description: "Created a dynamic web application that provides detailed information about Nigerian states, leveraging React Router for seamless navigation and Tailwind CSS for a responsive and visually appealing user interface.",
      tags: ["React Router","Tailwind CSS","FastAPI"],
      image: "pj-img/9ja-app.png",
      github: "https://github.com",
      demo: "",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-center text-gray-900">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-gray-900">{project.title}</h3>
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
                  
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
