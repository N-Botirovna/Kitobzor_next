// features/auth/hooks.ts
import { useMutation } from "@tanstack/react-query";
import {  verifyCode } from "./api";

export const useVerifyCode = () => {
  return useMutation({
    mutationFn: ({ phone, code }: { phone: string; code: string }) =>
      verifyCode(phone, code),
  });
};
