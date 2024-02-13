"use client"
import { formatMoney } from "@/utils/format-money"
const products = [
  {
    id: 1,
    name: "Arroz",
    price: 25,
  },
  {
    id: 2,
    name: "Feijão",
    price: 33,
  },
  {
    id: 3,
    name: "Frango",
    price: 38,
  },
  {
    id: 4,
    name: "Alface",
    price: 12,
  },
]

export default function DashboardUserProducts() {

  return (
    <div className="w-full">
      <button className="py-3 px-5 mb-10 rounded-xl font-semibold bg-gradient text-black">Novo Produto</button>
      <table className="block w-full bg-project-gray-900 border border-project-gray-800 rounded-xl">
      <thead className="block">
        <tr className="flex w-full text-project-gray-300 text-2xl text-left border-b border-project-gray-800 p-5">
          <th className="w-1/2 ">Nome</th>
          <th className="w-1/4 pl-9">Preço</th>
          <th className="w-1/5 "></th>
          <th className="w-1/5 "></th>
        </tr>
      </thead>
      <tbody className="block w-full h-[700px] overflow-y-auto scroll">
        {products.map((product, index) => (
          <tr key={product.id} className={`w-full block text-base text-project-gray-700 p-5 ${index % 2 === 0 ? 'bg-[#303030]' : 'bg-[#2A2A2B]'}`}>
            <td className="w-1/2">{product.name}</td>
            <td className="w-1/4">{formatMoney(product.price)}</td>
            <td className="w-1/5">
              <button
                className="bg-project-blue-600 text-white px-4 py-2 rounded-xl mr-2 hover:scale-105 "
                
              >
                Detalhes
              </button>
            </td>
            <td className="pr-2">
            <button
                className=" bg-project-red-500 text-white px-4 py-2 rounded-xl hover:scale-105"
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
        
      </tbody>
    </table>
    </div>
  )
}