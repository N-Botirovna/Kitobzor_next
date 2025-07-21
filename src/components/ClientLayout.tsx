"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import SiteFooter from "./footer/SiteFooter"
import TagHeader from "./header/HeaderCategories"
import NavbarHeader from "./header/NavbarHeader"
import TopHeader from "./header/TopHeader"
import { ThemeProvider } from "./theme-provider"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const hideLayoutFor = ["/login", "/404", "/profile"]
  const hideLayout = hideLayoutFor.includes(pathname)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("token")
    console.log("Token mavjud:", !!token)

    if (!token && pathname !== "/login") {
      router.push("/login")
    } else {
      setIsLoading(false)
    }
  }, [pathname, router])

  if (isLoading) return null
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
