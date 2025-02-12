import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./toogle"

export function NavBar() {
  return (
    <nav className="flex items-center justify-between py-4">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rotate-45 bg-primary"></div>
        <span className="text-xl font-semibold">BuildJourney</span>
      </div>

      <div className="hidden items-center gap-8 md:flex">
        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
          Features
        </Link>
        <Link href="/gallery" className="text-sm text-muted-foreground hover:text-foreground">
          Gallery
        </Link>
        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
          Pricing
        </Link>
        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
          Resources
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Button size="sm" className="bg-primary hover:bg-primary/90">
          Try for free
        </Button>
      </div>
    </nav>
  )
}

