'use client'

import  { bookcontext } from "@/Context/Bookcontext"
import { booktype } from "@/Type/Type"
import { useContext } from "react"

interface props{
    book:booktype
}
const Wishlist = ({book}:props) => {

    const {wish,setWish} =useContext(bookcontext)

    const handleWishbook=()=>{

        setWish([...wish,book])

    }
console.log(wish)
  return (
    <button className="btn btn-primary" onClick={()=>handleWishbook()}>Add to Wishlist</button>
  )
}

export default Wishlist