'use client'

import { useState } from "react"
import ShopCard from "@/components/shop/ShopCard"
import Pagination from "@/components/ui/pagination"
import ShopFilters from "@/components/filter/ShopFilters"


const allShops = [...Array(24)].map((_, i) => ({
  id: `${i + 1}`,
  name: `Do‘kon ${i + 1}`,
  address: ["Toshkent", "Samarqand", "Andijon"][i % 3],
  description: "Turli janrdagi kitoblar mavjud. Eng yaxshi narxlar.",
  image: `https://picsum.photos/400/200?random=${200 + i}`,
}))

export default function ShopsPage() {
  const [filters, setFilters] = useState({ name: "", region: "" })
  const [page, setPage] = useState(1)
  const perPage = 8

  const filtered = allShops.filter(
    (shop) =>
      shop.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      shop.address.toLowerCase().includes(filters.region.toLowerCase())
  )

  const paginated = filtered.slice((page - 1) * perPage, page * perPage)
  const totalPages = Math.ceil(filtered.length / perPage)

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">🏬 Do‘konlar</h1>

      <ShopFilters filters={filters} setFilters={setFilters} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {paginated.map((shop) => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </div>

      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  )
}
