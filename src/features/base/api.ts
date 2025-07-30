import client from "@/lib/axios/client";
import api from "@/shared/api/axiosInstance";
export interface CommentsQuery {
  book?: number;
  book__exclude?: string;
  id?: number;
  limit?: number;
  offset?: number;
  ordering?: "id" | "created_at" | "updated_at";
  parent?: string;
  q?: string;
  user?: number;
}

export const getBanners = (limit: number, offset: number) =>
  client.get("/base/banners/", {
    params: {
      limit,
      offset,
    },
  });
export const getBookCommentList = (params: CommentsQuery) =>
  client.get("/book/comment/list", { params }); 
export const getFAQ = (limit: number, offset: number) =>
  client.get("/base/faqs/", {
    params: {
      limit,
      offset,
    },
  });
