// features/book/hooks/useCategories.ts
import { useMutation, useQuery } from "@tanstack/react-query";
import { BookListPayload, getBookList, getCategories } from "./api";

export const useCategories = (limit: number, offset: number) => {
  return useQuery({
    queryKey: ["categories", limit, offset],
    queryFn: () => getCategories(limit, offset),
  });
};
export const useBooks = () => {
  return useMutation({
    mutationFn: (body: BookListPayload) => getBookList(body),
  });
};

