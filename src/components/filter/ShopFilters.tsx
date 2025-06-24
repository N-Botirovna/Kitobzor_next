'use client'

import { Input } from "@/components/ui/input"

export default function ShopFilters({ filters, setFilters }: any) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      <Input
        placeholder="Do‘kon nomi"
        value={filters.name}
        onChange={(e) => setFilters({ ...filters, name: e.target.value })}
      />
      <Input
        placeholder="Hudud (masalan: Toshkent)"
        value={filters.region}
        onChange={(e) => setFilters({ ...filters, region: e.target.value })}
      />
    </div>
  )
}
