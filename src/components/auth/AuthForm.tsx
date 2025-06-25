"use client"

import { SendPhoneBlock } from "./SendPhoneBlock"
import { OtpVerifyBlock } from "./OtpVerifyBlock"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

export default function AuthForm() {
  const [step, setStep] = useState<"send" | "verify">("send")

  return (
    <Card className="max-w-md w-full mx-auto mt-24 shadow-xl">
      <CardHeader>
        <CardTitle className="text-center text-xl">📲 Telefon orqali kirish</CardTitle>
      </CardHeader>
      <CardContent>
        {step === "send" ? (
          <SendPhoneBlock onSent={() => setStep("verify")} />
        ) : (
          <OtpVerifyBlock />
        )}
      </CardContent>
    </Card>
  )
}
