/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['www.mondaycampaigns.org', 'www.unsplash.com'],
  },
}

module.exports = nextConfig
