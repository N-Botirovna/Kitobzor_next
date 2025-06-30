// app/profile/page.tsx
'use client'

import { User, BarChart, Globe, Shield, HelpCircle, FileText } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function ProfilePage() {
  const phoneNumber = '998********3322'

  const menuItems = [
    { icon: <User className="w-5 h-5" />, label: 'Profil', href: '#' },
    { icon: <BarChart className="w-5 h-5" />, label: 'Statistika', href: '#' },
    { icon: <Globe className="w-5 h-5" />, label: 'Til', href: '#' },
    { icon: <Shield className="w-5 h-5" />, label: 'Maxfiylik va xavfsizlik', href: '#' },
    { icon: <HelpCircle className="w-5 h-5" />, label: 'FAQ', href: '#' },
    { icon: <FileText className="w-5 h-5" />, label: 'Maxfiylik siyosati', href: '#' },
  ]

  return (
    <div className="max-w-2xl  px-4 py-10 space-y-8">
      <div className="flex items-center space-x-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-xl font-semibold">Foydalanuvchi</h2>
          <p className="text-muted-foreground">{phoneNumber}</p>
        </div>
      </div>

      <div className="bg-card border rounded-lg divide-y">
        {menuItems.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="flex items-center gap-4 px-4 py-4 hover:bg-muted transition-colors"
          >
            {item.icon}
            <span className="text-sm font-medium">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
