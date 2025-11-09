import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Users, Calendar, Target } from "lucide-react"

export function DashboardStats() {
  const stats = [
    {
      title: "Total Tournaments",
      value: "24",
      icon: Trophy,
      change: "+3 this month",
      color: "text-yellow-500",
    },
    {
      title: "Active Players",
      value: "1,247",
      icon: Users,
      change: "+127 this week",
      color: "text-blue-500",
    },
    {
      title: "Upcoming Events",
      value: "8",
      icon: Calendar,
      change: "Next in 3 days",
      color: "text-green-500",
    },
    {
      title: "Win Rate",
      value: "68%",
      icon: Target,
      change: "+5% improvement",
      color: "text-purple-500",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
