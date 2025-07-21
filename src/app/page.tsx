"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import MainBanner from "@/components/banner/MainBanner";
import AsNewBooksSection from "@/components/book/AsNewBooksSection";
import NewBooksSection from "@/components/book/NewBooksSection";
import FaqSection from "@/components/faq/FaqSection";
import Posts from "@/components/posts/Posts";
import ShopsSection from "@/components/shop/ShopSection";

export default function Home() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
// if(true) {return null}
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(!!token);
    
    if (!token) {
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) return null; // yoki loading spinner, yoki <p>Checking...</p>

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




 


