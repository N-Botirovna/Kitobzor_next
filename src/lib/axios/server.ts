import axios from "axios";
import { cookies } from "next/headers";

export const createServerAxios = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  return instance;
};
