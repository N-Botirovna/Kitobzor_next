import MainBanner from "@/components/banner/MainBanner";
import AsNewBooksSection from "@/components/book/AsNewBooksSection";
import NewBooksSection from "@/components/book/NewBooksSection";
import FaqSection from "@/components/faq/FaqSection";
import SiteFooter from "@/components/footer/SiteFooter";
import { TopHeader } from "@/components/header";
import NavHeader from "@/components/header/NavbarHeader";
import { Marquee } from "@/components/magicui/marquee";
import { MarqueeDemo } from "@/components/posts/Marquee";
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

