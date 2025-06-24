'use client'

import { useKeenSlider } from "keen-slider/react"
import BookCard from "./BookCard"

const books = [
  {
    id: "1",
    title: "Kitob nomi 1",
    description: "Qisqacha tavsif kitob haqida...",
    image: "https://picsum.photos/200/300?random=1",
    author: "Muallif A",
    price: 50000,
    discountPrice: 40000,
  },
  {
    id: "2",
    title: "Kitob nomi 2",
    description: "Yangi kitoblar orasida mashhur biri",
    image: "https://picsum.photos/200/300?random=2",
    author: "Muallif B",
    price: 60000,
  },
  {
    id: "3",
    title: "Kitob nomi 3",
    description: "Uzoq yillik tajriba asosida yozilgan",
    image: "https://picsum.photos/200/300?random=3",
    author: "Muallif C",
    price: 45000,
    discountPrice: 39000,
  },
  {
    id: "4",
    title: "Kitob nomi 2",
    description: "Yangi kitoblar orasida mashhur biri",
    image: "https://picsum.photos/200/300?random=2",
    author: "Muallif B",
    price: 60000,
  },
  {
    id: "5",
    title: "Kitob nomi 3",
    description: "Uzoq yillik tajriba asosida yozilgan",
    image: "https://picsum.photos/200/300?random=3",
    author: "Muallif C",
    price: 45000,
    discountPrice: 39000,
  },
  // Yana qo‘shsa bo‘ladi...
]

export default function AsNewBooksSection() {
  // NewBooksSection.tsx
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
    <section className="mt-10 ">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">🆕 Yangidek kitoblar</h2>
        <a href="/new-books" className="text-sm text-primary hover:underline">
          Barchasini ko‘rish →
        </a>
      </div>

      <div ref={sliderRef} className="keen-slider">
        {books.map((book) => (
          <div key={book.id} className="keen-slider__slide">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </section>
  )
}
