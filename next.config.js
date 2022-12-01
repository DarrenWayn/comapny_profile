/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["robohash.org", "placeimg.com"],
  },
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
};
