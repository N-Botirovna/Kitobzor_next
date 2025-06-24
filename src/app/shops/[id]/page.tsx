
import ShopBooksCarousel from "@/components/shop/ShopBooksCarousel"
import ShopDetail from "@/components/shop/ShopDetail"
import SimilarShopsCarousel from "@/components/shop/SimilarShopsCarousel"
import { notFound } from "next/navigation"

const allShops = [...Array(10)].map((_, i) => ({
  id: `${i + 1}`,
  name: `Do‘kon ${i + 1}`,
  address: ["Toshkent", "Samarqand", "Andijon"][i % 3],
  description: "Eng yaxshi kitoblar bizda. O‘qish zavqini his eting.",
  image: `https://picsum.photos/seed/shop${i}/800/400`,
}))

const allBooks = [...Array(50)].map((_, i) => ({
  id: `${i + 1}`,
  title: `Kitob ${i + 1}`,
  shopId: `${(i % 10) + 1}`,
  image: `https://picsum.photos/seed/book${i}/400/200`,
  author: ["Ali", "Vali", "Guli", "Murod"][i % 4],
  price: 20000 + i * 1000,
  discountPrice: i % 5 === 0 ? 15000 + i * 800 : null,
  description: "Mazmunli kitob. O‘qishga arziydi.",
}))

export default function ShopDetailPage({ params }: { params: { id: string } }) {
  const shop = allShops.find((s) => s.id === params.id)
  if (!shop) return notFound()

  const shopBooks = allBooks.filter((b) => b.shopId === shop.id)
  const similarShops = allShops.filter((s) => s.address === shop.address && s.id !== shop.id)

  return (
    <div className=" mx-auto px-4 py-10 space-y-16">
      <ShopDetail shop={shop} />
      <ShopBooksCarousel books={shopBooks} />
      <SimilarShopsCarousel shops={similarShops} />
    </div>
  )
}
