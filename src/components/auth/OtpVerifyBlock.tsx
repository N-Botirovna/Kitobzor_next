"use client"

import { useAuthStore } from "@/store/authStore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function OtpVerifyBlock() {
  const { phone } = useAuthStore()
  const [code, setCode] = useState("")

  async function handleVerify() {
    // TODO: Kodni tekshirish va token olish
    const token = "FAKE_TOKEN"
    localStorage.setItem("token", token)
    alert("Kirish muvaffaqiyatli")
  }

  return (
    <div className="space-y-4">
      <Label>Kiritilgan raqam: {phone}</Label>
      <Label htmlFor="code">SMS kodi</Label>
      <Input
        id="code"
        placeholder="1234"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <Button onClick={handleVerify} className="w-full">Kirish</Button>
    </div>
  )
}
