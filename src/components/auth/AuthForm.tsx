"use client"
import { useState } from "react";
import { useVerifyCode } from "@/features/auth/hooks";
import Image from "../../../node_modules/next/image";
import { useRouter } from "../../../node_modules/next/navigation";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const { mutate: verify, isPending, isError, error } = useVerifyCode();
  const router = useRouter  ();

  const isPhoneValid = /^\+998\d{9}$/.test(phone);
  const isCodeComplete = code.every((digit) => digit.length === 1);
  const isFormValid = isPhoneValid && isCodeComplete;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^\d+]/g, "");
    if (!value.startsWith("+998")) value = "+998";
    if (value.length > 13) value = value.slice(0, 13);
    setPhone(value);
  };

  const handleCodeChange = (index: number, value: string) => {
    if (!/\d/.test(value) && value !== "") return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    
    const fullCode = code.join("");
    console.log('Form submitted with:', { phone, code: fullCode }); // 1. Form ma'lumotlarini ko'rish
    
    verify(
      { phone, code: fullCode },
      {
        onSuccess: (data) => {
          console.log('Login success! Response data:', data); // 2. Muvaffaqiyatli javob
          console.log('Response headers:', data.headers);           
          console.log('Token:', data.data?.access_token); 
          
          if (data.data?.access_token) {
            localStorage.setItem("token", data.data.access_token);; // 5. Token saqlanganligi
          }
          
          router.push("/");
        },
        onError: (error) => {
          console.error("Login error details:", { // 6. Batafsil xato ma'lumoti
            message: error.message,
            response: error.response,
            request: error.request,
            config: error.config
          });
        },
      }
    );
  };

  return (
    <div className="flex h-screen w-full bg-white">
      {/* Left side - Image */}
      <div className="w-[62%] relative hidden md:block">
        <Image
          src="/images/enter.png"
          alt="Kitobzor Illustration"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right side - Login */}
      <div className="w-full md:w-[38%] flex flex-col justify-center px-12 md:px-16">
        <h1 className="text-3xl font-bold mb-2">Kitobzorga xush kelibsiz!</h1>
        <p className="mb-12 text-gray-400">
          Kirish uchun Telegram botdan OTP kodni olib keling
        </p>

        <a
          href="https://t.me/kitobzor_uz_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white text-center py-3 rounded mb-6 hover:bg-blue-600 transition"
        >
          Telegram bot
        </a>

        <form onSubmit={handleSubmit}>
          {/* Phone input */}
          <label className="mb-2 block text-sm font-medium">Telefon raqam</label>
          <input
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            className={`border px-4 py-2 w-full mb-6 rounded focus:outline-none transition focus:ring-2 focus:ring-blue-300`}
            placeholder="+998901234567"
          />

          {/* OTP code input */}
          <label className="mb-2 block text-sm font-medium">Tasdiqlash kodi</label>
          <div className="flex justify-between gap-2 mb-6">
            {code.map((digit, index) => (
              <div key={index} className="relative">
                <input
                  id={`code-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  className="w-12 h-12 border-2 text-center text-xl rounded-md focus:outline-none focus:border-blue-500 transition"
                />
                {index === 2 && (
                  <span className="absolute -right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">-</span>
                )}
              </div>
            ))}
          </div>

          <button
            type="submit"
            disabled={!isFormValid || isPending}
            className={`w-full py-2 rounded text-white transition font-semibold ${
              isFormValid && !isPending
                ? "bg-[#f2543f] hover:bg-[#d74532]"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            {isPending ? "Tasdiqlanmoqda..." : "Kirish"}
          </button>

          {isError && (
            <div className="mt-4 text-red-500 text-sm">
              {error.response?.data?.message || "Xatolik yuz berdi, qayta urinib ko'ring"}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}