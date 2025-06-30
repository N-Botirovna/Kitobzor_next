// app/components/header/NavHeader.tsx

'use client'

const navItems = [
  { label: "Yangi kitoblar", href: "/new-books" },
  { label: "Yangidek kitoblar", href: "/used-books" },
  { label: "Do'konlar", href: "/shops" },
  { label: "Aksiya", href: "/sale" },
]

export default function NavHeader() {
  return (
    <nav className="bg-gray-100 px-6 py-2 text-sm font-medium">
      <ul className="container flex items-center gap-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="hover:text-primary transition-colors">{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
