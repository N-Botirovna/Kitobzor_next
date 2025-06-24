'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export default function BookFilters({
  filters,
  setFilters,
}: {
  filters: any
  setFilters: (value: any) => void
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <Input
        placeholder="Kitob nomi bo‘yicha qidirish"
        value={filters.name}
        onChange={(e) => setFilters({ ...filters, name: e.target.value })}
      />
      <Input
        placeholder="Muallif"
        value={filters.author}
        onChange={(e) => setFilters({ ...filters, author: e.target.value })}
      />
      <Select
        onValueChange={(value) => setFilters({ ...filters, region: value })}
        value={filters.region}
      >
        <SelectTrigger>
          <SelectValue placeholder="Hudud" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="toshkent">Toshkent</SelectItem>
          <SelectItem value="samarqand">Samarqand</SelectItem>
          <SelectItem value="andijon">Andijon</SelectItem>
        </SelectContent>
      </Select>
      <Input
        type="number"
        placeholder="Maks. narx"
        value={filters.price}
        onChange={(e) => setFilters({ ...filters, price: e.target.value })}
      />
    </div>
  )
}
