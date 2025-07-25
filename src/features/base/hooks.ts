import { useQuery } from "@tanstack/react-query";
import { getBanners } from "./api";

export const useBanners = (limit: number, offset: number) => {
  return useQuery({
    queryKey: ["banners", limit, offset],
    queryFn: () => getBanners(limit, offset),
  });
};
