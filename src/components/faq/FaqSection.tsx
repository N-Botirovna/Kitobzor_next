'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useFaqs } from "@/features/base/hooks"
import parse from "html-react-parser"

export default function FaqSection() {
  const { data, isLoading, isError } = useFaqs(10, 0)

  const faqs = data?.data?.result || []

  return (
    <section className="max-w-3xl mx-auto px-6 py-10">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold">❓ Tez-tez so‘raladigan savollar</h2>
        <p className="text-muted-foreground text-sm mt-1">
          Quyida foydalanuvchilar tomonidan ko‘p so‘ralgan savollar va javoblar keltirilgan.
        </p>
      </div>

      <Accordion type="single" className="w-full">
        {faqs.map((faq:any) => (
          <AccordionItem key={faq.id} value={`item-${faq.id}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>
              {parse(faq.answer)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
