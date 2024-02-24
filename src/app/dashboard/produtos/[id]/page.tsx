"use client"
import { useEffect, useState } from "react";
import { getProduct } from "@/api/getProduct";
import { Loading } from "@/components/Loading";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { getPriceByProduct } from "@/api/getPriceByProduct";
import { Modal } from "@/components/Modal";
import { Select as SelectIten} from "@/components/dashboard/Select"
import { WebSourceProps } from "@/types/web-source";
import { getWebSource } from "@/api/getWebSource";
import { ModalHistoryPrices } from "@/components/dashboard/ModalHistoryPrices";
import { createNewProduct } from "@/api/registerNewProduct";
import { toast } from "sonner";

export default function PageProductId({ params }: { params: { id: string } }) {

  const [isModalEditProduct, setIsModalEditProduct] = useState(false)
  const [isModalHistoryPriceProduct, setIsModalHistoryPriceProduct] = useState(false)
  const [name, setName] = useState("")
  const [ean, setEan] = useState("")
  const [imagePath, setImagePath] = useState("")
  const [webSources, setWebSources] = useState<WebSourceProps[] | any>([])

  const [idProduct, setIdProduct] = useState(0)
  const [idStore, setIdStore] = useState(0)
  const [imgStore, setImgStore] = useState("")

  const [urlStores, setUrlStores] = useState<({ id: number; url: string })[]>([]);

  
  
  const handleUrlStoresChange = (id: number, value: string) => {
    setUrlStores((prevUrl) =>
      prevUrl.map((obj) => (obj.id === id ? { ...obj, url: value } : obj))
    );
  };
  const { data, isLoading } = useQuery({ queryKey: ['product'], queryFn: () => getProduct(params.id) })
  const { data: dataProductPrice, isLoading: isLoadingProduct } = useQuery({ queryKey: ['product-price'], queryFn: () => getPriceByProduct(params.id) })
  const { data: dataWebSource } = useQuery({ queryKey: ['webSource'], queryFn: getWebSource })

  useEffect(() => {
    setName(data?.data.data.items.product?.name)
    setEan(data?.data.data.items.product?.ean)
    setImagePath(data?.data.data.items.product?.imagePath)
  
    const storesRegistered = dataWebSource?.data.data?.filter(({ id }) => {
      return dataProductPrice?.data.data.some(({ webSourceId }) => id === webSourceId);
    });
    setWebSources(storesRegistered)
  
    const takeUrlRegistered = data?.data.data.items.webSources?.filter((item1: any) => {
      return !dataWebSource?.data.data.some((item2: any) => Number(item2.webSourceId) === item1.id);
    });

    setUrlStores(takeUrlRegistered?.map((source: any) => ({
      id: Number(source.webSourceId),
      url: source.url
    })));
  }, [data, dataProductPrice, dataWebSource])

  async function editProduct() {
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
            return `Produto editado com sucesso`
        },
      });
      if(data.status === 200) setTimeout(() => location.reload(), 4000)
    } catch (error: any) {
      toast.error(error?.response.data.message)
    }
  }

  if(isLoading || isLoadingProduct) {
    return <Loading />
  }
  console.log(dataProductPrice)
  return (
    <main className="">
      <div className="grid grid-cols-3 items-start justify-between">
        <div className="">
          <h1 className="block overflow-hidden text-3xl text-project-gray-300 capitalize">{data?.data.data.items.product?.name}</h1>
        </div>
        <div className="flex justify-end">
          <p className="w-max p-2 text-project-gray-700 border border-project-gray-700 rounded-xl">EAN: {data?.data.data.items.product?.ean}</p>
        </div>
        <div className="flex gap-5 justify-end">
          <button onClick={() => setIsModalEditProduct(true)} className="w-min py-2 px-8 rounded-xl text-lg font-bold text-white bg-project-blue-300">Editar</button>
          <Link className="w-min py-2 px-8 rounded-xl text-lg font-bold text-project-gray-900 bg-project-blue-100" href="/dashboard/produtos">Voltar</Link>
        </div>
      </div>
      <div className="flex items-start justify-between gap-10 mt-16">
        <div className="w-full max-w-52 rounded-xl">
          <img className="w-full rounded-xl" src={data?.data.data.items.product?.imagePath} alt="imagem do produto" />
        </div>
        <div className="flex gap-10">
          {dataProductPrice?.data?.data?.map((product) => (
            <div className="min-h-96 flex flex-col items-center justify-between py-5 px-4 bg-project-gray-850 rounded-xl" key={product?.webSourceId}>
              <div className="flex flex-col items-center gap-5">
                <h2 className="text-2xl text-project-gray-600">{product?.webSourceName}</h2>
                <img className="w-full max-w-40" src={product?.webSourceLogo} alt="Logo Marca" />
              </div>
              <p className="flex flex-col text-xs text-project-gray-700">Preço <span className="text-2xl text-project-gray-300">R${product?.price}</span></p>
              <div className="flex flex-col w-full gap-5">
                <button onClick={() => {
                  setIsModalHistoryPriceProduct(true)
                  setIdStore(product.webSourceId)
                  setIdProduct(product.productId)
                  setImgStore(product.webSourceLogo)
                }} className="w-full flex items-center justify-center py-2 rounded-xl text-lg font-bold text-project-gray-900 bg-project-blue-300 transition-all hover:scale-105">Histórico</button>
                <a href={`https://${product.domain}`} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center py-2 rounded-xl text-lg font-bold text-project-gray-900 bg-project-blue-100 transition-all hover:scale-105">Ir ao site</a>
              </div>
            </div>
          ))}

        </div>
      </div>
      {isModalEditProduct && (
        <Modal closeModal={setIsModalEditProduct} title="Editar Produto">
          <div className="flex flex-col gap-5 mb-10">
            <label className="flex flex-col gap-2 text-base text-project-gray-350">
              Nome do produto
              <input 
                className="w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl"
                placeholder="Nome" 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
            </label>
            <label className="flex flex-col gap-2 text-base text-project-gray-350">
              EAN
              <input 
                className="w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl"
                placeholder="Informe o EAN" 
                type="text" 
                value={ean} 
                onChange={(e) => setEan(e.target.value)} 
              />
            </label>
            <label className="flex flex-col gap-2 text-base text-project-gray-350">
              Link da imagem
              <input 
                className="w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl"
                placeholder="Informe o link da imagem" 
                type="text" 
                value={imagePath} 
                onChange={(e) => setImagePath(e.target.value)} 
              />
            </label>
            <SelectIten options={dataWebSource?.data.data} value={webSources} setValue={setWebSources} product={data?.data.data}/>
          </div>
          {urlStores?.map((stores) => (
            <div key={stores.id} className="flex flex-col gap-5 my-5">
              {stores.id === 1 && (
                <label className="flex flex-col gap-2 text-base text-project-gray-350">
                  Url do extra
                  <input 
                    className="w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl" 
                    placeholder="Informe a url do Extra" 
                    value={stores.url} 
                    onChange={(e) => handleUrlStoresChange(stores.id, e.target.value)}
                  />
                </label>
              )}

              {stores.id === 2 && (
                <label className="flex flex-col gap-2 text-base text-project-gray-350">
                  Url da Casas Bahia
                  <input 
                    className="w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl" 
                    placeholder="Informe a url da Casas Bahia" 
                    value={stores.url} 
                    onChange={(e) => handleUrlStoresChange(stores.id, e.target.value)}
                  />
                </label>
              )}

              {stores.id === 3 && (
                <label className="flex flex-col gap-2 text-base text-project-gray-350">
                  Url do Ponto Frio
                  <input 
                    className="w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl" 
                    placeholder="Informe a url do Ponto Frio" 
                    value={stores.url} 
                    onChange={(e) => handleUrlStoresChange(stores.id, e.target.value)}
                  />
                </label>
              )}

              {stores.id === 4 && (
                <label className="flex flex-col gap-2 text-base text-project-gray-350">
                  Url do Carrefour
                  <input 
                    className="w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl" 
                    placeholder="Informe a url do Carrefour" 
                    value={stores.url} 
                    onChange={(e) => handleUrlStoresChange(stores.id, e.target.value)}
                  />
                </label>
              )}
            </div>
            ))
          }
          <button onClick={editProduct} className="w-full text-base py-2 rounded-xl text-white bg-project-blue-600">Editar</button>
        </Modal>
      )}
      {isModalHistoryPriceProduct && <ModalHistoryPrices idProduct={idProduct} idStore={idStore} setCloseModal={setIsModalHistoryPriceProduct} imgStore={imgStore}/> }
    </main>
  )
}