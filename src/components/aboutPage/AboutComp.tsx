"use client";
import {
  BookOpen,
  Users,
  Rocket,
  Heart,
  LibraryBig,
  Globe,
  Bookmark,
  History,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-slate-600 h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <LibraryBig className="w-32 h-32 text-white opacity-20" />
        </div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kitobzor Haqida
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            O'zbekistonning eng yirik elektron kutubxonasi va kitob hamjamiyati
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-600 mb-4">
            Bizning Raqamlarimiz
          </h2>
          <div className="w-24 h-1 bg-[#ED553B] mx-auto mb-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <BookOpen className="w-12 h-12 text-[#ED553B] mx-auto" />,
              title: "50,000+",
              description: "Elektron kitoblar",
            },
            {
              icon: <Users className="w-12 h-12 text-[#ED553B] mx-auto" />,
              title: "100,000+",
              description: "Foydalanuvchilar",
            },
            {
              icon: <Globe className="w-12 h-12 text-[#ED553B] mx-auto" />,
              title: "1+",
              description: "Yillik tajriba",
            },
            {
              icon: <Bookmark className="w-12 h-12 text-[#ED553B] mx-auto" />,
              title: "24/7",
              description: "Qo'llab-quvvatlash",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              {item.icon}
              <h3 className="text-3xl font-bold text-slate-600 mt-4 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Rocket className="w-16 h-16 text-[#ED553B] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-600 mb-6">
            Bizning Missiyamiz
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Kitobzor - bu faqat kutubxona emas, balki kitob sevuvchilar uchun
            keng hamjamiyat. Bizning maqsadimiz - bilim va adabiyotni hamma
            uchun qulay va qiziqarli qilish.
          </p>
          <div className="w-24 h-1 bg-[#ED553B] mx-auto" />
        </div>
      </div>

      {/* History Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <History className="w-16 h-16 text-[#ED553B] mb-6" />
            <h2 className="text-3xl font-bold text-slate-600 mb-6">
              Bizning Tariximiz
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              2025 yilda boshlangan loyiha sifatida Kitobzor bugungi kunda
              mamlakatimizning eng yirik elektron kutubxonasiga aylandi.
            </p>
            <p className="text-lg text-gray-600">
              Har bir kitob ixlosmandi uchun qulay va zamonaviy platforma
              yaratish - bizning asosiy maqsadimizdir.
            </p>
          </div>
          <div className="md:w-1/2 bg-slate-100 h-64 rounded-lg flex items-center justify-center">
            <BookOpen className="w-32 h-32 text-slate-300" />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-[#ED553B] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Bizga Qo'shiling!</h2>
          <p className="text-xl mb-8">
            Kitobzor hamjamiyatining bir qismi bo'ling va bilimlar olamiga
            sho'ng'ing
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-slate-600 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              A'zo bo'lish
            </button>
            <button className="bg-white hover:bg-gray-100 text-[#ED553B] px-8 py-3 rounded-lg font-medium transition-colors">
              Biz bilan bog'lanish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
