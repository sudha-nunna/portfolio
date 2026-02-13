"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/resume-data"
import { Download, Mail, Menu, X, Sun, Moon, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

const nav = [
  { href: "home", label: "Home" },
  { href: "about", label: "About" },
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
  { href: "experience", label: "Experience" },
  { href: "education", label: "Education" },
  { href: "contact", label: "Contact" },
]

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    // Check if user has a theme preference saved
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      // Default to light mode
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = nav.map(item => item.href)
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <header 
        style={{ 
          background: 'linear-gradient(135deg, #10B981 0%, #14B8A6 50%, #06B6D4 100%)',
        }}
        className="fixed top-0 z-50 w-full transition-all duration-500 border-b border-white/20 shadow-2xl backdrop-blur-xl py-2"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-14' : 'h-16'
          }`}>
            {/* Brand - More Attractive */}
            <button
              onClick={() => scrollToSection('home')}
              className="relative group cursor-pointer" 
              aria-label="Go to Home"
            >
              <span className="text-2xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                {profile.name.split(" ")[0]}
              </span>
            </button>

            {/* Desktop Navigation - Enhanced */}
            <nav className="hidden lg:flex items-center gap-2" aria-label="Main navigation">
              {nav.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    activeSection === item.href 
                      ? 'text-white bg-primary/20 shadow-lg shadow-primary/20' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                  {activeSection === item.href && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
                  )}
                </button>
              ))}
            </nav>

            {/* Actions - Enhanced */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle - More Attractive */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="hidden sm:flex hover:bg-slate-800/50 transition-all duration-300 hover:scale-110 rounded-full w-10 h-10 p-0 text-slate-300 hover:text-white"
              >
                <div className="relative w-5 h-5">
                  <Sun className={`h-5 w-5 absolute inset-0 transition-all duration-300 ${isDark ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
                  <Moon className={`h-5 w-5 absolute inset-0 transition-all duration-300 ${isDark ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
                </div>
              </Button>

              {/* Email - Enhanced */}
              <Button 
                asChild 
                variant="ghost" 
                size="sm" 
                className="hidden sm:flex hover:bg-slate-800/50 hover:scale-110 transition-all duration-300 rounded-full w-10 h-10 p-0 text-slate-300 hover:text-white"
              >
                <a href={`mailto:${profile.email}`} aria-label="Send email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>

              {/* Resume Download - More Prominent */}
              <Button 
                asChild 
                size="sm"
                className="btn-primary hidden sm:flex relative overflow-hidden group"
              >
                <a href="/resume" aria-label="Download resume" className="flex items-center gap-2">
                  <Download className="h-4 w-4 group-hover:animate-bounce" />
                  <span className="hidden md:inline">Resume</span>
                </a>
              </Button>

              {/* Mobile Menu Button - Enhanced */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden hover:bg-slate-800/50 transition-all duration-300 hover:scale-110 rounded-full w-10 h-10 p-0 text-slate-300 hover:text-white"
              >
                <div className="relative w-5 h-5">
                  <Menu className={`h-5 w-5 absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
                  <X className={`h-5 w-5 absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative bottom border */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        )}
      </header>

      {/* Mobile Menu - Enhanced */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Panel - More Attractive with Dark Theme */}
        <div 
          className={`absolute top-20 right-4 left-4 sm:left-auto sm:w-80 bg-slate-900/98 backdrop-blur-xl border-2 border-primary/30 rounded-3xl shadow-2xl transform transition-all duration-500 ${
            isMobileMenuOpen 
              ? 'translate-y-0 opacity-100 scale-100' 
              : '-translate-y-4 opacity-0 scale-95'
          }`}
        >
          <div className="p-6 space-y-6">
            {/* Decorative header */}
            <div className="flex items-center gap-3 pb-4 border-b border-slate-700">
              <div className="p-2 gradient-primary rounded-lg">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold text-white">Navigation</span>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-2">
              {nav.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                    activeSection === item.href 
                      ? 'text-white bg-primary/20 scale-105 shadow-lg shadow-primary/20' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50 hover:translate-x-2'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3">
                    {activeSection === item.href && (
                      <div className="w-1.5 h-1.5 gradient-primary rounded-full animate-pulse" />
                    )}
                    {item.label}
                  </div>
                </button>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className="space-y-2 pt-4 border-t border-slate-700">
              <Button
                onClick={toggleTheme}
                variant="outline"
                className="w-full justify-start hover:scale-105 transition-transform rounded-xl bg-slate-800/50 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
              >
                {isDark ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                className="w-full justify-start hover:scale-105 transition-transform rounded-xl bg-slate-800/50 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
              >
                <a href={`mailto:${profile.email}`}>
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </a>
              </Button>
              
              <Button 
                asChild 
                className="w-full btn-primary rounded-xl"
              >
                <a href="/resume">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
