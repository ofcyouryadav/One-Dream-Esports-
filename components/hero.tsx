import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/dramatic-esports-gaming-arena-with-neon-lights-and.jpg"
          alt="Esports Arena"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="text-primary text-lg font-semibold tracking-wider uppercase">#OneDreamKiJanta</div>
          <h1 className="text-5xl font-bold leading-tight tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              One Dream Esports
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground text-pretty md:text-2xl">
            India's Premier Esports Tournament Platform
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center items-center">
            <Link href="/login">
              <Button size="lg" className="text-lg px-8 py-6 h-auto group">
                Login to Dashboard
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto bg-transparent">
              Join Our Team
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
