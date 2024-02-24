"use client"
import logo from "../../public/logo.png"
import Image from "next/image"
import { useLayoutEffect, useState } from "react"
import { api } from "@/api/axios"
import { toast } from 'sonner'
import Cookies from "js-cookie"
import { redirect, useRouter } from 'next/navigation'
import { LoadingButton } from "./LoadingButton"

export function Login() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  async function loginUser() {
    setLoading(true)
    try {
      const data = await api.post("/user/authenticate", {email, password})
      const promise = () => new Promise((resolve) => setTimeout(() => resolve(data), 2000));
      toast.promise(promise, {
        loading: 'Loading...',
        success: (data: any) => {
            Cookies.set("token", data.data.data.token)
            return `${data.data.message}`
        },
      });
      if(data.status === 200) {
        localStorage.setItem("email", email)
        Cookies.set("user", "logado")
      }
      setTimeout(() => router.push("dashboard/home"), 4000)
    } catch (error:any) {
      toast.error(error.response.data.message)
      setLoading(false)
    }
  }
  
  useLayoutEffect(() => {
    const isUserLogged = Cookies.get("user")
    if(isUserLogged){
      redirect("dashboard/home")
    }
  }, [])

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
        <input className="py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl" placeholder="Senha" type="password" onChange={(event) => setPassword(event.target.value)}/>
        <button disabled={loading} onClick={loginUser} className="flex items-center justify-center relative text-base py-2 rounded-xl text-white bg-project-blue-600">
          {loading ? <LoadingButton /> : "Entrar"}
        </button>
        <p className="text-project-gray-600 text-right">Não é cadastrado? crie sua <span className="text-project-blue-300 underline">conta!</span></p>
        <p className="text-project-gray-600 text-right">Esqueceu a senha? <span className="text-project-blue-300 underline">Recupere!</span></p>
      </div>
    </div>
  )
}