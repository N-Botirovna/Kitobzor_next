'use client'

import { Globe, Heart, ShoppingCart, Phone, Search, User } from 'lucide-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useState } from 'react'
import Link from 'next/link'

export default function TopHeader() {
  const [showLangs, setShowLangs] = useState(false)

  return (
    <div className="relative flex items-center justify-between gap-4 px-6 py-3 border-b bg-white">
      <div className="text-xl font-bold">BookStore</div>

      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <Input placeholder="Qidiruv..." className="pl-10" />
        </div>
      </div>

      <div className="flex items-center gap-4 relative">
        <Button variant="ghost" size="icon">
          <Heart size={20} />
        </Button>

        <Button variant="ghost" size="icon">
          <ShoppingCart size={20} />
        </Button>

        <a href="tel:+998901234567">
          <Button variant="ghost" size="icon">
            <Phone size={20} />
          </Button>
        </a>

        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowLangs((prev) => !prev)}
          >
            <Globe size={20} />
          </Button>

          {showLangs && (
            <div className="absolute right-0 mt-2 w-24 rounded-md border bg-white shadow z-50">
              <button
                className="w-full px-3 py-2 text-sm hover:bg-gray-100 text-left"
                onClick={() => setShowLangs(false)}
              >
                🇺🇿 O‘zbek
              </button>
              <button
                className="w-full px-3 py-2 text-sm hover:bg-gray-100 text-left"
                onClick={() => setShowLangs(false)}
              >
                🇷🇺 Русский
              </button>
              <button
                className="w-full px-3 py-2 text-sm hover:bg-gray-100 text-left"
                onClick={() => setShowLangs(false)}
              >
                🇬🇧 English
              </button>
            </div>
          )}
        </div>

        <Link href="/profile">
          <Button variant="ghost" size="icon">
            <User size={20} />
          </Button>
        </Link>
      </div>
    </div>
  )
}
