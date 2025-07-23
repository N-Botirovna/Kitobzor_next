import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", 
  images: {
    domains: ["picsum.photos", "avatars.mds.yandex.net"],
  },
};

export default nextConfig;

