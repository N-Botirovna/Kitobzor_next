// features/book/hooks/useCategories.ts
import { useMutation, useQuery } from "@tanstack/react-query";
import { BookListPayload, getBookList, getBooksById, getCategories } from "./api";

export const useCategories = (limit: number, offset: number) => {
  return useQuery({
    queryKey: ["categories", limit, offset],
    queryFn: () => getCategories(limit, offset),
  });
};
export const useBooks = (params: BookListPayload) => {
  return useQuery({
    queryKey: ["books", params],
    queryFn: () => getBookList(params),
    enabled: !!params, // params bo‘lsa so‘rov yuboriladi
  });
};
export const useBooksByID = (id: number) => {
  return useQuery({
    queryKey: ["book-id", id],
    queryFn: () => getBooksById(id),
    enabled: !!id,
  });
};
