// types/book.d.ts
// Agar alohida faylda saqlamoqchi bo'lsangiz: src/types/book.d.ts
export type Book = {
  id: string;
  picture: string;
  name: string;
  language: string;
  description: string;
  script_type: string;
  author: string;
  cover_type: "hard" | "soft"; // yoki string bo‘lsa: string;
  price: string;
  discount_price: string;
  publication_year: number;
  pages: number;
  isbn: string;
  posted_by: {
    id: number;
    picture: string;
    first_name: string;
    last_name: string;
  };
  shop: {
    id: string;
    name: string;
    picture: string;
  };
  owner_type: "user" | "admin" | string; // ehtimol enum bo'lishi mumkin
  percentage: string;
  can_update: boolean;
  created_at: string; // ISO date format
  like_count: string;
  view_count: string;
  comment_count: string;
};


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