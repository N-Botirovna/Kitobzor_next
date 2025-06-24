import Image from "next/image"

export default function ShopDetail({ shop }: { shop: any }) {
  return (
    <div className="space-y-4">
      <Image
        src={shop.image}
        alt={shop.name}
        width={1200}
        height={400}
        className="w-full h-[300px] object-cover rounded-lg"
      />
      <h1 className="text-2xl font-bold">{shop.name}</h1>
      <p className="text-muted-foreground">{shop.address}</p>
      <p>{shop.description}</p>
    </div>
  )
}
