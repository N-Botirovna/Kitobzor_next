'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FaqSection() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-10">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold">❓ Tez-tez so‘raladigan savollar</h2>
        <p className="text-muted-foreground text-sm mt-1">Quyida foydalanuvchilar tomonidan ko‘p so‘ralgan savollar va javoblar keltirilgan.</p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Qanday qilib kitob buyurtma qilaman?</AccordionTrigger>
          <AccordionContent>
            Saytda istalgan kitobni tanlang, savatga qo‘shing va buyurtma berish formasini to‘ldiring.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Yetkazib berish muddati qancha?</AccordionTrigger>
          <AccordionContent>
            Toshkent shahrida 1 kun, boshqa hududlarda 2–4 ish kuni ichida yetkaziladi.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>To‘lov usullari qanday?</AccordionTrigger>
          <AccordionContent>
            Naqd, Click, Payme yoki bank kartasi orqali to‘lov mumkin.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Buyurtmani qanday bekor qilaman?</AccordionTrigger>
          <AccordionContent>
            Agar buyurtma hali yetkazilmagan bo‘lsa, profil orqali yoki biz bilan bog‘lanib bekor qilishingiz mumkin.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

