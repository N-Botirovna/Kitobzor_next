import axios from "axios";
import { getCookie } from "cookies-next";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

client.interceptors.request.use((config) => {
  const token = getCookie("token"); // faqat brauzerda
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default client;
