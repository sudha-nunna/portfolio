"use client"

import { Button } from "@/components/ui/button"
import { profile } from "@/lib/resume-data"
import { Download, ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary-background to-background">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-left">
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-primary font-medium text-lg animate-slide-down" style={{ animationDelay: '0.2s' }}>
                Hello, I'm
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight animate-slide-down" style={{ animationDelay: '0.3s' }}>
                <span className="gradient-text">{profile.name}</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground animate-slide-down" style={{ animationDelay: '0.4s' }}>
                {profile.title}
              </h2>
            </div>

            {/* Summary */}
            <p className="text-lg lg:text-xl leading-relaxed text-muted-foreground max-w-2xl animate-fade-in" style={{ animationDelay: '0.5s' }}>
              {profile.summary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button 
                onClick={() => scrollToSection('projects')}
                size="lg" 
                className="btn-primary group"
              >
                View My Work
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-foreground hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 [&:hover_*]:text-white"
              >
                <a href="/resume">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <a 
                href={`mailto:${profile.email}`}
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:rotate-6"
                aria-label="Send email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:rotate-6"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:rotate-6"
                aria-label="GitHub profile"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold gradient-text">4+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold gradient-text">1+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 gradient-primary rounded-3xl blur-2xl opacity-20 animate-pulse-glow" />
              <div className="absolute -top-8 -right-8 w-24 h-24 gradient-accent rounded-full blur-xl opacity-30 animate-float" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-xl opacity-30 animate-float-slow" />
              
              {/* Main Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden modern-card hover:scale-105 transition-transform duration-500">
                <img
                  src="/images/sudhaphoto.png"
                  alt="Sudha Nunna - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-card border-2 border-primary/20 rounded-2xl p-4 shadow-2xl animate-bounce-in hover:scale-110 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform"
        aria-label="Scroll to about section"
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center hover:border-primary transition-colors">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </button>
    </section>
  )
}
