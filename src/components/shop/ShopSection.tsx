'use client'

import ShopCard from "./ShopCard"

const shops = [
  {
    id: "1",
    name: "Ziyo Shop",
    image: "https://picsum.photos/400/200?random=11",
    address: "Toshkent sh., Chilonzor 5-mavze",
    phone: "+998 90 123 45 67",
  },
  {
    id: "2",
    name: "Kitoblar Olami",
    image: "https://picsum.photos/400/200?random=12",
    address: "Samarqand sh., Registon maydoni",
    phone: "+998 91 456 78 90",
  },
  {
    id: "3",
    name: "Bilim Do‘koni",
    image: "https://picsum.photos/400/200?random=13",
    address: "Namangan sh., Yangi bozori",
    phone: "+998 93 111 22 33",
  },
  {
    id: "4",
    name: "Kitob Savdo",
    image: "https://picsum.photos/400/200?random=14",
    address: "Andijon sh., Do‘stlik ko‘chasi",
    phone: "+998 94 999 88 77",
  },
]

export default function ShopsSection() {
  return (
    <section className="mt-10 ">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">🏪 Do‘konlar</h2>
        <a href="/shops" className="text-sm text-primary hover:underline">
          Barchasini ko‘rish →
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {shops.map((shop) => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </div>
    </section>
  )
}
