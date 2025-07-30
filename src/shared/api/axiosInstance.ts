// lib/axiosInstance.ts
import axios from "axios";
import { getCookie } from "cookies-next";

// Axios instance yaratish
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 10000,
});

// Request interceptor — token qo‘shish
api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = getCookie("token");
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor — xatolarni tutish
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        console.error("❌ Token noto‘g‘ri yoki muddati tugagan.");
      } else if (status === 404) {
        console.error("❌ Manba topilmadi.");
      } else if (status === 500) {
        console.error("❌ Server ichki xatosi.");
      } else {
        console.error("❌ Boshqa xato:", status);
      }
    } else if (error.request) {
      console.error("🚫 So‘rov yuborildi, lekin javob kelmadi.");
    } else {
      console.error("⚠️ So‘rov sozlamasida xato:", error.message);
    }

    return Promise.reject(error);
  }
);

export default api;
