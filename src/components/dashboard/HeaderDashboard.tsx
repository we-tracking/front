
import { Logo } from "@/components/Logo"

export default function HeaderDashboard() {

  return (
    <header className="flex items-center justify-between px-2 mb-15">
      <Logo />
      <span className="py-2 px-4 bg-indigo-50 text-indigo-300 rounded-x">
        dodo_nadoti@hotmail.com
      </span>
    </header>
  )
}