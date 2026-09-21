import { booktype } from "@/Type/Type"
import Bookcard from "./Bookcard"
import Link from "next/link"

const getbooks= async()=>{
    try{
        const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}//booksData.json`)
        const data=await res.json()
        return data
    }catch(error){
        return[]
    }
}
const Books = async() => {
    const booksdata=await getbooks()
    console.log(booksdata)
  return (
    <div className='max-w-300 mx-auto ' > 
      <div className="grid grid-cols-3 gap-4 my-10">      
        {booksdata.slice(0,3).map((book:booktype,index:number)=>{ 
            return (
                <Bookcard book={book} key={index}></Bookcard>
            )
              
                  
             })}

       </div>  
       <Link href="/book"><button className="btn-success pb-10 text-blue-700"> View more books.....</button></Link>  
    
    </div>
  )
}

export default Books