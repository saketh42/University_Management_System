/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables React strict mode for debugging
  swcMinify: true, // Enables SWC-based minification for better performance
  experimental: {
    appDir: true, // Enables the Next.js App Router (if using App directory)
  },
  images: {
    domains: ["example.com"], // Add allowed domains for images (if fetching from external sources)
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL, // Load environment variables
  },
};

module.exports = nextConfig;
