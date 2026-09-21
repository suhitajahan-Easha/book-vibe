'use client'

import  { bookcontext } from "@/Context/Bookcontext"
import { booktype } from "@/Type/Type"
import { useContext } from "react"

interface props{
    book:booktype
}
const Readlist = ({book}:props) => {

    const {read,setRead} =useContext(bookcontext)

    const handleReadbook=()=>{

        setRead([...read,book])

    }
console.log(read)
  return (
    <button className="btn btn-primary" onClick={()=>handleReadbook()}>Add to Read</button>
  )
}

export default Readlist