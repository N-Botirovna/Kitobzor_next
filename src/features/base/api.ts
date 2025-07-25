import api from "@/shared/api/axiosInstance";

export const getBanners = (limit: number, offset: number) =>
  api.get("/base/banners/", {
    params: {
      limit,
      offset,
    },
  });