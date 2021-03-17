// const Utils = require('./utilsForConfig')

// const PartConfigs = [
//     require('./modules/a.qianduan.config'),
//     require('./modules/b.houduan.config'),
//     require('./modules/c.computer.base.config'),
//     require('./modules/d.linux.config')
// ]

const NavConfigs = [
    { text: '网站导航', link: '/customizePages/guide' },
    { text: '前端', items: [
        { text: '基础', items: [
            { text: 'HTML', link: '/customizePages/navigate#前端,HTML' },
            { text: 'SVG', link: '/customizePages/navigate#前端,SVG' },
            { text: 'CSS', link: '/customizePages/navigate#前端,CSS' },
            { text: 'JS', link: '/customizePages/navigate#前端,JS' },
            { text: 'TS', link: '/customizePages/navigate#前端,TS' },
            { text: 'Node', link: '/customizePages/navigate#前端,Node' },
            { text: 'Package', link: '/customizePages/navigate#前端,Package' },
        ] },
        { text: '框架', items: [
            { text: 'React', link: '/customizePages/navigate#前端,React' },
            { text: 'Vue', link: '/customizePages/navigate#前端,Vue' },
            { text: 'Angular', link: '/customizePages/navigate#前端,Angular' },
        ] },
        { text: '工程化', items: [
            { text: 'Webpack', link: '/customizePages/navigate#前端,Webpack' },
            { text: 'Rollup', link: '/customizePages/navigate#前端,Rollup' },
            { text: '优化', link: '/customizePages/navigate#前端,优化' },
        ] },
        { text: '其他', items: [
            { text: 'Vscode', link: '/customizePages/navigate#前端,Vscode' },
            { text: '浏览器', link: '/customizePages/navigate#前端,浏览器' },
            { text: '用户体验', link: '/customizePages/navigate#前端,用户体验' },
            { text: 'HTTP', link: '/customizePages/navigate#前端,HTTP' },
        ] }
    ] },
    { text: '后端', items: [
        { text: '数据库', link: '/customizePages/navigate#后端,数据库' },
        { text: 'Docker', link: '/customizePages/navigate#后端,Docker' },
        { text: 'Go', link: '/customizePages/navigate#后端,Go' },
        { text: 'Java', link: '/customizePages/navigate#后端,Java' },
        { text: 'Python', link: '/customizePages/navigate#后端,Python' },
        { text: 'Rust', link: '/customizePages/navigate#后端,Rust' },
    ] },
    { text: 'Linux', items: [
        { text: '所有', link: '/customizePages/navigate#Linux,所有' },
        { text: '软件', link: '/customizePages/navigate#Linux,软件' },
        { text: 'Shell', link: '/customizePages/navigate#Linux,Shell' },
    ] },
    { text: '计算机基础', items: [
        { text: '数据结构', link: 'xxxx' },
        { text: '算法', link: 'xxxx' },
        { text: '计算机网络', link: 'xxxx' },
        { text: '编程思想', link: '/customizePages/navigate#编程思想' },
        { text: '编码规范', link: 'xxxx' },
    ] },
    { text: 'About Me', link: '/customizePages/aboutMe' },
    { text: 'GitHub', link: 'https://github.com/care526' },

    // ...PartConfigs.map(Utils.transfrom)
]

module.exports = NavConfigs
