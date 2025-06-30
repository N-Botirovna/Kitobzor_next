import BookDetail from "@/components/book/BookDetail"
import BookCard from "@/components/book/BookCard"
import { notFound } from "next/navigation"
import { Metadata } from "next"

type Book = {
  id: string
  title: string
  description: string
  image: string
  author: string
  price: number
  discountPrice: number | null
  region: string
}

const allBooks: Book[] = Array.from({ length: 50 }, (_, i) => ({
  id: `${i + 1}`,
  title: `Kitob ${i + 1}`,
  description: "Ushbu kitob zamonaviy hayot haqida hikoya qiladi...",
  image: `https://picsum.photos/400/200?random=${i + 1}`,
  author: ["Ali", "Vali", "Guli", "Murod"][i % 4],
  price: 20000 + i * 1000,
  discountPrice: i % 5 === 0 ? 15000 + i * 800 : null,
  region: ["toshkent", "samarqand", "andijon"][i % 3],
}))

// Metadata generator
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

// Asosiy sahifa komponenti
export default function BookDetailPage({
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