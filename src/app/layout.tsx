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

import { headers } from "next/headers"

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers()
  const pathname = headersList.get("x-invoke-path") || ""
  console.log("Pathname:", pathname)

  const hideLayoutFor = ["/auth", "/404"]
  const hideLayout = hideLayoutFor.includes(pathname)

  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={cn(inter.className, "bg-background text-foreground")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {!hideLayout ? (
            <>
              <div className="container mx-auto">
                <TopHeader />
              </div>
              <NavHeader />
              <div className="container">
                <main className="min-h-screen">{children}</main>
              </div>

              <SiteFooter />
            </>
          ) : (
            children
          )}
        </ThemeProvider>
      </body>
    </html>
  )
}
