"use client"
import { Logo } from "@/components/Logo"
import Link from "next/link"

export default function LoginPage() {

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center bg-indigo-100 px-2">
      <Logo />
      <div className="max-w-[480px] w-full bg-indigo-50 mt-10 rounded-x">
        <h2 className="text-3xl text-indigo-200 text-center mb-5 pt-10">Acesse sua conta</h2>
        <form className="flex flex-col items-center justify-center w-full max-w-xs mx-auto gap-5 mb-5">
          <input 
            type="text" 
            placeholder="Email"
            className="w-full p-2 border border-indigo-600 rounded-x text-black"
          />
          <input 
            type="password" 
            placeholder="Senha"
            className="w-full p-2 border border-indigo-600 rounded-x text-black"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-sm font-bold py-2 rounded-x border-2 transition-all hover:bg-transparent hover:border-indigo-600 hover:text-indigo-600"
          >
            Entrar
          </button>
        </form>
        <div className="w-full max-w-xs mx-auto gap-2 text-right flex flex-col pb-5">
          <p className="text-xs text-gray-400">Não é cadastrado? cria sua <Link href="/cadastro" className="text-indigo-400 font-bold transition-all hover:underline">Conta!</Link></p>

          <p className="text-xs text-gray-400">Esqueceu a senha? <Link href="/recuperar-senha" className="text-indigo-400 font-bold transition-all hover:underline">Recupere!</Link></p>
        </div>
      </div>
    </section>
  )
}