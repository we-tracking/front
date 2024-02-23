"use client"

import { FolderKanban, Home, LogOut, User } from "lucide-react"
import Image from "next/image"
import logo from "../../../public/logo.png"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { removeUserData } from "@/api/removeUserData"

const listNav = [
  {
    icon: Home,
    link: "home",
  },
  {
    icon: FolderKanban,
    link: "produtos",
  },
  {
    icon: User,
    link: "conta",
  },
]

export function SideBarDashboard() {
  const pathname = usePathname()
  const path = pathname.split("/")[2]

  const router = useRouter()
  
  function logOut() {
    removeUserData()
    router.push("/entrar")
  }
  
  return (
    <aside className="w-full max-w-28 min-h-screen flex flex-col items-center justify-between py-10 border-r border-project-gray-800">
      <div className="flex flex-col items-center gap-10">
        <Image 
          alt="Logo"
          src={logo}
          width={70}
          height={70}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33.3vw"
        />
        <nav>
          <ul className="flex flex-col items-center gap-10">
            {listNav.map(list => (
              <li key={list.link} className="">
                <Link href={`/dashboard/${list.link}`} className={`block p-3 text-project-gray-700 rounded-xl transition-all hover:bg-project-gray-750 ${list.link === path ? "text-project-blue-600 bg-project-gray-750" : ""}`}>
                  <list.icon width={30} className={`${list.link === path ? "text-project-blue-600" : ""}`}/>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <button onClick={logOut} className="p-3 rounded-xl text-project-gray-350 transition-all hover:bg-project-gray-750">
          <LogOut width={30} />
        </button>
      </div>
    </aside>
  )
}