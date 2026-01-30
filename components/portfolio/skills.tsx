const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "C++"],
    color: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React"],
    color: "bg-sky-500/20 text-sky-400 border-sky-500/30",
  },
  {
    title: "Databases",
    skills: ["MySQL (Basic)"],
    color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code"],
    color: "bg-rose-500/20 text-rose-400 border-rose-500/30",
  },
  {
    title: "Concepts",
    skills: ["OOP", "DSA", "Algorithms", "Software Engineering Principles"],
    color: "bg-violet-500/20 text-violet-400 border-violet-500/30",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
          Skills
        </h2>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div 
              key={category.title}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className={`px-3 py-1.5 text-sm rounded-lg border font-medium ${category.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
