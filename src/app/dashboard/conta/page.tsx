"use client"
import { Mail, LockKeyhole } from "lucide-react"
import { Modal } from "@/components/Modal"
import { useState } from "react"
import { alterPassword } from "@/api/alterPassword"
import { toast } from "sonner"
import { LoadingButton } from "@/components/LoadingButton"

export default function DashboardUserAccount() {
  const [isModalChangePassword, setIsModalChangePassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")


  async function changePassword() {
    setLoading(true)
    try {
      const data = await alterPassword({password, confirmPassword})
      const promise = () => new Promise((resolve) => setTimeout(() => resolve(data), 2000));
      toast.promise(promise, {
        loading: 'Verificando...',
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
    <section className="">
      <div className="w-full max-w-[560px] p-5 bg-project-gray-850 rounded-xl animations-all">
        <div className="flex items-baseline gap-3">
          <h1 className="text-2xl mb-5 text-white">Dados de acesso</h1>
          <button onClick={() => setIsModalChangePassword(true)} className="text-project-blue-300">Alterar</button>
        </div>
        <div>
          <span className="flex items-center gap-3 mb-4">
            <Mail width={20} height={20} className="text-project-gray-700"/>
            <p className="text-base text-project-gray-500">dodo_nadoti@hotmail.com</p>
          </span>
          <span className="flex items-center gap-3">
            <LockKeyhole width={20} height={20} className="text-project-gray-700"/>
            <p className="text-base text-project-gray-500">Senha: ******</p>
          </span>
        </div>
      </div>
      {isModalChangePassword && (
        <Modal closeModal={setIsModalChangePassword} title="Alterar senha">
          <div className="flex flex-col gap-5 my-10">
            <input value={password} onChange={({target}) => setPassword(target.value)} className="py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl" placeholder="Nova senha" type="password" />
            <input value={confirmPassword} onChange={({target}) => setConfirmPassword(target.value)}  className="py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl" placeholder="Confirmar senha" type="password" />
          </div>
          <button disabled={loading} onClick={changePassword} className="w-full flex items-center justify-center text-base py-2 rounded-xl text-white bg-project-blue-600 disabled:cursor-wait">
          {loading ? <LoadingButton /> : "Entrar"}
        </button>
        </Modal>
      )}
    </section>
  )
}