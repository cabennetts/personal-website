/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              hostname: 'images.unsplash.com'
            },
            {
              protocol: 'https',
              hostname: 'raw.githubusercontent.com',
              port: '',
              pathname: '/cabennetts/congenial-octo-happiness/main/images/**',
            },
        ],
    },
}


module.exports = nextConfig
