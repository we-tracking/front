import { Mail, LockKeyhole } from "lucide-react"


export default function DashboardUserAccount() {

  return (
    <section>
      <div className="w-full max-w-[560px] p-5 bg-project-gray-850 rounded-xl">
        <div className="flex items-baseline gap-3">
          <h1 className="text-2xl mb-5 text-white">Dados de acesso</h1>
          <button className="text-project-blue-300">Alterar</button>
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
    </section>
  )
}