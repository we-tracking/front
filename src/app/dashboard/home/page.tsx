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
      <div className="w-full max-w-[560px] p-5 bg-project-gray-850 rounded-xl mb-10">
        <h1 className="text-2xl mb-5 text-white">Total de produtos cadastrados</h1>
        <p className="text-base text-project-gray-350">você tem <span className="text-project-blue-300">{data?.data.data.length}</span> produtos cadastrados</p>
      </div>

      <div>
        <h2 className="mb-10 text-xl text-center text-project-gray-600">Sites que são utilizados para monitoramento</h2>
        <div className="w-full flex items-center justify-center gap-10">
          <img src="https://www.extra-imagens.com.br/App_Themes/Extra/img/header/r/logo.svg" alt="" />
          <img src="https://www.casasbahia-imagens.com.br/App_Themes/CasasBahia/img/header/r/logo.svg" alt="" />
          <img src="https://www.pontofrio-imagens.com.br/App_Themes/PontoFrio/img/header/r/logo.svg" alt="" />
          <img src="https://carrefourbr.vtexassets.com/assets/vtex.file-manager-graphql/images/c38d7260-359d-4a84-8a56-c92a85a55b07___0fe5a16842979f7664f02f8612015eca.png" alt="" />
        </div>
      </div>
    </section>
  )
}