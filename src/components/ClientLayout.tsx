"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import SiteFooter from "./footer/SiteFooter"
import TagHeader from "./header/HeaderCategories"
import NavbarHeader from "./header/NavbarHeader"
import TopHeader from "./header/TopHeader"
import { ThemeProvider } from "./theme-provider"
import { cookies } from "next/headers"
import { getCookie } from "cookies-next"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const hideLayoutFor = ["/login", "/404", "/profile"]
  const hideLayout = hideLayoutFor.includes(pathname)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = getCookie("token")
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
          <div className="">
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
