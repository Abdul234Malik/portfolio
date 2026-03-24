import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl text-gray-900 animate-blur-reveal" style={{ animationDelay: "0s" }}>
              Adeboye Abdul-Malik
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 animate-blur-reveal" style={{ animationDelay: "0.1s" }}>
              Full-Stack Developer & AI Engineer building intelligent, scalable web products
            </h2>
          </div>

          <p className="text-xl text-gray-700 max-w-2xl mx-auto animate-blur-reveal" style={{ animationDelay: "0.2s" }}>
            I design and develop full-stack applications, AI-powered features, and automated systems that solve real business problems from idea to production
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap animate-blur-reveal" style={{ animationDelay: "0.35s" }}>
            <button 
              onClick={scrollToContact}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Get In Touch
            </button>
            <a 
              href="#projects"
              className="px-6 py-3 border-2 border-blue-300 text-gray-800 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors"
            >
              View Projects
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4 animate-blur-reveal" style={{ animationDelay: "0.5s" }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:adeboyemalik67@gmail.com"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-blue-400" />
      </div>
    </section>
  );
}
