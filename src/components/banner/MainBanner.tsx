'use client'

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const slides = [
  {
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80",
    title: "Yangi kelgan bestsellerlar",
  },
  {
    img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1600&q=80",
    title: "Chegirmadagi kitoblar",
  },
  {
    img: "https://img.freepik.com/free-psd/world-book-day-celebration-leaderboard-banner-template_23-2151324326.jpg?ga=GA1.1.746369927.1750755296&semt=ais_hybrid&w=740",
    title: "Har oy yangi yangiliklar",
  },
]

export default function MainBanner() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged() {},
    // duration: 1000,  
    renderMode: "performance",
    drag: true,
    slides: { perView: 1 },
    created(s) {
      setInterval(() => {
        s.next()
      }, 4000)
    },
  })

  return (
    <div ref={sliderRef} className="keen-slider mt-2">
      {slides.map((slide, index) => (
        <div key={index} className="keen-slider__slide relative">
          <img
            src={slide.img}
            alt={`Banner ${index}`}
            className="w-full h-[300px] object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-2 rounded">
            {slide.title}
          </div>
        </div>
      ))}
    </div>
  )
}
