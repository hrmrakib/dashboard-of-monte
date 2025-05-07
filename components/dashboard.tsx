"use client"

import { useState } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import DashboardHeader from "@/components/dashboard-header"
import DashboardSidebar from "@/components/dashboard-sidebar"
import DashboardContent from "@/components/dashboard-content"

export default function Dashboard() {
  const [username, setUsername] = useState("Arjun")

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50 w-full">
        <DashboardSidebar />
        <div className="flex-1 w-full">
          <DashboardHeader username={username} />
          <DashboardContent />
        </div> 
      </div>
    </SidebarProvider>
  )
}
