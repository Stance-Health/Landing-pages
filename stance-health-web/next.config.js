/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  experimental: {
    turbo: {
      root: __dirname
    }
  }
}
module.exports = nextConfig
