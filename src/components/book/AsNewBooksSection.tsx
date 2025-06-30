'use client'

import { useKeenSlider } from "keen-slider/react"
import BookCard from "./BookCard"
import { allBooks } from "@/lib/data/booksData"

export default function AsNewBooksSection() {
  const asNewBooks = allBooks
    .filter((book) => book.discountPrice === null && book.price < 60000) // Yangidek deb qabul qilingan shart
    .slice(0, 10)

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
        slides: { perView: 2, spacing: 12 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1.2, spacing: 10 },
      },
    },
  })

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">🆕 Yangidek kitoblar</h2>
        <a href="/used-books" className="text-sm text-primary hover:underline">
          Barchasini ko‘rish →
        </a>
      </div>

      <div ref={sliderRef} className="keen-slider">
        {asNewBooks.map((book) => (
          <div key={book.id} className="keen-slider__slide">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </section>
  )
}
