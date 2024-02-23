import React, { useEffect, useRef } from "react"

interface ModalProps {
  children: React.ReactNode;
  title: string;
  closeModal: (value: boolean) => void;
}


export function Modal({ children, title, closeModal }: ModalProps) {

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  return (
    <div className="w-full h-full flex items-center justify-center absolute inset-0 bg-[rgba(0,0,0,0.5)] ">
      <div ref={modalRef} className={`w-full max-w-[500px] p-5 relative bg-project-gray-850 rounded-xl animations-all`}>
        <button onClick={() => closeModal(false)} className="w-10 h-10 bg-red-600 rounded-full absolute -top-5 -right-5 text-lg font-black text-white">X</button>
        <h1 className="text-2xl text-project-gray-300 font-medium mb-5">{title}</h1>
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  )
}