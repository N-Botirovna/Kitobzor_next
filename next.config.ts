import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", 
  images: {
    domains: ["picsum.photos", "avatars.mds.yandex.net"],
  },
};

export default nextConfig;

