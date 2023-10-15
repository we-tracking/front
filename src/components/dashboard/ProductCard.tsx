"use client"
import { Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card"
import { useRouter } from 'next/navigation'
import { Cloudy } from "lucide-react"

export default function ProductCard() {
  const router = useRouter()
  return (
    <Card 
      className='w-full bg-indigo-50 rounded-x hover:cursor-pointer shadow-md transition-all hover:shadow-2xl hover:scale-105' 
      onClick={() => {
        router.push("/dashboard/produtos");
      }}
    >
      <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
        <CardTitle className='text-2xl text-indigo-600 font-bold'>Produtos</CardTitle>
        <Cloudy size={28} strokeWidth={2.5} className="text-indigo-600"/>
      </CardHeader>
      <CardContent>
        <p className='text-sm text-indigo-300'>
          Verifique seus produtos cadastrados
        </p>
      </CardContent>
    </Card>
  )
}