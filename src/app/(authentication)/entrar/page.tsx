"use client"
import logo from "../../../../public/logo.png"
import Image from "next/image"
import { useState } from "react"
import { api } from "@/api/axios"

export default function LoginUser() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function loginUser() { 
    try {
      const data = await api.post("/user/authenticate", {
        email, password
      })
      console.log(data);
    } catch (error) {
      console.error("Erro na solicitação:", error.message);
    }
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <Image 
          alt="Logo"
          src={logo}
          width={100}
          height={100}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33.3vw"
        />
        <div className="w-full max-w-[480px] flex flex-col gap-5 mt-10 py-10 px-5 border border-project-blue-600 rounded-xl">
          <h1 className="text-3xl text-center text-project-blue-100">Acesse sua conta</h1>
          <input className="py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl" placeholder="Email" type="text" onChange={(event) => setEmail(event.target.value)} />
          <input className="py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl" placeholder="Senha" type="text" onChange={(event) => setPassword(event.target.value)}/>
          <button onClick={loginUser} className="text-base py-2 rounded-xl text-white bg-project-blue-600">Criar</button>
          <p className="text-project-gray-600 text-right">Não é cadastrado? crie sua <span className="text-project-blue-300 underline">conta!</span></p>
          <p className="text-project-gray-600 text-right">Esqueceu a senha? <span className="text-project-blue-300 underline">Recupere!</span></p>
        </div>
    </div>
  )
}