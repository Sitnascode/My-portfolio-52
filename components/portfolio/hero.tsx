import { Button } from "@/components/ui/button"
import { Github, Mail, ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
          Sitira Nasir
        </h1>
        
        {/* Title */}
        <p className="text-lg sm:text-xl text-accent mb-6">
          Software Engineering Student | Aspiring AI & Full-Stack Developer
        </p>
        
        {/* Summary */}
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Passionate about building real-world systems through clean code and problem-solving. 
          Focused on AI, Machine Learning, and scalable software solutions through hands-on 
          academic and personal projects.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 active:scale-95"
          >
            <a href="#projects">
              <ArrowDown className="mr-2 h-4 w-4" />
              View Projects
            </a>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            className="border-border hover:bg-secondary text-foreground px-6 py-3 text-base bg-transparent transition-all duration-300 hover:scale-105 hover:border-primary/50 active:scale-95"
          >
            <a href="https://github.com/sitnascode" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            className="border-border hover:bg-secondary text-foreground px-6 py-3 text-base bg-transparent transition-all duration-300 hover:scale-105 hover:border-primary/50 active:scale-95"
          >
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
