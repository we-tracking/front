import { formatMoney } from "@/utils/format-money";
import Link from "next/link";

const produtos = [
  {
    id: 1,
    nome: "walmart",
    preco: 40.50
  },
  {
    id: 2,
    nome: "walmart",
    preco: 40.50
  },
  {
    id: 3,
    nome: "walmart",
    preco: 40.50
  },
  {
    id: 4,
    nome: "walmart",
    preco: 40.50
  },
  {
    id: 5,
    nome: "walmart",
    preco: 40.50
  },
]

export default function PageProductId({ params }: { params: { id: string } }) {


  return (
    <main className="text-white">
      <div className="flex items-center justify-between">
        <h1 className="text-5xl text-project-gray-300 capitalize">{params.id}</h1>
        <p className="p-2 text-project-gray-700 border border-project-gray-700 rounded-xl">EAN: 07897609501945</p>
        <Link className="py-2 px-8 rounded-xl text-lg font-bold text-project-gray-900 bg-project-blue-100" href="produtos">Voltar</Link>
      </div>
      <div className="grid grid-cols-5 gap-5 mt-16">
        {produtos.map((produto) => (
          <div className="min-h-96 flex flex-col items-center justify-between py-5 px-4 bg-project-gray-850 rounded-xl" key={produto.id}>
            <h2 className="text-2xl text-project-gray-600">{produto.nome}</h2>
            <p className="flex flex-col text-xs text-project-gray-700">Preço <span className="text-2xl text-project-gray-300">{formatMoney(produto.preco)}</span></p>
            <button className="py-2 px-8 rounded-xl text-lg font-bold text-project-gray-900 bg-project-blue-100">Ir ao site</button>
          </div>
        ))}
      </div>
    </main>
  )
}