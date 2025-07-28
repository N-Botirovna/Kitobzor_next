import { useQuery } from "@tanstack/react-query";
import { CommentsQuery, getBanners, getBookCommentList, getFAQ } from "./api";

export const useBanners = (limit: number, offset: number) => {
  return useQuery({
    queryKey: ["banners", limit, offset],
    queryFn: () => getBanners(limit, offset),
  });
};

export function useBookComments
(params: CommentsQuery) {
  return useQuery({
    queryKey: ["books", params],
    queryFn: () => getBookCommentList(params),
  });
}
export const useFaqs = (limit: number, offset: number) => {
  return useQuery({
    queryKey: ["faqs"],
    queryFn: () => getFAQ(limit, offset),
  });
};

