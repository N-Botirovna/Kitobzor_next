
import "./globals.css"
import { Inter } from "next/font/google"
import ClientLayout from "@/components/ClientLayout" // 👈
import { Metadata } from "../../node_modules/next/types"
import Providers from "./providers"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kitobzor",
  description: "Onlayn kitob do‘koni",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
   
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers><ClientLayout>{children}</ClientLayout></Providers>
        
      </body>
    </html>
  )
}

