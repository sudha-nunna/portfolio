import { Card, CardContent } from "@/components/ui/card"
import { profile } from "@/lib/resume-data"
import { Code, Database, Globe, Zap } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "MERN stack expertise with modern frameworks"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "MongoDB, PostgreSQL, and Redis optimization"
    },
    {
      icon: Globe,
      title: "API Development",
      description: "RESTful APIs with secure authentication"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Scalable systems and efficient solutions"
    }
  ]

  return (
    <section id="about" className="py-20 bg-secondary-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-20 h-1 gradient-primary rounded-full" />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {profile.professionalSummary}
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                I specialize in building scalable web applications using the MERN stack, 
                with a focus on clean code, optimal performance, and exceptional user experiences. 
                My passion lies in solving complex problems and delivering production-ready solutions.
              </p>
            </div>

            {/* Core Strengths */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Core Strengths</h3>
              <div className="grid grid-cols-2 gap-3">
                {profile.strengths.map((strength, index) => (
                  <div key={strength} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 gradient-primary rounded-full group-hover:scale-125 transition-transform" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {strength}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="space-y-6 animate-fade-in-right">
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={item.title}
                  className="modern-card p-6 group hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 gradient-primary rounded-xl group-hover:scale-110 transition-transform">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground group-hover:gradient-text transition-all">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Card */}
            <div className="modern-card p-6 gradient-primary text-white">
              <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">4+</div>
                  <div className="text-sm opacity-90">Major Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">1+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-sm opacity-90">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">3+</div>
                  <div className="text-sm opacity-90">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
