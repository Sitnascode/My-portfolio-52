export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
          About Me
        </h2>
        
        {/* Content */}
        <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I am a <span className="text-foreground font-medium">Software Engineering student</span> with 
              a strong foundation in programming languages like JavaScript, Java, and C++. My journey in 
              software development is driven by a deep curiosity for how systems work and a commitment to 
              writing clean, maintainable code.
            </p>
            
            <p>
              My experience spans building both academic and real-world projects, from web applications 
              to management systems. I believe in <span className="text-foreground font-medium">learning by building</span> — 
              every project is an opportunity to grow and tackle new challenges.
            </p>
            
            <p>
              I am particularly interested in <span className="text-accent">Web Development</span>, exploring how to create 
              intelligent, scalable, and user-friendly software systems. I am always eager to collaborate, learn from others, 
              and contribute to meaningful projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
