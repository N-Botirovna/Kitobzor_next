'use client'

import ShopCard from "./ShopCard"
import { shops } from "@/lib/data/shopsData"

export default function ShopsSection() {
  const previewShops = shops.slice(0, 4) // Faqat 4 ta do‘kon chiqaramiz

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">🏪 Do‘konlar</h2>
        <a href="/shops" className="text-sm text-primary hover:underline">
          Barchasini ko‘rish →
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {previewShops.map((shop) => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </div>
    </section>
  )
}
