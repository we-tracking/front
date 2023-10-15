import Image from "next/image";
import Link from "next/link";
import logo from "@/image/logo.svg"

export function Logo() {

  return (
    <div className="inline-block">
      <Link href="/">
        <Image 
          src={logo}
          width={100}
          height={100}
          alt="We Tracking"
        />
      </Link>
    </div>
  )
}