"use client";

import { useShops } from "@/features/shops/hook";
import ShopCard from "./ShopCard";
import { shops } from "@/lib/data/shopsData";

export default function ShopsSection() {
const { data, isLoading, isError } = useShops({
  limit:3,
});
const previewShops = data?.data?.result.slice(0,4)
  return (
    <section className="mt-8 mb-3 container">
      <div className="items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-center text-slate-600">
          {" "}
          Do‘konlar
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {previewShops?.map((shop:any) => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href="/shops"
          className="inline-block text-sm font-medium text-orange-600 hover:underline mb-4 mt-3 border-[#d74532] py-5"
        >
          Barchasini ko‘rish →
        </a>
      </div>
    </section>
  );
}
