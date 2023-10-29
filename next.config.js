/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: '/gameCollection',
    basePath: process.env.GITHUB_ACTIONS && "/gameCollection",
    trailingSlash: true,
    output: "export"
}

module.exports = nextConfig
