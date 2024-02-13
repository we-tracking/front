"use client"
import logo from "../../../../public/logo.png"
import Image from "next/image"


export default function RecoverPasswordUser() {

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
          <h1 className="text-3xl text-center text-project-blue-100">Recuperar senha</h1>
          <input className="py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl" placeholder="Email" type="text" />
          <button className="text-base py-2 rounded-xl text-white bg-project-blue-600">Recuperar</button>
        </div>
    </div>
  )
}