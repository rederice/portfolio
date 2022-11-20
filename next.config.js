/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "custom"
  },
  swcMinify: true,
  basePath: "/portfolio",
  assetPrefix: '/portfolio',
}

module.exports = nextConfig
