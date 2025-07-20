import axios from "axios";

// 1. Asosiy API konfiguratsiyasi
const api = axios.create({
  baseURL: "http://38.242.217.124:8000/api/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 10000,
});

// 2. Faqat brauzerda ishlaydigan kodni ichkariga ko‘chiring
if (typeof window !== "undefined") {
  const token = localStorage.getItem("token");
  console.log("Authorization header:", `Bearer ${token}`);
}

// 3. So‘rov oldidan interceptor
api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 4. Javobni tutuvchi interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
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
      console.error("Javob kelmadi:", error.request);
    } else {
      console.error("So‘rov yuborishda xato:", error.message);
    }

    return Promise.reject(error);
  }
);

export default api;
