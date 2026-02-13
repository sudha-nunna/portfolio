import { Suspense } from "react"
import { ResumeViewer } from "@/components/resume-viewer"

export const metadata = {
  title: "Resume | Sudha Nunna",
  description: "View and download the resume of Sudha Nunna.",
}

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 md:py-14">
      <Suspense fallback={null}>
        <ResumeViewer />
      </Suspense>
    </main>
  )
}
