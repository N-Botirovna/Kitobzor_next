'use client'

import { useState } from 'react'
import { allBooks } from '@/lib/data/booksData'
import { shops } from '@/lib/data/shopsData'
import BookCard from '@/components/book/BookCard'
import Pagination from '@/components/ui/pagination'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'

export default function DiscountBooksPage() {
  const [filters, setFilters] = useState({
    name: '',
    author: '',
    region: 'all',
    shopId: 'all',
  })
  const [page, setPage] = useState(1)
  const perPage = 8

  const discountedBooks = allBooks.filter((book) => book.discountPrice !== null)

  const filtered = discountedBooks.filter((book) => {
    const shop = shops.find((s) => s.id === book.shopId)
    return (
      book.title.toLowerCase().includes(filters.name.toLowerCase()) &&
      book.author.toLowerCase().includes(filters.author.toLowerCase()) &&
      (filters.region === 'all' || book.region === filters.region) &&
      (filters.shopId === 'all' || book.shopId === Number(filters.shopId)) &&
      shop
    )
  })

  const paginated = filtered.slice((page - 1) * perPage, page * perPage)
  const totalPages = Math.ceil(filtered.length / perPage)

  return (
    <div className=" mx-auto px-4 py-10 space-y-10">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">🔥 Aksiya kitoblari</h1>
        <p className="text-muted-foreground">
          Chegirmadagi eng yaxshi kitoblarni hoziroq xarid qiling!
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <Input
          placeholder="Kitob nomi"
          value={filters.name}
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
        />
        <Input
          placeholder="Muallif"
          value={filters.author}
          onChange={(e) => setFilters({ ...filters, author: e.target.value })}
        />
        <Select
          onValueChange={(value) => setFilters({ ...filters, region: value })}
          value={filters.region}
        >
          <SelectTrigger>
            <SelectValue placeholder="Viloyat" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Barchasi</SelectItem>
            {[...new Set(discountedBooks.map((b) => b.region))].map((region) => (
              <SelectItem key={region} value={region!}>{region}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          onValueChange={(value) => setFilters({ ...filters, shopId: value })}
          value={filters.shopId}
        >
          <SelectTrigger>
            <SelectValue placeholder="Do‘kon" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Barchasi</SelectItem>
            {shops.map((s) => (
              <SelectItem key={s.id} value={String(s.id)}>
                {s.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {paginated.map((book) => {
          const shop = shops.find((s) => s.id === book.shopId)
          return (
            <div key={book.id} className="relative">
              <BookCard book={book} />
              <Badge className="absolute top-2 left-2 bg-red-600 text-white">Aksiya</Badge>
              {shop && (
                <div className="mt-2 text-sm text-muted-foreground">
                  📍 <span>{shop.name}</span>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  )
}
