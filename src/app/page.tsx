import MainBanner from "@/components/banner/MainBanner";
import AsNewBooksSection from "@/components/book/AsNewBooksSection";
import NewBooksSection from "@/components/book/NewBooksSection";
import FaqSection from "@/components/faq/FaqSection";
import Posts from "@/components/posts/Posts";
import ShopsSection from "@/components/shop/ShopSection";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>

      <div className="mt-5">
        <MainBanner />
      </div>
      <NewBooksSection />
      <AsNewBooksSection />
      <ShopsSection />
      <Posts />
      <FaqSection />
    </div>
  );
}

