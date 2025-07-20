// src/api/axios.ts
import axios from "axios";

// 1. Asosiy API konfiguratsiyasi
const api = axios.create({
  baseURL: "http://38.242.217.124:8000/api/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 10000, // 10 soniya timeout
});
const token = localStorage.getItem("token");
console.log("Authorization header:", `Bearer ${token}`);

// 2. So'rov oldidan interceptor
api.interceptors.request.use(
  (config) => {
    // Faqat browser muhitida ishlaydigan kod
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 3. Javob uchun interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Xatolikni qayta ishlash
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // Auth xatosi
          console.error("Kirish amalga oshmadi");
          break;
        case 404:
          console.error("Manba topilmadi");
          break;
        case 500:
          console.error("Server xatosi");
          break;
        default:
          console.error("Noma'lum xato");
      }
    } else if (error.request) {
      // So'rov yuborildi, lekin javob kelmadi
      console.error("Javob kelmadi:", error.request);
    } else {
      // So'rov yuborishda xato
      console.error("So'rov yuborishda xato:", error.message);
    }

    return Promise.reject(error);
  }
);

export default api;
