"use client"
import React, { useState } from "react"
import { Modal } from "@/components/Modal"
import { getAllProducts } from "@/api/getAllProducts"
import { useQuery } from "@tanstack/react-query"
import Link  from "next/link"
import { Loading } from "@/components/Loading" 
import { getWebSource } from "@/api/getWebSource"
import { Select as SelectIten} from "@/components/dashboard/Select"
import { WebSourceProps } from "@/types/web-source"
import { createNewProduct } from "@/api/registerNewProduct"

export default function DashboardUserProducts() {
  const [webSources, setWebSources] = useState<WebSourceProps[]>([])
  const [name, setName] = useState("")
  const [ean, setEan] = useState("")
  const [imagePath, setImagePath] = useState("")

  const [urlExtra, setUrlExtra] = useState("")
  const [urlCasasBahia, setUrlCasasBahia] = useState("")
  const [urlPontoFrio, setUrlPontoFrio] = useState("")
  

  const [isModalRegisterNewProduct, setIsModalRegisterNewProduct] = useState(false)
  const { data, isLoading } = useQuery({ queryKey: ['allProducts'], queryFn: getAllProducts })
  const { data: dataWebSource, } = useQuery({ queryKey: ['webSource'], queryFn: getWebSource })

  if(isLoading) {
    return <Loading />
  }

  async function newProduct() {
    const id = webSources.map(web => web.id)
    const product = {
      name,
      ean,
      imagePath,
      webSources: id
    }
    try {
      const data = await createNewProduct(product);
    } catch (error) {
      console.log("ERROR", error)
    }
  }

  return (
    <div className="w-full">
      <div className="animations-all">

        <button onClick={() => setIsModalRegisterNewProduct(true)} className="py-3 px-5 mb-10 rounded-xl font-semibold bg-gradient text-black">Novo Produto</button>
        <table className="block w-full bg-project-gray-900 border border-project-gray-800 rounded-xl">
          <thead className="block">
            <tr className="flex w-full text-project-gray-300 text-2xl text-left border-b border-project-gray-800 p-5">
              <th className="w-1/2 ">Nome</th>
              <th className="w-1/5"></th>
              <th className="w-1/5 "></th>
              <th className="w-1/5 "></th>
            </tr>
          </thead>
          <tbody className="block w-full h-[700px] overflow-y-auto scroll">
            {data?.data.data.length ? data?.data.data.map((product, index) => (
              <tr key={product.id} className={`w-full block text-base text-project-gray-700 p-5 ${index % 2 === 0 ? 'bg-[#303030]' : 'bg-[#2A2A2B]'}`}>
                <td className="w-1/2">{product.name}</td>
                <td className="w-1/4">
                <button
                    className="bg-project-blue-100 text-white px-4 py-2 rounded-xl mr-2 hover:scale-105 "
                  >
                    Editar
                  </button>
                </td>
                <td className="w-1/2">
                  <Link href={`produtos/${product.id}`}
                    className="inline-block bg-project-blue-600 text-white px-4 py-2 rounded-xl mr-2 hover:scale-105"
                  >
                    Detalhes
                  </Link>
                </td>
                <td className="w-1/4">
                <button
                    className=" bg-project-red-500 text-white px-4 py-2 rounded-xl hover:scale-105"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            )) : (
              <tr className={`w-full block text-base text-project-gray-700 p-5`}>
                <td className="w-full flex items-center justify-center text-xl text-project-gray-350">Voce nao tem produtos cadastrados</td>
              </tr>
            )}
            
          </tbody>
        </table>
      </div>
      {isModalRegisterNewProduct && (
        <Modal closeModal={setIsModalRegisterNewProduct} title="Cadastrar novo produto">
          <div className="flex flex-col gap-5 mb-10">
            <input className="w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl" placeholder="Nome" type="text" onChange={(e) => setName(e.target.value)} />
            <input className="w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl" placeholder="Ean do produto" type="text" onChange={(e) => setEan(e.target.value)} />
            <input className="w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl" placeholder="Link da imagem" type="text" onChange={(e) => setImagePath(e.target.value)} />
          
            {/* <Select multiple={true} options={dataWebSource.data.data} value={selectValue} onChange={(value) => setSelectValue(value)}/> */}
            <SelectIten options={dataWebSource.data.data} value={webSources} setValue={setWebSources}/>
          </div>
          {webSources?.map((sites) => (
              <div key={sites.id} className="flex flex-col gap-5 my-5">
                {sites.id === 1 && <input className="w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl" placeholder="Informe a url do Extra" />}
                {sites.id === 2 && <input className="w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl" placeholder="Informe a url da Casas Bahia" />}
                {sites.id === 3 && <input className="w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl" placeholder="Informe a url do Ponto Frio" />}
              </div>
            ))
          }
          <button onClick={newProduct} className="w-full text-base py-2 rounded-xl text-white bg-project-blue-600">Cadastrar produto</button>
        </Modal>
      )}
    </div>
  )
}