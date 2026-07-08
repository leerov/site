/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // <-- обязательно
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.telegram.org',
      },
    ],
  },
  // distDir: 'out' — можно убрать, т.к. export по умолчанию создаёт out/
};

export default nextConfig;
