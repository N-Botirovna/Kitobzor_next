// types/book.d.ts
// Agar alohida faylda saqlamoqchi bo'lsangiz: src/types/book.d.ts
export type Book = {
  id: string
  title: string
  description: string
  image: string
  author: string
  price: number
  discountPrice?: number | null // BookCard komponentida ishlatilishi mumkin
  region?: string
}