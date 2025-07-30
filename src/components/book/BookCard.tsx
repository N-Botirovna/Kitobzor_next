// components/book/BookCard.tsx
'use client'

import { Heart, ShoppingCart, MessageSquare, Eye } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Book } from "./Book"

export default function BookCard({ book }: { book: Book }) {
  return (
    <a href={`/books/${book.id}`} className="block">
      <Card className="hover:shadow-lg transition-all duration-200 h-full flex flex-col py-0">
        <img
          src={book.picture}
          alt={book.name}
          className="w-full h-52 object-cover rounded-t-md"
        />

        <CardContent className="p-4 flex-1 flex flex-col justify-between">
          <div className="space-y-1">
            <h3 className="text-base font-semibold line-clamp-1">{book.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-1">{book.author}</p>
            <p className="text-sm text-muted-foreground line-clamp-2">{book.description}</p>
          </div>

          <div className="mt-3">
            {book.discount_price ? (
              <div className="flex gap-2 items-center">
                <span className="line-through text-sm text-muted-foreground">
                  {book.price} so'm
                </span>
                <span className="text-primary font-bold">
                  {book.discount_price} so'm
                </span>
              </div>
            ) : (
              <span className="text-primary font-bold">{book.price} so'm</span>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between px-4 pb-4 text-slate-500 text-sm">
  {/* Likes */}
  <div className="flex items-center gap-1">
    <Heart size={18} className="text-red-500" />
    <span>{book.like_count ?? 0}</span>
  </div>

  {/* Views */}
  <div className="flex items-center gap-1">
    <Eye size={18} />
    <span>{book.view_count ?? 0}</span>
  </div>

  {/* Comments */}
  <Button variant="ghost" size="icon">
    <MessageSquare size={18} />
  </Button>
</CardFooter>

      </Card>
    </a>
  )
}