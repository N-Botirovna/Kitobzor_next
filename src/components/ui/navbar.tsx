"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="w-full border-b py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Kitobzor</Link>
        <nav className="flex items-center gap-4">
          <Link href="/products">Kitoblar</Link>
          <Link href="/cart">
            <Button variant="outline">Savat</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
