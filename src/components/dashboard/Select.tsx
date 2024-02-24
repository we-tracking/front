import { WebSourceProps } from "@/types/web-source"
import { Dispatch, SetStateAction, useState } from "react";


type SelectProps = {
  value: WebSourceProps[]
  setValue: Dispatch<SetStateAction<WebSourceProps[]>>;
  options: WebSourceProps[] | any;
  product?: any
}


export function Select({value, setValue, options, product}: SelectProps) {
  const [isSelectOpen, setSelectIsOpen] = useState(false)

  function clearOptions() {
    setValue([]) 
  }

  function selectOption(option: any) {
    console.log("value", value)
    if (value.includes(option)) {
      setValue(value.filter(o => o !== option))
    } else {
      setValue([...value, option])
    }
    
  }
  return (
    <div 
      className={`w-full min-h-[1.5em] flex items-center relative gap-4 py-2 px-4 border border-project-blue-600 outline-none rounded-xl focus:border-project-blue-100 cursor-pointer ${isSelectOpen ? "border-project-blue-100" : ""} ${product?.items.webSources.length ? "cursor-not-allowed" : ""}`}
      onBlur={() => setSelectIsOpen(false)}
      onClick={() => setSelectIsOpen(prev => !prev)}
    >
      <span className="flex flex-wrap gap-1 flex-grow text-project-gray-350">
        {!value.length && <p className="text-project-gray-500">Escolha os sites</p>}
        {product?.items.webSources.length ? (
          product?.items.webSources.map((val: any) => (
            <button
              key={val.webSourceId}
              onClick={e => {
                e.stopPropagation()
              }}
              className="flex items-center gap-2 border border-project-gray-700 p-2 rounded-lg cursor-not-allowed"
            >
              {val.name}
              <span className="">&times;</span>
            </button>
          ))
        ) : (
          value.map(v => (
            <button
              key={v.id}
              onClick={e => {
                e.stopPropagation()
                selectOption(v)
              }}
              className="flex items-center gap-2 border border-project-gray-700 p-2 rounded-lg hover:bg-project-blue-100 hover:text-project-red-500"
            >
              {v.name}
              <span className="">&times;</span>
            </button>
          ))
        )}
      </span>
      <button 
        onClick={e => {
          e.stopPropagation()
          clearOptions()
        }}
        className={`bg-none text-lg border-none outline-none p-0 text-project-gray-500 focus:text-white hover:text-white cursor-pointer ${product?.items.webSources.length && "cursor-not-allowed"}`}>
          &times;
      </button>
      <div className="bg-project-gray-500 self-stretch w-[.05em]"></div>
      <div className="translate-[0 25%] border-[.25em] border-transparent border-t-project-gray-500"></div>
      <ul className={`w-full absolute m-0 p-0 list-none min-h-full overflow-y-auto border border-project-blue-100 rounded-xl left-0 bg-project-gray-750 z-50 top-16 ${isSelectOpen ? "block" : "hidden"}`}>
        {options?.map((option: any) => (
          <li 
            key={option.id}
            onClick={(event) => {
              event.stopPropagation()
              selectOption(option)
              setSelectIsOpen(false)
            }} 
            className="py-1 px-2 text-project-gray-300 cursor-pointer hover:text-project-gray-900 hover:bg-project-blue-100"
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  )
}