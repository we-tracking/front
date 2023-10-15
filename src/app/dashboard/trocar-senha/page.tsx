import Link from "next/link"
import HeaderDashboard from "@/components/dashboard/HeaderDashboard"


export default function ChangePasswordPage() {

  return (
    <div className="w-full h-screen bg-indigo-100">
      <div className="w-full max-w-5xl mx-auto pt-10">
        <HeaderDashboard />
        <div className="flex items-center justify-between mb-10 px-2">
          <h2 className="text-4xl text-indigo-600 font-bold">Trocar senha</h2>
          <div className="flex items-center gap-5">
            <Link href="/dashboard" className="text-sm text-indigo-400 bg-indigo-200 py-2 px-3 rounded-x transition-all hover:bg-indigo-400 hover:text-indigo-600">
              Voltar
            </Link>
          </div>
        </div>
        <form className="flex flex-col items-center justify-center w-full max-w-xs mx-auto gap-5 mb-5">
          <input 
            type="text" 
            placeholder="Senha atual"
            className="w-full p-2 border border-indigo-600 rounded-x text-black"
          />
          <input 
            type="password" 
            placeholder="Nova senha"
            className="w-full p-2 border border-indigo-600 rounded-x text-black"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-sm font-bold py-2 rounded-x border-2 transition-all hover:bg-transparent hover:border-indigo-600 hover:text-indigo-600"
          >
            Trocar senha
          </button>
        </form>
      </div>
    </div>
  )
}