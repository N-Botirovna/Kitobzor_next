import Image from "next/image"
import { Shop } from "@/lib/data/shopsData"
import { Phone, MapPin, Star, Send } from "lucide-react"

export default function ShopDetail({ shop }: { shop: Shop }) {
  return (
    <div className="flex flex-col space-y-10">
      {/* Top section: image + main info */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Image on the left */}
        <div className="w-full lg:w-1/2 rounded-xl overflow-hidden">
          <Image
            src={shop.picture}
            alt={shop.name}
            width={600}
            height={400}
            className="rounded-xl object-cover w-full h-[300px]"
          />
        </div>

        {/* Info on the right */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold">{shop.name}</h1>
          <p className="text-muted-foreground">{shop.bio}</p>

          <div className="flex items-center gap-2 text-yellow-500">
            <Star className="w-5 h-5 fill-yellow-400" />
            <span className="font-semibold">{(shop.star).toFixed(1)} / 5.0</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{shop.region_name}, {shop.district_name}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="w-4 h-4" />
            <span>{shop.phone_number}</span>
          </div>

          {shop.telegram && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Send className="w-4 h-4" />
              <a
                href={`https://t.me/${shop.telegram.replace("@", "")}`}
                className="hover:underline text-blue-600"
                target="_blank"
              >
                {shop.telegram}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Bottom section: description and location */}
      <div className="space-y-4 border-t pt-6">
        <h2 className="text-xl font-semibold">Do‘kon haqida</h2>
        <p>{shop.location_text}</p>

        
      </div>
    </div>
  )
}
