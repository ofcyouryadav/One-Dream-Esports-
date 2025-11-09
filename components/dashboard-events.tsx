import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"

export function DashboardEvents() {
  const events = [
    {
      name: "One Dream Championship 2025",
      date: "March 15, 2025",
      location: "Mumbai, India",
      status: "Registered",
    },
    {
      name: "Valorant Premier League",
      date: "March 22, 2025",
      location: "Bangalore, India",
      status: "Open",
    },
    {
      name: "BGMI Community Cup",
      date: "April 5, 2025",
      location: "Delhi, India",
      status: "Open",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Events</CardTitle>
        <CardDescription>Manage your tournament registrations</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {events.map((event) => (
          <div
            key={event.name}
            className="flex items-start justify-between border-b border-border pb-4 last:border-0 last:pb-0"
          >
            <div className="space-y-1">
              <h4 className="font-semibold">{event.name}</h4>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {event.date}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {event.location}
                </div>
              </div>
            </div>
            <Button size="sm" variant={event.status === "Registered" ? "secondary" : "default"}>
              {event.status === "Registered" ? "View Details" : "Register"}
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
