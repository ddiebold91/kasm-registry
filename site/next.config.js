/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'My Kasm Workspaces',
    description: 'My Kasm repository for custom workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://ddiebold91.github.io/kasm-registry/',
    contactUrl: 'https://github.com/ddiebold91/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
