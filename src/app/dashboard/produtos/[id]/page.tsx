"use client"
import { getProduct } from "@/api/getProduct";
import { Loading } from "@/components/Loading";
import { ModalPricesProduct } from "@/components/dashboard/ModalPricesProducts";
import { formatMoney } from "@/utils/format-money";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { getPriceByProduct } from "@/api/getPriceByProduct";

export default function PageProductId({ params }: { params: { id: string } }) {

  const { data, isLoading } = useQuery({ queryKey: ['product'], queryFn: () => getProduct(params.id) })
  const { data: dataProductPrice, isLoading: isLoadingProduct } = useQuery({ queryKey: ['product-price'], queryFn: () => getPriceByProduct(params.id) })
  // const { data: product} = data
  if(isLoading || isLoadingProduct) {
    return <Loading />
  }
  console.log("VENDO DATA", dataProductPrice?.data?.data)
  return (
    <main className="">
      <div className="grid grid-cols-3 items-start justify-between">
        <div className="">
          <h1 className="block overflow-hidden text-3xl text-project-gray-300 capitalize">{data?.data.data.items.product.name}</h1>
        </div>
        <div className="flex justify-end">
          <p className="w-max p-2 text-project-gray-700 border border-project-gray-700 rounded-xl">EAN: {data?.data.data.items.product.ean}</p>
        </div>
        <div className="flex justify-end">
          <Link className="w-min py-2 px-8 rounded-xl text-lg font-bold text-project-gray-900 bg-project-blue-100" href="/dashboard/produtos">Voltar</Link>

        </div>
      </div>
      <div className="flex items-start justify-between mt-16">
        <div className="w-full max-w-52 rounded-xl">
          <img className="w-full rounded-xl" src={data?.data.data.items.product.imagePath} alt="imagem do produto" />
        </div>
        <div className="flex gap-10">
          {dataProductPrice?.data?.data?.map((product) => (
            <div className="min-h-96 flex flex-col items-center justify-between py-5 px-4 bg-project-gray-850 rounded-xl" key={product.webSourceId}>
              <div className="flex flex-col items-center gap-5">
                <h2 className="text-2xl text-project-gray-600">{product.webSourceName}</h2>
                <img className="w-full max-w-40" src={product.webSourceLogo} alt="Logo Marca" />
              </div>
              <p className="flex flex-col text-xs text-project-gray-700">Preço <span className="text-2xl text-project-gray-300">R${product.price}</span></p>
              <a href={`https://${product.domain}`} target="_blank" rel="noopener noreferrer" className="py-2 px-8 rounded-xl text-lg font-bold text-project-gray-900 bg-project-blue-100 transition-all hover:scale-105">Ir ao site</a>
            </div>
          ))}

        </div>
      </div>
      {/* <ModalPricesProduct /> */}
    </main>
  )
}