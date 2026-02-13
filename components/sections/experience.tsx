import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experience } from "@/lib/resume-data"
import { Building, Calendar, MapPin, Zap } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building scalable solutions and delivering impactful results in production environments
            </p>
            <div className="w-20 h-1 gradient-primary rounded-full mx-auto" />
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div 
                key={exp.role}
                className="modern-card p-8 group hover:scale-[1.02] transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:gradient-text transition-all">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2">
                          <Building className="h-5 w-5 text-primary" />
                          <span className="text-lg font-semibold text-primary">
                            {exp.company}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <Badge className="gradient-primary text-white border-0 hover:scale-105 transition-transform w-fit">
                      <Zap className="h-3 w-3 mr-1" />
                      Current Position
                    </Badge>
                  </div>

                  {/* Project Highlight */}
                  {exp.project && (
                    <div className="modern-card p-6 bg-secondary-background border-l-4 border-l-primary">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground flex items-center gap-2">
                          <div className="w-2 h-2 gradient-primary rounded-full" />
                          Key Project
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">{exp.project}</p>
                      </div>
                    </div>
                  )}

                  {/* Responsibilities */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <div className="w-2 h-2 gradient-accent rounded-full" />
                      Key Achievements & Impact
                    </h4>
                    <div className="grid gap-3">
                      {exp.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-secondary-background/50 hover:bg-secondary-background transition-colors">
                          <div className="w-1.5 h-1.5 gradient-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <div className="w-2 h-2 gradient-primary rounded-full" />
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "Tailwind CSS", "Git", "REST APIs"].map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
