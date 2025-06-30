'use client'

import { useState } from "react"
import BookCard from "@/components/book/BookCard"
import BookFilters from "@/components/filter/BookFilter"
import Pagination from "@/components/ui/pagination"
import { usedBooks } from "@/lib/data/usedBooks"

export default function UsedBooksPage() {
  const [filters, setFilters] = useState({ name: "", author: "", region: "", price: "" })
  const [page, setPage] = useState(1)
  const perPage = 8

  const filtered = usedBooks.filter((book) => {
    return (
      book.title.toLowerCase().includes(filters.name.toLowerCase()) &&
      book.author.toLowerCase().includes(filters.author.toLowerCase()) &&
      (filters.region === "" || book.region === filters.region) &&
      (filters.price === "" || book.price <= parseInt(filters.price))
    )
  })

  const paginated = filtered.slice((page - 1) * perPage, page * perPage)
  const totalPages = Math.ceil(filtered.length / perPage)

  return (
    <div className=" mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">♻️ Yangidek kitoblar</h1>

      <BookFilters filters={filters} setFilters={setFilters} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {paginated.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  )
}
