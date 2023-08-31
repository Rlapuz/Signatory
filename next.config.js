/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["lh3.googleusercontent.com", "images.pexels.com", 'www.google.com', 'cdn.filestackcontent.com'],

    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
