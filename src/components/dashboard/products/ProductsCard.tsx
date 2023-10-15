"use client"
import { Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card"
import { useRouter } from 'next/navigation'

export default function ProductsCard() {
  const router = useRouter()
  return (
    <Card 
      className='w-full bg-indigo-400 rounded-x hover:cursor-pointer shadow-md transition-all hover:shadow-2xl hover:scale-105' 
      onClick={() => {
        router.push("/dashboard/produtos");
      }}
      >
        <CardHeader className='flex flex-row items-center justify-between space-y-0'>
          <CardTitle className='text-base text-indigo-100 font-bold'>Arroz Camilo</CardTitle>
          <p className="text-xs text-white">18/11/2023</p>
        </CardHeader>
      </Card>
  )
}