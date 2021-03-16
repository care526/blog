const nav = require('./nav')
const sidebar = require('./sidebar')
const plugins = require('./plugins')

module.exports = {
    title: "care's blog",
    description: 'the meaning of my existence',

    lineNumbers: true,

    themeConfig: {
        logo: '/logo.jpeg',
        
        nav,

        smoothScroll: true,

        sidebar: 'auto',

        sidebarDepth: 2,
        
        lastUpdated: true,
    },

    plugins,

    extraWatchFiles: [
        '../.vuepress'
    ],

    dest: './dist',

    port: 4000,

    markdown: {
        // lineNumbers: true
    },

    sass: { indentedSyntax: true },
}