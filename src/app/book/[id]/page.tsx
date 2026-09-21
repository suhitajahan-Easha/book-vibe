import Readlist from "@/Components/Readlist";
import Wishlish from "@/Components/Wishlish";
import { booktype } from "@/Type/Type";
import Image from "next/image";
import React from "react";
interface props {
  params: Promise<{
    id: string;
  }>;
}
const getbooks = async () => {
   try{
        const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}//booksData.json`)
        const data=await res.json()
        return data
    }catch(error){
        return[]
    }
};

const bookdetailpage = async ({ params }: props) => {
  const { id } = await params;
  const booksdata = await getbooks();
  const book = booksdata.find((book: booktype) => book.bookId === Number(id),
) as booktype;
 
  return (
    <div className="max-w-300 mx-auto">
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure>
          <Image src={book.image} loading="eager" alt={book.bookName} width={400} height={400}></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{book.bookName}</h2>
          <p>{book.rating}</p>
          <p className="w-100">{book.review}</p>
          <div className="card-actions justify-end">
            <Readlist book={book}></Readlist>
            
            <Wishlish book={book}></Wishlish>
          </div>
        </div>
      </div>
    </div>
  );
};

export default bookdetailpage;
