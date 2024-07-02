// pages/index.js
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function MainPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center gap-4 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold">Welcome to the Health Dashboard</h1>
        <Input type="email" placeholder="Email" className="w-full mb-4" />
        <Input type="password" placeholder="Password" className="w-full mb-4" />
        <Button variant="primary" className="w-full mb-4">Login</Button>
        <Link href="/dashboard" prefetch={false}>
          <Button variant="outline" className="w-full">Go to Dashboard</Button>
        </Link>
      </div>
    </div>
  )
}
//hihihihihihi
// pages/dashboard/index.js