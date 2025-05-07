import { Bell } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"

interface DashboardHeaderProps {
  username: string
}

export default function DashboardHeader({ username }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-20 flex h-[72px] items-center justify-between bg-teal-800 px-4 text-white w-full md:px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-white md:hidden" />
        <div>
          <h1 className="text-xl font-medium">Welcome, {username}</h1>
          <p className="text-sm opacity-80">Have a nice day</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative text-white">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-red-500"></span>
        </Button>

        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt={username} />
            <AvatarFallback>{username.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="hidden md:inline">{username}</span>
        </div>
      </div>
    </header>
  )
}
