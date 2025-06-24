"use client"

import ShopCard from "./ShopCard"
import { useKeenSlider } from "keen-slider/react"

export default function SimilarShopsCarousel({ shops }: { shops: any[] }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
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

  if (!shops.length) return null

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">🏬 O‘xshash do‘konlar</h2>
      <div ref={sliderRef} className="keen-slider">
        {shops.map((shop) => (
          <div key={shop.id} className="keen-slider__slide">
            <ShopCard shop={shop} />
          </div>
        ))}
      </div>
    </div>
  )
}
