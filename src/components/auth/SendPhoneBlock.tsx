"use client"

import { useAuthStore } from "@/store/authStore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function SendPhoneBlock({ onSent }: { onSent: () => void }) {
  const { setPhone } = useAuthStore()
  const [value, setValue] = useState("")

  function handleSend() {
    if (!value.startsWith("+998")) return alert("Telefon raqam noto‘g‘ri")
    setPhone(value)
    // TODO: API ga yuborish (send OTP)
    onSent()
  }

  return (
    <div className="space-y-4">
      <Label htmlFor="phone">Telefon raqam</Label>
      <Input
        id="phone"
        placeholder="+998901234567"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={handleSend} className="w-full">Kodni olish</Button>
    </div>
  )
}
