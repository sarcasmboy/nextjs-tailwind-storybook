/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 's.gravatar.com',
            },
        ],
    },
    redirects: async () => [
        {
            source: '/',
            destination: '/dashboard',
            permanent: true,
        },
    ],
    output: 'standalone',
    reactStrictMode: true,
}

module.exports = nextConfig
