/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  swcMinify: true,
  basePath: "/portfolio",
  assetPrefix: "/portfolio"
}

module.exports = nextConfig
