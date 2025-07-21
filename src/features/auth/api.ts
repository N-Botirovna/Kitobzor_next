// features/auth/api.ts

import api from "@/shared/api/axiosInstance";

export const verifyCode = (phone_number: string, otp_code: string) =>
  api.post("/auth/login/", { phone_number, otp_code });
export const getBanners = (limit: number, offset: number) =>
  api.get("/base/banners/", {
    params: {
      limit,
      offset,
    },
  });
export const getCategories = (limit: number, offset: number) =>
  api.get("/book/categories/", {
    params: {
      limit,
      offset,
    },
  });