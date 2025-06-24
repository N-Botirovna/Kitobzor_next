// app/components/header/TopHeader.tsx
'use client'

import { Globe, Heart, ShoppingCart, Phone, Search } from 'lucide-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function TopHeader() {
  return (
    <div className="flex items-center justify-between gap-4 px-6 py-3 border-b bg-white">
      <div className="text-xl font-bold">BookStore</div>

      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <Input placeholder="Qidiruv..." className="pl-10" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Heart size={20} />
        </Button>
        <Button variant="ghost" size="icon">
          <ShoppingCart size={20} />
        </Button>
        <Button variant="ghost" size="icon">
          <Phone size={20} />
        </Button>
        <Button variant="ghost" size="icon">
          <Globe size={20} />
        </Button>
      </div>
    </div>
  )
}
