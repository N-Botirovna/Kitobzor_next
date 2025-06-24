import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

import { TopHeader } from "@/components/header"
import NavHeader from "@/components/header/NavbarHeader"
import SiteFooter from "@/components/footer/SiteFooter"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kitobzor",
  description: "Onlayn kitob do‘koni",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={cn(inter.className, "bg-background text-foreground")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="container mx-auto">
            <TopHeader />
          <NavHeader />
          <main className="min-h-screen">{children}</main>
          <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}














