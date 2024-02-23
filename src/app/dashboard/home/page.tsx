"use client"
import { getAllProducts } from "@/api/getAllProducts"
import { useQuery } from "@tanstack/react-query"
import { Loading } from "@/components/Loading"

export default function DashboardUserHome() {

  const { data, isLoading } = useQuery({ queryKey: ['allProducts'], queryFn: getAllProducts })
  
  if(isLoading) {
    return <Loading />
  }

  return (
    <section className="animations-all">
      <div className="w-full max-w-[560px] p-5 bg-project-gray-850 rounded-xl">
        <h1 className="text-2xl mb-5 text-white">Total de produtos cadastrados</h1>
        <p className="text-base text-project-gray-350">você tem <span className="text-project-blue-300">{data?.data.data.length}</span> produtos cadastrados</p>
      </div>
    </section>
  )
}