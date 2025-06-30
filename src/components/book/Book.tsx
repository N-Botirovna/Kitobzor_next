// types/book.d.ts
export type Book = {
  id: string
  title: string
  description: string
  image: string
  author: string
  price: number
  discountPrice: number | null
  region?: string 
}