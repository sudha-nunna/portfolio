import { Card, CardContent } from "@/components/ui/card"
import { Award, BadgeCheck } from "lucide-react"

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      {/* Section header */}
      <div className="mb-10 text-center">
        <div className="text-3xl font-extrabold tracking-tight opacity-70">04</div>
        <h2 className="mt-1 text-4xl font-extrabold tracking-tight md:text-5xl">CERTIFICATIONS</h2>
        <p className="mt-2 text-sm uppercase tracking-wide text-muted-foreground">
          Professional achievements &amp; credentials
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Python - Guvi */}
        <Card className="bg-secondary/40">
          <CardContent className="flex h-full flex-col items-center gap-3 p-6 text-center">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-primary">
              <Award className="h-8 w-8" style={{ color: "var(--color-primary-foreground)" }} />
            </div>
            <div className="text-xl font-semibold">Python Certification</div>
            <p className="text-pretty text-muted-foreground">Issued by Guvi</p>
          </CardContent>
        </Card>

        {/* HTML, CSS, JS - AWS Community Builders */}
        <Card className="bg-secondary/40">
          <CardContent className="flex h-full flex-col items-center gap-3 p-6 text-center">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-primary">
              <BadgeCheck className="h-8 w-8" style={{ color: "var(--color-primary-foreground)" }} />
            </div>
            <div className="text-xl font-semibold">HTML, CSS &amp; JavaScript</div>
            <p className="text-pretty text-muted-foreground">Certification from AWS Community Builders</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
