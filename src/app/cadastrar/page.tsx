"use client"
import logo from "../../../public/logo.png"
import Image from "next/image"
import { useLayoutEffect, useState } from "react"
import Cookies from "js-cookie"
import { redirect } from 'next/navigation'
import Link from "next/link"
import { api } from "@/api/axios"
import { toast } from 'sonner'
import { LoadingButton } from "@/components/LoadingButton"
import { useRouter } from "next/navigation"

export default function RegisterUser() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function registerNewUser() {
    setLoading(true)
    try {
      const data = await api.post("/user/create", {
        email,password,confirmPassword
      })
      const promise = () => new Promise((resolve) => setTimeout(() => resolve(data), 2000));
      toast.promise(promise, {
        loading: 'Criando...',
        success: (data: any) => {
            return `${data.data.message}`
        },
      });
      setTimeout(() => router.push("/entrar"), 4000)
    } catch (error) {
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
        <h1 className="text-3xl text-center text-project-blue-100">Crie sua conta</h1>
        <input onChange={(event) => setEmail(event.target.value)} className="py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl" placeholder="Email" type="text" />
        <input onChange={(event) => setPassword(event.target.value)} className="py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl" placeholder="Senha" type="password" />
        <input onChange={(event) => setConfirmPassword(event.target.value)} className="py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl" placeholder="Confirmar senha" type="password" />
        <button disabled={loading} onClick={registerNewUser} className="flex items-center justify-center text-base py-2 rounded-xl text-white bg-project-blue-600 disabled:cursor-wait">
        {loading ? <LoadingButton /> : "Criar"}
        </button>
        <p className="text-project-gray-600 text-right">Já é cadastrado? entre <Link href="/entrar" className="text-project-blue-300 underline">aqui!</Link></p>
      </div>
    </div>
  )
}