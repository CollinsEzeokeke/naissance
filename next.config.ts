import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "media.architecturaldigest.com",
      },
      {
        protocol: "https",
        hostname: "staticfanpage.akamaized.net",
      },
      {
        protocol: "https",
        hostname: "www.1stdibs.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "www.starck.com",
      },
      {
        protocol: "https",
        hostname: "nateberkus.com",
      },
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
      {
        protocol: "https",
        hostname: "th.bing.com",
      },
      {
        protocol: "https",
        hostname: "www.designcurial.com",
      },
      {
        protocol: "https",
        hostname: "iaa-ngo.com",
      },
      {
        protocol: "https",
        hostname: "www.nostraforma.com",
      },
      {
        protocol: "https",
        hostname: "pinoyhousedesigns.com",
      },
      {
        protocol: "https",
        hostname: "media.cntraveler.com",
      },
      {
        protocol: "https",
        hostname: "www.excelo.pl",
      },
    ],
  },
};

export default nextConfig;
