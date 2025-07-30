// components/book/BookDetail.tsx

import { Book } from "./Book";

export default function BookDetail({ book }: { book: Book }) {
  return (
    <div className="space-y-6 container ">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={book.picture}
          alt={book.name}
          className="w-full md:w-1/3 h-auto rounded-lg object-cover"
        />
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{book.name}</h1>
          <p className="text-lg text-muted-foreground">{book.author}</p>
          
          <div className="flex items-center gap-4">
            {book.discount_price ? (
              <>
                <span className="text-2xl font-bold text-primary">
                  {book.discount_price} so'm
                </span>
                <span className="text-lg line-through text-muted-foreground">
                  {book.price} so'm
                </span>
              </>
            ) : (
              <span className="text-2xl font-bold text-primary">
                {book.price} so'm
              </span>
            )}
          </div>

          <p className="text-lg">{book.description}</p>
        </div>
      </div>
    </div>
  )
}