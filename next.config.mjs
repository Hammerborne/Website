/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Opt the home page out of Chrome's BFCache so back-navigation
        // always triggers a fresh load and Framer Motion animations replay.
        source: '/',
        headers: [{ key: 'Cache-Control', value: 'no-store' }],
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
