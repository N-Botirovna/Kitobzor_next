import { useQuery } from "@tanstack/react-query";
import { getShopList, ShopListPayload } from "./api";

export const useShops = (params: ShopListPayload) => {
  return useQuery({
    queryKey: ["shops", params],
    queryFn: () => getShopList(params),
  });
};
