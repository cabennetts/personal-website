/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || process.env.SITE_URL2 || 'http://localhost:3000',
    generateRobotsTxt:true,
    generateIndexSitemap:false
}