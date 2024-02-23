"use client"
import { Mail, LockKeyhole } from "lucide-react"
import { Modal } from "@/components/Modal"
import { useState } from "react"

export default function DashboardUserAccount() {
  const [isModalChangePassword, setIsModalChangePassword] = useState(false)

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
          <input className="w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl" placeholder="Senha atual" type="text" />
          <div className="flex flex-col gap-5 my-10">
            <input className="py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl" placeholder="Nova senha" type="text" />
            <input className="py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl" placeholder="Confirmar senha" type="text" />
          </div>
          <button className="w-full text-base py-2 rounded-xl text-white bg-project-blue-600">Trocar senha</button>
        </Modal>
      )}
    </section>
  )
}