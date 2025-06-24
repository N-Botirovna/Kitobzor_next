// app/components/book/BookCard.tsx
'use client'

import { Heart, ShoppingCart, MessageSquare } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Book = {
  id: string
  title: string
  description: string
  image: string
  author: string
  price: number
  discountPrice?: number
}

export default function BookCard({ book }: { book: Book }) {
  return (
    <a href={`/books/${book.id}`} className="block">
      <Card className="hover:shadow-lg transition-all duration-200 h-full flex flex-col py-0">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-52 object-cover rounded-t-md"
        />

        <CardContent className="p-4 flex-1 flex flex-col justify-between">
          <div className="space-y-1">
            <h3 className="text-base font-semibold line-clamp-1">{book.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-1">{book.author}</p>
            <p className="text-sm text-muted-foreground line-clamp-2">{book.description}</p>
          </div>

          <div className="mt-3">
            {book.discountPrice ? (
              <div className="flex gap-2 items-center">
                <span className="line-through text-sm text-muted-foreground">{book.price} so‘m</span>
                <span className="text-primary font-bold">{book.discountPrice} so‘m</span>
              </div>
            ) : (
              <span className="text-primary font-bold">{book.price} so‘m</span>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between px-4 pb-4">
          <Button variant="ghost" size="icon"><Heart size={18} /></Button>
          <Button variant="ghost" size="icon"><ShoppingCart size={18} /></Button>
          <Button variant="ghost" size="icon"><MessageSquare size={18} /></Button>
        </CardFooter>
      </Card>
    </a>
  )
}
