"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { profile } from "@/lib/resume-data"
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, CheckCircle } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const hasLinkedIn = !!profile.links.linkedin
  const hasGitHub = !!profile.links.github
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's discuss how we can work together
            </p>
            <div className="w-20 h-1 gradient-primary rounded-full mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-left">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Get in Touch</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Available for full-time opportunities, freelance projects, and consulting. 
                    Let's build something amazing together!
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Email</div>
                      <div className="text-muted-foreground group-hover:text-primary transition-colors">
                        {profile.email}
                      </div>
                    </div>
                  </a>

                  <a
                    href={`tel:${profile.phone}`}
                    className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-14 h-14 gradient-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Phone</div>
                      <div className="text-muted-foreground group-hover:text-primary transition-colors">
                        {profile.phone}
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 group">
                    <div className="w-14 h-14 bg-secondary border-2 border-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Location</div>
                      <div className="text-muted-foreground">{profile.location}</div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-8 border-t border-border">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Connect on Social</h4>
                    <div className="flex gap-4">
                      {hasGitHub && (
                        <a
                          href={profile.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-secondary border-2 border-border rounded-xl flex items-center justify-center hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:rotate-6"
                          aria-label="GitHub Profile"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {hasLinkedIn && (
                        <a
                          href={profile.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-secondary border-2 border-border rounded-xl flex items-center justify-center hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:rotate-6"
                          aria-label="LinkedIn Profile"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-right">
              <div className="modern-card p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 gradient-primary rounded-lg">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Send a Message</h3>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-foreground">
                          Name *
                        </label>
                        <Input 
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="bg-secondary border-2 border-border focus:border-primary transition-all duration-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-foreground">
                          Email *
                        </label>
                        <Input 
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="bg-secondary border-2 border-border focus:border-primary transition-all duration-300"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-semibold text-foreground">
                        Subject *
                      </label>
                      <Input 
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project inquiry, collaboration, etc."
                        required
                        className="bg-secondary border-2 border-border focus:border-primary transition-all duration-300"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-foreground">
                        Message *
                      </label>
                      <Textarea 
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, requirements, timeline, and budget..."
                        rows={6}
                        required
                        className="bg-secondary border-2 border-border focus:border-primary transition-all duration-300 resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting || isSubmitted}
                      className="w-full btn-primary group"
                      size="lg"
                    >
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Message Sent!
                        </>
                      ) : isSubmitting ? (
                        <>
                          <div className="h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
