"use client"
import { useEffect, useState } from "react"


export function HeaderDashboard() {
  const [email, setEmail] = useState("")

  useEffect(() => {
    const storage = localStorage.getItem("email")
    if(storage) {
      setEmail(storage)
    }
  },[])

  return (
    <header className="px-1 py-10 mb-16">
      <p className="text-lg text-right text-project-blue-100">{email}</p>
    </header>
  )
}