import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"

const events = [
  {
    id: 1,
    name: "One Dream Championship 2025",
    date: "March 15-17, 2025",
    location: "Mumbai, Maharashtra",
    description: "Our flagship annual tournament featuring multiple game titles with prize pools exceeding ₹50 lakhs.",
    image: "/esports-tournament-championship-stage-arena.jpg",
  },
  {
    id: 2,
    name: "Valorant Premier League",
    date: "April 5-7, 2025",
    location: "Bangalore, Karnataka",
    description: "Regional qualifier tournament for national Valorant championship with top teams across India.",
    image: "/valorant-tournament-competitive-gaming-event.jpg",
  },
  {
    id: 3,
    name: "BGMI Community Cup",
    date: "May 20-21, 2025",
    location: "Delhi, NCR",
    description: "Open community tournament welcoming amateur players to compete alongside professionals.",
    image: "/mobile-gaming-tournament-community-event.jpg",
  },
]

export function Events() {
  return (
    <section id="events" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          <h2 className="text-4xl font-bold tracking-tighter text-balance sm:text-5xl md:text-6xl text-center">
            Upcoming Events
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden group hover:border-accent/50 transition-colors">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-balance">{event.name}</CardTitle>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{event.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    Register Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
