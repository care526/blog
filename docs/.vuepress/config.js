const nav = require('./nav')
const sidebar = require('./sidebar')
const plugins = require('./plugins')

module.exports = {
    title: "care's blog",
    description: 'care的知识笔记',

    lineNumbers: true,

    themeConfig: {
        logo: '/logo.jpeg',
        
        nav,

        smoothScroll: true,

        sidebar,
        
        plugins,

        lastUpdated: 'Last Updated', // string | boolean
    }
}