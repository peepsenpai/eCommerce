/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "res.cloudinary.com"
    ]
  },
  devIndicators: {
    buildActivity: false
  }
}

module.exports = nextConfig
