import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils" // Bu ham kerak bo'ladi

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
