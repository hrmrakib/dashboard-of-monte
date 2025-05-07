"use client"

import { Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState } from "react"
import UserDetailsModal from "@/components/user-details-modal"

export default function DashboardContent() {
  return (
    <main className="w-full p-4 md:p-6">
      <section className="mb-8">
        <h2 className="mb-4 text-xl font-medium text-gray-800">Overview</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <StatCard title="Total Earnings" value="$12300" />
          <StatCard title="Total User" value="520" />
          <StatCard title="Total Subscriptions" value="1430" />
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-medium text-gray-800">Transaction</h2>
        <TransactionTable />
      </section>
    </main>
  )
}

interface StatCardProps {
  title: string
  value: string
}

function StatCard({ title, value }: StatCardProps) {
  return (
    <Card className="overflow-hidden border border-gray-200">
      <CardContent className="flex flex-col items-center justify-center p-6">
        <h3 className="mb-2 text-gray-500">{title}</h3>
        <p className="text-3xl font-semibold text-gray-800">{value}</p>
      </CardContent>
    </Card>
  )
}

function TransactionTable() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<any>(null)

  const transactions = [
    { id: 447, name: "Marvin McKinney", subscription: "Basic", date: "1 Feb, 2020", amount: "$45" },
    { id: 426, name: "Jane Cooper", subscription: "Premium", date: "21 Sep, 2020", amount: "$75" },
    { id: 922, name: "Esther Howard", subscription: "Basic", date: "24 May, 2020", amount: "$45" },
    { id: 816, name: "Darlene Robertson", subscription: "Premium", date: "24 May, 2020", amount: "$75" },
    { id: 185, name: "Cameron Williamson", subscription: "Basic", date: "17 Oct, 2020", amount: "$45" },
    { id: 738, name: "Ronald Richards", subscription: "Basic", date: "1 Feb, 2020", amount: "$45" },
    { id: 600, name: "Jerome Bell", subscription: "Premium", date: "21 Sep, 2020", amount: "$75" },
    { id: 583, name: "Dianne Russell", subscription: "Basic", date: "8 Sep, 2020", amount: "$45" },
    { id: 177, name: "Bessie Cooper", subscription: "Basic", date: "21 Sep, 2020", amount: "$45" },
    { id: 826, name: "Robert Fox", subscription: "Premium", date: "22 Oct, 2020", amount: "$75" },
    { id: 540, name: "Kathryn Murphy", subscription: "Basic", date: "17 Oct, 2020", amount: "$45" },
    { id: 274, name: "Leslie Alexander", subscription: "Premium", date: "17 Oct, 2020", amount: "$75" },
  ]

  const openUserModal = (user: any) => {
    setSelectedUser(user)
    setIsModalOpen(true)
  }

  return (
    <>
      <div className="overflow-hidden rounded-md border border-gray-200">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-teal-800 text-white">
              <TableRow>
                <TableHead className="text-white">#Tr.ID</TableHead>
                <TableHead className="text-white">User Name</TableHead>
                <TableHead className="text-white">Subscription</TableHead>
                <TableHead className="text-white">Join Date</TableHead>
                <TableHead className="text-center text-white">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">{transaction.id}</TableCell>
                  <TableCell>{transaction.name}</TableCell>
                  <TableCell>{transaction.subscription}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell className="text-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => openUserModal(transaction)}
                    >
                      <Info className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 w-8 p-0">
              <span className="sr-only">Previous</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Button>
            <span className="text-sm">Back</span>
          </div>

          <div className="flex items-center gap-1">
            <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-white">
              1
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              ...
            </Button>
            <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-teal-800 text-white">
              12
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm">Back</span>
            <Button variant="outline" size="sm" className="h-8 w-8 p-0">
              <span className="sr-only">Next</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <span className="text-sm">Page</span>
            <span className="rounded border px-2 py-1 text-sm">12</span>
            <span className="text-sm">Go</span>
          </div>
        </div>
      </div>

      {isModalOpen && selectedUser && (
        <UserDetailsModal user={selectedUser} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  )
}
