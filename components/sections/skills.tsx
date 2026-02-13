import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { skillCategories, certifications } from "@/lib/resume-data"
import { Badge } from "@/components/ui/badge"
import { Award, Code, Database, Globe, Layers, Terminal } from "lucide-react"

const categoryIcons = {
  "Frontend": Globe,
  "Frameworks & Libraries": Layers,
  "Backend": Terminal,
  "Languages": Code,
  "Databases": Database,
  "Tools & Platforms": Terminal
}

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable web applications
            </p>
            <div className="w-20 h-1 gradient-primary rounded-full mx-auto" />
          </div>

          {/* Skills Grid */}
          <div className="space-y-6">
            {/* Main Skills Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skillCategories).map(([category, skills], index) => {
                const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || Code
                return (
                  <div 
                    key={category}
                    className="modern-card p-6 group hover:scale-105 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="space-y-4">
                      {/* Category Header */}
                      <div className="flex items-center gap-3">
                        <div className="p-2 gradient-primary rounded-lg group-hover:scale-110 transition-transform">
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="font-semibold text-foreground group-hover:gradient-text transition-all">
                          {category}
                        </h3>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="secondary"
                            className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}

              {/* Currently Learning - Placed beside Tools */}
              <div className="modern-card p-6 gradient-accent text-white animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="space-y-4">
                  <h3 className="font-semibold">Currently Learning</h3>
                  <div className="space-y-2 text-sm opacity-90">
                    <div>• Advanced React Patterns</div>
                    <div>• Microservices Architecture</div>
                    <div>• Cloud Deployment (AWS)</div>
                    <div>• Performance Optimization</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row - Certifications and Proficiency */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Certifications */}
              <div className="modern-card p-6 animate-fade-in-left">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 gradient-accent rounded-lg">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground">Certifications</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <div 
                        key={cert.name} 
                        className="space-y-1 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        <h4 className="font-medium text-foreground text-sm">{cert.name}</h4>
                        <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skill Level Indicator */}
              <div className="modern-card p-6 animate-fade-in-right">
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">Proficiency Level</h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">MERN Stack</span>
                        <span className="text-primary font-medium">Advanced</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="gradient-primary h-2 rounded-full w-[90%]" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">JavaScript/TypeScript</span>
                        <span className="text-primary font-medium">Expert</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="gradient-primary h-2 rounded-full w-[95%]" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Database Design</span>
                        <span className="text-primary font-medium">Intermediate</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="gradient-primary h-2 rounded-full w-[80%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
