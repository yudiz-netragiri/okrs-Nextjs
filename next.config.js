/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'crictracker-admin-panel-local-dev-08032022.s3.ap-south-1.amazonaws.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

module.exports = nextConfig
