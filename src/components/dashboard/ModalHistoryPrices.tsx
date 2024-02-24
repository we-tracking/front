"use client"
import { getHistoryPriceProduct } from "@/api/getHistoryPriceProduct"
import { useEffect, useRef, useState } from "react"

type ModalHistoryPricesProps = {
  idProduct: number;
  idStore: number;
  imgStore: string;
  setCloseModal: (value: boolean) => void;
}

function formatDate(date: string) {
  const dateFormatted = new Date(date);

  return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(dateFormatted);

}


export function ModalHistoryPrices({ idProduct,idStore,setCloseModal, imgStore}: ModalHistoryPricesProps) { 
  const [allHistory, setAllHistory] = useState<any>([])
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setCloseModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setCloseModal]);

  // const { data, isLoading } = useQuery({ queryKey: ['product'], queryFn: () => getHistoryPriceProduct(idProduct,idStore)})

  useEffect(() => {
    async function getAllHistory() {
      const data = await getHistoryPriceProduct(idProduct,idStore)
      if(data.status === 200) {
        setAllHistory(data.data.data.items)
      }
    }

    getAllHistory()
  }, [])
  
  return (
    <div className="absolute w-full h-full flex items-center justify-center inset-0 bg-[rgba(0,0,0,0.4)]">
      <div ref={modalRef} className="w-full max-w-lg max-h-[800px] bg-project-gray-800 relative rounded-xl pb-10 animations-all">
        <button onClick={() => setCloseModal(false)} className="w-10 h-10 bg-red-600 rounded-full absolute -top-5 -right-5 text-lg font-black text-white transition-all hover:scale-105">X</button>
        <h1 className="text-3xl text-project-gray-300 text-center py-10">Histórico de preços</h1>
        <div className="w-full mb-5 px-10">
          <img src={imgStore} alt="Imagem da loja" />
        </div>
        <div className="w-full h-[400px] flex flex-col overflow-y-auto  gap-5 px-10">
          {allHistory?.map((history: any) => (
            <div key={history.checkTime} className="flex flex-col gap-1">
              <span className="flex items-center gap-2 text-base text-project-gray-500">Preço: <p>R${history.price}</p></span>
              <span className="flex items-center gap-2 text-base text-project-gray-500">Data: <p>{formatDate(history.checkTime)}</p></span>
            </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}