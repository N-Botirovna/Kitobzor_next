'use client'

import { useState } from "react"
import BookCard from "@/components/book/BookCard"
import BookFilters from "@/components/filter/BookFilter"
import { allBooks } from "@/lib/data/booksData"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function NewBooksPage() {
  const [filters, setFilters] = useState({ name: "", author: "", region: "", price: "" })
  const [sliderRef, slider] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 16,
    },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: {
          perView: 2,
          spacing: 12,
        },
      },
      '(max-width: 640px)': {
        slides: {
          perView: 1,
          spacing: 8,
        },
      },
    },
  })

  const filtered = allBooks.filter((book) => {
    return (
      book.title.toLowerCase().includes(filters.name.toLowerCase()) &&
      book.author.toLowerCase().includes(filters.author.toLowerCase()) &&
      (filters.region === "" || book.region === filters.region) &&
      (filters.price === "" || book.price <= parseInt(filters.price))
    )
  })

  return (
    <div className="mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
        <div>
          <div className=" items-center gap-4 mb-2">
            <h1 className="text-2xl font-bold text-slate-700">🆕 Yangi kitoblar</h1> <br />
          </div>
        </div>

      </div>

      {/* Filtrlar */}
      <BookFilters filters={filters} setFilters={setFilters} />

      <div ref={sliderRef} className="keen-slider">
        {filtered.map((book) => (
          <div key={book.id} className="keen-slider__slide">
            <BookCard book={book} />
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-3 ml-10">
              <button
                onClick={() => slider.current?.prev()}
                className={`w-8 h-8 rounded-full flex items-center justify-center border border-orange-500 text-orange-500 hover:bg-orange-100`}
              >
                ←
              </button>
              <button
                onClick={() => slider.current?.next()}
                className={`w-8 h-8 rounded-full flex items-center justify-center border border-slate-400 text-slate-500 hover:bg-slate-100`}
              >
                →
              </button>
            </div>  
    </div>
  )
}
