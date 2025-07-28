import api from "@/shared/api/axiosInstance";
export interface BookListPayload {
  amount_max?: number;
  amount_min?: number;
  category?: number;
  cover_type?: "hard" | "soft";
  exclude?: string;     
  id?: number;
  is_active?: boolean; 
  limit?: number;
  offset?: number;
  ordering?: "id" | "created_at" | "updated_at" | "price" | "publication_year" ;
  owner_type?: "user" | "shop";
  posted_by?: number;
  publication_year_max?: number;
  publication_year_min?: number;
  q?: string;
  shop?: number;
  type?: "gift" | "exchange" | "seller";
}
export const getBookList = (params: BookListPayload) =>
  api.get("/book/list", { params }); 
export const getCategories = (limit: number, offset: number) =>
  api.get("/book/categories/", {
    params: {
      limit,
      offset,
    },
  });


