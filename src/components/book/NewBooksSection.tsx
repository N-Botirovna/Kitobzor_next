"use client";

import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import BookCard from "./BookCard";
import { allBooks } from "@/lib/data/booksData";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NewBooksSection() {
  const newBooks = allBooks.slice(0, 10);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
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
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    instanceRef.current?.prev();
  };

  const handleNext = () => {
    instanceRef.current?.next();
  };

  return (
    <section className="mt-16 py-10 container">
      {/* Section Header */}
      <div className="flex items-center mb-2">
        <div className="h-px bg-[#ED553B] mr-4 w-[3rem]" />
        <span className="text-[#ED553B] text-sm font-medium">Bo‘limlar</span>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-600 mb-2">
            {" "}
            Yangi kitoblar
          </h2>
          {/* Slider Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className={`rounded-full p-2 mt-6 border ${
                currentSlide === 0
                  ? "border-slate-300 text-slate-400"
                  : "border-[#ED553B] text-[#ED553B]"
              } transition duration-200`}
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-[#ED553B] bg-[#ED553B] text-white flex items-center justify-center hover:opacity-90 transition mt-6"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-500 max-w-md text-sm leading-relaxed text-center">
          Bu bo‘limda eng yangi va mashhur kitoblarni topishingiz mumkin. Har
          bir kitob o‘zining mazmuni va dizayni bilan sizni o‘ziga tortadi. O'z
          kitobining birinchi va yagona egasi bo'lishni xohlaydiganlar uchun!
        </p>
      </div>

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {newBooks.map((book) => (
          <div key={book.id} className="keen-slider__slide">
            <BookCard book={book} />
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href="/new-books"
          className="inline-block text-sm font-medium text-orange-600 hover:underline mb-4 mt-3 border-[#d74532] py-5"
        >
          Barchasini ko‘rish →
        </a>
      </div>
    </section>
  );
}
