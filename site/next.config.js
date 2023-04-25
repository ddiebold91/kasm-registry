/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'dhnhome2.online',
    description: 'The private kasm repository for dhnhome2.online.',
    icon: '/img/logo.svg',
    listUrl: 'https://ddiebold91.github.io/kasm-registry/',
    contactUrl: 'https://github.com/ddiebold91/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
