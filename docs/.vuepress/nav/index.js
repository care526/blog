const NavConfigs = [
    { text: '网站导航', link: '/customizePages/guide' },
    {
        text: '前端', items: [
            {
                text: '基础', items: [
                    { text: 'HTML', link: '/customizePages/navigate#前端,基础,HTML' },
                    { text: 'SVG', link: '/customizePages/navigate#前端,基础,SVG' },
                    { text: 'CSS', link: '/customizePages/navigate#前端,基础,CSS' },
                    { text: 'JS', link: '/customizePages/navigate#前端,基础,JS' },
                    { text: 'TS', link: '/customizePages/navigate#前端,基础,TS' },
                    { text: 'Node', link: '/customizePages/navigate#前端,基础,Node' },
                    { text: 'Package', link: '/customizePages/navigate#前端,基础,Package' },
                ]
            },
            {
                text: '框架', items: [
                    { text: 'React', link: '/customizePages/navigate#前端,框架,React' },
                    { text: 'Vue', link: '/customizePages/navigate#前端,框架,Vue' },
                    { text: 'Angular', link: '/customizePages/navigate#前端,框架,Angular' },
                ]
            },
            {
                text: '工程化', items: [
                    { text: 'Webpack', link: '/customizePages/navigate#前端,工程化,Webpack' },
                    { text: 'Rollup', link: '/customizePages/navigate#前端,工程化,Rollup' },
                    { text: '优化', link: '/customizePages/navigate#前端,工程化,优化' },
                ]
            },
            {
                text: '其他', items: [
                    { text: 'Vscode', link: '/customizePages/navigate#前端,其他,Vscode' },
                    { text: '浏览器', link: '/customizePages/navigate#前端,其他,浏览器' },
                    { text: '用户体验', link: '/customizePages/navigate#前端,其他,用户体验' },
                    { text: '源码', link: '/customizePages/navigate#前端,其他,源码' },
                ]
            }
        ]
    },
    {
        text: '后端', items: [
            { text: '数据库', link: '/customizePages/navigate#后端,数据库' },
            { text: 'Docker', link: '/customizePages/navigate#后端,Docker' },
            { text: 'Go', link: '/customizePages/navigate#后端,Go' },
            { text: 'Java', link: '/customizePages/navigate#后端,Java' },
            { text: 'Python', link: '/customizePages/navigate#后端,Python' },
            { text: 'Rust', link: '/customizePages/navigate#后端,Rust' },
        ]
    },
    {
        text: 'Linux', items: [
            { text: '权限', link: '/customizePages/navigate#Linux,权限' },
            { text: '软件安装', link: '/customizePages/navigate#Linux,软件安装' },
            { text: '系统目录', link: '/customizePages/navigate#Linux,系统目录' },
            { text: '系统相关', link: '/customizePages/navigate#Linux,系统相关' },
            { text: '应用软件', link: '/customizePages/navigate#Linux,应用软件' },
            { text: '用户', link: '/customizePages/navigate#Linux,用户' },
            { text: 'Shell', link: '/customizePages/navigate#Linux,Shell' },
        ]
    },
    {
        text: '计算机基础', items: [
            { text: '数据结构', link: '/customizePages/navigate#计算机基础,数据结构' },
            { text: '算法', link: '/customizePages/navigate#计算机基础,算法' },
            {
                text: '计算机网络', items: [
                    { text: 'HTTP', link: '/customizePages/navigate#计算机基础,计算机网络,HTTP' },
                ]
            },
            { text: '编程思想', link: '/customizePages/navigate#计算机基础,编程思想' },
            { text: '编码规范', link: '/customizePages/navigate#计算机基础,编码规范' },
        ]
    },
    { text: 'About Me', link: '/customizePages/aboutMe' },
    { text: 'GitHub', link: 'https://github.com/care526' },
]

module.exports = NavConfigs
