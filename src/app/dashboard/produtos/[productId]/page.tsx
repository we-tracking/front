import Link from "next/link"
import HeaderDashboard from "@/components/dashboard/HeaderDashboard"


export default async function ProductIdPage({
  params
}: {
  params: { productId: string}
}) {
  return (
    <div className="w-full h-screen bg-indigo-100">
      <div className="w-full max-w-5xl mx-auto pt-10">
        <HeaderDashboard />
        <div className="flex items-center justify-between mb-10 px-2">
          <h2 className="text-4xl text-indigo-600 font-bold">Arroz Camilo</h2>
          <div className="flex items-center gap-5">
            <button className="text-red-700 text-sm font-bold py-2 px-7 rounded-x bg-red-300 transition-all hover:bg-red-600 hover:text-red-200">
              Excluir Produto
            </button>
            <Link href="/dashboard" className="text-sm text-indigo-400 bg-indigo-200 py-2 px-3 rounded-x transition-all hover:bg-indigo-400 hover:text-indigo-600">
              Voltar
            </Link>
          </div>
        </div>
        <div>
          {/* <ProductsList /> */}
        </div>
      </div>
    </div>
  )
}