/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sm-sami-portfolio.s3.ap-south-1.amazonaws.com",
        pathname: "/project/**",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
