/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  // Disable image optimization for static export if needed
  // output: 'export', // Uncomment only if you want static export
}

module.exports = nextConfig