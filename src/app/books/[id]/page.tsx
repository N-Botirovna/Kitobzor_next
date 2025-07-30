// app/books/[id]/page.tsx

import BookDetail from "@/components/book/BookDetail"
import BookCard from "@/components/book/BookCard"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Book } from "@/components/book/Book"
import { getBooksById } from "@/features/books/api"
import { useBooksByID } from "@/features/books/hooks"

export default async function BookDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const res = await getBooksById(Number(params.id));
  const book = res?.data;

  if (!book) return notFound();

  const similarBooks: Book[] = []; // keyin to‘ldiriladi

  console.log("detail rendering");
  
  return (
    <div className="mx-auto py-10 space-y-14">
      <BookDetail book={book} />
      <div>
        <h2 className="text-xl font-bold mb-4">🟢 O'xshash tovarlar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {similarBooks.map((b) => (
            <BookCard key={b.id} book={b} />
          ))}
        </div>
      </div>
    </div>
  );
}
