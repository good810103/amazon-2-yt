/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['links.papareact.com','fakestoreapi.com']
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig;
