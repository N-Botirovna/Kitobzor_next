// components/ClientLayout.tsx
"use client"

import { usePathname } from "../../node_modules/next/navigation"
import SiteFooter from "./footer/SiteFooter"
import TagHeader from "./header/HeaderCategories"
import NavbarHeader from "./header/NavbarHeader"
import TopHeader from "./header/TopHeader"
import { ThemeProvider } from "./theme-provider"



export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hideLayoutFor = ["/login", "/404", "/profile"]
  const hideLayout = hideLayoutFor.includes(pathname)

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {!hideLayout ? (
        <>
        <div className="h-[33vh]">
          <div className="container mx-auto">
            <TopHeader />
          </div>
          <NavbarHeader />
          <TagHeader />
        </div>
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
      </>
      ) : (
        children
      )}
    </ThemeProvider>
  )
}

