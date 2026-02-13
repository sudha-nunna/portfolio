"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/resume-data"
import { ExternalLink, Github, ArrowUpRight, Zap } from "lucide-react"

export function Projects() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 bg-secondary-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of recent projects demonstrating technical expertise, innovation, and real-world impact
            </p>
            <div className="w-20 h-1 gradient-primary rounded-full mx-auto" />
          </div>

          {/* Featured Projects */}
          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.name}
                className="modern-card p-8 group hover:scale-[1.02] transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Project Info */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Badge className="gradient-primary text-white border-0 hover:scale-105 transition-transform">
                          <Zap className="h-3 w-3 mr-1" />
                          {project.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          Project {index + 1}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:gradient-text transition-all">
                        {project.name}
                      </h3>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Contributions */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <div className="w-2 h-2 gradient-primary rounded-full" />
                        Key Achievements
                      </h4>
                      <div className="grid gap-3">
                        {project.keyContributions.map((contribution, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors">
                            <div className="w-1.5 h-1.5 gradient-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">
                              {contribution}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4 pt-4">
                      {project.githubUrl && (
                        <Button 
                          asChild
                          className="btn-primary group"
                          size="lg"
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            View Code
                            <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button 
                          asChild
                          variant="outline" 
                          size="lg"
                          className="border-2 border-primary text-foreground hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 [&:hover_*]:text-white"
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-6">
                    <div className="modern-card p-6 bg-background/50">
                      <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 gradient-accent rounded-full" />
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge 
                            key={tech}
                            variant="secondary"
                            className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:scale-110"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Project Stats */}
                    <div className="modern-card p-6 gradient-accent text-white">
                      <h4 className="font-semibold mb-4">Project Impact</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="opacity-90">Development Time</span>
                          <span className="font-medium">2-3 months</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="opacity-90">Technologies Used</span>
                          <span className="font-medium">{project.tech.length}+</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="opacity-90">Status</span>
                          <span className="font-medium">Production Ready</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h3 className="text-3xl font-bold text-foreground">
                  More <span className="gradient-text">Projects</span>
                </h3>
                <div className="w-16 h-1 gradient-primary rounded-full mx-auto" />
              </div>
              
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                  <div 
                    key={project.name}
                    className="modern-card p-6 group hover:scale-105 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <Badge className="gradient-primary text-white border-0 w-fit">
                          {project.category}
                        </Badge>
                        <h4 className="text-lg font-semibold text-foreground group-hover:gradient-text transition-all">
                          {project.name}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="outline" 
                            className="text-xs border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && (
                          <Badge variant="outline" className="text-xs border-border text-muted-foreground">
                            +{project.tech.length - 3}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        {project.githubUrl && (
                          <Button 
                            asChild
                            size="sm" 
                            variant="ghost" 
                            className="text-xs hover:bg-secondary group/btn"
                          >
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-3 w-3 mr-1 group-hover/btn:scale-110 transition-transform" />
                              Code
                            </a>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button 
                            asChild
                            size="sm" 
                            variant="ghost" 
                            className="text-xs hover:bg-secondary group/btn"
                          >
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3 w-3 mr-1 group-hover/btn:scale-110 transition-transform" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
