"use client"

import { profile, skills, education, projects, experience, certifications } from "@/lib/resume-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ResumeViewer() {
  const onPrint = () => {
    try {
      window.print()
    } catch {
      // no-op
    }
  }

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-700">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold">Resume</h1>
        <div className="flex gap-2">
          <Button onClick={onPrint} aria-label="Print or save as PDF">
            Print / Save as PDF
          </Button>
          <Button asChild variant="outline">
            <a href="/" aria-label="Back to home">
              Back
            </a>
          </Button>
          {/* Quick email action */}
          <Button asChild variant="outline">
            <a href={`mailto:${profile.email}`} aria-label="Email Sudha">
              Email Me
            </a>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            {profile.name} — <span className="font-normal">{profile.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          <div className="space-y-1 text-sm">
            <p>
              <span className="text-muted-foreground">Email:</span> {profile.email}
            </p>
            <p>
              <span className="text-muted-foreground">Phone:</span> {profile.phone}
            </p>
            <p>
              <span className="text-muted-foreground">Location:</span> {profile.location}
            </p>
          </div>
          <div className="md:col-span-2 leading-relaxed">{profile.summary}</div>
        </CardContent>
      </Card>

      <section className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="rounded-md border px-2 py-1 text-sm">
                {s}
              </span>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Certifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            {certifications.map((c, idx) => (
              <div key={idx} className="text-sm">
                {c.name}
                {c.issuer ? ` — ${c.issuer}` : ""}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Projects</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {projects.map((p, idx) => (
            <div key={idx}>
              <h3 className="font-medium">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.description}</p>
              {p.keyContributions && p.keyContributions.length > 0 && (
                <ul className="mt-2 list-disc pl-5 text-sm">
                  {p.keyContributions.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-md border px-2 py-0.5 text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {experience.map((e, idx) => (
            <div key={idx}>
              <h3 className="font-medium">
                {e.role} — {e.company}
              </h3>
              <ul className="mt-2 list-disc pl-5 text-sm">
                {e.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {education.map((ed, idx) => (
            <div key={idx} className="text-sm">
              <div className="font-medium">
                {ed.degree} — {ed.school}
              </div>
              <div className="text-muted-foreground">
                {ed.period} • {ed.location} • {ed.gpa}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
