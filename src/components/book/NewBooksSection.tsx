'use client'

import { useKeenSlider } from "keen-slider/react"
import BookCard from "./BookCard"
import { allBooks } from "@/lib/data/booksData"

export default function NewBooksSection() {
  const newBooks = allBooks.slice(0, 10) // faqat 10 ta yangi kitob

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 5,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1280px)": {
        slides: { perView: 4, spacing: 14 },
      },
      "(max-width: 1024px)": {
        slides: { perView: 3, spacing: 12 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1.2, spacing: 10 },
      },
    },
  })

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">🆕 Yangi kitoblar</h2>
        <a href="/new-books" className="text-sm text-primary hover:underline">
          Barchasini ko‘rish →
        </a>
      </div>

      <div ref={sliderRef} className="keen-slider">
        {newBooks.map((book) => (
          <div key={book.id} className="keen-slider__slide">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </section>
  )
}
