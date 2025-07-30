import client from "@/lib/axios/client";
import api from "@/shared/api/axiosInstance";

export interface ShopListPayload {
  region?: number;
  district?: number;
  star_min?: number;
  star_max?: number;
  is_active?: boolean;
  q?: string;
  owner?: number;
  exclude?: string;
  limit?: number;
  offset?: number;
  ordering?: "id" | "created_at" | "updated_at" | "star";
  id?: number;
}

export const getShopList = (params: ShopListPayload) =>
  client.get("/shop/list", { params });
