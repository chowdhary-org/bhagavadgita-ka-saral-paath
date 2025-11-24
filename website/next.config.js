/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/bhagavadgita-ka-saral-paath' : '',
  assetPrefix: isProd ? '/bhagavadgita-ka-saral-paath' : '',
  images: { unoptimized: true },
}

module.exports = nextConfig
