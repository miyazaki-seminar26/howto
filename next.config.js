/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  rewrites: async () => [{ source: '/', destination: '/root' }],
  poweredByHeader: false,
  generateEtags: false,
  swcMinify: true,
};
