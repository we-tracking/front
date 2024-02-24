import {useRef, useEffect, useState} from "react"
import { LoadingButton } from "./LoadingButton";
import { deleteOneProduct } from "@/api/deleteProduct";
import { toast } from "sonner";

type ModalDeleteProductProps = {
  id: number;
  nameProduct: string;
  setCloseModal: (value: boolean) => void;
}

export function ModalDeleteProduct({ id, nameProduct, setCloseModal}: ModalDeleteProductProps) {
  const [loading, setLoading] = useState(false)
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

  async function deleteProduct() {
    setLoading(true)
    try {
      const data = await deleteOneProduct(id)
      const promise = () => new Promise((resolve) => setTimeout(() => resolve(data), 2000));
      toast.promise(promise, {
        loading: 'Excluindo...',
        success: (data: any) => {
            return `${data.data.message}`
        },
      });
      if(data.status === 200) {
        setLoading(false)
      }
      setTimeout(() => location.reload(), 4000)
    } catch (error: any) {
      toast.error(error.response.data.message)
      setLoading(false)
    }
  }

  return (
    <div className="absolute w-full h-full flex items-center justify-center inset-0 bg-[rgba(0,0,0,0.4)]">
      <div ref={modalRef} className="w-full max-w-lg max-h-[800px] bg-project-gray-800 relative rounded-xl pb-10 animations-all">
        <button onClick={() => setCloseModal(false)} className="w-10 h-10 bg-red-600 rounded-full absolute -top-5 -right-5 text-lg font-black text-white transition-all hover:scale-105">X</button>
        <h1 className="text-3xl text-project-gray-300 text-center py-5">Excluir produto</h1>
        <div className="flex flex-col gap-2 mb-10">
          <p className="text-base text-project-gray-600 text-center">Você está excluindo este produto:</p>
          <p className="text-xl text-project-gray-300 text-center">{nameProduct}</p>
          <p className="text-base text-project-gray-600 text-center">Tem certeza ?</p>

        </div>
        <div className="flex gap-5 px-5">
          <button disabled={loading} onClick={deleteProduct} className="w-full flex items-center justify-center text-base py-2 rounded-xl text-white transition-all bg-project-blue-600 hover:scale-105 disabled:cursor-wait">
          {loading ? <LoadingButton /> : "Sim"}
          </button>
          <button onClick={() => setCloseModal(false)} className="w-full text-base py-2 rounded-xl text-white transition-all bg-project-red-500 hover:scale-105">Não</button>
        </div>
      </div>
    </div>
  )
}