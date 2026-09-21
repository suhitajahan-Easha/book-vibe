import Bookcard from "@/Components/Bookcard";
import { booktype } from "@/Type/Type";

const getbooks = async () => {
   try{
        const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}//booksData.json`)
        const data=await res.json()
        return data
    }catch(error){
        return[]
    }
};
const allbookpage = async () => {
  const booksdata = await getbooks();

  return (
    <div className="max-w-300 mx-auto">
      <div className="grid grid-cols-3 gap-4 my-10">
        {booksdata.map((book: booktype) => {
          return <Bookcard book={book} key={book.bookId}></Bookcard>;
        })}
      </div>
    </div>
  );
};

export default allbookpage;
