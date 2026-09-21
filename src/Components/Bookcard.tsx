import { booktype } from "@/Type/Type";
import Image from "next/image";
import Link from "next/link";

interface propstype {
  book: booktype;
}

const Bookcard = ({ book }: propstype) => {
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <Image src={book.image} width={100} height={90} alt={book.bookName}></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {book.bookName}
          <div className="badge badge-secondary">{book.rating} *{book.totalPages}</div>
        </h2>
        <p>
          {book.review}

        </p>
        <div className="card-actions justify-end">
          <Link href={`/book/${book.bookId}`}><button className="btn btn-active btn-success">View details</button></Link>
          <div className=" btn btn-active btn-info">Add to Wishlist</div>
        </div>
      </div>
    </div>
  );
};

export default Bookcard;
