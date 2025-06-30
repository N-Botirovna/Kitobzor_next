import { notFound } from "next/navigation"
import ShopDetail from "@/components/shop/ShopDetail"
import ShopBooksCarousel from "@/components/shop/ShopBooksCarousel"
import SimilarShopsCarousel from "@/components/shop/SimilarShopsCarousel"
import { allBooks } from "@/lib/data/booksData"
import { shops } from "@/lib/data/shopsData"

export default function ShopDetailPage({ params }: { params: { id: string } }) {
  const shop = shops.find((s) => s.id.toString() === params.id)
  if (!shop) return notFound()

  const shopBooks = allBooks.filter((b) => b.shopId.toString() === shop.id.toString())
  const similarShops = shops.filter(
    (s) => s.region_name === shop.region_name && s.id !== shop.id
  )

  return (
    <div className="mx-auto px-4 py-10 space-y-16">
      <ShopDetail shop={shop} />
      <ShopBooksCarousel books={shopBooks} />
      <SimilarShopsCarousel shops={similarShops} />
    </div>
  )
}

