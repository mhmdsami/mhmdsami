/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  experimental: {
    agentUpgrade: "security",
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
