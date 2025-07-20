// features/auth/hooks.ts
import { useMutation } from "@tanstack/react-query";
import {  getBanners, verifyCode } from "./api";

export const useVerifyCode = () => {
  return useMutation({
    mutationFn: ({ phone, code }: { phone: string; code: string }) =>
      verifyCode(phone, code),
  });
};
export const useBanners = () => {
    return useMutation({
      mutationFn: ({ limit, offset }: { limit: number; offset: number }) =>
        getBanners(limit, offset),
    });
  };
