/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['cdn.sanity.io'],
    },
};
export default nextConfig;
