
import ProductCard  from "@/components/dashboard/ProductCard"
import ChangePasswordCard  from "@/components/dashboard/ChangePasswordCard"
import LogOutCard  from "@/components/dashboard/LogOutCard"
import HeaderDashboard from "@/components/dashboard/HeaderDashboard"

export default function DashboardPage() {
  
  return (
    <div className="w-full h-screen bg-indigo-100">
      <div className="w-full max-w-5xl mx-auto pt-10">
        <HeaderDashboard />
        <div className="grid grid-cols-1 lg:grid-cols-2/1 gap-10 mb-10 px-2">
          <ProductCard />
          <ChangePasswordCard />
        </div>
        <div className="px-2">
          <LogOutCard />
        </div>
      </div>
    </div>
  )
}