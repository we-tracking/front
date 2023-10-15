import Link from "next/link"
import HeaderDashboard from "@/components/dashboard/HeaderDashboard"
import ProductsList from "@/components/dashboard/products/ProductsList"


export default function ProductsPage() {

  return (
    <div className="w-full h-screen bg-indigo-100">
      <div className="w-full max-w-5xl mx-auto pt-10">
        <HeaderDashboard />
        <div className="flex items-center justify-between mb-10 px-2">
          <h2 className="text-4xl text-indigo-600 font-bold">Produtos</h2>
          <div className="flex items-center gap-5">
            <button className="text-indigo-800 text-sm font-bold py-2 px-7 rounded-x bg-indigo-300 transition-all hover:bg-indigo-500 hover:text-indigo-100">
              Adicionar Produto
            </button>
            <Link href="/dashboard" className="text-sm text-indigo-400 bg-indigo-200 py-2 px-3 rounded-x transition-all hover:bg-indigo-400 hover:text-indigo-600">
              Voltar
            </Link>
          </div>
        </div>
        <div>
          <ProductsList />
        </div>
      </div>
    </div>
  )
}