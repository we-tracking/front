"use client"
import { Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card"
import { useRouter } from 'next/navigation'
import { LogOut } from "lucide-react"

export default function LogOutCard() {
  const router = useRouter()
  return (
    <Card 
      className='w-full max-w-md bg-indigo-50 rounded-x pb-10 hover:cursor-pointer shadow-md transition-all hover:shadow-2xl hover:scale-105' 
      onClick={() => {
        router.push("/products");
      }}
    >
      <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
        <CardTitle className='text-2xl text-indigo-600 font-bold'>Sair</CardTitle>
        <LogOut  size={28} strokeWidth={2.5} className="text-indigo-600"/>
      </CardHeader>
    </Card>
  )
}