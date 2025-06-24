"use client"

import BookCard from "../book/BookCard"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function ShopBooksCarousel({ books }: { books: any[] }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 4, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 5, spacing: 24 },
      },
    },
  })

  if (!books.length) return null

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">📚 Do‘kon kitoblari</h2>
      <div ref={sliderRef} className="keen-slider">
        {books.map((book) => (
          <div key={book.id} className="keen-slider__slide">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  )
}

