"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import MainBanner from "@/components/banner/MainBanner";
import AsNewBooksSection from "@/components/book/AsNewBooksSection";
import NewBooksSection from "@/components/book/NewBooksSection";
import FaqSection from "@/components/faq/FaqSection";
import Posts from "@/components/posts/Posts";
import ShopsSection from "@/components/shop/ShopSection";
import { getCookie } from "cookies-next"; // ✅

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = getCookie("token"); // ✅

    if (!token) {
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) return null;

  return (
    <div className="mt-5">
      <MainBanner />
      <NewBooksSection />
      <AsNewBooksSection />
      <ShopsSection />
      <Posts />
      <FaqSection />
    </div>
  );
}
