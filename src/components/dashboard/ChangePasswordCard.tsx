"use client"
import { Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card"
import { useRouter } from 'next/navigation'
import { CaseSensitive } from "lucide-react"
//<LogOut />

export default function ChangePasswordCard() {
  const router = useRouter()
  return (
    <Card 
      className='w-full bg-indigo-50 rounded-x hover:cursor-pointer shadow-md transition-all hover:shadow-2xl hover:scale-105' 
      onClick={() => {
        router.push("/dashboard/trocar-senha");
      }}
    >
      <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
        <CardTitle className='text-2xl text-indigo-600 font-bold'>Trocar senha</CardTitle>
        <CaseSensitive  size={28} strokeWidth={2.5} className="text-indigo-600"/>
      </CardHeader>
      <CardContent>
        <p className='text-sm text-indigo-300'>
          Mude sua senha
        </p>
      </CardContent>
    </Card>
  )
}