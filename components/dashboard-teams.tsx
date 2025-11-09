import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function DashboardTeams() {
  const teams = [
    {
      name: "Valorant Division",
      tier: "Gold",
      members: 5,
      status: "Active",
    },
    {
      name: "BGMI Squad",
      tier: "Silver",
      members: 4,
      status: "Recruiting",
    },
    {
      name: "CS2 Roster",
      tier: "Bronze",
      members: 5,
      status: "Active",
    },
  ]

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Gold":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
      case "Silver":
        return "bg-gray-400/10 text-gray-400 border-gray-400/20"
      case "Bronze":
        return "bg-orange-600/10 text-orange-600 border-orange-600/20"
      default:
        return "bg-primary/10 text-primary border-primary/20"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Teams</CardTitle>
        <CardDescription>Manage your team memberships</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {teams.map((team) => (
          <div
            key={team.name}
            className="flex items-start justify-between border-b border-border pb-4 last:border-0 last:pb-0"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold">{team.name}</h4>
                <Badge variant="outline" className={getTierColor(team.tier)}>
                  {team.tier}
                </Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{team.members} members</span>
                <span className="text-primary">{team.status}</span>
              </div>
            </div>
            <Button size="sm" variant="outline">
              View Team
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
