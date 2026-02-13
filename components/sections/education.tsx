import { Card, CardContent } from "@/components/ui/card"
import { education } from "@/lib/resume-data"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-20 bg-secondary-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic foundation and continuous learning journey
            </p>
            <div className="w-20 h-1 gradient-primary rounded-full mx-auto" />
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div 
                key={edu.degree}
                className="modern-card p-8 group hover:scale-[1.02] transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid lg:grid-cols-4 gap-8">
                  {/* Degree Info */}
                  <div className="lg:col-span-3 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 gradient-primary rounded-xl group-hover:scale-110 transition-transform">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:gradient-text transition-all">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-primary font-semibold">
                          {edu.school}
                        </p>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-6">
                    <div className="modern-card p-4 bg-background/50">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            Duration
                          </div>
                          <div className="font-semibold text-foreground">{edu.period}</div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Award className="h-4 w-4" />
                            Performance
                          </div>
                          <div className="font-semibold text-foreground">{edu.gpa}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Learning */}
          <div className="text-center">
            <div className="modern-card p-8 gradient-accent text-white max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-4">Continuous Learning</h3>
              <p className="opacity-90 leading-relaxed">
                Committed to staying current with emerging technologies and industry best practices through 
                online courses, certifications, and hands-on project development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
