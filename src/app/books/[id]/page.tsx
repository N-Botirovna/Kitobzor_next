// app/books/[id]/page.tsx

import { notFound } from "next/navigation"
import { Metadata } from "next"
import BookDetail from "@/components/book/BookDetail"
import BookCard from "@/components/book/BookCard"
import { allBooks, Book } from "@/lib/data/booksData" // 🔥 E'tibor bering

export async function generateStaticParams(): Promise<{ id: string }[]> {
  return allBooks.map((book) => ({ id: book.id }))
}

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const book = allBooks.find((b) => b.id === params.id)
  if (!book) {
    return {
      title: "Kitob topilmadi",
      description: "So'ralgan kitob mavjud emas",
    }
  }
  return {
    title: `${book.title} – ${book.author}`,
    description: book.description,
    openGraph: {
      images: [book.image],
    },
  }
}

export default async function BookDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const book = allBooks.find((b) => b.id === params.id)

  if (!book) {
    return notFound()
  }

  const similarBooks = allBooks
    .filter((b) => b.region === book.region && b.id !== book.id)
    .slice(0, 4)

  return (
    <div className="mx-auto px-4 py-10 space-y-14">
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
  )
}
