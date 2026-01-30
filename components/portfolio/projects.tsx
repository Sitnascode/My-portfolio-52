import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Study Revision Timetable Generator",
    description: "Generates optimized study schedules to improve planning and productivity. Helps students organize their revision sessions efficiently.",
    techStack: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://sitnascode.github.io/study-revision-timetable-generator-/",
    githubUrl: "https://github.com/sitnascode/study-revision-timetable-generator-",
    image: "/images/project-study-timetable.jpg",
  },
  {
    title: "TODO Application",
    description: "Interactive web application to manage daily tasks with features to add, complete, and delete tasks. Clean UI for efficient task management.",
    techStack: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://sitnascode.github.io/TODO-app/",
    githubUrl: "https://github.com/sitnascode/TODO-app",
    image: "/images/project-todo.jpg",
  },
  {
    title: "Online Learning Management System",
    description: "Comprehensive online course platform with both frontend and backend components. Features course management, student enrollment, and interactive learning experience.",
    techStack: ["React", "JavaScript", "HTML", "CSS", "Node.js"],
    liveUrl: "https://online-learning-management-system-six.vercel.app/",
    githubUrl: "https://github.com/sitnascode/Online-learning-management-system",
    image: "/images/project-lms.jpg",
  },
  {
    title: "Simple Quiz App",
    description: "Quiz application demonstrating JavaScript logic and user interaction. Tests knowledge with interactive question-answer format and instant feedback.",
    techStack: ["JavaScript", "HTML", "CSS", "DOM Manipulation"],
    liveUrl: "https://simple-quiz-app-delta-three.vercel.app/",
    githubUrl: "https://github.com/sitnascode",
    image: "/images/project-quiz.jpg",
  },
  {
    title: "JobPortal - Find Your Dream Job",
    description: "A comprehensive job search platform connecting job seekers with employers. Browse job listings, apply directly, and track your applications all in one place.",
    techStack: ["React", "JavaScript", "HTML", "CSS"],
    liveUrl: "https://jop-portal.vercel.app/",
    githubUrl: "https://github.com/Sitnascode/jop-portal",
    image: "/images/project-jobportal.jpg",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
          Projects
        </h2>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="bg-card border border-border rounded-xl overflow-hidden flex flex-col hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                {/* Project Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 bg-primary/10 text-accent text-xs rounded-md border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    asChild
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 active:scale-95"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-primary/50 hover:bg-primary/10 text-primary bg-transparent transition-all duration-300 hover:scale-105 hover:border-primary hover:text-primary active:scale-95"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
