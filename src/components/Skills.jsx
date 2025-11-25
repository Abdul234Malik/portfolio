export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React",  "HTML","CSS","Javascript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      skills: ["FastAPI","MySQL","Python"],
    },
    {
      category: "Tools & Cloud",
      skills: ["Git", "Github"],
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving", "Team Leadership", "Code Review", "Debugging"],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-center text-gray-900">Skills & Expertise</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <div key={category.category} className="space-y-4">
                <h3 className="text-xl text-gray-900">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}