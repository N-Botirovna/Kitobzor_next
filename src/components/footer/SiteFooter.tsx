import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function SiteFooter() {
  return (
    <footer className="bg-muted/40 border-t mt-16 ">
      <div className="container  mx-auto px-4 md:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-muted-foreground">
        {/* Brand */}
        <div>
          <h2 className="text-lg font-bold text-foreground mb-2">📚 Kitobzor</h2>
          <p>Yangi va sifati yangidek kitoblar onlayn do‘koni.</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-foreground font-medium mb-2">Sahifalar</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Bosh sahifa</a></li>
            <li><a href="/new-books" className="hover:underline">Yangi kitoblar</a></li>
            <li><a href="/shops" className="hover:underline">Do‘konlar</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-foreground font-medium mb-2">Aloqa</h3>
          <ul className="space-y-1">
            <li className="flex items-center gap-2"><Phone size={16} /> +998 90 123 45 67</li>
            <li className="flex items-center gap-2"><Mail size={16} /> info@kitobzor.uz</li>
            <li className="flex items-center gap-2"><MapPin size={16} /> Toshkent sh., Chilonzor</li>
          </ul>
        </div>
      </div>

      <Separator className="my-4" />

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-6 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
        <p>© 2025 Kitobzor. Barcha huquqlar himoyalangan.</p>
        <div className="flex gap-3 mt-2 md:mt-0">
          <a href="https://facebook.com" target="_blank"><Facebook size={16} /></a>
          <a href="https://twitter.com" target="_blank"><Twitter size={16} /></a>
          <a href="https://instagram.com" target="_blank"><Instagram size={16} /></a>
        </div>
      </div>
    </footer>
  )
}
