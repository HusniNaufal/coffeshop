/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fore.coffe", "static.fore.coffee", "images.unsplash.com", "i.ibb.co.com", "developer.apple.com", "upload.wikimedia.org", "api.qrserver.com"],
  },
};

module.exports = nextConfig;
