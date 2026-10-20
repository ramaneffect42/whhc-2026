import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Old 2025-26 URLs keep working
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/photogallery", destination: "/events", permanent: true },
    ];
  },
};

export default nextConfig;
