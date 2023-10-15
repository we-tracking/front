import Image from "next/image"
import { Logo } from "@/components/Logo"
import imageHome from "@/image/home-img.png"
import Link from "next/link"

export default function Home() {
  return (
    <section className="w-full h-screen bg-indigo-100 grid grid-cols-1 lg:grid-cols-2">
      <div className="pt-10 pl-15">
        <div className="mb-15">
          <Logo />
        </div>
        <div className="w-[660px] max-w-full pr-4 lg:pr-0">
          <h1 className="lg:text-6xl sm:text-5xl text-3xl text-black contour leading-tight mb-5">
            <b className="text-indigo-600 ">Monitore</b> os produtos de acordo com o seu negocio.
          </h1>
          <p className="lg:text-xl text-sm text-gray-500 mb-10">
            Com nossa plataforma, você cadastra seus produtos e seleciona os sites que deseja monitorar os preços daquele produto e como está o mercado no geral.
          </p>
          <div className="w-full flex justify-center items-center gap-5">
            <Link 
              href="/login"
              className="lg:text-base text-xs text-center bg-indigo-600 py-2 w-28 lg:w-36 text-white rounded-x font-bold transition-all border-2 hover:bg-transparent hover:border-indigo-600 hover:text-indigo-600 hover:scale-105"
            >
              Login
            </Link>

            <Link 
              href="/cadastro"
              className="lg:text-base text-xs text-center bg-none border-2 border-indigo-600 text-indigo-600 py-2 w-28 lg:w-36 rounded-x font-bold transition-all hover:bg-indigo-600 hover:text-white hover:scale-105"
            >
              Cadastre-se
            </Link>
          </div>
        </div>

      </div>

      <div className="relative w-full h-full max-w-full hidden lg:inline-block">
        <Image 
          src={imageHome}
          alt="image home"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="p-5"
          loading="lazy"
          priority={false}
          fill
        />
      </div>
    </section>
  )
}
