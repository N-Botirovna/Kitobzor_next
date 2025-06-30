import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MarqueeDemoVertical } from "./Marquee"

export default function Posts() {
  return (
    <section className="container py-10">
        <CardHeader>
          <CardTitle className="text-xl text-center font-bold tracking-tight py-10">📢 Postlar</CardTitle>
        </CardHeader>
          <MarqueeDemoVertical />
    </section>
  )
}
