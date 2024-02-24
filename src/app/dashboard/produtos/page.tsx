"use client"
import React, { useState, useEffect, useLayoutEffect } from "react"
import { Modal } from "@/components/Modal"
import { getAllProducts } from "@/api/getAllProducts"
import { useQuery } from "@tanstack/react-query"
import Link  from "next/link"
import { Loading } from "@/components/Loading" 
import { getWebSource } from "@/api/getWebSource"
import { Select as SelectIten} from "@/components/dashboard/Select"
import { WebSourceProps } from "@/types/web-source"
import { createNewProduct } from "@/api/registerNewProduct"
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { ModalDeleteProduct } from "@/components/ModalDeleteProduct"

export default function DashboardUserProducts() {
  const [webSources, setWebSources] = useState<WebSourceProps[]>([])
  const [name, setName] = useState("")
  const [ean, setEan] = useState("")
  const [imagePath, setImagePath] = useState("")

  const [nameProduct, setNameProduct] = useState("")
  const [idProduct, setIdProduct] = useState(0)

  const [urlStores, setUrlStores] = useState<({ id: number; url: string })[]>([]);
  const router = useRouter()

  const [isModalDeleteProduct, setIsModalDeleteProduct] = useState(false)
  const [isModalRegisterNewProduct, setIsModalRegisterNewProduct] = useState(false)
  const { data, isLoading } = useQuery({ queryKey: ['allProducts'], queryFn: getAllProducts })
  const { data: dataWebSource, } = useQuery({ queryKey: ['webSource'], queryFn: getWebSource })

  useLayoutEffect(() => {
    if (webSources) {
      setUrlStores(webSources.map(source => ({
        id: source.id,
        url: ""
      })));
    }
  }, [webSources])

  if(isLoading) {
    return <Loading />
  }

  async function newProduct() {
    const product = {
      name,
      ean,
      imagePath,
      webSources: urlStores
    }
    try {
      const data = await createNewProduct(product);
      const promise = () => new Promise((resolve) => setTimeout(() => resolve(data), 2000));
      toast.promise(promise, {
        loading: 'Verificando...',
        success: () => {
            return `${data.data.message}`
        },
      });
      console.log("produto cadastrado", data)
      if(data.status === 200) setTimeout(() => router.push(`/${data.data.data.id}`), 4000)
      
    } catch (error: any) {
      toast.error(error?.response.data.message)
    }
  }

  const handleUrlStoresChange = (id: number, value: string) => {
    setUrlStores((prevUrl) =>
      prevUrl.map((obj) => (obj.id === id ? { ...obj, url: value } : obj))
    );
  };

  function deleteProduct(id: number, nameProduct: string) {
    setIdProduct(id)
    setNameProduct(nameProduct)
    setIsModalDeleteProduct(true)
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
                <td className="w-1/2">
                  <Link href={`produtos/${product.id}`}
                    className="inline-block bg-project-blue-600 text-white px-4 py-2 rounded-xl mr-2 hover:scale-105"
                  >
                    Detalhes
                  </Link>
                </td>
                <td className="w-1/2">
                  <button
                    onClick={() => deleteProduct(product.id, product.name)}
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
          
            <SelectIten options={dataWebSource?.data.data} value={webSources} setValue={setWebSources}/>
          </div>
          {urlStores?.map((stores) => (
            <div key={stores.id} className="flex flex-col gap-5 my-5">
              {stores.id === 1 && <input className="w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl" placeholder="Informe a url do Extra" value={stores.url} 
                onChange={(e) => handleUrlStoresChange(stores.id, e.target.value)}/>}

              {stores.id === 2 && <input className="w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl" placeholder="Informe a url da Casas Bahia" value={stores.url} 
                onChange={(e) => handleUrlStoresChange(stores.id, e.target.value)}/>}

              {stores.id === 3 && <input className="w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl" placeholder="Informe a url do Ponto Frio" value={stores.url} 
                onChange={(e) => handleUrlStoresChange(stores.id, e.target.value)}/>}

              {stores.id === 4 && <input className="w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl" placeholder="Informe a url do Carrefour" value={stores.url} 
                onChange={(e) => handleUrlStoresChange(stores.id, e.target.value)}/>}
            </div>
            ))
          }
          <button onClick={newProduct} className="w-full text-base py-2 rounded-xl text-white bg-project-blue-600">Cadastrar produto</button>
        </Modal>
      )}
      {isModalDeleteProduct && (<ModalDeleteProduct id={idProduct} nameProduct={nameProduct} setCloseModal={setIsModalDeleteProduct}/>)}
    </div>
  )
}