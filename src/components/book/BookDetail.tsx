import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart } from "lucide-react"
import Image from "next/image"

export default function BookDetail({ book }: { book: any }) {
  return (
    <div className="space-y-10">
      {/* Top: Image + Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="w-full rounded-xl overflow-hidden border">
          <Image
            src={book.image}
            alt={book.title}
            width={600}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{book.title}</h1>
          <p className="text-muted-foreground text-sm">Muallif: {book.author}</p>
          <p className="text-sm text-muted-foreground">Hudud: {book.region}</p>

          <div className="flex items-center gap-3">
            {book.discountPrice ? (
              <>
                <span className="text-2xl font-bold text-red-500">{book.discountPrice} so‘m</span>
                <span className="line-through text-sm text-muted-foreground">{book.price} so‘m</span>
                <Badge variant="destructive">Chegirma</Badge>
              </>
            ) : (
              <span className="text-2xl font-bold">{book.price} so‘m</span>
            )}
          </div>

          <div className="flex gap-4 mt-6">
            <Button className="flex gap-2 items-center">
              <ShoppingCart size={18} /> Savatga qo‘shish
            </Button>
            <Button variant="outline" className="flex gap-2 items-center">
              <Heart size={18} /> Sevimlilar
            </Button>
          </div>
        </div>
      </div>

      {/* Tavsif */}
      <Card className="p-6 text-sm text-muted-foreground">
        <h2 className="text-lg font-semibold text-foreground mb-2">Kitob haqida</h2>
        <p>{book.description}</p>
      </Card>
    </div>
  )
}

