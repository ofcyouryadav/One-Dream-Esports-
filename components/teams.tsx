import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const teams = [
  {
    id: 1,
    name: "Valorant Division",
    description: "Our premier Valorant team competing in national and international tournaments with top-tier players.",
    image: "/valorant-esports-team-competitive-gaming.jpg",
  },
  {
    id: 2,
    name: "BGMI Squad",
    description: "Dominating the Battlegrounds Mobile India scene with strategic gameplay and consistent performances.",
    image: "/mobile-esports-team-battle-royale-gaming.jpg",
  },
  {
    id: 3,
    name: "CS2 Roster",
    description:
      "Elite Counter-Strike 2 players showcasing precision, teamwork, and tactical excellence in every match.",
    image: "/counter-strike-esports-team-competitive-fps.jpg",
  },
]

export function Teams() {
  return (
    <section id="teams" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          <h2 className="text-4xl font-bold tracking-tighter text-balance sm:text-5xl md:text-6xl text-center">
            Our Teams
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teams.map((team) => (
              <Card key={team.id} className="overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={team.image || "/placeholder.svg"}
                    alt={team.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{team.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{team.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    Learn More
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
