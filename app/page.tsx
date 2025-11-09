import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Teams } from "@/components/teams"
import { Events } from "@/components/events"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Teams />
      <Events />
      <Footer />
    </main>
  )
}
