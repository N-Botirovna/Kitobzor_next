// types/book.d.ts
// Agar alohida faylda saqlamoqchi bo'lsangiz: src/types/book.d.ts
export type Book = {
  id: string
  name: string
  description: string
  picture: string
  author: string
  price: number
  discountPrice?: number | null // BookCard komponentida ishlatilishi mumkin
  region?: string
  like_count?: string
  view_count?: string
}


// {
//   "count": 123,
//   "next": "http://api.example.org/accounts/?offset=400&limit=100",
//   "previous": "http://api.example.org/accounts/?offset=200&limit=100",
//   "results": [
//     {
//       "id": 0,
//       "name": "string",
//       "author": "string",
//       "price": "11575955.52",
//       "discount_price": "96282324.4",
//       "posted_by": {
//         "id": 0,
//         "picture": "string",
//         "first_name": "string",
//         "last_name": "string"
//       },
//       "shop": {
//         "id": 0,
//         "name": "string",
//         "picture": "string"
//       },
//       "owner_type": "user",
//       "percentage": "string",
//       "like_count": "string",
//       "view_count": "string",
//       "created_at": "2025-07-28T05:09:30.709Z"
//     }
//   ]
// }