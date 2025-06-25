import { create } from "zustand"

type AuthStore = {
  phone: string
  setPhone: (val: string) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  phone: "",
  setPhone: (val) => set({ phone: val }),
}))
