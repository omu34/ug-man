/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // disables image optimization so files load raw from /public
  },
};

module.exports = nextConfig;

