"use client"

import Link from "next/link"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarProvider } from "@/components/ui/sidebar"
import DashboardSidebar from "@/components/dashboard-sidebar"
import DashboardHeader from "@/components/dashboard-header"

export default function SubscriptionPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50 w-full">
        <DashboardSidebar />
        <div className="flex-1 w-full">
          {/* <DashboardHeader username="Arjun" /> */}
          <main className="w-full p-4 md:p-6">
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-gray-800">Subscription Plans</h1>
              <Link href="/subscription/add">
                <Button className="bg-teal-800 hover:bg-teal-700">
                  <Plus className="mr-2 h-4 w-4" /> Add New Subscription
                </Button>
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <SubscriptionCard
                id="premium"
                title="Premium"
                price="$125"
                period="yearly"
                features={[
                  "Cancel anytime without a long-term commitment.",
                  "Spread costs across smaller, manageable payments.",
                  "Ideal for testing or temporary projects.",
                  "Easily switch plans as needs change.",
                  "Avoid a big initial payment.",
                ]}
              />

              <SubscriptionCard
                id="basic"
                title="Basic"
                price="$99"
                period="monthly"
                features={[
                  "Pay less per month compared to monthly plans.",
                  "One-time annual payment.",
                  "Exclusive features or often included.",
                  "Ideal for long-term goals and stability.",
                  "Many plans offer enhanced support for annual subscribers.",
                ]}
              />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

interface SubscriptionCardProps {
  id: string
  title: string
  price: string
  period: string
  features: string[]
}

function SubscriptionCard({ id, title, price, period, features }: SubscriptionCardProps) {
  return (
    <Card className="overflow-hidden border border-gray-200">
      <CardHeader className="bg-gray-50 pb-4 pt-6 text-center">
        <CardTitle className="text-xl font-semibold text-gray-800">{title}</CardTitle>
        <div className="mt-2">
          <span className="text-2xl font-bold">{price}</span>
          <span className="text-sm text-gray-500">/{period}</span>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-teal-800 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={`/subscription/edit/${id}`} className="w-full">
          <Button className="w-full bg-teal-800 hover:bg-teal-700">Edit</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
