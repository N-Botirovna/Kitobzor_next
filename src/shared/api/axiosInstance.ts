import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 10000,
});

if (typeof window !== "undefined") {
  const token = localStorage.getItem("token");
  console.log("Authorization header:", `Bearer ${token}`);
}

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
