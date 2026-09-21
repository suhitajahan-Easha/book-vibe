'use client'
import { booktype } from '@/Type/Type'
import  { createContext, ReactNode, useState } from 'react'
interface IbookContext{
    read:booktype[];
    setRead:React.Dispatch<React.SetStateAction<booktype[]>>;
    wish:booktype[];
    setWish:React.Dispatch<React.SetStateAction<booktype[]>>;
}

export const bookcontext=createContext<IbookContext>({
    read : [],
    setRead:()=>{},
    wish:[],
    setWish:()=>{}

})

const Bookcontext = ({children}:{children:ReactNode}) => {

    const [read,setRead]=useState<booktype[]>([])
    const[wish,setWish]=useState<booktype[]>([])

    const data={read,setRead,wish,setWish}

  return (
    <bookcontext.Provider value={data}>
        {children}
    </bookcontext.Provider>
  )
}

export default Bookcontext