"use client";
import Bookcard from "@/Components/Bookcard";
import  { bookcontext } from "@/Context/Bookcontext";
import { booktype } from "@/Type/Type";
import { useContext, useState } from "react";

const Listedbook = () => {
  const { read, wish } = useContext(bookcontext);
  const [sortby, setSortby] = useState<"rating" | "year" | "pages">("rating");

  const sortbooks = (books: booktype[]) => {
    const sortedbooks = [...books];

    if (sortby === "rating") {
      sortedbooks.sort((b, a) => b.rating - a.rating);
    } else if (sortby === "year") {
      sortedbooks.sort((b, a) => b.yearOfPublishing - a.yearOfPublishing);
    } else if (sortby === "pages") {
      sortedbooks.sort((b, a) => b.totalPages - a.totalPages);
    }

    return sortedbooks;
  };

  const sortedreadbook = sortbooks(read);
  const sortedwishbook = sortbooks(wish);
  return (
    <div className="container max-w-300 mx-auto">
      <div className="text-4xl text-center p-5  bg-amber-200">
        <p>Listed books</p>
      </div>
      <div className="text-center m-5">
        <select value={sortby} onChange={(e)=>
          setSortby(e.target.value as "rating" | "year" | "pages")
        }
          defaultValue="Pick a font" className="select select-ghost ">
          <option disabled={true}>Sort By</option>
          <option value={"rating"}>Rating</option>
          <option value={"year"}>Published Year</option>
          <option value={"pages"}>Number of pages</option>
        </select>
      </div>
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Readlist"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {sortedreadbook.length > 0 ? (
            sortedreadbook.map((book: booktype) => {
              return <Bookcard book={book} key={book.bookId}></Bookcard>;
            })
          ) : (
            <p className="text-4xl text-red-700 ">No Readlist here</p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Wishlist"
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {sortedwishbook.length > 0 ? (
            sortedwishbook.map((book: booktype) => {
              return <Bookcard book={book} key={book.bookId}></Bookcard>;
            })
          ) : (
            <p className="text-4xl text-red-700 ">No Wishlist here</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Listedbook;
