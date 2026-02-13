import { profile } from "@/lib/resume-data"
import { Github, Linkedin, Heart } from "lucide-react"

export function Footer() {
  const hasLinkedIn = !!profile.links.linkedin
  const hasGitHub = !!profile.links.github
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Brand */}
            <div className="text-center md:text-left space-y-2">
              <div className="text-2xl font-bold gradient-text">
                {profile.name}
              </div>
              <div className="text-muted-foreground">
                {profile.title}
              </div>
              <div className="text-sm text-muted-foreground">
                Building the future, one line of code at a time
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <div className="text-sm text-muted-foreground">
                Let's connect:
              </div>
              <div className="flex gap-4">
                {hasGitHub && (
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-background border-2 border-border rounded-xl flex items-center justify-center hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 group"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                )}
                {hasLinkedIn && (
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-background border-2 border-border rounded-xl flex items-center justify-center hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 group"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>© {currentYear} {profile.name}. All rights reserved.</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span>and lots of coffee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}