import { Mail, Linkedin, Github, Twitter, MessageSquare } from "lucide-react";

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "adeboyemalik67@gmail.com",
      href: "mailto:adeboyemalik67@gmail.com",
      description: "Reach out for web apps, AI solutions, or automation projects",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/abdul234",
      href: "https://www.linkedin.com/in/quiet-don-378387392/",
      description: "Let's connect professionally",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/Abdul234Malik",
      href: "https://github.com/Abdul234Malik",
      description: "Check out my code",
    },
    {
      icon: Twitter,
      title: "Twitter",
      value: "@abdul234",
      href: "https://x.com/FowosereNBA?t=IKkv0V8-BAqhVzdS3Dl5OQ&s=09",
      description: "Follow for tech insights",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
             I build modern web applications, AI-powered solutions, and automation systems. I’m always open to discussing new projects, product ideas, or opportunities where technology can create real impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div key={method.title} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-900">{method.title}</h3>
                      <p className="text-sm text-gray-600">{method.description}</p>
                    </div>
                  </div>
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline break-all"
                  >
                    {method.value}
                  </a>
                </div>
              );
            })}
          </div>

          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <MessageSquare className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl mb-2">Let's Build Something Amazing</h3>
            <p className="text-blue-100 mb-6">
              Whether you need a web application, an AI-powered assistant, or a system to automate repetitive workflows, I’d love to hear about your project.
            </p>
            <a
              href="mailto:adeboyemalik67@gmail.com"
              className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Send Me a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
