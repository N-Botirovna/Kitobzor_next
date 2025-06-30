'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone } from "lucide-react"

type Shop = {
  id: number
  name: string
  bio: string
  picture: string
  owner: number
  star: number
  district: number
  region: number
  point: string
  location_text: string
  phone_number: string
  telegram: string
  is_active: boolean
  region_name: string
  district_name: string
}

export default function ShopCard({ shop }: { shop: Shop }) {
  return (
    <Card className="hover:shadow-md transition duration-200 h-full flex flex-col py-0">
      <img
        src={shop.picture}
        alt={shop.name}
        className="w-full h-40 object-cover rounded-t-md"
      />
      <CardHeader>
        <CardTitle className="text-base line-clamp-1">{shop.name}</CardTitle>
        <CardDescription className="text-sm line-clamp-2">{shop.region_name}</CardDescription>
      </CardHeader>
      <CardFooter className="px-4 pb-4 mt-auto flex justify-between items-center">
        <div className="text-sm flex items-center gap-1 text-muted-foreground">
          <Phone size={16} /> {shop.phone_number}
        </div>
        <Button variant="outline" size="sm" asChild>
          <a href={`/shops/${shop.id}`}>Ko‘rish</a>
        </Button>
      </CardFooter>
    </Card>
  )
}
