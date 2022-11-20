/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  swcMinify: true,
  basePath: "/nextjs-website",
  assetPrefix: "/nextjs-website"
}

module.exports = nextConfig
