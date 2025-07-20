"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getBanners } from "@/features/auth/api";

interface Banner {
  id: number;
  title: string;
  picture: string;
  // Qo'shimcha propertylar bo'lsa shu yerga qo'shing
}

interface ApiResponse {
  data?: {
    result: Banner[];
    // Boshqa response fieldlari
  };
  // Boshqa umumiy response fieldlari
}

export default function MainBanner() {
  const { data, isLoading, error } = useQuery<ApiResponse>({
    queryKey: ["banners"],
    queryFn: () => getBanners(3, 0),
  });

  const banners: Banner[] = data?.data?.result || [];

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: { perView: 1 },
  });

  useEffect(() => {
    if (slider && banners.length > 0) {
      const interval = setInterval(() => {
        slider.current?.next();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [slider, banners]);

  if (isLoading) {
    return (
      <div className="h-[66vh] flex items-center justify-center text-gray-500 text-lg">
        Banners yuklanmoqda...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-[66vh] flex items-center justify-center text-red-500 text-lg">
        Xatolik yuz berdi. Qayta urinib ko‘ring.
      </div>
    );
  }

  if (banners.length === 0) {
    return (
      <div className="h-[66vh] flex items-center justify-center text-gray-400 text-lg">
        Hozircha bannerlar mavjud emas
      </div>
    );
  }

  return (
    <div
      ref={sliderRef}
      className="keen-slider h-[66vh] rounded-xl overflow-hidden"
    >
      {banners.map((banner) => (
        <div
          key={banner.id}
          className="keen-slider__slide relative h-[65vh] w-full rounded-xl overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage: `url(${banner.picture})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/50 to-transparent" />
          <div className="absolute top-1/3 w-2/3 left-8 -translate-y-1/2 text-white text-2xl md:text-4xl font-bold max-w-[70%] drop-shadow-xl">
            {banner.title}
          </div>
        </div>
      ))}
    </div>
  );
}
