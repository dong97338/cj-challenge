/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sXk6HIFQ3pl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function Component() {
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState({ key: "name", order: "asc" })
  const users = useMemo(
    () =>
      [
        {
          name: "John Doe",
          email: "john@example.com",
          age: 35,
          gender: "Male",
          heartRate: 72,
        },
        {
          name: "Jane Smith",
          email: "jane@example.com",
          age: 28,
          gender: "Female",
          heartRate: 82,
        },
        {
          name: "Bob Johnson",
          email: "bob@example.com",
          age: 42,
          gender: "Male",
          heartRate: 78,
        },
        {
          name: "Sarah Lee",
          email: "sarah@example.com",
          age: 31,
          gender: "Female",
          heartRate: 75,
        },
        {
          name: "Michael Brown",
          email: "michael@example.com",
          age: 27,
          gender: "Male",
          heartRate: 80,
        },
      ]
        .filter((user) => {
          const searchValue = search.toLowerCase()
          return (
            user.name.toLowerCase().includes(searchValue) ||
            user.email.toLowerCase().includes(searchValue) ||
            user.age.toString().includes(searchValue) ||
            user.gender.toLowerCase().includes(searchValue) ||
            user.heartRate.toString().includes(searchValue)
          )
        })
        .sort((a, b) => {
          if (sort.order === "asc") {
            return a[sort.key] > b[sort.key] ? 1 : -1
          } else {
            return a[sort.key] < b[sort.key] ? 1 : -1
          }
        }),
    [search, sort],
  )
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="hidden border-r bg-muted/40 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
              <HeartIcon className="h-6 w-6" />
              <span className="">Health Dashboard</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <HomeIcon className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary  transition-all hover:text-primary"
                prefetch={false}
              >
                <UserIcon className="h-4 w-4" />
                Users
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <HeartIcon className="h-4 w-4" />
                Heart Rate
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <SettingsIcon className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-muted/40 px-6">
          <Link href="#" className="lg:hidden" prefetch={false}>
            <HeartIcon className="h-6 w-6" />
            <span className="sr-only">Dashboard</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search users"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-background shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full border w-8 h-8">
                <img src="/placeholder.svg" width="32" height="32" className="rounded-full" alt="Avatar" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Admin</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center gap-4">
            <h1 className="font-semibold text-lg md:text-xl">User Management</h1>
            <div className="ml-auto flex items-center gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeftIcon className="h-4 w-4" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRightIcon className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>
          <Card>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead
                      className="cursor-pointer"
                      onClick={() =>
                        setSort({
                          key: "name",
                          order: sort.key === "name" ? (sort.order === "asc" ? "desc" : "asc") : "asc",
                        })
                      }
                    >
                      Name
                      {sort.key === "name" && (
                        <span className="ml-1">{sort.order === "asc" ? "\u2191" : "\u2193"}</span>
                      )}
                    </TableHead>
                    <TableHead
                      className="cursor-pointer"
                      onClick={() =>
                        setSort({
                          key: "email",
                          order: sort.key === "email" ? (sort.order === "asc" ? "desc" : "asc") : "asc",
                        })
                      }
                    >
                      Email
                      {sort.key === "email" && (
                        <span className="ml-1">{sort.order === "asc" ? "\u2191" : "\u2193"}</span>
                      )}
                    </TableHead>
                    <TableHead
                      className="cursor-pointer"
                      onClick={() =>
                        setSort({
                          key: "age",
                          order: sort.key === "age" ? (sort.order === "asc" ? "desc" : "asc") : "asc",
                        })
                      }
                    >
                      Age
                      {sort.key === "age" && <span className="ml-1">{sort.order === "asc" ? "\u2191" : "\u2193"}</span>}
                    </TableHead>
                    <TableHead
                      className="cursor-pointer"
                      onClick={() =>
                        setSort({
                          key: "gender",
                          order: sort.key === "gender" ? (sort.order === "asc" ? "desc" : "asc") : "asc",
                        })
                      }
                    >
                      Gender
                      {sort.key === "gender" && (
                        <span className="ml-1">{sort.order === "asc" ? "\u2191" : "\u2193"}</span>
                      )}
                    </TableHead>
                    <TableHead
                      className="cursor-pointer text-right"
                      onClick={() =>
                        setSort({
                          key: "heartRate",
                          order: sort.key === "heartRate" ? (sort.order === "asc" ? "desc" : "asc") : "asc",
                        })
                      }
                    >
                      Heart Rate
                      {sort.key === "heartRate" && (
                        <span className="ml-1">{sort.order === "asc" ? "\u2191" : "\u2193"}</span>
                      )}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        <Link href="#" prefetch={false}>
                          {user.name}
                        </Link>
                      </TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.age}</TableCell>
                      <TableCell>{user.gender}</TableCell>
                      <TableCell className="text-right">{user.heartRate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}