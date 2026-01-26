import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl text-gray-900">Adeboye Abdul-Malik</h1>
            <h2 className="text-2xl md:text-3xl text-gray-600">
              Full-Stack & AI Engineer building intelligent, scalable web products
            </h2>
          </div>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I design and develop full-stack applications, AI-powered features, and automated systems that solve real business problems from idea to production
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button 
              onClick={scrollToContact}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get In Touch
            </button>
            <a 
              href="#projects"
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              View Projects
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:adeboyemalik67@gmail.com"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-gray-400" />
      </div>
    </section>
  );
}
