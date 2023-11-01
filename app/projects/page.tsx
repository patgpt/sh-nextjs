import Image from "next/image"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"

export default function Projects() {
  return (
    <div className="container grid items-center justify-center gap-6 pb-8 pt-6 md:py-10">
      <h1>Projects</h1>
      <Card className="text-center">
        <CardHeader>Canadian Tire</CardHeader>
        <CardDescription className="text-muted-foreground">
          Title: UX Developer
        </CardDescription>
        <CardContent>
          <Image
            src="/images/ct-logo.png"
            alt="Canadian Tire"
            width={200}
            height={200}
          />
          Conducted A/B testing and utilized user behavior analytics to enhance
          the user experience. This led to increased customer engagement, return
          visits, and overall revenue. Tools such as Adobe XD, Optimizely, Adobe
          Target, and Google Analytics were used for design, serving UX A/B
          tests, and measuring results. The winning tests were implemented in
          production using JavaScript, CSS, and HTML5.
        </CardContent>

        <CardFooter className="text-center text-muted-foreground">
          2000-2001
        </CardFooter>
      </Card>
    </div>
  )
}
